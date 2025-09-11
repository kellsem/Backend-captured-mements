import fastify, { FastifyReply, FastifyRequest } from "fastify"
 import { FavoriteMomentService } from "../../service/Moments/FavoriteMomentsService"


class FavoriteMomentController {
  async handle(request: FastifyRequest, reply: FastifyReply ){
    const {id} = request.params as {id: string}
    const { user } = request
    const { isFavorite } = request.body as { isFavorite: boolean}
  
  
    if (!user){
      return reply.status(400).send({message: "User not found"})
    }
    if(!id){
      return reply.status(400).send({message: "ID is required!" })
    }

  try{
    const favoriteMomentService = new FavoriteMomentService()
    const favoriteMoment = await favoriteMomentService.execute({id, user, isFavorite})
    reply.status(201).send({moment: favoriteMoment})
  }catch (error: any){
    return reply.status(400).send({erro: true, message: "Moment not found"})
  }
  }
} 
export { FavoriteMomentController }
