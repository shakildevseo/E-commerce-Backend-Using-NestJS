import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { categoryStorage } from 'src/utils/multer';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}


  /**
   *
   *
   * @return {} 
   * @memberof CategoryController
   */
  @Get()
  async findAll() {
    return await this.categoryService.findAll();
  }

  @Get(':id')
  async singleCategory(@Param('id') id: string) {
    return await this.categoryService.singleCategory(id);
  }

  @Post()
  @UseInterceptors(FileInterceptor('logo', { storage: categoryStorage }))
  create(
    @Body(ValidationPipe) createCategoryDto: CreateCategoryDto,
    @UploadedFile() file,
  ) {
    return this.categoryService.create(createCategoryDto, file);
  }

@Patch(':id')
@UseInterceptors(FileInterceptor('logo'))

async update(
  @Param('id') id: string, @Body(ValidationPipe) updateCategoryDto: UpdateCategoryDto,  ) {

  return this.categoryService.update(id, updateCategoryDto);
}



  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.categoryService.delete(id);
  }
}
