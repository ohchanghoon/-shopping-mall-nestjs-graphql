import { Resolver } from '@nestjs/graphql';
import { DeliveryService } from './delivery.service';

@Resolver()
export class DeliveryResolver {
  constructor(private readonly deliveryService: DeliveryService) {}
}
