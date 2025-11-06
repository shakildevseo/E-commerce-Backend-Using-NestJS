import {v2 as cloudinary} from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";

cloudinary.config({
    cloud_name : "djqpbf3x8",
    api_key : "574281981737945",
    api_secret : "LfpdUfeSKBvwb2U3xwWAXXWQVDc"
})

 export const storage = new CloudinaryStorage({cloudinary})



