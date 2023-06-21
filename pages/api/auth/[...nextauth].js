import baseconn from '@/Database/baseconn';
import Users from '@/Database/model/usermodel';
import { compare } from 'bcryptjs';
import NextAuth from 'next-auth/next';
import GitHubProvider from 'next-auth/providers/github';
import CredentialProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialProvider({
      name: 'Credentials',
      async authorize(credentials, req) {
        baseconn().catch((error) => {
          error: 'connection failed';
        });
        //  check if user exists
        const userexists = await Users.findOne({ email: credentials.email });

        if (!userexists) {
          throw new Error('User not found Kindly SignIn');
        }

        //   comparing the password
        const correctPassword = await compare(
          credentials.password,
          userexists.password
        );
        if (!correctPassword || userexists.email !== credentials.email) {
          throw new Error('Invalid email address or password');
        }

        return userexists;
      },
    }),
  ],
});
