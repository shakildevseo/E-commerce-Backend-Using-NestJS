import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { CreateBrandDto } from './dto/create-brand.dto';

@Injectable()
export class BrandService {
    constructor(private prismaService : PrismaService ){}


    /**
     *
     *
     * @return {find all brand} 
     * @memberof BrandService
     */
    async findAll(){
         const allBrand = await this.prismaService.brand.findMany()
         return{
            count : allBrand.length,
            allBrand 
         }

    }

    
/**
 *
 *
 * @param {string} id
 * @return {find single brand by id} 
 * @memberof BrandService
 */
async findSingleBrandById(id : string){
        return await this.prismaService.brand.findUnique({
            where : {id}
        })
    }

    /**
     *
     *
     * @param {CreateBrandDto} createBrandDto
     * @param {*} file
     * @return {Create Brand} 
     * @memberof BrandService
     */
    async create(createBrandDto : CreateBrandDto, file){
        const created  =  await this.prismaService.brand.create({
          data : {
             name : createBrandDto.name,
             description :createBrandDto.description,
             logo : file.path

          }
        })
        return {
            message : "Brand Created Successfully",
            data : created
        }
    }



  /**
   *
   *
   * @param {string} id
   * @param {UpdateBrandDto} updateBrandDto
   * @return {Update Brand} 
   * @memberof BrandService
   */
  async  update(id : string, updateBrandDto : UpdateBrandDto, ){
    const updated = await this.prismaService.brand.update({
        where : {id},
          data : updateBrandDto
    })
    

    return {
        message : "Product Update Successfully",
        updated 
    }
  }

  /**
   *
   *
   * @param {string} id
   * @return {Delete Brand} 
   * @memberof BrandService
   */
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
