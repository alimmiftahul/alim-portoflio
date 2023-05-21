import React from 'react';

import Logo from '../assets/react.svg';

const Header = () => {
    return (
        <header className='py-8'>
            <div className='container mx-auto'>
                <div className='flex justify-between items-center'>
                    <a href='#'>
                        <img src={Logo} />
                    </a>
                    <button className='btn btn-sm'> work with me</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
