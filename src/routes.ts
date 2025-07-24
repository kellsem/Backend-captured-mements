import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { CreateUserController } from "./controller/CreateUserController";
import { LoginUserController } from "./controller/LoginUserController";


//CRIAÇÃO DE USUÁRIO
export function routes(fastify: FastifyInstance ){

fastify.post('/create-account', async (request: FastifyRequest, reply:FastifyReply)=>{return new CreateUserController().handle(request, reply)
})

//LOGIN DE USUÁRIO
fastify.post('/login', async (request: FastifyRequest, reply: FastifyReply)=>{ 
  return new LoginUserController().handle(request, reply)
})
}








//ROTA-> CONTROLLER-> SERVICE-> DB


// aula parada em -8min periodo de testes.