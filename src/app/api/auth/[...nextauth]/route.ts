import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import TwitterProvider from "next-auth/providers/twitter";
import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import { simplePost } from "utils/simpleFetch";
import storeKey from "utils/storeKey";
import { fetchUrl } from "utils/fetchUrl";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        let user: any = await simplePost("clients/login", {
          email: credentials.email,
          password: credentials.password,
        });
        // let user = {
        //   id: 1,
        //   email: "potato",
        //   username: "potato",
        // };

        if (user === null) {
          return null;
        }

        // console.log("user 40", user);

        return {
          id: user.id,
          email: user.email,
          password: user.password,
          storeId: user.storeId,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",
    }),
    TwitterProvider({
      clientId: process.env.TWITTER_CLIENT_ID || "",
      clientSecret: process.env.TWITTER_CLIENT_SECRET || "",
      version: "2.0",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (account) {
        token.accessToken = account.accessToken;

        switch (account.type) {
          case "credentials":
            token.user = user;
            break;
          case "oauth":
            let client = {
              store_id: storeKey,
              email: token.email || user.email || "",
              password: "",
            };
            // console.log("client", client);
            // console.log("token", token);
            // console.log("account", account);
            const clientInfo = await simplePost("clients/oauth", client);
            token.user = await clientInfo;
            // console.log("token.user", token.user);
            break;
        }
      }
      return token;
    },

    session: ({ session, token }) => {
      // console.log("Session Callback 55", { session, token });
      return {
        ...session,
        accessToken: token.accessToken,
        user: token.user as any,
      };
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
