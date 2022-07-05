import { DefaultEntity } from 'src/common/default/default.entity';
import { Column, Entity } from 'typeorm';
import {
  ProductSizeEnum,
  ProductCategoryEnum,
  ProductStateEnum,
} from './product.enum';

@Entity()
export class ProductEntity extends DefaultEntity {
  /** 상품명 */
  @Column()
  name: string;

  /** 내용 */
  @Column()
  description: string;

  /** 브랜드 */
  @Column()
  brand: string;

  /** 사이즈 */
  @Column()
  size: ProductSizeEnum;

  @Column()
  category: ProductCategoryEnum;

  /** 잔여 수량 */
  @Column('integer', { default: 1 })
  stock: number;

  /** 원가 */
  @Column()
  originalPrice: number;

  /** 판매가 */
  @Column()
  sellingPrice: number;

  /** 배송비 */
  @Column()
  deliveryFee: number;

  /** 판매상태 */
  @Column()
  state: ProductStateEnum;
}
