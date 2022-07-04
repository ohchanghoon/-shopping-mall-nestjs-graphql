import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { DefaultModel } from 'src/common/default/default.model';
import {
  ProductSizeEnum,
  ProductCategoryEnum,
  ProductStateEnum,
} from './product.enum';

@InputType()
export class ProductCreateInput {
  @Field((type) => String, { description: '상품명' })
  name: string;

  @Field((type) => String, { description: '상품 설명' })
  description: string;

  @Field((type) => String, { description: '브랜드명' })
  brand: string;

  @Field((type) => ProductSizeEnum, { description: '사이즈' })
  size: ProductSizeEnum;

  @Field((type) => ProductCategoryEnum, { description: '상품 종류' })
  category: ProductCategoryEnum;

  @Field((type) => Number, {
    description: '수량',
    nullable: true,
    defaultValue: 1,
  })
  stock?: number;

  @Field((type) => Number, { description: '원 가격' })
  originalPrice: number;

  @Field((type) => Number, { description: '판매 가격' })
  sellingPrice: number;

  @Field((type) => Number, { description: '배송비', defaultValue: 2500 })
  deliveryFee: number;

  @Field((type) => Number, { description: '상품 상태' })
  state: ProductStateEnum;
}

@ObjectType()
export class ProductModel extends DefaultModel {
  @Field((type) => String, { description: '상품명' })
  name: string;

  @Field((type) => String, { description: '상품 설명' })
  description: string;

  @Field((type) => String, { description: '브랜드명' })
  brand: string;

  @Field((type) => ProductSizeEnum, { description: '사이즈' })
  size: ProductSizeEnum;

  @Field((type) => ProductCategoryEnum, { description: '상품 종류' })
  category: ProductCategoryEnum;

  @Field((type) => Number, { description: '수량' })
  stock: number;

  @Field((type) => Number, { description: '원 가격' })
  originalPrice: number;

  @Field((type) => Number, { description: '판매 가격' })
  sellingPrice: number;

  @Field((type) => Number, { description: '배송비' })
  deliveryFee: number;

  @Field((type) => Number, { description: '상품 상태' })
  state: ProductStateEnum;
}
