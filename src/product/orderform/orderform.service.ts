import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getConnection, getManager, Repository } from 'typeorm';
import { ProductEntity } from '../product.entity';
import { ProductStateEnum } from '../product.enum';
import { ProductService } from '../product.service';
import { OrderFormEntity } from './orderform.entity';
import { createOrderFormInput, forceUpdateOrderForm } from './orderform.model';

@Injectable()
export class OrderformService {
  #orderFormRepository: Repository<OrderFormEntity>;
  #productService: ProductService;
  constructor(
    @InjectRepository(OrderFormEntity)
    orderFormRepository: Repository<OrderFormEntity>,
    productService: ProductService,
  ) {
    this.#orderFormRepository = orderFormRepository;
    this.#productService = productService;
  }

  async create(data: createOrderFormInput) {
    const queryRunner = getConnection().createQueryRunner();
    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      const product = await this.#productService.findOne(data.productId);
      if (product.state !== ProductStateEnum.ON_SALE) {
        throw new BadRequestException('판매중인 상품이 아닙니다.');
      }
      if (!product.stock || data.orderCount > product.stock) {
        throw new BadRequestException(
          '주문하신 수량보다 남은 수량이 적습니다.',
        );
      }

      const orderForm = await this.#orderFormRepository.manager.transaction(
        async (manager) => {
          await manager.update(ProductEntity, product.id, {
            stock: product.stock - data.orderCount,
          });
          return await manager.save(OrderFormEntity, data);
        },
      );

      await queryRunner.commitTransaction();
      await queryRunner.release();

      return orderForm;
    } catch (err) {
      await queryRunner.rollbackTransaction();
      await queryRunner.release();

      throw err;
    }
  }

  async updateForce(data: forceUpdateOrderForm): Promise<forceUpdateOrderForm> {
    await this.#orderFormRepository.update(data.id, { state: data.state });

    const result = await this.#orderFormRepository.findOne(data.id);
    return { id: result.id, state: result.state };
  }
}
