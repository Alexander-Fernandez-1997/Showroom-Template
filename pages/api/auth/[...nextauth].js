import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import storeKey from "../../../utils/storeKey";
import simpleLogin from "../../../utils/simpleLogin";

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

        const response = await simpleLogin(
          client,
          "http://localhost:3000/api/clients"
        );
        const data = await response.json();

        if (response.status === 200 && data !== null) {
          return { email: data.email, store_id: data.store_id };
        } else {
          return null;
        }
      },
    }),
  ],

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
              email: user?.email,
              password: "",
            };

            token.user = await simpleLogin(
              client,
              "http://localhost:3000/api/clients/oauth"
            );
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
