import { FastifyReply, FastifyRequest } from "fastify"
import { DateFilterMomentsService } from "../../service/Moments/DateFilterMomentsService";


class DateFilterMomentsController {
  async handle(request: FastifyRequest, reply: FastifyReply ){   
  const { startDate, endDate } = request.body as {startDate: string, endDate: string,}   
     const { user } =  request 
 
  if(!user) {
    return reply.status(400).send({error: true, message: "All field are required!"})
  }

try { 
  const dateFilterMomentsService = new DateFilterMomentsService()
  const dateFiltered = await dateFilterMomentsService.execute({endDate, startDate, user })
  
  return reply.status(201).send({moment: dateFiltered})
}catch(error: any){
  return reply.status(400).send({error: true, message: error.message})
}} 
}
export { DateFilterMomentsController }


 