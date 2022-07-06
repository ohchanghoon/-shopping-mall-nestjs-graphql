import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { UserEntity } from 'src/user/user.entity';
import { ProductEntity } from '../product.entity';
import { OrderFormStateEnum } from './orderform.enum';

@InputType()
export class createOrderFormInput {
  @Field((type) => Number, {
    description: '주문 개수',
    nullable: true,
    defaultValue: 1,
  })
  orderCount?: number;

  @Field((type) => Number, { description: '주문 가격', defaultValue: 0 })
  price: number;

  // @Field((type) => OrderFormStateEnum, {
  //   description: '주문서 상태',
  //   nullable: true,
  //   defaultValue: OrderFormStateEnum.APPLY,
  // })
  /** 주문서 상태 */
  state: OrderFormStateEnum;

  @Field((type) => String, { description: '주문 상품' })
  productId: string;

  @Field((type) => String, { description: '주문자' })
  userId: string;
}

@ObjectType()
export class OrderFormModel {
  @Field((type) => String, { description: '주문서 ID' })
  id: string;

  @Field((type) => Number, { description: '주문 개수' })
  orderCount: number;

  @Field((type) => Number, { description: '주문 가격' })
  price: number;

  @Field((type) => OrderFormStateEnum, { description: '주문서 상태' })
  state: OrderFormStateEnum;

  @Field((type) => String, { description: '주문 상품' })
  productId: string;

  @Field((type) => String, { description: '주문자' })
  userId: string;
}

@ObjectType()
export class forceUpdateOrderForm {
  @Field((type) => ID, { description: '주문서 ID' })
  id: string;

  @Field((type) => OrderFormStateEnum, { description: '주문서 상태' })
  state: OrderFormStateEnum;
}
@InputType()
export class forceUpdateOrderFormInput {
  @Field((type) => ID, { description: '주문서 ID' })
  id: string;

  @Field((type) => OrderFormStateEnum, { description: '주문서 상태' })
  state: OrderFormStateEnum;
}

@ObjectType()
export class tt {
  @Field((type) => OrderFormStateEnum, { description: '주문서 상태' })
  user: UserEntity;

  @Field((type) => OrderFormStateEnum, { description: '주문서 상태' })
  product: ProductEntity;

  @Field((type) => OrderFormStateEnum, { description: '주문서 상태' })
  orderCount?: number;

  @Field((type) => OrderFormStateEnum, { description: '주문서 상태' })
  price: number;

  @Field((type) => OrderFormStateEnum, { description: '주문서 상태' })
  state: OrderFormStateEnum;
}
