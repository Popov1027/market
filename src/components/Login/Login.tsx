import LoginUtils from './loginUtils';
const Login = () => {
  const { username, password, setUsername, setPassword, submitHandler } = LoginUtils();

  return (
    <div className="w-full h-[830px] bg-gradient-to-tr from-blue-300 via-purple-500 to-pink-600 flex justify-center items-center">
      <div className="w-[400px] h-[600px] bg-white rounded-[10px]">
        <h3 className="my-10 mx-auto text-[30px] w-[80px]">Login</h3>
        <form onSubmit={(event) => submitHandler(event)}>
          <label className="block w-[300px] my-3 mx-auto text-[13px]">Username</label>
          <input
            type="text"
            name="username"
            placeholder="Type your username"
            value={password}
            className="block w-[300px] mx-auto my-0 p-[10px] border-none outline-none shadow-md"
            onChange={(event) => setPassword(event.target.value)}></input>

          <label className="block w-[300px] my-3 mx-auto text-[13px]">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Type your password"
            value={username}
            className="block w-[300px] mx-auto my-0 p-[10px] border-none outline-none shadow-md"
            onChange={(event) => setUsername(event.target.value)}></input>

          <a
            href="#"
            className="text-gray-600 text-[15px] float-right mx-auto my-[17px] no-underline w-[165px] block">
            Forgot password ?
          </a>
          <button
            className="block mx-auto my-[10px] bg-gradient-to-tr from-blue-300 via-purple-500 to-pink-600 p-[10px] rounded-full font-bold text-uppercase text-white w-[300px] border-none"
            type="submit">
            Login
          </button>
          <p className="text-[10px] my-[20px] mx-auto text-center">Or Sign Up Using</p>
          <div className="text-center text-[30px] cursor-pointer mx-auto my-0 no-underline">
            <a href="#">
              <i className="fab fa-facebook text-blue-600 mx-0.5"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter text-blue-400 mx-0.5"></i>
            </a>
            <a href="#">
              <i className="fab fa-google text-red-500 mx-1"></i>
            </a>
          </div>
          <p className="text-[10px] my-[20px] mx-auto text-center">Or Sign Up Using</p>
          <a
            className="block mx-auto my-0 text-center no-underline text-uppercase text-black"
            href="#">
            Sign Up
          </a>
        </form>
      </div>
    </div>
  );
};
export default Login;
