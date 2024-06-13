import React, { useState, useEffect, useContext } from 'react';
import { Tab } from '@headlessui/react';
import { Gmail, Telegram } from './Brand';
import QRcode from '../Assets/Images/QRCode.png';
import SubmitEmail from './SubmitEmail';
import { useMediaQuery } from 'react-responsive';
import { LanguageContext } from "../LanguagesContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function TabComponent({ selectedButton }) {
  const { t } = useContext(LanguageContext);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedTab, setSelectedTab] = useState(0);

  // Function to update title and content based on selected tab
  const updateTitleAndContent = (tab) => {
    if (tab === 0) {
      setTitle(t("TelegramForm.telegramFormTitle"));
      setContent(
        <>
          <span>{t("TelegramForm.telegramFormDescription")}</span>
        </>
      );
    } else if (tab === 1) {
      setTitle(t("MailForm.mailFormTitle"));
      setContent(
        <>
          <span>{t("MailForm.mailFormDescription")}</span><br />
          <span>{t("MailForm.mailFormDescription2")}</span><br />
        </>
      );
    }
  };

  useEffect(() => {
    if (selectedButton === 'service') {
      setSelectedTab(0); // Switch to Telegram tab
      updateTitleAndContent(0);
    }
  }, [selectedButton]);

  useEffect(() => {
    updateTitleAndContent(selectedTab);
  }, [selectedTab, isMobile, t]); // Added t to dependencies to ensure it updates on language change

  return (
    <div className="w-full max-w-md flex flex-col gap-[30px] md:gap-10">
      <div className='flex flex-col items-center gap-[10px]'>
        <div className="text-black text-center text-xl font-bold text-[#1C7800] leading-none">
          {title}
        </div>

        <div className="text-black text-center text-sm md:text-base font-medium leading-none w-36 md:w-full">
          {content}
        </div>
      </div>
      <SubmitEmail />
    </div>
  );
}
