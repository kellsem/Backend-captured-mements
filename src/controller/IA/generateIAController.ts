import { FastifyReply, FastifyRequest } from "fastify";
import axios from "axios";

class GenerateIAController{
async handle(request: FastifyRequest, reply: FastifyReply){
  const { text } = request.body as {text: string}
try{
 const response = await axios.post('http://localhost:11434/api/generate',{
  "model": "llama3.2",
  "prompt": `Melhore a frase a seguir, tornando-a mais clara, atrativa e com mais detalhes reais e relevantes sobre o local descrito: "${text}". A resposta deve conter apenas a frase final aprimorada, sem introduções, explicações ou qualquer outro conteúdo adicional.`,
  "stream": false
 })
 reply.send(response.data.response)
}catch(error){
  reply.status(500).send({message: "erro ao processar sua solicitação"})
   }
}

}
export {GenerateIAController}