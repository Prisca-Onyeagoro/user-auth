import { Inter } from 'next/font/google';
import Image from 'next/image';
import { getSession } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export default function MyPage({ credentialsProvider }) {
  return (
    <div>
      <h1>CredentialsProvider Details</h1>
      <p>{credentialsProvider}</p>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/login', // Redirect to the login page if session doesn't exist
        permanent: false,
      },
    };
  }

  // Access the CredentialsProvider details from the session
  const credentialsProvider = session.credentialsProvider;

  return {
    props: { credentialsProvider },
  };
}
