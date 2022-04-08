import { defualtEntity } from 'src/common/default/default.entity';
import { Column, Entity } from 'typeorm';
import { ProductSizeEnum } from './product.enum';

@Entity({ name: 'products' })
export class ProductEntity extends defualtEntity {
  /** 상품명 */
  @Column()
  product: string;

  /** 브랜드 */
  @Column()
  brand: string;

  /** 사이즈 */
  // S M L
  @Column()
  size: ProductSizeEnum;

  /** 잔여 수량 */
  // Max: 100
  @Column({ precision: 100, default: 1 })
  quantity: number;

  /** 가격 */
  @Column()
  price: number;
}

@Entity({ name: 'product_quantity_by_size' })
export class ProductQuantityBySizeEntity extends defualtEntity {
  /** 사이즈 */
  // S M L
  @Column()
  size: ProductSizeEnum;

  /** 잔여 수량 */
  // Max: 100
  @Column({ precision: 100, default: 1 })
  quantity: number;
}
