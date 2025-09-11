import path from 'path'
import fs from 'fs'

class DeleteFileService {
  async execute({imageUrl}:{imageUrl: string}) {
    
  const fileName = path.basename(imageUrl)
  const filePath = path.join(__dirname, '..','..','..','uploads', fileName)
  console.log(filePath, "@@@@@@@@@@")

  if(fs.existsSync(filePath)){
    //deletar
    fs.unlinkSync(filePath)
    return{message: "Image delete successful!"}
  }else{
    return {error: true, message: "Image not found!"}
  }
 }
}


export {DeleteFileService}