import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';
import { OrderformModule } from './orderform/orderform.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity]), OrderformModule],
  providers: [ProductService, ProductResolver],
  exports: [ProductService],
})
export class ProductModule {}
