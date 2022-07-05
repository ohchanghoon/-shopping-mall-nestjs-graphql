import { Module } from '@nestjs/common';
import { OrderformService } from './orderform.service';
import { OrderformResolver } from './orderform.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderFormEntity } from './orderform.entity';
import { ProductEntity } from '../product.entity';
import { UserEntity } from 'src/user/user.entity';
import { ProductService } from '../product.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity, OrderFormEntity, UserEntity]),
  ],
  providers: [OrderformResolver, OrderformService, ProductService],
})
export class OrderformModule {}
