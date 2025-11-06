import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { count } from 'console';


@Injectable()
export class CategoryService {
    constructor(private readonly  prismaService : PrismaService){}

    /**
     *
     *
     * @return {find all category} 
     * @memberof CategoryService
     */
    async findAll(){
        const allCategory = await this.prismaService.category.findMany()
        return{
            count : allCategory.length,
            allCategory
        }
    }


    /**
     *
     *
     * @param {string} id
     * @return {find single category by id} 
     * @memberof CategoryService
     */
    async singleCategory(id : string){
        return await this.prismaService.category.findUnique({
            where : {id}
        })
    

    }

    /**
     *
     *
     * @param {CreateCategoryDto} createCategoryDto
     * @param {*} file
     * @return {Create Category} 
     * @memberof CategoryService
     */
    async create(createCategoryDto : CreateCategoryDto, file ){
       const createCat = await this.prismaService.category.create({
            data : {
                name : createCategoryDto.name,
                description : createCategoryDto.description,
                logo : file.path
            }
            
         })

         return{
            message : "Product Created Successfully",
            data : createCat
         }
    }


   /**
    *
    *
    * @param {string} id
    * @param {UpdateCategoryDto} updateCategoryDto
    *
    * @return {Update Category} 
    * @memberof CategoryService
    */
   async update(id : string, updateCategoryDto :UpdateCategoryDto  ){

   const updated = await this.prismaService.category.update({
        where : {id},
        data : updateCategoryDto

    }) 
    return{
        message : "Update Successfully",
        updated
    }
   }


   /**
    *
    *
    * @param {string} id
    * @return {Delete Category} 
    * @memberof CategoryService
    */
   async delete(id : string){
    const deleted =  await this.prismaService.category.delete({
        where : {id}
     })

     return{
        message : "Category has been deleted",
        deleted

     }
   }
}
