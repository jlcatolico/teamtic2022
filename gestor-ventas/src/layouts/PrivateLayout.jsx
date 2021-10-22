import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import React from 'react'
import PrivateRoute from 'components/PrivateRoute';

const PrivateLayout = ({ children }) => {
  return (
<<<<<<< HEAD
    <PrivateRoute>
      <div className="flex w-screen h-screen">
        <Sidebar />
        <div className='flex flex-col h-screen w-screen justify-between'>
          <Navbar />
          <main className="w-full h-full overflow-y-scroll mx-8">{children}</main>
          <Footer />
        </div>
=======
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className='flex flex-col h-screen w-screen justify-between'>
        <Navbar/>
        <main className="w-full h-full overflow-y-scroll mx-auto my-auto ImagenSideBar">{children}</main>
        <Footer />
>>>>>>> 2281ea53a52a4bdb3b08980613139c63d9efa016
      </div>
    </PrivateRoute>
  );
};

export default PrivateLayout;
