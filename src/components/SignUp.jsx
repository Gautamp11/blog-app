import { useState } from "react";
import { supabase } from "../supabase";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) alert("Error: " + error.message);
    else {
      alert("Check your email for confirmation link.");
      navigate("/login");
    }
  };

  return (
    <form
      onSubmit={handleSignUp}
      className='flex flex-col bg-gray-200 p-4 mt-8'
    >
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
        Sign Up
      </button>
    </form>
  );
};

export default SignUp;
