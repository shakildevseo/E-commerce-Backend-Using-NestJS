import { Body, Controller, Delete, Get, Param, Patch, Post, UseInterceptors, ValidationPipe } from '@nestjs/common';
import { BrandService } from './brand.service';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { CreateBrandDto } from './dto/create-brand.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { brandStorage } from 'src/utils/multer';
import { UploadedFile } from '@nestjs/common';

@Controller('brand')
export class BrandController {
 constructor(private readonly brandService : BrandService, ){}

 @Get()
  async findAll(){
  return  await this.brandService.findAll()
 }

  @Post()
  @UseInterceptors(FileInterceptor("logo", {
    storage : brandStorage
  }))
  
  async create(@Body(ValidationPipe) createBrandDto : CreateBrandDto, @UploadedFile() file ){
    
    return  await this.brandService.create(createBrandDto, file)
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
