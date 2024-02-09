import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProductResolver } from './product.resolver';

@Module({
  imports: [PrismaModule],
  providers: [ProductService, ProductResolver],
})
export class ProductModule {}
