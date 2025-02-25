import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { prisma } from "./service/prisma";
import Google from "next-auth/providers/google";

export const { handlers, auth } = NextAuth({
  providers: [GitHub,Google],
  callbacks: {
    async jwt({ token }) {
      if (!token.email) return token;

      // Fetch user from DB if it exists
      let dbUser = await prisma.user.findUnique({
        where: { email: token.email },
        select: { id: true }, // Only fetch the ID
      });
      if (!dbUser) {
        dbUser = await prisma.user.create({
          data: {
            email: token.email,
            name: token.name as string,
          },
        });
      }

      if (dbUser) {
        token.id = dbUser.id; // Store user ID in JWT
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user && token.id) {
        session.user.id = token.id as string; // Attach the DB user ID to session
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
});
