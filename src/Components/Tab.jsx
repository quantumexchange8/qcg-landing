import React, { useState, useEffect, useContext } from 'react';
import { Tab } from '@headlessui/react';
import { Gmail, Telegram } from './Brand';
import QRcode from '../Assets/Images/QRCode.png';
import SubmitEmail from './SubmitEmail';
// import WhatsappMobile from '../Assets/Images/mobile_whatsapp.png'
import { useMediaQuery } from 'react-responsive'
// import { LanguageContext } from "../LanguagesContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function TabComponent({ selectedButton }) {
  // const {t} = useContext(LanguageContext);
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [selectedTab, setSelectedTab] = useState(0); // Initialize with WhatsApp tab (index 0)

  useEffect(() => {
    if (selectedButton === 'telegram') {
      setTitle("Instant chat now");
      setContent(isMobile ? <>
        <span>blablabla</span><br />
        <span>blablabla</span><br />
        <span>blablabla</span>
      </> :<>
      <span>Scan the QR code with your device's </span><br />
      <span>camera to chat with our customer</span><br />
      <span>service representative for more details.</span>
    </>);
      setSelectedTab(0); // Switch to WhatsApp tab
    } else if (selectedButton === 'gmail') {
      setTitle("Send us a message");
      setContent(isMobile ? <>
        <span>blablabla</span><br />
        <span>blablabla</span><br />
      </> : <>
      <span>Welcome to QCG </span><br />
      <span>contact us page</span><br />
    </>);
      setSelectedTab(1); // Switch to Gmail tab
    }
  }, [selectedButton, isMobile]);

  // Another useEffect to handle changes in selectedTab
useEffect(() => {
  if (selectedTab === 0) {
    setTitle("Instant chat now");
    setContent(isMobile ? <>
      <span>blablabla</span><br />
      <span>blablabla</span><br />
      <span>blablabla</span>
    </> :<>
    <span>Scan the QR code with your device's </span><br />
    <span>camera to chat with our customer</span><br />
    <span>service representative for more details.</span>
  </>);
  } else if (selectedTab === 1) {
    setTitle("Send us a message");
    setContent(isMobile ? <>
      <span>blablabla</span><br />
      <span>blablabla</span><br />
    </> : <>
    <span>Welcome to QCG </span><br />
    <span>contact us page</span><br />
  </>);
  }
}, [selectedTab, isMobile]);

  return (
    <div className="w-full max-w-md flex flex-col gap-[30px] md:gap-[35px]">
      <div className='flex flex-col items-center gap-2'>
        <div className="text-black text-center text-[24px] md:text-[32px] font-bold">
          {title}
        </div>

        <div className="text-black text-center text-[14px] md:text-base font-medium">
          {content}
        </div>
      </div>
      <Tab.Group selectedIndex={selectedTab}>
        <Tab.List className="flex rounded-xl bg-[#CCC] p-1 w-[300px] md:w-[410px] h-[48.3px] md:h-[66px]">
          <Tab
            className={({ selected }) =>
              classNames(
                'flex items-center gap-[10px] md:gap-4 w-full rounded-lg py-2 px-4 md:px-6 text-sm font-medium leading-5',
                'ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                selected ? 'bg-white text-black shadow' : 'text-[#888] hover:bg-white/[0.12] hover:text-white'
              )
            }
            onClick={() => setSelectedTab(0)}
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
            onClick={() => setSelectedTab(1)}
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
            {/* <div className='md:hidden'>
              <img src={WhatsappMobile} alt="qr code" />
            </div> */}
            
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              'rounded-xl bg-white flex justify-center',
              'ring-white/60 ring-offset-2 ring-offset-blue-400'
            )}
          >
            {selectedButton === 'telegram' && <SubmitEmail />}
            {selectedButton === 'gmail' && <SubmitEmail />}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
