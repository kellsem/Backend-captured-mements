
import prismaClient from "../../prisma";

interface FavoriteProps{
     id: string
     user: {userId: string}   
     isFavorite: boolean
}

class FavoriteMomentService {
  async execute({user, id, isFavorite }: FavoriteProps) {

    const isFavoriteMoment = await prismaClient.registeredMoments.findFirst({
      where:{
        id: id,
        userId: user.userId
      }
    })
 
    if(!isFavoriteMoment){
      throw new Error("Register moment not found")
    }
    const favoriteMoment = await prismaClient.registeredMoments.update({
      where: {
        id: id,
      },
      data:{
        isFavorite: isFavorite
      }
    })
  return favoriteMoment
  }
}

export { FavoriteMomentService }