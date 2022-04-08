import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductResolver } from './product/product.resolver';
import { ProductService } from './product/product.service';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getConnectionOptions } from 'typeorm';
import { GraphQLModule } from '@nestjs/graphql';

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
      installSubscriptionHandlers: true,
      context: (context) => context,
    }),
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService, ProductResolver, ProductService],
})
export class AppModule {}
