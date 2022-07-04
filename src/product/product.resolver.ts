import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductCreateInput, ProductModel } from './product.model';
import { ProductService } from './product.service';

@Resolver()
export class ProductResolver {
  productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  @Query((returns) => [ProductModel], { description: '상품 전제 조회' })
  async getProducts(): Promise<ProductModel[]> {
    return this.productService.findAll();
  }

  @Query((returns) => ProductModel, { description: '상품 단일 조회' })
  async getProduct(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<ProductModel> {
    return await this.productService.findOne(id);
  }

  @Mutation((returns) => ProductModel, { description: '상품 단일 등록' })
  async createProduct(
    @Args('data') data: ProductCreateInput,
  ): Promise<ProductModel> {
    return await this.productService.createProduct(data);
  }

  @Mutation((returns) => ProductModel, { description: '상품 수정' })
  async updateProduct(
    @Args('id', { type: () => ID }) id: string,
    @Args('data') data: ProductCreateInput,
  ): Promise<ProductModel> {
    return await this.productService.updateProudct(id, data);
  }

  @Mutation((returns) => ProductModel, { description: '상품 단일 삭제' })
  async deleteProduct(
    @Args('id', { type: () => ID }) id: string,
  ): Promise<ProductModel> {
    return await this.productService.deleteOne(id);
  }

  @Mutation((returns) => [ProductModel], { description: '상품 복수 삭제' })
  async deleteProducts(
    @Args('ids', { type: () => [ID] }) ids: string[],
  ): Promise<ProductModel[]> {
    return await this.productService.deleteMany(ids);
  }
}
