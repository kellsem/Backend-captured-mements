import dotenv from "dotenv";
import app from "./app";

dotenv.config();
//Registro do servidor.
const start = async () =>{

}
app.listen({ port: 8000 }, () => {
  console.log('🚀 Servidor está rodando');
});

start();
