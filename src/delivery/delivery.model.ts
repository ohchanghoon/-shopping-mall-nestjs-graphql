import { Field, ObjectType } from '@nestjs/graphql';
import { DeliveryStateEnum } from './delivery.enum';

@ObjectType()
export class CreateDeliveryInput {
  @Field({ description: '이름' })
  name: string;

  @Field({ description: '전화번호' })
  phone: string;

  @Field({ description: '우편번호' })
  postCode: string;

  @Field({ description: '주소' })
  address: string;

  @Field({ description: '상품 가격' })
  productPrice: string;

  @Field({ defaultValue: DeliveryStateEnum.READY, description: '배송 상태' })
  deliveryState: DeliveryStateEnum;

  @Field({ description: '택배사명' })
  deliveryCompany: string;

  @Field({ description: '환불 여부' })
  refundState: string;

  @Field({ description: '주문서 ID' })
  orderFormId: string;
}
