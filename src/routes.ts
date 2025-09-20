import { FastifyInstance, FastifyRequest, FastifyReply } from "fastify";
import { CreateUserController } from "./controller/CreateUserController";
import { LoginUserController } from "./controller/LoginUserController";
import { GetUserController } from "./controller/GetUserController";
import { authenticateToken } from "./middleware/authenticateToken";
import { AddMomentsController } from "./controller/Moments/AddMomentsController";
import { GetAllMomentsController } from "./controller/Moments/GetAllMomentsController";
import { SearchMomentsController } from "./controller/Moments/SearchMomentsController";
import { UpdateMomentsController } from "./controller/Moments/UpdateMomentsController";
import { GenerateIAController } from "./controller/IA/generateIAController";
import { UploadFileController } from "./controller/Upload/UploadFileController";
import { upload } from "./config/multer";
import { DeleteFileController } from "./controller/Upload/DeleteFileController";
import { DeleteMomentController } from "./controller/Moments/DeleteMomentsController";
import { FavoriteMomentController } from "./controller/Moments/FavoriteMomentController";
import { DateFilterMomentsController } from "./controller/Moments/DateFilterMomentsController";
 
//CRIAÇÃO DE USUÁRIO
export function routes(fastify: FastifyInstance ){fastify.post('/create-account', async (request: FastifyRequest, reply:FastifyReply)=>{return new CreateUserController().handle(request, reply)
})

//LOGIN DE USUÁRIO
fastify.post('/login', async (request: FastifyRequest, reply: FastifyReply)=>{ 
  return new LoginUserController().handle(request, reply)
})
//BUSCA DE USUÁRIO
fastify.get('/get-user', {preHandler: authenticateToken}, async (request: FastifyRequest, reply: FastifyReply)=>{return new GetUserController().handle(request, reply)
})

//MOMENTS: ADICIONAR UM NOVO MOMENTO
fastify.post('/add-registered-moment', {preHandler: authenticateToken}, async (request: FastifyRequest, reply: FastifyReply)=>{return new AddMomentsController().handle(request, reply)
})

//MOMENTS: BUSCA DE MOMENTOS DE USUÁRIO 
fastify.get('/get-all-moments', {preHandler: authenticateToken}, async (request: FastifyRequest, reply: FastifyReply)=>{return new GetAllMomentsController().handle(request, reply)
})
//MOMENTS: BUSCA POR TERMOS 
fastify.get('/search', {preHandler: authenticateToken}, async (request: FastifyRequest, reply: FastifyReply)=>{return new SearchMomentsController().handle(request, reply)
})

// EDIÇÃO DO MOMENTO
fastify.put('/edit-moments/:id', {preHandler: authenticateToken}, async (request: FastifyRequest, reply: FastifyReply)=>{return new UpdateMomentsController().handle(request, reply)
})
// FILTRO DE MOMENTOS
fastify.put('/registered-moment/filter', {preHandler: authenticateToken}, async (request: FastifyRequest, reply: FastifyReply)=>{return new DateFilterMomentsController().handle(request, reply)
})

//DELETAR MOMENTO
fastify.delete('/delete-moment/:id',{preHandler: authenticateToken}, async (request: FastifyRequest, reply: FastifyReply)=>{return new DeleteMomentController().handle(request, reply)
})

//FAVORITE MOMENTO
fastify.put('/favorite-moment/:id',{preHandler: authenticateToken}, async (request: FastifyRequest, reply: FastifyReply)=>{return new FavoriteMomentController().handle(request, reply)
})

//IA DE TEXTO
fastify.post('/ia', async (request: FastifyRequest, reply: FastifyReply)=>{return new GenerateIAController().handle(request, reply)
})

// UPLOAD DE IMAGEM
fastify.post('/image-upload',{preHandler: upload.single("image")}, async (request: FastifyRequest, reply: FastifyReply)=>{return new UploadFileController().handle(request, reply)
})

//DELETAR IMAGEM
fastify.delete('/delete-upload',{preHandler: upload.single("image")}, async (request: FastifyRequest, reply: FastifyReply)=>{return new DeleteFileController().handle(request, reply)
})

}


//ROTA-> CONTROLLER-> SERVICE-> DB
