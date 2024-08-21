import { Link } from "react-router-dom";

function Auth() {
  return (
    <div className='flex flex-col justify-center text-center p-4'>
      <h1 className='text-2xl mt-4 mb-4'>Create an account or login</h1>
      <div className='flex justify-center gap-4'>
        <Link
          to='/signup'
          className='bg-gray-800 px-4 py-2 text-gray-100 rounded '
        >
          Sign Up
        </Link>
        <Link
          to='/login'
          className='bg-gray-800 px-4 py-2 text-gray-100 rounded'
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Auth;
