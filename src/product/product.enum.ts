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

export enum ProductCategoryEnum {
  TOP = 'TOP',
  SHIRTS = 'SHIRTS',
  OUTER = 'OUTER',
  PANTS = 'PANTS',
  SHOE = 'SHOE',
  BAG = 'BAG',
  ACC = 'ACC',
}

registerEnumType(ProductCategoryEnum, {
  name: 'ProductCategoryEnum',
  description: '상품 종류',
  valuesMap: {
    TOP: {
      description: '상의',
    },
    SHIRTS: {
      description: '셔츠',
    },
    OUTER: {
      description: '겉옷',
    },
    PANTS: {
      description: '하의',
    },
    SHOE: {
      description: '신발',
    },
    BAG: {
      description: '가방',
    },
    ACC: {
      description: '액세서리',
    },
  },
});

export enum ProductStateEnum {
  READY = 'READY',
  ON_SALE = 'ON_SALE',
  SOLD_OUT = 'SOLD_OUT',
  CLOSE = 'CLOSE',
}

registerEnumType(ProductStateEnum, {
  name: 'ProductStateEnum',
  description: '상품 상태',
  valuesMap: {
    READY: {
      description: '상품 준비중',
    },
    ON_SALE: {
      description: '상품 판매중',
    },
    SOLD_OUT: {
      description: '상품 품절',
    },
    CLOSE: {
      description: '상품 판매 종료',
    },
  },
});
