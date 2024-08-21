import { useContext, useState } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) alert("Error: " + error.message);
    setUser(data.user);
    navigate("/");
  };

  return (
    <form onSubmit={handleLogin} className='flex flex-col bg-gray-200 p-4 mt-8'>
      <input
        type='email'
        placeholder='Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className='w-full mb-4 p-2'
      />
      <input
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className='w-full mb-4 p-2'
      />
      <button
        type='submit'
        className='bg-gray-800 px-4 py-2 text-gray-100 rounded'
      >
        Log In
      </button>
    </form>
  );
};

export default Login;
