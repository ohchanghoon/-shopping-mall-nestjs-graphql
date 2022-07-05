import { registerEnumType } from '@nestjs/graphql';

export enum OrderFormStateEnum {
  PAYMENT_READY = 'PAYMENT_READY',
  APPLY = 'APPLY',
  DONE = 'DONE',
  CLOSE = 'CLOSE',
  REJECT = 'REJECT',
}

registerEnumType(OrderFormStateEnum, {
  name: 'OrderFormStateEnum',
  description: '주문 상태',
  valuesMap: {
    PAYMENT_READY: {
      description: '결제 전 상태',
    },
    APPLY: {
      description: '접수 완료',
    },
    DONE: {
      description: '배송단계로 처리',
    },
    CLOSE: {
      description: '거래 종료',
    },
    REJECT: {
      description: '주문 실패',
    },
  },
});
