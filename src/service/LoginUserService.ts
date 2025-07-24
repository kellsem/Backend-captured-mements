import prismaClient from "../prisma";
import jwt from 'jsonwebtoken';
import bcrypt from "bcrypt";

interface UserProps {
  email: string;
  password: string;
}
class LoginUserService{ 

  async execute ({email, password }: UserProps) {

    const user = await prismaClient.user.findFirst({ 
      where: {
        email: email
      }
})
  if (!user) {
    throw new Error ("Usuário não encontrado")
  }
  const isPasswordValid = await bcrypt.compare(password, user.password );
  if(!isPasswordValid){
    throw new Error("Credenciais invalidas")
  }
  
  const accessToken = jwt.sign(
    { userId: user.id },
    process.env.ACCESS_TOKEN_SECRET!,
    { expiresIn: "72h" }
  )
     
  return {
    error: false,
    message: "Login bem-sucedido",
    user: { fullName: user.fullName, email: user.email },
    accessToken
  };
}
}
export {LoginUserService}
