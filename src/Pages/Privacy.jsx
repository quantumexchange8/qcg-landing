import React, {useContext, useState } from 'react';
import home from '../Assets/Images/home.png';
import google from '../Assets/Images/googleplay.svg';
import apple from '../Assets/Images/apple.svg';
import { Window } from '../Components/Brand';
import mobile_IOS_PS from '../Assets/Images/mobile_IOS_PS.svg';
import { LanguageContext } from "../LanguagesContext";

const Privacy = () => {
    const { t, language} = useContext(LanguageContext);
    return (
        <div> 
            <div className='relative'>
                <img src={home} alt='home' className='w-full'/>

                <div className='absolute right-[23px] md:right-[100px] bottom-[20px] md:bottom-[100px] flex flex-col justify-center items-end gap-[15px] md:gap-[30px]'>
                    <div className='text-white text-base md:text-[50px] font-bold'>
                        {t("Privacy.privacyVideoTitle")}
                    </div>
                    <div className='flex flex-col text-white text-[12px] md:text-3xl text-right leading-[1.20]'>
                        <div className={`${language === 'en' ? 'font-medium md:font-semibold w-[297px] md:w-[730px]': 
                                           language === 'zh' ? 'font-medium md:font-semibold w-[280px] md:w-[720px]':  ''}`}>
                            {t("Privacy.privacyVideoDescription")}
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center'>
                <div className='max-w-[1000px] w-full mt-[100px] md:mt-[200px] mb-[100px]'>
                    <div className='flex flex-col mx-5 md:mx-0 gap-[100px] md:gap-[200px]'>
                        <div className='flex flex-col text-[#1C7800] font-bold text-center md:text-left'>
                            <div className={`${language === 'en' ? 'text-2xl md:text-5xl font-bold leading-[1.20] w-[333px] md:w-[900px]': 
                                               language === 'zh' ? 'text-xl md:text-5xl font-bold md:w-[950px]':  ''}`}>
                                    <div className='hidden md:flex flex-col'>{t("Privacy.QCG_BasicDescription")}</div>
                                    <div className='block md:hidden'>{t("Privacy.QCG_MobileBasicDescription")}</div>
                                    <div className='block md:hidden'>{t("Privacy.QCG_MobileBasicDescription2")}</div>
                                    <div className='block md:hidden'>{t("Privacy.QCG_MobileBasicDescription3")}</div>
                                    <div className='block md:hidden'>{t("Privacy.QCG_MobileBasicDescription4")}</div>
                                
                            </div>
                        </div>
                        <div className='flex flex-col gap-[50px] md:gap-[200px]'>
                            <div className='flex flex-col gap-[20px] md:gap-[50px]'>
                                <div className='flex flex-col text-[#1C7800] text-[32px] md:text-8xl text-left leading-[1.20]'>
                                    <div className={`${language === 'en' ? 'font-bold leading-[1.20] w-[207px] md:w-[900px]': 
                                                       language === 'zh' ? 'font-bold md:w-[950px]':  ''}`}>
                                        {t("Privacy.Crypto.crypto_Title")}
                                    </div>
                                </div>
                                
                                <div className='flex flex-col md:w-[930px] text-[#444] text-[14px] md:text-4xl text-left leading-[1.20]'>
                                    <div className={`${language === 'en' ? 'font-medium md:font-semibold md:w-[930px]': 
                                                       language === 'zh' ? 'font-medium md:font-semibold md:w-[1000px]':  ''}`}>
                                        {t("Privacy.Crypto.crypto_Description")}
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[50px] md:gap-[100px]'>
                                <div className='flex flex-col gap-[20px] md:gap-[30px]'>
                                    <div className='flex flex-col text-primary text-base md:text-[40px] text-left leading-none'>
                                        <div className={`${language === 'en' ? 'font-bold md:w-[930px]': 
                                                           language === 'zh' ? 'font-bold md:w-[950px]':  ''}`}>
                                            {t("Privacy.Crypto.cryptoSubtitle")}
                                        </div>
                                    </div>
                                    <div className='text-[#444] text-[14px] md:text-2xl text-left leading-[1.20]'>
                                        <div className={`${language === 'en' ? 'font-medium md:w-[950px]': 
                                                           language === 'zh' ? 'font-medium md:w-[1000px]':  ''}`}>
                                            {t("Privacy.Crypto.cryptoSubtitle_Description")}
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[20px] md:gap-[30px]'>
                                    <div className='flex flex-col text-primary text-base md:text-[40px] text-left leading-none'>
                                        <div className={`${language === 'en' ? 'font-bold md:w-[930px]': 
                                                           language === 'zh' ? 'font-bold md:w-[950px]':  ''}`}>
                                            {t("Privacy.Crypto.cryptoSubtitle2")}
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-6 text-[#444] text-sm md:text-2xl font-medium text-left leading-[1.20]'>
                                        <span>
                                            <div className={`${language === 'en' ? 'font-medium md:w-[960px]': 
                                                                language === 'zh' ? 'font-medium md:w-[1000px]':  ''}`}>
                                                {t("Privacy.Crypto.cryptoSubtitle2_Description")}
                                            </div>
                                        </span>
                                        <span>
                                            <div className={`${language === 'en' ? 'font-medium md:w-[960px]': 
                                                                language === 'zh' ? 'font-medium md:w-[950px]':  ''}`}>
                                                {t("Privacy.Crypto.cryptoSubtitle2_Description2")}
                                            </div>
                                        </span>
                                    </div>
                                </div>
                                
                                <div className='flex flex-col gap-[20px] md:gap-[30px]'>
                                    <div className='flex flex-col text-primary text-base md:text-[40px] font-bold text-left leading-none'>
                                        <div className={`${language === 'en' ? 'font-bold md:w-[930px]': 
                                                           language === 'zh' ? 'font-bold md:w-[950px]':  ''}`}>
                                            {t("Privacy.Crypto.cryptoSubtitle3")}
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-6 text-[#444] text-sm md:text-2xl text-left leading-[1.20]'>
                                        <div className={`${language === 'en' ? 'font-medium md:w-[930px]': 
                                                           language === 'zh' ? 'font-medium md:w-[1000px]':  ''}`}>
                                            {t("Privacy.Crypto.cryptoSubtitle3_Description")}
                                        </div>
                                        <div className={`${language === 'en' ? 'font-medium md:w-[960px]': 
                                                           language === 'zh' ? 'font-medium md:w-[970px]':  ''}`}>
                                            {t("Privacy.Crypto.cryptoSubtitle3_Description2")}
                                        </div>
                                        <div className={`${language === 'en' ? 'font-medium md:w-[930px]': 
                                                           language === 'zh' ? 'font-medium md:w-[1000px]':  ''}`}>
                                            {t("Privacy.Crypto.cryptoSubtitle3_Description3")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[20px] md:gap-[50px]'>
                            <div className='text-[32px] md:text-8xl text-primary font-bold text-left'>
                                <div className={`${language === 'en' ? 'font-bold md:w-[1000px]': 
                                                   language === 'zh' ? 'font-bold md:w-[950px]':  ''}`}>
                                    {t("Privacy.COC_Title")}
                                </div>
                            </div>
                            <div className='text-[#444] text-sm md:text-4xl text-left leading-[1.20]'>
                                <div className={`${language === 'en' ? 'font-medium md:font-semibold md:w-[940px]': 
                                                   language === 'zh' ? 'font-medium md:font-semibold md:w-[1000px]':  ''}`}>
                                    {t("Privacy.COC_Description")}
                                </div>
                            </div>
                        </div>
                        </div>
                        
                        

                        <div className='flex flex-col gap-[100px] md:gap-[150px]'>
                            <div className='flex flex-col gap-[100px] items-center'>
                                <div className='text-primary text-2xl md:text-5xl leading=[1.20]'>
                                    <div className={`${language === 'en' ? 'font-bold w-[318px] md:w-[1000px]': 
                                                       language === 'zh' ? 'font-bold w-[353px] md:w-[781px]':  ''}`}>
                                        <div className='hidden md:flex flex-col'>{t("Privacy.openAccountTitle")}</div>
                                        <div className='hidden md:flex flex-col'>{t("Privacy.openAccountTitle2")}</div>
                                        <div className='hidden md:flex flex-col'>{t("Privacy.openAccountTitle3")}</div>
                                        <div className='md:hidden'>{t("Privacy.openAccountMobileTitle")}</div>
                                        <div className='md:hidden'>{t("Privacy.openAccountMobileTitle2")}</div>
                                        <div className='md:hidden'>{t("Privacy.openAccountMobileTitle3")}</div>
                                    </div>
                                </div>
                                <div className='flex flex-wrap gap-5'>
                                    <div className='w-full flex flex-col border-2 border-[#1C7800] rounded-[10px]'>
                                        <div className='bg-[#ECFFE6] rounded-t-[10px] flex justify-center text-base md:text-2xl font-semibold text-primary py-5'>
                                            National Futures Association (NFA)
                                        </div>
                                        <div className='flex flex-col gap-6 py-[30px] md:py-[42px] pl-[26px] md:pl-[52px] pr-[26px] md:pr-[34px] text-[16px] md:text-2xl text-[#444] text-left font-medium md:font-normal leading-[1.20]'>
                                            <div>
                                                NFA is a non-profit organisation established by the United States government to 
                                                regulate and supervise futures traders and futures exchanges. NFA was 
                                                established under the Futures Exchange Act of 1974 and is authorised by the 
                                                Futures Trading Commission (CFTC).
                                            </div>
                                            <div>
                                                NFA's mission is to provide legal programs and services to protect the interests 
                                                of market participants. Besides, it helps organisational members ensure legal 
                                                liability.
                                            </div>
                                            <div>
                                                NFA's activities will be closely regulated by the Commodity Futures Trading 
                                                Commission. This committee plays an important role in regulating the US 
                                                commodity futures sector.
                                            </div>
                                            <div>
                                                Learn more about our NFA license <span className='text-[#0028FC] text-base md:text-2xl font-medium underline'>here.</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='grid grid-rows-2 md:grid-cols-2 gap-5'>
                                        <div className='flex flex-col border-2 border-[#1C7800] rounded-[10px]'>
                                            <div className='bg-[#ECFFE6] rounded-t-[10px] flex justify-center text-base md:text-2xl font-semibold text-primary py-5'>
                                                Privacy Policy
                                            </div>
                                            <div className='flex flex-col gap-6 py-[20px] md:py-[42px] px-[26px] md:px-[30px] text-base md:text-2xl text-[#444] text-left font-medium md:font-normal leading-[1.20]'>
                                                <span>
                                                    The document discloses the ways the 
                                                    company gathers, uses, discloses, 
                                                    and manages your personal 
                                                    information. 
                                                </span>
                                                <span className='text-[#0028FC] text-base md:text-2xl font-medium underline'>
                                                    More...
                                                </span>
                                            </div>
                                        </div>

                                        <div className='flex flex-col border-2 border-[#1C7800] rounded-[10px]'>
                                            <div className='bg-[#ECFFE6] rounded-t-[10px] flex justify-center text-base md:text-2xl font-semibold text-primary py-5'>
                                                Client Agreement
                                            </div>
                                            <div className='flex flex-col gap-6'>
                                                <span className='flex flex-col gap-6 py-[20px] md:py-[42px] px-[26px] md:px-[30px] text-base md:text-2xl text-[#444] text-left font-medium md:font-normal leading-[1.20]'>
                                                    Before you start working with QCG as 
                                                    a client or a partner, look through a set of agreements and accept their 
                                                    terms and conditions.
                                                </span>
                                            </div>
                                        </div>

                                        <div className='flex flex-col border-2 border-[#1C7800] rounded-[10px]'>
                                            <div className='bg-[#ECFFE6] rounded-t-[10px] flex justify-center text-base md:text-2xl font-semibold text-primary py-5'>
                                                Risk Disclosure Notice
                                            </div>
                                            <div className='flex flex-col gap-6'>
                                                <span className='flex flex-col gap-6 py-[20px] md:py-[42px] px-[26px] md:px-[30px] text-base md:text-2xl text-[#444] text-left font-medium md:font-normal leading-[1.20]'>
                                                    The essential document outlines 
                                                    potential financial risks, ensuring 
                                                    informed decisions by highlighting 
                                                    possible vulnerabilities in investments 
                                                    or activities.
                                                </span>
                                            </div>
                                        </div>

                                        <div className='flex flex-col border-2 border-[#1C7800] rounded-[10px]'>
                                            <div className='bg-[#ECFFE6] rounded-t-[10px] flex justify-center text-base md:text-2xl font-semibold text-primary py-5'>
                                                Risk Warning
                                            </div>
                                            <div className='flex flex-col gap-6'>
                                                <span className='flex flex-col gap-6 py-[20px] md:py-[42px] px-[26px] md:px-[30px] text-base md:text-2xl text-[#444] text-left font-medium md:font-normal leading-[1.20]'>
                                                    It thoroughly describes all possible 
                                                    risks that are typical for trading in 
                                                    financial markets and that should be 
                                                    clearly realised and taken into 
                                                    consideration by all investors.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                <div className='text-[#444] text-base md:text-3xl text-left'>
                                    <div className={`${language === 'en' ? 'font-bold md:w-[563px]': 
                                                       language === 'zh' ? 'font-bold md:w-[950px]':  ''}`}>
                                        {t("openTradingACC.openTradingACC_Title")}
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[30px] md:gap-[15px]'>
                                    <div className='flex gap-[20px] md:gap-[10px]'>
                                        <div className='hidden md:flex gap-[20px] md:gap-[10px]'>
                                            <img src={google} alt="google" />
                                            <img src={apple} alt="apple" />
                                            <Window/>
                                        </div>
                                        <div className='md:hidden'>
                                            <img src={mobile_IOS_PS} alt="IOS_PS" />
                                        </div>
                                        <div className='w-[180px] md:w-[150px] bg-[#1C7800] text-white rounded-[5px] md:rounded-md flex items-center justify-center text-sm md:text-base font-bold'>
                                            <div className={`${language === 'en' ? 'font-bold md:w-[150px]': 
                                                            language === 'zh' ? 'font-bold md:w-[950px]':  ''}`}>
                                                {t("openTradingACC.liveACC_Title")}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='hidden md:flex flex-col'>
                                        <div className='text-[#444] text-xl text-left'>
                                            <div className={`${language === 'en' ? 'font-medium md:w-[563px]': 
                                                               language === 'zh' ? ' font-normal md:w-[950px]':  ''}`}>
                                                {t("openTradingACC.tradingAcc_Description")}
                                            </div>
                                        </div>
                                        <div className='text-[#444] text-xl text-left'> 
                                            <div className={`${language === 'en' ? 'font-medium md:w-[1000px]': 
                                                               language === 'zh' ? 'font-normal md:w-[950px]':  ''}`}>
                                                              {t("openTradingACC.tradingAcc_Description2")}
                                                <span className={`${language === 'en' ? ' text-[#1C7800] font-medium': 
                                                                    language === 'zh' ? 'text-[#1C7800] font-medium':  ''}`}>
                                                    {t("openTradingACC.tradingAcc_Description3")}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col md:hidden'>
                                        <div className='text-[#444] text-base font-medium text-left leading-[1.20]'>
                                            {t("openTradingACC.tradingAcc_Description")}
                                            {t("openTradingACC.tradingAcc_Description2")}
                                            {language === 'en' ? (
                                                <span className='text-[#1C7800] font-medium leading-[1.20]'>
                                                    {t("openTradingACC.tradingAcc_Description3")}
                                                </span>
                                            ) : language === 'zh' ? (
                                                <div className='text-base text-primary font-medium leading-[1.20]'>
                                                    {t("openTradingACC.tradingAcc_Description3")}
                                                </div>
                                            ) : null}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Privacy;