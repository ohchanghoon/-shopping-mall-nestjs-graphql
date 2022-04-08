import { registerEnumType } from '@nestjs/graphql';

export enum ProductSizeEnum {
  S = 'Small',
  M = 'Medium',
  L = 'Large',
}

registerEnumType(ProductSizeEnum, {
  name: 'ProductSizeEnum',
  description: '상품 사이즈',
  valuesMap: {
    S: {
      description: 'Small',
    },
    M: {
      description: 'Medium',
    },
    L: {
      description: 'Large',
    },
  },
});
