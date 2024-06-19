import React, { useState, Fragment } from 'react';
import { Earphone, Lang, Menus } from '../Components/Outline';
import logo from '../Assets/Images/logo.svg';
import { Link, useLocation } from "react-router-dom";
import { Menu, Transition, Dialog } from '@headlessui/react'
import Modal from '../Components/Modal';
import { useTranslation } from 'react-i18next';
// import { LanguageContext } from "../LanguagesContext.js";

const Topbar = () => {
    const location = useLocation();
    const [openButton, setOpenButton] = useState(false);
    const [selectedButton, setSelectedButton] = useState(null);
    // const [, setIsMenuOpen] = useState(false);
    // const { t, updateLanguage } = useContext(LanguageContext);
    const { t, i18n } = useTranslation();

    const toggleLanguage = (langCode) => {
        i18n.changeLanguage(langCode);
    };

    let [langIsOpen, setLangIsOpen] = useState(false);
    let [menuIsOpen, setMenuIsOpen] = useState(false);

    function closeLangModal() {
        setLangIsOpen(false)
    }
    
    function openLangModal() {
        setLangIsOpen(true)
    }

    function closeMenuModal() {
        setMenuIsOpen(false)
    }
    
    function openMenuModal() {
        setMenuIsOpen(true)
    }

    const handleButtonClick = (button) => {
        setOpenButton(true);
        setMenuIsOpen(false)
        setSelectedButton(button);
    };

    

    // const handleLanguageChange = (lang) => {
        // updateLanguage(lang);
    //     setIsMenuOpen(false); // Close the menu after language change
    //     setLangIsOpen(false); 
    // };

    return (
        <div className='flex flex-col'>
        <div className="w-full h-[60px] fixed z-50 bg-[#dddddde6] flex justify-center">
            <div className=" w-full md:w-full max-w-full flex md:justify-center items-center gap-[50px] px-[30px] md:px-0">
                
                <div className='hidden md:flex'>
                    <Link
                        to="/privacy"
                        className='w-10 h-[26px]'
                    >
                        <img src={logo} alt="icon" className='md:w-[30px] md:h-[30px]'/>
                    </Link>
                </div>

                <div className="hidden md:flex justify-center gap-[30px]">
                    <Link
                        to="/"
                        className={`text-base font-semibold ${ 
                            location.pathname === '/' ? 'bg-[#1c78004d] px-[15px] rounded-[35px]' : ''
                        }`}
                    >   
                        {t("Topbar.homePage")}
                    </Link>
                    <Link
                        to="/products"
                        className={`text-base font-semibold ${
                            location.pathname === '/products' ? 'bg-[#1c78004d] px-[15px] rounded-[35px]' : ''
                        }`}
                    >
                        {t("Topbar.productsPage")}
                    </Link>
                    <Link
                        to="/account"
                        className={`text-base font-semibold ${
                            location.pathname === '/account' ? 'bg-[#1c78004d] px-[15px] rounded-[35px]' : ''
                        }`}
                    >
                        {t("Topbar.accountPage")}
                    </Link>
                    <Link
                        to="/partner"
                        className={`text-base font-semibold ${
                            location.pathname === '/partner' ? 'bg-[#1c78004d] px-[15px] rounded-[35px]' : ''
                        }`}
                    >
                        {t("Topbar.partnerPage")}
                    </Link>

                    <div className='text-base font-semibold text-[#1C7800]'>
                        <a href="https://login.qcgbrokertw.com/register">
                            {t("Topbar.register_button")}
                        </a>
                    </div>

                    <div className='text-base font-semibold text-[#1C7800]'>
                        <a href="https://login.qcgbrokertw.com/login">
                            {t("Topbar.login_Button")}
                        </a>
                    </div>
                </div>

                {/* Earphone and Lang icons on web version*/}
                <div className='hidden md:flex justify-center gap-[30px] cursor-pointer' onClick={() => handleButtonClick('service')}>
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
                            <Menu.Items className="absolute mt-5 w-[200px] h-[60px] rounded-[30px] bg-[#AAA] shadow-lg ring-1 ring-black/5 focus:outline-none text-xl font-semibold md:font-medium text-right left-1/2 transform -translate-x-1/2">
                                <div className="flex flex-row justify-center items-center gap-[30px] py-5 px-9">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                className={`${
                                                    active ? 'bg-violet-500 text-white' : 'text-gray-900'
                                                } text-base `}
                                                onClick={() => toggleLanguage('en')}
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
                                                } text-base `}
                                                onClick={() => toggleLanguage('zh')}
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
                <div className='w-full flex flex-row justify-between md:justify-center md:gap-[130px] md:hidden space-y-1'>
                        {/* Language  component */}

                        <div className="flex items-center justify-center">
                            <button
                            type="button"
                            onClick={openLangModal}
                            className="rounded-md bg-black/20 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                            >
                            <Lang />
                            </button>
                        </div>

                        <Transition appear show={langIsOpen} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeLangModal}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-[#1a1b1dc2] opacity-100 " />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex items-center justify-center px-4 pb-4 pt-16 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="flex flex-col gap-5 w-130px transform overflow-hidden rounded-[5px] bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    
                                        <button onClick={() => toggleLanguage('en')}>
                                            <span className='text-xl font-semibold'>English</span>
                                        </button>
                                        <button onClick={() => toggleLanguage('zh')}>
                                            <span className='text-xl font-semibold'>中文</span>
                                        </button>
                                    </Dialog.Panel>
                                </Transition.Child>
                                </div>
                            </div>
                            </Dialog>
                        </Transition>
                        
                        <Link to="/privacy" className='w-[40px] h-[40px]'>
                            <img src={logo} alt="icon" className='h-full'/>
                        </Link>
                        
                        <div className="flex items-center justify-center">
                            <button
                            type="button"
                            onClick={openMenuModal}
                            className="rounded-md bg-black/20 text-sm font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                            >
                                <Menus/>
                            </button>
                        </div>

                        <Transition appear show={menuIsOpen} as={Fragment}>
                            <Dialog as="div" className="relative z-10" onClose={closeMenuModal}>
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <div className="fixed inset-0 bg-[#1a1b1dc2] opacity-100 " />
                            </Transition.Child>

                            <div className="fixed inset-0 overflow-y-auto">
                                <div className="flex items-center justify-center px-4 pb-4 pt-16 text-center">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <Dialog.Panel className="flex flex-col gap-5 w-170px transform overflow-hidden rounded-[5px] bg-white px-10 py-8 text-left align-middle shadow-xl transition-all">
                                    
                                        <Link
                                            to="/"
                                            className={`${
                                                location.pathname === '/' ? 'active' : ''
                                            }`}
                                        >
                                            <button
                                                className='text-black text-xl font-semibold text-center w-full'
                                                onClick={closeMenuModal}
                                            >
                                                {t("mobileTopbar.homePage")}
                                            </button>
                                        </Link>
                                        <Link
                                            to="/products"
                                            className={`${
                                                location.pathname === '/products' ? 'active' : ''
                                            }`}
                                        >
                                            <button
                                                className='text-black text-xl font-semibold text-center w-full'
                                                onClick={closeMenuModal}
                                            >
                                                {t("mobileTopbar.productsPage")}
                                            </button>
                                        </Link>
                                        <Link
                                            to="/account"
                                            className={`${
                                                location.pathname === '/account' ? 'active' : ''
                                            }`}
                                        >
                                            <button
                                                className='text-black text-xl font-semibold text-center w-full'
                                                onClick={closeMenuModal}
                                            >
                                                {t("mobileTopbar.accountPage")}
                                            </button>
                                        </Link>
                                        <Link
                                            to="/partner"
                                            className={`${
                                                location.pathname === '/partner' ? 'active' : ''
                                            }`}
                                        >
                                            <button
                                                className='text-black text-xl font-semibold text-center w-full'
                                                onClick={closeMenuModal}
                                            >
                                                {t("mobileTopbar.partnerPage")}
                                            </button>
                                        </Link>
                                        <button
                                            className='text-black text-xl font-semibold text-center w-full'
                                            onClick={() => handleButtonClick('service')}
                                        >
                                               {t("mobileTopbar.service_Button")}
                                        </button>
                                        <button
                                            className='text-black text-xl font-semibold text-primary'
                                            onClick={closeMenuModal}
                                        >
                                                <a href="https://login.qcgbrokertw.com/register">
                                                {t("mobileTopbar.register_button")}
                                            </a>
                                        </button>
                                        <button
                                            className='text-black text-xl font-semibold text-primary'
                                            onClick={closeMenuModal}
                                        >
                                                <a href="https://login.qcgbrokertw.com">
                                                {t("mobileTopbar.login_Button")}
                                            </a>
                                        </button>
                                    </Dialog.Panel>
                                </Transition.Child>
                                </div>
                            </div>
                            </Dialog>
                        </Transition>
                    </div>
            </div>
            <Modal open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton}/>
        </div></div>
    )
}

export default Topbar;