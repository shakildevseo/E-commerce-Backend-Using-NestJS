import { Body, Controller, Delete, Get, Param, Patch, Post, UploadedFiles, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { FilesInterceptor } from '@nestjs/platform-express';
import { storage } from 'src/utils/cloudinary';

@Controller('product')
export class ProductController {
    constructor(private readonly productService : ProductService){}

    @Get()
    async findAll(){
      return  await this.productService.findAll()
    }

    @Get(":id")
    async findProductById(@Param("id") id:string){
        return await this.productService.findProductById(id)
    }

    @Post()
    @UseInterceptors(FilesInterceptor("photo", 10, {storage}))
   async  create(@Body(new ValidationPipe({ transform: true })) createProductDto :CreateProductDto, @UploadedFiles() files){
    return await this.productService.create(createProductDto, files)
    }

    @Patch(":id")
    async update(@Param() id :string, @Body(ValidationPipe) updateProductDto: UpdateProductDto ){
        return await this.productService.update(id, updateProductDto)
    }

    @Delete(":id")
   async deleteProductById(@Param("id") id : string){
   return await this.productService.deleteProductById(id)
   }
}