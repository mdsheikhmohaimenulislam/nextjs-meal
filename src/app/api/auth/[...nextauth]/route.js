
import { authOptions } from "@/lib/authOptions";
import NextAuth from "next-auth";




const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
// console.log(credentials);
// const user = {id:"1",name:"j submit",email:"jSubmit@gmail.com"}
