import { IsEmpty, IsString, IsNotEmpty, IsOptional, IsObject } from 'class-validator';
export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

 
  logo: any

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  description : string
}
