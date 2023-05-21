import React from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Navbar';
import About from './components/About';
import Service from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
const App = () => {
    return (
        <div className='bg-no-repeat bg-cover overflow-hidden'>
            <Header />
            <Banner />
            <Nav />
            <About />
            <Service />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
