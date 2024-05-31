import React, { useContext, useState, Fragment } from 'react';
import { Earphone, Lang, Menus } from '../Components/Outline';
import logo from '../Assets/Images/logo.svg';
import { Link, useLocation } from "react-router-dom";
// import { Apple } from '../Components/Brand';
import { Menu, Transition } from '@headlessui/react'
import Modal from '../Components/Modal';
import { LanguageContext } from "../LanguagesContext.js";
import QCG_Form_Logo from '../Assets/Images/QCG_Form_Logo.png'

const Topbar = () => {
    const location = useLocation();
    const [openButton, setOpenButton] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Define isMenuOpen state
    const { t, language, updateLanguage } = useContext(LanguageContext);

    const handleButtonClick = (button) => {
        setOpenButton(true);
        setSelectedButton(button);
    };

    const handleLanguageChange = (lang) => {
        updateLanguage(lang);
        setIsMenuOpen(false); // Close the menu after language change
    };

    return (
        <div className='flex flex-col'>
        <div className="w-full h-[60px] fixed z-50 bg-[#dddddde6] flex justify-center backdrop-blur-sm">
            <div className="w-[393px] md:w-full max-w-full flex justify-center items-center gap-[50px]">
                
                <div className='hidden md:flex'>
                    <Link
                        to="/privacy"
                        className='w-10 h-[26px]'
                    >
                        <img src={logo} alt="icon" className='w-full h-full'/>
                    </Link>
                </div>

                <div className="hidden md:flex justify-center gap-[30px]">
                    <Link
                        to="/"
                        className={`text-base font-medium ${ 
                            location.pathname === '/' ? 'bg-[#1c78004d] px-[15px] rounded-[35px]' : ''
                        }`}
                    >
                        {t("Topbar.homePage")}
                    </Link>
                    <Link
                        to="/products"
                        className={`text-base font-medium ${
                            location.pathname === '/products' ? 'bg-[#1c78004d] px-[15px] rounded-[35px]' : ''
                        }`}
                    >
                        {t("Topbar.productsPage")}
                    </Link>
                    <Link
                        to="/account"
                        className={`text-base font-medium ${
                            location.pathname === '/account' ? 'bg-[#1c78004d] px-[15px] rounded-[35px]' : ''
                        }`}
                    >
                        {t("Topbar.accountPage")}
                    </Link>
                    <Link
                        to="/partner"
                        className={`text-base font-medium ${
                            location.pathname === '/partner' ? 'bg-[#1c78004d] px-[15px] rounded-[35px]' : ''
                        }`}
                    >
                        {t("Topbar.partnerPage")}
                    </Link>

                    <div className='text-base font-medium text-[#1C7800]'>
                        {t("Topbar.register_button")}
                    </div>

                    <div className='text-base font-medium text-[#1C7800]'>
                        {t("Topbar.login_Button")}
                    </div>
                </div>

                {/* Earphone and Lang icons on web version*/}
                <div className='hidden md:flex justify-center gap-[30px] cursor-pointer' onClick={() => handleButtonClick('gmail')}>
                    <Earphone/>
                </div>
                <div className='hidden md:flex justify-center gap-[30px] cursor-pointer'>
                    <Menu as="div" className="relative text-left">
                        <div className="flex items-center">
                            <Menu.Button className="inline-flex justify-center rounded-md text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 mt-1">
                                <Lang />
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute mt-5 w-[200px] h-[64px] rounded-[30px] bg-[#AAA] shadow-lg ring-1 ring-black/5 focus:outline-none text-xl font-semibold text-right left-1/2 transform -translate-x-1/2">
                                <div className="flex flex-row">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${
                                                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                } group flex flex-row w-full text-base place-items-center rounded-[30px] px-7 py-5`}
                                                onClick={() => handleLanguageChange('en')}
                                            >
                                                English 
                                            </button>
                                        )}
                                    </Menu.Item>
                                    
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${
                                                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                } group flex flex-row w-full text-base place-items-center rounded-[30px] px-[30px] py-5`}
                                                onClick={() => handleLanguageChange('zh')}
                                            >
                                                中文 
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu> 
                </div>

                {/* LogoSvg between Earphone and Lang on mobile version */}
                <div className='flex flex-row justify-center gap-[130px] md:hidden space-y-1'>
                        {/* Language  component */}
                        <Menu as="div" className="relative text-left">
                            <div>
                                <Menu.Button className="inline-flex w-full justify-center rounded-md text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 mt-1">
                                <Lang />
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute left-0 mt-4 w-[120px] rounded-[15px] bg-[#AAA] shadow-lg ring-1 ring-black/5 focus:outline-none text-xl font-semibold text-right">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${
                                                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                } group flex flex-col w-full place-items-center rounded-md px-7 py-3`}
                                                onClick={() => handleLanguageChange('en')}
                                            >
                                                English
                                            </button>
                                        )}
                                    </Menu.Item>
                            
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${
                                                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                } group flex flex-col w-full place-items-center rounded-md px-7 py-3`}
                                                onClick={() => handleLanguageChange('zh')}
                                            >
                                                中文
                                            </button>
                                        )}
                                    </Menu.Item>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                        
                        <Link to="/privacy" className='w-10 h-[26px]'>
                            <img src={QCG_Form_Logo} alt="icon" className='h-full'/>
                        </Link>
                        {/* Menu component */}
                        <Menu as="div" className="relative text-left">
                            <div>
                                <Menu.Button className="inline-flex w-full justify-center rounded-md text-sm font-medium text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
                                <Menus/>
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items
                                className="absolute right-0 mt-4 px-5 rounded-[15px] bg-[#AAA] shadow-lg ring-1 ring-black/5 focus:outline-none text-xl font-semibold text-center object-center place"
                                >
                                        <Link
                                            to="/"
                                            className={`${
                                                location.pathname === '/' 
                                            }`}
                                        >
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                    className='group flex flex-col w-full rounded-md py-3'
                                                  >
                                                    {t("mobileTopbar.homePage")}
                                                  </button>
                                                )}
                                            </Menu.Item>
                                        </Link>
                                        <Link
                                            to="/products"
                                            className={`${
                                                location.pathname === '/products' 
                                            }`}
                                        >
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                    className='group flex flex-col w-full rounded-md py-3'
                                                  >
                                                    {t("mobileTopbar.productsPage")}
                                                  </button>
                                                )}
                                            </Menu.Item>
                                        </Link>
                                    
                                        <Link
                                            to="/account"
                                            className={`${
                                                location.pathname === '/account' 
                                            }`}
                                        >
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                    className='group flex flex-col w-full rounded-md py-3'
                                                  >
                                                    {t("mobileTopbar.accountPage")}
                                                  </button>
                                                )}
                                            </Menu.Item>
                                        </Link>
                                        <Link
                                            to="/partner"
                                            className={`${
                                                location.pathname === '/partner' 
                                            }`}
                                        >
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                    className='group flex flex-col w-full rounded-md py-3'
                                                  >
                                                    {t("mobileTopbar.partnerPage")}
                                                  </button>
                                                )}
                                            </Menu.Item>
                                        </Link>
                                        <Link
                                            to="/partner"
                                            className={`${
                                                location.pathname === '/partner' 
                                            }`}
                                        >
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                    className='group flex flex-col w-full rounded-md py-3'
                                                  >
                                                    {t("mobileTopbar.register_button")}
                                                  </button>
                                                )}
                                            </Menu.Item>
                                        </Link>
                                        <Link
                                            to="/partner"
                                            className={`${
                                                location.pathname === '/partner' 
                                            }`}
                                        >
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <button
                                                    className='group flex flex-col w-full rounded-md py-3'
                                                  >
                                                    {t("mobileTopbar.login_Button")}
                                                  </button>
                                                )}
                                            </Menu.Item>
                                        </Link>
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </div>
            </div>
            <Modal open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton}/>
        </div></div>
    )
}

export default Topbar;