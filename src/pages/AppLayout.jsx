import { Outlet } from "react-router-dom";

import Navbar from "../components/Navbar";

function AppLayout() {
  return (
    <div className='app text-gray-800'>
      <Navbar />
      <main className='w-full flex justify-center items-center '>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
