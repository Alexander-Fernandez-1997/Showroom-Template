import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import TwitterProvider from "next-auth/providers/twitter";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import storeKey from "../../../utils/storeKey";
import simpleLogin from "../../../utils/simpleLogin";
import { fetchUrl } from "../../../utils/fetchUrl";

export const authOptions = {
  // Configure one or more authentication providers

  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Contraseña",
        },
      },
      async authorize(credentials, req) {
        let client = {
          store_id: storeKey,
          email: credentials.email,
          password: credentials.password,
        };

        const response = await simpleLogin(client, `${fetchUrl}/api/clients`);
        const data = await response.json();

        if (response.status === 200 && data !== null) {
          return { email: data.email, store_id: data.store_id };
        } else {
          return null;
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
      version: "2.0",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // Custom Pages
  // pages: {
  //   signIn: '/auth/login',
  //   newUser: '/auth/register'
  // },

  // Callbacks

  session: {
    maxAge: 2592000, /// 30d
    strategy: "jwt",
    updateAge: 86400, // cada día
  },

  callbacks: {
    async jwt({ token, account, user }) {
      if (account) {
        token.accessToken = account.access_token;

        switch (account.type) {
          case "oauth":
            let client = {
              store_id: storeKey,
              email: user.email,
              password: "",
            };
            console.log("client 75", client);
            const clientInfo = await simpleLogin(
              client,
              `${fetchUrl}/api/clients/oauth`
            );
            const dataParsed = await clientInfo.json();
            token.user = dataParsed;
            break;

          case "credentials":
            token.user = user;
            break;
        }
      }

      return token;
    },

    async session({ session, token, user }) {
      session.accessToken = token.accessToken;
      session.user = token.user;

      return session;
    },
  },
};

export default NextAuth(authOptions);
