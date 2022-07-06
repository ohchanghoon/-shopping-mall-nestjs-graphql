import { Args, Mutation, Resolver } from '@nestjs/graphql';
import {
  createOrderFormInput,
  forceUpdateOrderForm,
  forceUpdateOrderFormInput,
  OrderFormModel,
} from './orderform.model';
import { OrderformService } from './orderform.service';

@Resolver()
export class OrderformResolver {
  #orderFormService: OrderformService;
  constructor(orderformService: OrderformService) {
    this.#orderFormService = orderformService;
  }

  @Mutation((returns) => OrderFormModel)
  async createOrderForm(@Args('data') data: createOrderFormInput) {
    return await this.#orderFormService.create(data);
  }

  @Mutation((returns) => forceUpdateOrderForm)
  // @UseGuards(JwtGuard)
  // @Roles(UserRole.ADMIN)
  async updateOrderFormByAdmin(
    @Args('data') data: forceUpdateOrderFormInput,
  ): Promise<forceUpdateOrderForm> {
    return await this.#orderFormService.updateForce(data);
  }
}
