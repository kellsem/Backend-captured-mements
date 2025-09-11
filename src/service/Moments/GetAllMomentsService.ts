
import prismaClient from "../../prisma"

interface GetMomentsProps{
     user: {userId: string}
}


class GetAllMomentsService {
  async execute({ user } : GetMomentsProps){ 
  const registeredMoments = await prismaClient.registeredMoments.findMany({

    where:{
      userId: user.userId
    },
    orderBy: { isFavorite: 'desc' } 

  })
  return registeredMoments

  }
}
 
export { GetAllMomentsService }