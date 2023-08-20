import User from "@/models/user";
import connectTodb from "@/utils/mongoos"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

// export const authOptions = {
  const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    // ...add more providers here
  ],
  async session({ session }) {
    const sessionUser = await User.findOne({
      email:session.user.email
    })
    session.user.id = sessionUser._id.toString();
    return session;
  },
  async signIn({ profile }) {
    try {
      await connectTodb();
      // if useCheck 
      const existsUser = await User.findOne({ email: profile.email });
      // if  not use Create 
      if (!existsUser) {
        await User.create({
          email: profile.email,
          username: profile.name.replace(" ", "").toLowerCase(),
          image: profile.picture
        })
      }
      // 1.31
      return true
    } catch (error) {

    }
  }
})

// export default NextAuth(authOptions)
export{handler as GET, handler as POST};