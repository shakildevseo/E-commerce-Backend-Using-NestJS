
import {diskStorage} from 'multer'

export const  brandStorage = diskStorage({
      destination : (req, file, cb)=>{
        cb(null, "public/brand")
      },
      filename : (req, file, cb)=>{
        cb(null, Date.now() + "_" + file.originalname)
 
      }
    })
export const  categoryStorage = diskStorage({
      destination : (req, file, cb)=>{
        cb(null, "public/category")
      },
      filename : (req, file, cb)=>{
        cb(null, Date.now() + "_" + file.originalname)
        
      }
    })