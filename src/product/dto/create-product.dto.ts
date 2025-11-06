import {
  IsArray,
    IsBoolean,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Type } from 'class-transformer';


export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  photo?: string[];

  @IsString()
  @IsNotEmpty()
  price: string;
  @Type(() => Number)
  @IsNumber()
  stock: number;

  @IsOptional()
  @IsBoolean()
  status?: boolean;
}
