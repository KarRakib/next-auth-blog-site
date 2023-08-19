import connectTodb from "@/utils/mongoos"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  async sessinon({sessinon}){

  },
  async signIn({profile}){
    try {
      await connectTodb();
      // 1.31
      return true
    } catch (error) {
      
    }
  }
}

export default NextAuth(authOptions)