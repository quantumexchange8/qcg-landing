import React, { useState, useEffect } from 'react';
import SubmitEmail from './SubmitEmail';
import { useTranslation } from 'react-i18next';

export default function TabComponent({ selectedButton, onClose }) {
  const [, setSelectedTab] = useState(0);

  useEffect(() => {
    if (selectedButton === 'service') {
      setSelectedTab(0);
    }
  }, [selectedButton]);

  const { t } = useTranslation();

  return (
    <div className="w-full max-w-md flex flex-col gap-[30px] md:gap-10">
      <div className='flex flex-col items-center gap-0 md:gap-[10px]'>
        <div className="text-black text-center text-xl font-semibold text-[#1C7800] leading-normal">
          {t("Contact.header")}
        </div>

        <div className="text-black text-center text-sm md:text-base leading-normal w-full">
          {t("Contact.desc")}
        </div>
      </div>
      <SubmitEmail onClose={onClose}/>
    </div>
  );
}
