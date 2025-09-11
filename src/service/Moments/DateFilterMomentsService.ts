import prismaClient from "../../prisma"

interface FilterProps{  
     startDate: string
     endDate: string
     user: {userId: string}
}

class DateFilterMomentsService {
  async execute({ startDate, endDate, user } : FilterProps){

   const start = new Date(parseInt(startDate))
   const end = new Date(parseInt(endDate))
   return await prismaClient.registeredMoments.findMany({
    where:{
      userId: user.userId,
      visitedDate: {
        gte: start,
        lte: end
      }
    },
      orderBy: {
        isFavorite: 'desc'
      }
   })
  }
}


export { DateFilterMomentsService }