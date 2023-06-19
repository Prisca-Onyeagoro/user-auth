import Link from 'next/link';
import {
  HiAtSymbol,
  HiUsers,
  HiOutlineUser,
  HiFingerPrint,
  HiThumbUp,
} from 'react-icons/hi';
import Styles from '@/styles/register.module.css';
import { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { validateLogin } from '@/validate/validate';
import { useRouter } from 'next/router';
import Image from 'next/image';
const Login = () => {
  const Router = useRouter();
  const [loading, isloading] = useState(false);
  const [show, setShow] = useState({ password: false });
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: validateLogin,
    onSubmit,
  });
  async function onSubmit(values) {
    console.log(values);
  }

  useEffect(() => {
    const HandleChangeStart = () => {
      isloading(true);
    };

    const HandleChangeEnd = () => {
      isloading(false);
    };
    Router.events.on('routeChangeStart', HandleChangeStart);
    Router.events.on('routeChangeComplete', HandleChangeEnd);

    return () => {
      Router.events.off('routeChangeStart', HandleChangeStart);
      Router.events.off('routeChangeComplete', HandleChangeEnd);
    };
  });
  return (
    <div className="bg-gray-950 w-full h-screen relative p-14 flex  justify-center ">
      <div className="bg-slate-300 border-l-8 border-gray-800 border-t-8 ">
        <div className="text-4xl font-bold text-center mt-6">
          <div className="text-4xl  font-bold flex justify-center">
            LogIn <HiUsers />
          </div>
        </div>
        <div className="flex justify-center">
          <p>
            {' '}
            Dont have an account ? <Link href="/register">Sigin Up</Link>
          </p>
        </div>
        {loading && (
          <Image
            src="/assets/loading.svg"
            alt="loading"
            width={90}
            height={100}
          />
        )}
        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-4 p-14 ">
            {/* email */}
            <div className="input-group p-3 flex items-baseline bg-white rounded-3xl">
              <input
                type="email"
                placeholder="Enter your email address"
                name="email"
                className="p-5 rounded-3xl outline-none"
                {...formik.getFieldProps('email')}
              />
              <HiAtSymbol size={29} />
            </div>
            {formik.errors.email && formik.touched.email ? (
              <span className="bg-rose-600 text-slate-100">
                {formik.errors.email}{' '}
              </span>
            ) : (
              ''
            )}
            {/* password */}
            <div className="input-group p-3   flex items-baseline bg-white rounded-3xl">
              <input
                type={`${show.password ? 'text' : 'password'}`}
                placeholder="Enter your password"
                name="password"
                className="p-5 rounded-3xl  outline-none"
                {...formik.getFieldProps('password')}
              />
              <span
                onClick={() => setShow({ ...show, password: !show.password })}
              >
                <HiFingerPrint size={29} className={Styles.icon} />
              </span>
            </div>
            {formik.errors.password && formik.touched.password ? (
              <span className="bg-rose-600 text-slate-100">
                {' '}
                {formik.errors.password}{' '}
              </span>
            ) : (
              ''
            )}
          </div>

          <div className="flex justify-center mb-5">
            <button
              type="submit"
              className=" w-72 bg-gradient-to-r from-slate-600 to-gray-500 p-2 font-extrabold rounded-xl m"
            >
              SignIn
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
