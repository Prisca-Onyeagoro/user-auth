import baseconn from '@/Database/baseconn';
import Users from '@/Database/model/usermodel';
import { compare } from 'bcryptjs';
import NextAuth from 'next-auth/next';
import CredentialProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
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
  session: { strategy: 'jwt ' },
  jwt: { secret: process.env.NEXT_AUTH_JWT_SECRET },
  secret: process.env.NEXT_AUTH_SECRET,
});
