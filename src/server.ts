
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

// Para Vercel, exporta o handler do Fastify
export default app;





// import dotenv from "dotenv";
// import app from "./app";

// export default app;
// dotenv.config();
// //Registro do servidor.
// const start = async () =>{

// }
// // app.listen({ port: 8000 }, () => {
// //   console.log('🚀 Servidor está rodando');
// // });

// start();