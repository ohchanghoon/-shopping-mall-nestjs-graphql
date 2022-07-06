import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductResolver } from './product/product.resolver';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { UserModule } from './user/user.module';
import { TaskSchedulingModule } from './task-scheduling/task-scheduling.module';
import * as dotenv from 'dotenv';
import { ScheduleModule } from '@nestjs/schedule';
import { DeliveryModule } from './delivery/delivery.module';
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => {
        return Object.assign(await getConnectionOptions(), {
          migrations: undefined,
        });
      },
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      driver: ApolloDriver,
      installSubscriptionHandlers: true,
      context: (context) => context,
    }),
    ProductModule,
    UserModule,
    TaskSchedulingModule,
    DeliveryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
