import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { createOrderFormInput, OrderFormModel } from './orderform.model';
import { OrderformService } from './orderform.service';

@Resolver()
export class OrderformResolver {
  #orderFormService: OrderformService;
  constructor(orderformService: OrderformService) {
    this.#orderFormService = orderformService;
  }

  @Mutation((returns) => OrderFormModel)
  // @Mutation((returns) => String)
  async createOrderForm(@Args('data') data: createOrderFormInput) {
    return await this.#orderFormService.create(data);
  }
}
