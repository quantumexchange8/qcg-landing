import React, { useState, useEffect, useContext } from 'react';
// import { Tab } from '@headlessui/react';
// import { Gmail, Telegram } from './Brand';
// import QRcode from '../Assets/Images/QRCode.png';
import SubmitEmail from './SubmitEmail';
import { LanguageContext } from "../LanguagesContext";

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ');
// }

export default function TabComponent({ selectedButton }) {
  const [, setSelectedTab] = useState(0);
  const { t} = useContext(LanguageContext);

  useEffect(() => {
    if (selectedButton === 'service') {
      setSelectedTab(0);
    }
  }, [selectedButton]);

  return (
    <div className="w-full max-w-md flex flex-col gap-[30px] md:gap-10">
      <div className='flex flex-col items-center gap-[10px]'>
        <div className="text-black text-center text-xl font-bold text-[#1C7800] leading-none">
          {t("Contact.header")}
        </div>

        <div className="text-black text-center text-sm md:text-base font-medium leading-none w-36 md:w-full">
          {t("Contact.desc")}
        </div>
      </div>
      <SubmitEmail />
    </div>
  );
}
