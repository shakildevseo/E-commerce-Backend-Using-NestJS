import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

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
   async  create(@Body(ValidationPipe) createProductDto : CreateProductDto){
    return await this.productService.create(createProductDto)
    }

    @Patch(":id")
    async update(@Param() id :string, @Body(ValidationPipe) updateProductDto: UpdateProductDto ){
        return await this.productService.update(id, updateProductDto)
    }

    @Delete(":id")
   async deleteProductById(@Param() id : string){
    await this.productService.deleteProductById(id)
   }
}