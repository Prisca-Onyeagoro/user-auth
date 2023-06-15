const Regsiter = () => {
  return (
    <div className="bg-gray-950 w-full  p-14 flex ">
      <div className="bg-slate-300 border-l-8 border-gray-800 border-t-8">
        <h1 className="text-4xl font-bold text-center mt-6">Regsiter</h1>
        <form action="#">
          <div className="flex flex-col gap-4 p-14">
            <div className="input-group p-3">
              <input
                type="text"
                placeholder="Enter your name"
                className="p-5 rounded-3xl outline-none"
              />
            </div>
            <div className="input-group p-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="p-5 rounded-3xl outline-none"
              />
            </div>

            <div className="input-group p-3">
              <input
                type="password"
                placeholder="Enter your password"
                className="p-5 rounded-3xl  outline-none"
              />
            </div>
            <div className="input-group p-3">
              <input
                type="password"
                placeholder="Confirm password"
                className="p-5 rounded-3xl outline-none"
              />
            </div>
          </div>
          <div className="flex justify-center relative">
            <div className="bottom-4 absolute">
              <button type="submit">Sign up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Regsiter;
