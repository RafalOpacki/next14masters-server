import { ParseIntPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import type { Product } from '@prisma/client';
import { AddProductDto } from './dto/addProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';
import { ProductService } from './product.service';

@Resolver('Product')
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query('getProducts')
  async getProducts(
    @Args('take', ParseIntPipe) take: number,
    @Args('offset', ParseIntPipe) offset: number,
  ): Promise<Product[]> {
    return this.productService.getProducts(take, offset);
  }

  @Query('getProduct')
  async getProduct(@Args('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productService.getProduct(id);
  }

  @Query('getProductsCount')
  async getProductsCount() {
    return this.productService.getProductsCount();
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
