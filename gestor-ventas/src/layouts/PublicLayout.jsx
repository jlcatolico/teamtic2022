import React from 'react';
import Footer from 'components/Footer';
import Navbar from 'components/NavbarPublic';

const PublicLayout = ({children}) => {
    return (
        <div className='flex flex-col h-screen w-screen justify-between'>
            <Navbar/>
            <main className="flex w-full h-full">{children}</main>
            <Footer />
        </div>
    );
};

export default PublicLayout;
