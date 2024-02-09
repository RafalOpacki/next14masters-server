import { Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { AddProductDto } from './dto/addProduct.dto';
import { UpdateProductDto } from './dto/updateProduct.dto';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  async getProducts(): Promise<Product[]> {
    return await this.prismaService.product.findMany();
  }

  async getProduct(id: number): Promise<Product> {
    return await this.prismaService.product.findFirstOrThrow({
      where: { id },
    });
  }

  async addProduct({
    name,
    price,
    description,
    image,
  }: AddProductDto): Promise<Product> {
    return await this.prismaService.product.create({
      data: {
        name,
        description,
        image,
        price,
      },
    });
  }

  async updateProduct(
    id: number,
    { name, price, description, image }: UpdateProductDto,
  ): Promise<Product> {
    return await this.prismaService.product.update({
      where: { id },
      data: {
        name,
        description,
        image,
        price,
      },
    });
  }
}
