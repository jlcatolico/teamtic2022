import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import Sidebar from 'components/Sidebar';
import React from 'react'

const PrivateLayout = ({ children }) => {
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className='flex flex-col h-screen w-screen justify-between'>
        <Navbar/>
        <main className="flex w-full overflow-y-scroll p-2">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default PrivateLayout;
