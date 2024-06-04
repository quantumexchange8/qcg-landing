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
          <span>{t("TelegramForm.telegramFormDescription")}</span><br />
          <span>{t("TelegramForm.telegramFormDescription2")}</span><br />
          <span>{t("TelegramForm.telegramFormDescription3")}</span>
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
    <div className="w-full max-w-md flex flex-col gap-[30px] md:gap-[35px]">
      <div className='flex flex-col items-center gap-2'>
        <div className="text-black text-center text-[24px] md:text-[32px] font-bold text-[#1C7800]">
          {title}
        </div>

        <div className="text-black text-center text-[14px] md:text-base font-medium">
          {content}
        </div>
      </div>
      <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
        <Tab.List className="flex rounded-xl bg-[#CCC] p-1 w-[300px] md:w-[410px] h-[48.3px] md:h-[66px]">
          <Tab
            className={({ selected }) =>
              classNames(
                'flex items-center gap-[10px] md:gap-4 w-full rounded-lg py-2 px-4 md:px-6 text-sm font-medium leading-5',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                selected ? 'bg-white text-black shadow' : 'text-[#888] hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            <Telegram /> <span className='text-sm md:text-xl font-bold'>Telegram</span>
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                'flex items-center gap-[10px] md:gap-4 w-full rounded-lg py-2 px-4 md:px-6 text-sm font-medium leading-5',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                selected ? 'bg-white text-black shadow' : 'text-[#888] hover:bg-white/[0.12] hover:text-white'
              )
            }
          >
            <Gmail /> <span className='text-sm md:text-xl font-bold'>Send Mail</span>
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white flex justify-center',
              'ring-white/60 ring-offset-2 ring-offset-blue-400'
            )}
          >
            <div className='hidden md:flex'>
              <img src={QRcode} alt="qr code" />
            </div>
            <div className='md:hidden w-[200px] h-[200px]'>
              <img src={QRcode} alt="qr code" />
            </div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white flex justify-center',
              'ring-white/60 ring-offset-2 ring-offset-blue-400'
            )}
          >
            <SubmitEmail />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
