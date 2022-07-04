import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { DefaultModel } from 'src/common/default/default.model';
import { UserRoleEnum } from './user.enum';

@InputType()
export class UserCreateInput {
  @Field((type) => String, { description: '이름' })
  name: string;

  @Field((type) => UserRoleEnum, { description: '권한' })
  role: UserRoleEnum;

  @Field((type) => String, { description: '이메일' })
  email: string;

  @Field((type) => String, { description: '비밀번호', nullable: true })
  password?: string;

  @Field((type) => String, { description: '주소' })
  address: string;

  @Field((type) => String, { description: '전화번호' })
  phone: string;
}

@ObjectType()
export class UserModel extends DefaultModel {
  @Field((type) => String, { description: '이름' })
  name: string;

  @Field((type) => UserRoleEnum, { description: '권한' })
  role: UserRoleEnum;

  @Field((type) => String, { description: '이메일' })
  email: string;

  @Field((type) => String, { description: '주소' })
  address: string;

  @Field((type) => String, { description: '전화번호' })
  phone: string;
}
