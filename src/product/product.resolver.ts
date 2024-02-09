import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { ProductService } from './product.service';
import type { Product } from '@prisma/client';
import { ParseIntPipe } from '@nestjs/common';
import { AddProductDto } from './dto/addProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';

@Resolver('Product')
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query('getProducts')
  async getProducts(): Promise<Product[]> {
    return this.productService.getProducts();
  }

  @Query('getProduct')
  async getProduct(@Args('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productService.getProduct(id);
  }

  @Mutation('addProduct')
  async addProduct(
    @Args('addProductInput') addProductInput: AddProductDto,
  ): Promise<Product> {
    return this.productService.addProduct(addProductInput);
  }

  @Mutation('updateProduct')
  async updateProduct(
    @Args('id', ParseIntPipe) id: number,
    @Args('updateProductInput') updateProductInput: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.updateProduct(id, updateProductInput);
  }
}
