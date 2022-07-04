import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';
import { ProductCreateInput, ProductModel } from './product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) {}

  /** 전체 조회 */
  async findAll(): Promise<ProductModel[]> {
    return await this.productRepository.find();
  }

  /** 상품 단일 조회 */
  async findOne(id: string): Promise<ProductModel> {
    return await this.productRepository.findOne(id);
  }

  /** 상품 복수 조회 */
  async findMany(ids: string[]) {
    return await this.productRepository.find({ where: ids });
  }

  /** 상품 단일 등록 */
  async createProduct(data: ProductCreateInput): Promise<ProductModel> {
    const product = await this.productRepository.create(data);
    return this.productRepository.save(product);
  }

  /** 상품 수정 */
  async updateProudct(
    id: string,
    data: ProductCreateInput,
  ): Promise<ProductModel> {
    const product = await this.findOne(id);
    return this.productRepository.save({ id: product.id, data });
  }

  /** 상품 단일 삭제 */
  async deleteOne(id: string): Promise<ProductModel> {
    const product = this.findOne(id);
    await this.productRepository.delete(id);
    return product;
  }

  /** 상품 복수 삭제 */
  async deleteMany(ids: string[]): Promise<ProductModel[]> {
    const products = this.findMany(ids);
    await this.productRepository.delete(ids);
    return products;
  }
}
