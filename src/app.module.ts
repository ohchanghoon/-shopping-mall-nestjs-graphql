import { CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { UserModule } from './user/user.module';
import { TaskSchedulingModule } from './task-scheduling/task-scheduling.module';
import * as dotenv from 'dotenv';
import * as redisStore from 'cache-manager-ioredis';
import { DeliveryModule } from './delivery/delivery.module';
import { FileModule } from './file/file.module';

dotenv.config();

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
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
    FileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
