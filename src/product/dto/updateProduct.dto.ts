import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { UpdateProductInput } from 'src/graphql/graphql';

export class UpdateProductDto implements UpdateProductInput {
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @IsString()
  @MaxLength(600)
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  image?: string;

  @IsNotEmpty()
  @IsInt()
  price: number;
}
