import { FastifyReply, FastifyRequest } from "fastify"
import { DeleteMomentService } from "../../service/Moments/DeleteMomentsService"


class DeleteMomentController {
  async handle(request: FastifyRequest, reply: FastifyReply ){
    const {id} = request.params as {id: string}
    const { user } = request
  if (!user){
      return reply.status(400).send({message: "User not found"})
    }
    if(!id){
      return reply.status(400).send({message: "Image ID is required!" })
    }

  try{
    const deleteMomentService = new DeleteMomentService()
    const deletedMoment = await deleteMomentService.execute({id, user})
    reply.status(201).send(deletedMoment)
  }catch (error: any){
    return reply.status(400).send({erro: true, message: "Moment not found"})
  }
  }
} 

export { DeleteMomentController }
