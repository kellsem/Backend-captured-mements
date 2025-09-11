import prismaClient from "../../prisma"

interface RegisteredMomentsProps{ 
     
  title:string
     story:string
     visitedLocation:string[]
     user: {userId: string}
     imageUrl:string
     visitedDate:string
}
type UpdateMomentsProps = RegisteredMomentsProps & {id:string }

class UpdateMomentsService {
  async execute({
    id,
    title,
     story,
     visitedLocation,
     user,
     imageUrl,
     visitedDate } : UpdateMomentsProps){

      const parsedVisiteDate = new Date(parseInt(visitedDate))
    
 const editMoment = await prismaClient.registeredMoments.findFirst({
 where: {
  id: id,
  userId: user.userId
 }
 })
 if (!editMoment){
 throw new Error("Register moment not found")
 }
 const placeholderImageUrl = `http//localhost:8000/uploads/imagem_reposição.avif`
 const updateRegisteredMoment = await prismaClient.registeredMoments.update({
  where: {
    id: id
  },
  data:{
    title: title,
    story: story,
    visitedLocation: visitedLocation,
    imageUrl:imageUrl || placeholderImageUrl,
    visitedDate: parsedVisiteDate 
  }
})
return updateRegisteredMoment
     }
}

export { UpdateMomentsService }