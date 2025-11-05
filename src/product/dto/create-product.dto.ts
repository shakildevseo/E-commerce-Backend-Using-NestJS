import {
    IsBoolean,
  IsEmpty,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsEmpty()

  photo: string;

  @IsString()
  @IsNotEmpty()
  price: string;

  @IsNumber()
  stock: number;


  
  status : boolean
}
