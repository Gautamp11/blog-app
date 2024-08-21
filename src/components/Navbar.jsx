import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

import { supabase } from "../supabase";

function Navbar() {
  const { user, setUser } = useContext(AuthContext);

  const email = user ? user.email : "";

  async function handleLogout() {
    let { error } = await supabase.auth.signOut();
    if (error) <p>Error happened while logging out</p>;
    setUser(null);
  }

  return (
    <nav className='bg-gray-800 p-4'>
      <ul className='flex space-x-16 justify-center'>
        <li>
          <Link to='/' className='text-white'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/profile' className='text-white'>
            Profile
          </Link>
        </li>

        <div className='flex justify-end'>
          <li>
            <Link to={!user && `/auth`} className='text-white'>
              {user ? email : "Login"}
            </Link>
          </li>
          {user && (
            <button
              className='bg-gray-800 px-4 text-gray-100 rounded'
              onClick={handleLogout}
            >
              Logout
            </button>
          )}
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
