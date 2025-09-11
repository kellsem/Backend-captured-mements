import { FastifyReply, FastifyRequest } from "fastify"
import { GetAllMomentsService } from "../../service/Moments/GetAllMomentsService";


class GetAllMomentsController {
  async handle(request: FastifyRequest, reply: FastifyReply ){

const { user } = request;

  if(!user){
    throw new Error('User does not exists!')
  }

  try {
    const getAllMomentsService = new GetAllMomentsService();
    const getAllmoments = await getAllMomentsService.execute({ user });

     reply.status(200).send({memories: getAllmoments})

  }catch(error: any){
  return reply.status(400).send({error: true, message: "User does not exists!"})
 }
 }
}

export {GetAllMomentsController}