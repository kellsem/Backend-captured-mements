
import prismaClient from "../prisma";
import bcrypt from 'bcrypt'
//  import jwt from 'jsonwebtoken'
import { AuthUtils } from "../utils/AuthUtils";

interface UserProps{
  fullName: string
  email: string
  password: string
}


class CreateUserService {
  async execute({fullName, email, password }: UserProps
  ){
     const isUser = await prismaClient.user.findFirst({
       where: {
         email: email 
        }
 });
  if (isUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prismaClient.user.create({
    data: {
      fullName,
      email,
      password: hashedPassword
    }
  });
   // criação de token
 // const accessToken = jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET!, { expiresIn: "72h" });
const accessToken = AuthUtils.generateAccessToken(user.id)
 


  return {
    error: false,
    user: { fullName: user.fullName, email: user.email },
    accessToken,
    message: "Registered successfully"};
  }

}

export {CreateUserService}