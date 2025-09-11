import { FastifyReply, FastifyRequest } from "fastify"
import { GetUserService } from "../service/GetUserService"

class GetUserController {
  async handle(request: FastifyRequest, reply: FastifyReply ){
    const { user } = request 

if (!user){
  return reply.status(400).send({ error:true, message:"User is required!" })
}
  try{
    //INICIALIZO O MEU SERVIÇO:
    const getUserService = new GetUserService();
    //Executar o meu serviço:
    const getUser = await getUserService.execute({user})

    return reply.status(200).send(getUser)
  } catch (error: any ){
   return reply.status(400).send({ erro: true, message: error.message })
  }
}
  }
  


export { GetUserController } 
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
//     const { fullName, email, password } = request.body as { fullName:string,email: string, password: string }
//  if (!fullName || !email || !password){
//   reply.status(400).send({ message: "All fields are required" })
//  }

// try {
// //INICIALIZO O MEU SERVIÇO
// const createUserService = new CreateUserService()
// // chamo o serviço acessando o metodo
// const user = await createUserService.execute({ fullName, email, password })
// reply.send(user);
// } catch (error: any ){
//   return reply.status(400).send({ erro: true, message: error.message })
// }}
// }


