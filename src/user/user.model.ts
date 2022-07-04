import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsEmail, IsPhoneNumber, MaxLength, MinLength } from 'class-validator';
import { DefaultModel } from 'src/common/default/default.model';
import { UserRoleEnum } from './user.enum';

@InputType()
export class UserCreateInput {
  @Field((type) => String, { description: '이름' })
  name: string;

  @Field((type) => UserRoleEnum, {
    description: '권한',
    defaultValue: UserRoleEnum.CUSTOMER,
    nullable: true,
  })
  role?: UserRoleEnum;

  @IsEmail()
  @Field((type) => String, { description: '이메일' })
  email: string;

  @MinLength(5)
  @MaxLength(20)
  @Field((type) => String, { description: '비밀번호', nullable: true })
  password?: string;

  @Field((type) => String, { description: '주소' })
  address: string;

  @Field((type) => String, { description: '전화번호' })
  phone: string;
}

@InputType()
export class UserUpdateInput {
  @Field((type) => String, { description: '이름', nullable: true })
  name?: string;

  @Field((type) => UserRoleEnum, {
    description: '권한',
    defaultValue: UserRoleEnum.CUSTOMER,
    nullable: true,
  })
  role?: UserRoleEnum;

  @Field((type) => String, { description: '비밀번호', nullable: true })
  password?: string;

  @Field((type) => String, { description: '주소', nullable: true })
  address?: string;

  @Field((type) => String, { description: '전화번호', nullable: true })
  phone?: string;
}

@ObjectType()
export class UserModel extends DefaultModel {
  @Field((type) => String, { description: '이름' })
  name: string;

  @Field((type) => UserRoleEnum, { description: '권한' })
  role?: UserRoleEnum;

  @Field((type) => String, { description: '이메일' })
  email: string;

  @Field((type) => String, { description: '주소' })
  address: string;

  @Field((type) => String, { description: '전화번호' })
  phone: string;
}
