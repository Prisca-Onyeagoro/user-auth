import { signIn } from 'next-auth/react';
import React from 'react';
import { DiGithubBadge } from 'react-icons/di';

const Github = () => {
  const HandleGithub = async () => {
    signIn('github', { callbackUrl: 'http://localhost:3000' });
  };
  return (
    <>
      <button className="flex space-x-5" onClick={HandleGithub}>
        <h1 className="text-slate-400 font-bold">Sigin with github</h1>
        <DiGithubBadge size={25} />
      </button>
    </>
  );
};

export default Github;
