import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { DefaultModel } from 'src/common/default/default.model';
import { ProductSizeEnum } from './product.enum';

@InputType()
export class ProductCreateInput {
  @Field((type) => String, { description: '상품명' })
  product: string;

  @Field((type) => String, { description: '브랜드명' })
  brand: string;

  @Field((type) => String, { description: '사이즈' })
  size: ProductSizeEnum;

  @Field((type) => String, { description: '수량' })
  quantity: number;

  @Field((type) => String, { description: '가격' })
  price: number;
}

@ObjectType()
export class ProductModel extends DefaultModel {
  @Field((type) => String, { description: '상품명' })
  product: string;

  @Field((type) => String, { description: '브랜드명' })
  brand: string;

  @Field((type) => String, { description: '사이즈' })
  size: ProductSizeEnum;

  @Field((type) => String, { description: '수량' })
  quantity: number;

  @Field((type) => String, { description: '가격' })
  price: number;
}
