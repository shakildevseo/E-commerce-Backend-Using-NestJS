import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { CreateBrandDto } from './dto/create-brand.dto';

@Injectable()
export class BrandService {
    constructor(private prismaService : PrismaService ){}

    async findAll(){
        return await this.prismaService.brand.findMany()
    }

    async create(createBrandDto : CreateBrandDto){
        return  await this.prismaService.brand.create({
          data : {
             name : createBrandDto.name,
             logo : createBrandDto.logo
          }
        })
    }

  async  update(id : string, updateBrandDto : UpdateBrandDto){
    const data = await this.prismaService.brand.update({
        where : {id},
          data : updateBrandDto
    })
    

    return {
        message : "Product Update Successfully",
        data 
    }
  }
    async delete(id : string){
        const data = await this.prismaService.brand.delete({
            where : {id}
        })


        return {
            message : "Brand has been deleted successfully",
            data 
        }
    }
}
