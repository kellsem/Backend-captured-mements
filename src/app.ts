import fastify, { FastifyRequest, FastifyReply }  from "fastify";
import { routes } from "./routes";
import fastifyMultipart from "@fastify/multipart";
import cors from '@fastify/cors'
import fastifyStatic from "@fastify/static";
import path from 'path'

const app = fastify({ logger: true });

app.register(fastifyMultipart)
app.register(routes);//registro as constantes de rotas.
app.register(cors,{
  origin:true,
  methods: ["*"]
});//Permissão de registros ao servidor.

//Busca de imagem
app.register(fastifyStatic, {
  root: path.join(__dirname, '..','uploads'),
  prefix:'/uploads'
})

export default app;
