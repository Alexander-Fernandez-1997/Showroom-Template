import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { simplePost } from "utils/simpleFetch";

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

        console.log("user 40", user);

        return {
          id: user.id,
          email: user.email,
          password: user.password,
          storeId: user.storeId,
        };
      },
    }),
  ],
  // secret: process.env.NEXTAUTH_SECRET,
  secret: "qqtXYw4c7CrxaeeK8YuGDo7HYYQhVf0OCdNOSiKfHYo",

  callbacks: {
    session: ({ session, token }) => {
      // console.log("Session Callback 55", { session, token });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          password: token.password,
          storeId: token.storeId,
          email: token.email,
        },
      };
    },
    jwt: ({ token, user }) => {
      // console.log("JWT Callback", { token, user });
      if (user) {
        const u = user as unknown as any;
        // console.log("u 71", u);
        return {
          ...token,
          id: u.id,
          password: u.password,
          storeId: u.storeId,
          email: u.email,
        };
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
