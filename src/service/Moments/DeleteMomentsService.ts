
import prismaClient from "../../prisma";
import path from "path"; 
import fs from 'fs'


interface UserProps{
     user: {userId: string}   
}
type DeleteIdProps = UserProps & { id: string }

class DeleteMomentService {
  async execute({user, id }: DeleteIdProps) {


    const registerMoment = await prismaClient.registeredMoments.findFirst({
      where:{
        id: id,
        userId: user.userId
      }
    })
 
    if(!registerMoment){
      throw new Error ("Register moment not found! ")
    }
    await prismaClient.registeredMoments.delete({
      where:{
        id:id,
        userId: user.userId
      }
    })
    const imageUrl = registerMoment.imageUrl
    const fileName = path.basename(imageUrl)

    const filePath = path.join(__dirname, '..', 'uploads', fileName)
    fs.unlink(filePath,(err)=>{
      if(err){
        console.log("Falid to delete image file:", err)
      }
    })
    return {message:"Register moments deted susseccfuly"}
 }
  }


export { DeleteMomentService }