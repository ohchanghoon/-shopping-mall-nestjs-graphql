import { registerEnumType } from '@nestjs/graphql';

export enum DeliveryStateEnum {
  READY = 'READY',
  ON_GOING = 'ON_GOING',
  COMPLETE = 'COMPLETE',
  CONFIRMATION = 'CONFIRMATION',
}

registerEnumType(DeliveryStateEnum, {
  name: 'DeliveryStateEnum',
  description: '상품 배송상태',
  valuesMap: {
    READY: {
      description: '상품 준비중',
    },
    ON_GOING: {
      description: '배송중',
    },
    COMPLETE: {
      description: '배송 완료',
    },
    CONFIRMATION: {
      description: '구매 확정',
    },
  },
});
