export { GET, POST } from '@/lib/auth';
import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET, // Use the secret from environment variables
  // other configurations
});
