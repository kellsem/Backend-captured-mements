import { FastifyReply, FastifyRequest } from "fastify"
import { UpdateMomentsService } from "../../service/Moments/UpdateMomentsService" 

interface EditMomentPorps{
     id: string   
     title:string
     story:string
     visitedLocation:string[]
     user: {userId: string}
     imageUrl:string
     visitedDate:string
}

class UpdateMomentsController {
  async handle(request: FastifyRequest, reply: FastifyReply ){
  const { id } = request.params as { id: string }
  const { title, story, visitedLocation, imageUrl, visitedDate } = request.body as EditMomentPorps;
  const { user } = request;

  if(!title || !story || !visitedLocation || !imageUrl || !visitedDate) {
    return reply.status(400).send({error: true, message: "All fields are required!"})
  }
  // Validação de data
  const parsedVisiteDate = new Date(visitedDate);
  if (isNaN(parsedVisiteDate.getTime())) {
    return reply.status(400).send({error: true, message: "Invalid visitedDate format. Must be ISO string."})
  }
  if(!user){
    return reply.status(400).send({error: true, message: "User does not exists!"})
  }
try { 
  const updateMomentsService = new UpdateMomentsService()
  const updateMoments = await updateMomentsService.execute({id, title, story, imageUrl, user, visitedDate,  visitedLocation})
  reply.status(200).send({moment: updateMoments, message: "Update successfully"})

}catch(error: any){
  return reply.status(400).send({error: true, message: error.message})
}} 
}
export { UpdateMomentsController }


 