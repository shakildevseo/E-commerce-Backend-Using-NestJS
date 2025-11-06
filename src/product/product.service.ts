import {Injectable } from '@nestjs/common';
;
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { count } from 'console';

@Injectable()
export class ProductService {
  constructor(private prismaService : PrismaService){}



 /**
  *
  *
  * @return {Find All Products} 
  * @memberof ProductService
  */
 async  findAll(){
 const allProducts = await this.prismaService.product.findMany()

 return {
  count : allProducts,
   allProducts
 }
  }


/**
 *
 *
 * @param {string} id
 * @return {Find Product by id} 
 * @memberof ProductService
 */


/**
 *
 *
 * @param {string} id
 * @return {Create Products} 
 * @memberof ProductService
 */
async findProductById(id : string){
    return await this.prismaService.product.findUnique({
        where : {id}
    })
  }

  async create(createProductDto : CreateProductDto, files){
    const allPath = files.map( file => file.path)
    console.log(allPath)
   const data =  await this.prismaService.product.create({
    data : {
        name : createProductDto.name,
        price : createProductDto.price,
        stock : Number(createProductDto.stock),
        photo : allPath
    
    }

    })

    return {
        message : "Product created successfully",
        data
    }
  }

  /**
   *
   *
   * @param {string} id
   * @param {UpdateProductDto} updateProductDto
   * @return {Update Products} 
   * @memberof ProductService
   */
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


  /**
   *
   *
   * @param {string} id
   * @return {Delete Products} 
   * @memberof ProductService
   */
  async deleteProductById(id : string){
     await this.prismaService.product.delete({
        where : {id}
     })
     return {
        message : "Product deleted has been successfully"
    }

  }

}
