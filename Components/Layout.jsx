import React from 'react'
import Head from 'next/head' //like css provides the metadata.
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer';

const Layout = ({children}) => {
  return (
    <div className='layout'>
      <Head>
        <title>Melody Mart</title>
      </Head>

      <header>
        <Navbar/>
      </header>

      <main className='main-container'>
        {children}
      </main>
      
      <footer className='footer'>
        <Footer/>
      </footer>

    </div>
  )
}

export default Layout;