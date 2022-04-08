import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql';

/** 기본 Model */
@ObjectType({ isAbstract: true })
export class DefaultModel {
  @Field((_type) => ID)
  id: string;

  @Field((_type) => GraphQLISODateTime, { description: '생성 날짜/시간' })
  createdAt: Date;

  @Field((_type) => GraphQLISODateTime, { description: '수정 날짜/시간' })
  updatedAt: Date;

  @Field((_type) => GraphQLISODateTime, {
    nullable: true,
    description: '삭제 날짜/시간',
  })
  deletedAt?: Date;
}
