
import prismaClient from "../../prisma"

interface RegisteredMomentsProps{
     title:string
     story:string
     visitedLocation:string[]
     user: {userId: string}
     imageUrl:string
     visitedDate:string
}


class AddMomentsService {
  async execute({
     title,
     story,
     visitedLocation,
     user,
     imageUrl,
     visitedDate } : RegisteredMomentsProps){
    const parsedVisiteDate = new Date(visitedDate)

  const registeredMoment =  await prismaClient.registeredMoments.create({
   data: {
     title,
     story,
     visitedLocation,
     userId: user.userId,
     imageUrl,
     visitedDate: parsedVisiteDate
    }
  })
 return registeredMoment 
  }

}

export { AddMomentsService }