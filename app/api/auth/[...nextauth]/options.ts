import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { GithubProfile } from "next-auth/providers/github";

export const authOptions: NextAuthOptions = {
  providers: [
    GitHubProvider({
      profile(profile: GithubProfile) {
        console.log("profile", profile);
        return {
          ...profile,
          id: profile.id.toString(),
          image: profile.avatar_url,
          role: profile.role ?? "user",  
        };
      },
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
        },
        password: {
          label: "Password:",
          type: "password",
        },
      },
      async authorize(credentials) {
        console.log("credentials", credentials);

        // This is where you need to retrieve user data
        // to verify with credentials
        // Docs: https://next-auth.js.org/configuration/providers/credentials
        const user = {
          id: "101",
          name: "sik",
          email: "squraishi8846@gmail.com",
          image: "https://avatars.githubusercontent.com/u/46837548?v=4",
          password: "abcd",
          role: "admin",
        };

        if (credentials?.username === user.name && credentials?.password === user.password) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
    async jwt({ token, user }) {
      // console.log("token--->", token)
      // console.log("user--->", user)

      if (user) token.role = user.role;
      // console.log("after token--->", token)

      return token;
    },
    // If you want to use the role in client components
    async session({ session, token }) {
      // console.log("session==>",session)
      // console.log("session token ==>",token)

      if (session?.user) session.user.role = token.role;

      // console.log("after session==>",session)

      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },
  // pages: {
  //   signIn: '/auth/signin'
  // }
};
