import { Body, Controller, Delete, Get, Param, Patch, Post, ValidationPipe } from '@nestjs/common';
import { BrandService } from './brand.service';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { CreateBrandDto } from './dto/create-brand.dto';

@Controller('brand')
export class BrandController {
 constructor(private readonly brandService : BrandService){}

 @Get()
  async findAll(){
  return  await this.brandService.findAll()
 }

  @Post()
  async create(@Body(ValidationPipe) createBrandDto : CreateBrandDto){
    return  await this.brandService.create(createBrandDto)
  }
    

  @Patch(":id")
  async update(@Param("id") id : string, @Body(ValidationPipe) updateBrandDto : UpdateBrandDto ){
    return await this.brandService.update(id, updateBrandDto)
  }

  @Delete(":id")
  async delete(@Param("id") id : string){
    return await this.brandService.delete(id)
  }

}
