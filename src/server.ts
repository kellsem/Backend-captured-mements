import fastify from "fastify";
import dotenv from "dotenv";
import { routes } from "./routes";

dotenv.config();

const app = fastify({ logger: true });
//Registro do servidor.
const start = async () =>{
app.register(routes);//registro as contantes de rotas.

}
app.listen({ port: 8000 }, () => {
  console.log('🚀 Servidor está rodando');
});



start();
