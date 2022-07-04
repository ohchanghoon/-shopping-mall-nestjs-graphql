import { BadRequestException } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { createSecureServer } from 'http2';
import { UserCreateInput, UserModel, UserUpdateInput } from './user.model';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  #userService: UserService;
  constructor(userService: UserService) {
    this.#userService = userService;
  }

  @Mutation((returns) => UserModel, { description: '회원 가입' })
  async createUser(@Args('data') data: UserCreateInput) {
    return await this.#userService.create(data);
  }

  @Mutation((returns) => UserModel, { description: '회원 정보 수정' })
  async updateUser(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('data') data: UserUpdateInput,
  ) {
    return await this.#userService.update(email, password, data);
  }
}
