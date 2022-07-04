import { registerEnumType } from '@nestjs/graphql';

export enum UserRoleEnum {
  SUPER_ADMIN = 'SUPER_ADMIN',
  PARTNER_ADMIN = 'PARTNER_ADMIN',
  CUSTOMER = 'CUSTOMER',
}

registerEnumType(UserRoleEnum, {
  name: 'UserRoleEnum',
  description: '유저 타입',
  valuesMap: {
    SUPER_ADMIN: {
      description: '슈퍼관리자',
    },
    PARTNER_ADMIN: {
      description: '파트너관리자',
    },
    CUSTOMER: {
      description: '일반회원',
    },
  },
});
