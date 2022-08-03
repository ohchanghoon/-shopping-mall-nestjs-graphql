import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeliveryEntity } from './delivery.entity';
import { CreateDeliveryInput } from './delivery.model';

@Injectable()
export class DeliveryService {
  #deliveryRepository: Repository<DeliveryEntity>;
  constructor(
    @InjectRepository(DeliveryEntity)
    deliveryRepository: Repository<DeliveryEntity>,
  ) {
    this.#deliveryRepository = deliveryRepository;
  }

  async create(data: CreateDeliveryInput) {
    await this.#deliveryRepository.create();
  }
}
