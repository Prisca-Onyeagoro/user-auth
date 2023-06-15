import Link from 'next/link';
import {
  HiAtSymbol,
  HiUsers,
  HiOutlineUser,
  HiFingerPrint,
} from 'react-icons/hi';
const Regsiter = () => {
  return (
    <div className="bg-gray-950 w-full relative p-14 flex bottom-14 justify-center ">
      <div className="bg-slate-300 border-l-8 border-gray-800 border-t-8 ">
        <div className="text-4xl font-bold text-center mt-6">
          <div className="text-4xl font-bold flex justify-center">
            Regsiter <HiUsers />
          </div>
        </div>
        <div className="flex justify-center">
          <p>
            {' '}
            Dont have an account ? <Link href="/login">Sigin in</Link>
          </p>
        </div>

        <form action="#">
          <div className="flex flex-col gap-4 p-14 ">
            <div className="input-group p-3 flex items-baseline bg-white rounded-3xl ">
              <input
                type="text"
                placeholder="Enter your name"
                className="p-5 rounded-3xl outline-none"
              />
              <HiOutlineUser size={29} />
            </div>
            <div className="input-group p-3 flex items-baseline bg-white rounded-3xl">
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-5 rounded-3xl outline-none"
              />
              <HiAtSymbol size={29} />
            </div>

            <div className="input-group p-3   flex items-baseline bg-white rounded-3xl">
              <input
                type="password"
                placeholder="Enter your password"
                className="p-5 rounded-3xl  outline-none"
              />
              <HiFingerPrint size={29} />
            </div>
            <div className="input-group p-3   flex items-baseline bg-white rounded-3xl">
              <input
                type="password"
                placeholder="Confirm password"
                className="p-5 rounded-3xl outline-none"
              />
              <HiFingerPrint size={29} />
            </div>
          </div>
        </form>

        <div className="flex justify-center mb-5">
          <button
            type="submit"
            className=" w-72 bg-gradient-to-r from-slate-600 to-gray-500 p-2 font-extrabold rounded-xl m"
          >
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Regsiter;
