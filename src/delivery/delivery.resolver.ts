import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateDeliveryInput } from './delivery.model';
import { DeliveryService } from './delivery.service';

@Resolver()
export class DeliveryResolver {
  #deliveryService: DeliveryService;
  constructor(private readonly deliveryService: DeliveryService) {
    this.#deliveryService = deliveryService;
  }

  @Mutation()
  async createDelivery(@Args('data') data: CreateDeliveryInput) {
    await this.#deliveryService.create(data);
  }
}
