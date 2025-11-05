import {Injectable } from '@nestjs/common';
;
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private prismaService : PrismaService){}


 async  findAll(){
return await this.prismaService.product.findMany()
  }



  async findProductById(id : string){
    return await this.prismaService.product.findUnique({
        where : {id}
    })
  }

  async create(createProductDto : CreateProductDto){
   const data =  await this.prismaService.product.create({
    data : {
        name : createProductDto.name,
        price : createProductDto.price,
        stock : createProductDto.stock,
        photo : createProductDto.photo
    
    }

    })

    return {
        message : "Product created successfully",
        data
    }
  }

  async  update(id : string, updateProductDto : UpdateProductDto){
  const updated = await this.prismaService.product.update({
       where : {id},
       data : updateProductDto
    })

    return {
        message : "Product update successfully",
        updated
        
    }
  }

  async deleteProductById(id : string){
     await this.prismaService.product.delete({
        where : {id}
     })
     return {
        message : "Product deleted has been successfully"
    }

  }

}
