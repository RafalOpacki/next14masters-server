import {
  IsString,
  MaxLength,
  IsNotEmpty,
  IsOptional,
  IsInt,
} from 'class-validator';
import { AddProductInput } from 'src/graphql/graphql';

export class AddProductDto implements AddProductInput {
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
