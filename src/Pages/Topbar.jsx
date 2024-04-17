import React from 'react';
import { Earphone, Lang } from '../Components/Outline';
import logo from '../Assets/Images/logo.svg';
import { Link, useLocation } from "react-router-dom";
// import { Apple } from '../Components/Brand';

const Topbar = () => {
    const location = useLocation();

    return (
        <div className="w-full h-[60px] fixed z-50 bg-[#dddddde6] flex justify-center">
            <div className="w-full max-w-full h-full flex justify-center items-center gap-[50px]">
                
                <div className='flex'>
                    <Link
                        to="/privacy"
                        className='w-10 h-[26px]'
                    >
                        <img src={logo} alt="icon" className='w-full h-full'/>
                    </Link>
                </div>

                <div className="flex justify-center gap-[30px]">
                    <Link
                        to="/"
                        className={`text-base font-medium ${ 
                            location.pathname === '/' ? 'bg-[#1c78004d] px-[15px] rounded-[35px]' : ''
                        }`}
                    >
                        HOME
                    </Link>
                    <Link
                        to="/products"
                        className={`text-base font-medium ${
                            location.pathname === '/products' ? 'bg-[#1c78004d] px-[15px] rounded-[35px]' : ''
                        }`}
                    >
                        PRODUCTS
                    </Link>
                    <Link
                        to="/careers"
                        className={`text-base font-medium ${
                            location.pathname === '/careers' ? 'bg-[#1c78004d] px-[15px] rounded-[35px]' : ''
                        }`}
                    >
                        ACCOUNT
                    </Link>
                    <Link
                        to="/partner"
                        className={`text-base font-medium ${
                            location.pathname === '/partner' ? 'bg-[#1c78004d] px-[15px] rounded-[35px]' : ''
                        }`}
                    >
                        PARTNER
                    </Link>

                    <div className='text-base font-medium text-[#1C7800]'>
                        REGISTER
                    </div>

                    <div className='text-base font-medium text-[#1C7800]'>
                        LOG IN
                    </div>
                </div>

                <div className='flex justify-center gap-[30px]'>
                    <Earphone/>
                    <Lang/>
                </div>
            </div>
        </div>
    )
}

export default Topbar;