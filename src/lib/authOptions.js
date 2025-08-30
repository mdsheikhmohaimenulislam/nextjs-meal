import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect, { collectionNames } from "@/lib/dbConnect";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        email: { label: "Useemail", type: "email", placeholder: "email" },
        // password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // console.log(credentials);
        // const user = { id: "1", name: "j submit", email: "jSubmit@gmail.com" };

        const { username, email } = credentials;
        // const users = await dbConnect("User").find().toArray();
        // console.log(users)
        const user = await dbConnect(collectionNames.TEXT_USER).findOne({
          Username: username,
        });
        // console.log(user)

        // console.log("Mongo user:", user);
        // console.log("Credentials:", credentials);

        if (!user) return null;

        if (email.toLowerCase() !== user.email.toLowerCase()) return null;
        const isEmail = email == user.email;

        if (isEmail) {
          return user;
        }

        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account) {
        // console.log(
        //   "From Signin Callback",
        //   user,
        //   account,
        //   profile,
        //   email,
        //   credentials
        // );
        try {
          const { providerAccountId, provider } = account;
          const { email: user_email, name, image } = user;
          const payload = {
            role:"user",
            providerAccountId,
            provider,
            user_email,
            name,
            image,
          };

          const userCollection = await dbConnect(collectionNames.TEXT_USER);
          const isUserExist = await userCollection.findOne({
            providerAccountId,
          });

          if (!isUserExist) {
            await userCollection.insertOne(payload);
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }

      return true;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.role = user.role;
      }
      return token;
    },
  },
};
