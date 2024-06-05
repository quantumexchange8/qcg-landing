import React, { useRef, useEffect, useState, useContext } from 'react';
import google from '../Assets/Images/googleplay.svg';
import apple from '../Assets/Images/apple.svg';
import { Window } from '../Components/Brand';
// import Currency_tradeData from '../Assets/Images/currenciesTradingData.png';
// import CFDs_tradeData from '../Assets/Images/CFDsTradingData.png';
import QCG_Logo from '../Assets/Images/QCG_Logo.svg';
import mobile_IOS_PS from '../Assets/Images/mobile_IOS_PS.svg';
import { LanguageContext } from "../LanguagesContext";

const Products = () => {
    const { t, language} = useContext(LanguageContext);
    const textRef = useRef(null);
    const [animate, setAnimate] = useState(false);
    const videoRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setAnimate(true);
              observer.disconnect();
            }
          },
          {
            
            threshold: 0,
          }
        );
    
        const currentRef = textRef.current; 
    
        if (currentRef) {
          observer.observe(currentRef);
        }

        const video = videoRef.current;
        const handleVideoEnded = () => {
            video.currentTime = 0;
            video.play();
          };
      
          video.addEventListener('ended', handleVideoEnded);

        return () => {
          if (currentRef) {
            observer.unobserve(currentRef);
          }
          
          video.removeEventListener('ended', handleVideoEnded);
        };
      }, []);

      useEffect(() => {
        const video = videoRef.current;
    
        const handleCanPlayThrough = () => {
          // Manually start the video playback once it has loaded sufficiently
          video.play();
        };
    
        video.addEventListener('canplaythrough', handleCanPlayThrough);
    
        return () => {
          video.removeEventListener('canplaythrough', handleCanPlayThrough);
        };
      }, []);

    return (
        <div className='mt-[60px] md:mt-0'>
            <div className='relative'>
                <video autoPlay loop playsInline muted preload='auto' ref={videoRef} className='w-full'>
                    <source src='/assets/videos/products.mp4' type='video/mp4'/>
                </video>

                <div className='absolute left-5 md:left-[100px] bottom-5 md:bottom-[100px] flex flex-col justify-center items-start gap-[50px]'>
                    <div className='flex flex-col gap-[15px] md:gap-5'>
                        <div className='text-white text-base md:text-5xl font-bold leading-none text-left'>
                            <div>{t("Products.productsVideoTitle")}</div>
                            <div>{t("Products.productsVideoTitle2")}</div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='text-white text-left leading-[1.20]'>
                                <div className={`${language === 'en' ? 'text-xs md:text-2xl font-semibold w-[307px] md:w-[600px]': 
                                                   language === 'zh' ? 'text-xs md:text-3xl font-medium md:font-semibold w-[230px] md:w-[850px]':  ''}`}>
                                        {t("Products.productsVideoDescription")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center'>
                <div className='max-w-[1000px] w-full mt-[100px] md:mt-[150px]'>
                    <div className='flex flex-col gap-[100px] md:gap-[150px] mb-[100px] md:mb-[150px]'>
                        <div className='flex flex-col gap-[100px] md:gap-[200px]'>
                            <div className='flex flex-col gap-[100px] md:gap-[150px]'>
                                <div className='hidden md:flex flex-col gap-[150px]'>
                                    <div className='flex flex-col gap-[30px]'>
                                        <div className='flex flex-col text-[#1C7800] text-center text-[64px] font-bold'>
                                            {t("Products.currencyTitle")}
                                        </div>
                                        <div className='text-[#444] text-[32px] font-medium leading-tight'>
                                            <div>{t("Products.currencyDescription")}</div>
                                            <div>{t("Products.currencyDescription2")}</div>
                                            <div>{t("Products.currencyDescription3")}</div>
                                        </div>
                                    </div>
                                    <div className='hidden md:flex flex-col gap-[30px]'>
                                        <div className='text-[#444] text-[32px] font-bold text-left'>
                                            <div className={`${language === 'en' ? 'font-bold md:w-[563px]': 
                                                                language === 'zh' ? 'font-bold md:w-[950px]':  ''}`}>
                                                {t("openTradingACC.openTradingACC_Title")}
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-[15px]'>
                                            <div className='flex gap-[10px]'>
                                                <img src={google} alt="google" />
                                                <img src={apple} alt="apple" />
                                                <Window/>
                                                <div className='w-[150px] bg-primary text-white rounded-md flex items-center justify-center text-base font-bold'>
                                                    <div className={`${language === 'en' ? 'font-bold md:w-[150px]': 
                                                                        language === 'zh' ? 'font-bold md:w-[950px]':  ''}`}>
                                                        {t("openTradingACC.liveACC_Title")}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='flex flex-col'>
                                                <div className='text-[#444] text-xl text-left'>
                                                    <div className={`${language === 'en' ? 'font-medium md:w-[563px]': 
                                                                    language === 'zh' ? ' font-normal md:w-[950px]':  ''}`}>
                                                        {t("openTradingACC.tradingAcc_Description")}
                                                    </div>
                                                </div>
                                                <div className='text-[#444] text-xl font-medium text-left'> 
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
                                        </div>
                                    </div>
                                </div>

                                {/* mobile version */}
                                <div className='flex flex-col gap-[100px] md:hidden mx-5'>
                                    <div className='flex flex-col gap-[10px] '>
                                        <div className='text-[#444] text-base md:text-3xl font-bold text-left'>
                                            {t("openTradingACC.openTradingACC_Title")}
                                        </div>
                                        <div className='flex flex-col gap-[30px] md:gap-[15px]'>
                                            <div className='flex gap-[20px] md:gap-[10px]'>
                                                <img src={mobile_IOS_PS} alt="IOS_PS" />
                                                <div className='w-[180px] md:w-[150px] bg-[#1C7800] text-white rounded-[5px] md:rounded-md flex items-center justify-center text-sm md:text-base font-bold'>
                                                    <div className={`${language === 'en' ? 'font-bold': 
                                                                    language === 'zh' ? 'font-bold':  ''}`}>
                                                        {t("openTradingACC.liveACC_Title")}
                                                    </div>
                                                </div>
                                            </div>
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
                                    <div className='flex flex-col gap-[20px]'>
                                        <div className='flex flex-col text-[#1C7800] text-center text-2xl font-bold'>
                                            {t("Products.currencyTitle")}
                                        </div>
                                        <div className='flex flex-col text-[#444] items-center leading-tight md:hidden'>
                                            <div className={`${language === 'en' ? 'text-sm font-medium w-[320px]': 
                                                                language === 'zh' ? 'text-base font-semibold w-[313px]':  ''}`}>
                                                {t("Products.currencyDescription")}
                                                {t("Products.currencyDescription2")}
                                                {t("Products.currencyDescription3")}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-[30px] md:gap-[50px] mx-5 md:mx-0'>
                                    <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                        <div className='text-[#1C7800] text-2xl md:text-5xl font-bold md:font-medium text-left'>
                                            {t("Products.c&pMetal_Title")}
                                        </div>
                                        <div className='text-[#444] text-base md:text-2xl text-left leading-tight'>
                                            <div className={`${language === 'en' ? 'font-medium md:font-normal md:w-[970px]': 
                                                                language === 'zh' ? 'font-medium md:font-normal md:w-[1000px]':  ''}`}>
                                                {t("Products.c&pMetal_Description")}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-[50px] md:gap-[66px]'>
                                        <div className='flex flex-col gap-[20px]'>
                                            <div className='hidden md:flex flex-col'>
                                                <table className="table-auto w-[100%] border-collapse text-center font-medium">
                                                    <thead>
                                                    <tr className=' bg-[#1C7800] text-[#fff] border-white text-base'>
                                                        <th className='h-[30px] border border-white'>{t("currenciesTable.symbolTitle")}</th>
                                                        <th className='h-[30px] border border-white'>{t("currenciesTable.descriptionsTitle")}</th>
                                                        <th className='h-[30px] border border-white'>{t("currenciesTable.minimumspreadTitle")}</th>
                                                        <th className='h-[30px] border border-white'>{t("currenciesTable.minimumtradesizeTitle")}</th>
                                                        <th className='h-[30px] border border-white'>{t("currenciesTable.maximumtradesizeTitle")}</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr className=' bg-[#ECFFE6] text-[14px]'>
                                                        <td className='h-[30px] border border-white'>AUDCAD</td>
                                                        <td className='h-[30px] border border-white'>Australian Dollar vs. Canadian Dollar</td>
                                                        <td className='h-[30px] border border-white'>1.6</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[14px]'>
                                                        <td className='h-[30px] border border-white'>AUDCHF</td>
                                                        <td className='h-[30px] border border-white'>Australian Dollar vs. Swiss Franc</td>
                                                        <td className='h-[30px] border border-white'>1.3</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>AUDJPY</td>
                                                        <td className='h-[30px] border border-white'>Australian Dollar vs. Japanese Yen</td>
                                                        <td className='h-[30px] border border-white'>1.4</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>AUDNZD</td>
                                                        <td className='h-[30px] border border-white'>Australian Dollar vs. New Zealand Dollar</td>
                                                        <td className='h-[30px] border border-white'>2.0</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>AUDUSD</td>
                                                        <td className='h-[30px] border border-white'>Australian Dollar vs. US Dollar</td>
                                                        <td className='h-[30px] border border-white'>1.2</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>100</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>CADCHF</td>
                                                        <td className='h-[30px] border border-white'>Canadian Dollar vs. Swiss Franc</td>
                                                        <td className='h-[30px] border border-white'>1.3</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>CADJPY</td>
                                                        <td className='h-[30px] border border-white'>Canadian Dollar vs. Japanese Yen</td>
                                                        <td className='h-[30px] border border-white'>1.4</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>CHFJPY</td>
                                                        <td className='h-[30px] border border-white'>Swiss Franc vs. Japanese Yen</td>
                                                        <td className='h-[30px] border border-white'>1.7</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>EURAUD</td>
                                                        <td className='h-[30px] border border-white'>Euro vs. Australian Dollar</td>
                                                        <td className='h-[30px] border border-white'>2.3</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>EURCAD</td>
                                                        <td className='h-[30px] border border-white'>Euro vs. Canadian Dollar</td>
                                                        <td className='h-[30px] border border-white'>2.3</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>EURCHF</td>
                                                        <td className='h-[30px] border border-white'>Euro vs. Swiss Franc</td>
                                                        <td className='h-[30px] border border-white'>1.9</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>EURGBP</td>
                                                        <td className='h-[30px] border border-white'>Euro vs. British Pound</td>
                                                        <td className='h-[30px] border border-white'>1.2</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>EURJPY</td>
                                                        <td className='h-[30px] border border-white'>Euro vs. Japanese Yen</td>
                                                        <td className='h-[30px] border border-white'>2.0</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>EURNZD</td>
                                                        <td className='h-[30px] border border-white'>Euro vs. New Zealand Dollar</td>
                                                        <td className='h-[30px] border border-white'>2.5</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>EURUSD</td>
                                                        <td className='h-[30px] border border-white'>Euro vs. US Dollar</td>
                                                        <td className='h-[30px] border border-white'>1.1</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>100</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>GBPAUD</td>
                                                        <td className='h-[30px] border border-white'>British Pound vs. Australian Dollar</td>
                                                        <td className='h-[30px] border border-white'>2.7</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>GBPCAD</td>
                                                        <td className='h-[30px] border border-white'>British Pound vs. Canadian Dollar</td>
                                                        <td className='h-[30px] border border-white'>2.7</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>GBPCHF</td>
                                                        <td className='h-[30px] border border-white'>British Pound vs. Swiss Franc</td>
                                                        <td className='h-[30px] border border-white'>2.1</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>GBPJPY</td>
                                                        <td className='h-[30px] border border-white'>British Pound vs. Japanese Yen</td>
                                                        <td className='h-[30px] border border-white'>2.4</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>GBPNZD</td>
                                                        <td className='h-[30px] border border-white'>British Pound vs. New Zealand Dollar</td>
                                                        <td className='h-[30px] border border-white'>2.9</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>GBPUSD</td>
                                                        <td className='h-[30px] border border-white'>British Pound vs. US Dollar</td>
                                                        <td className='h-[30px] border border-white'>1.4</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>NZDCAD</td>
                                                        <td className='h-[30px] border border-white'>New Zealand Dollar vs. Canadian Dollar</td>
                                                        <td className='h-[30px] border border-white'>1.5</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>NZDCHF</td>
                                                        <td className='h-[30px] border border-white'>New Zealand Dollar vs. Swiss Franc</td>
                                                        <td className='h-[30px] border border-white'>1.2</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>NZDJPY</td>
                                                        <td className='h-[30px] border border-white'>New Zealand Dollar vs. Japanese Yen</td>
                                                        <td className='h-[30px] border border-white'>1.3</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>NZDUSD</td>
                                                        <td className='h-[30px] border border-white'>New Zealand Dollar vs. US Dollar</td>
                                                        <td className='h-[30px] border border-white'>1.8</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>USDCAD</td>
                                                        <td className='h-[30px] border border-white'>US Dollar vs. Canadian Dollar</td>
                                                        <td className='h-[30px] border border-white'>2.2</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>100</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>USDCHF</td>
                                                        <td className='h-[30px] border border-white'>US Dollar vs. Swiss Franc</td>
                                                        <td className='h-[30px] border border-white'>1.6</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>100</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>USDJPY</td>
                                                        <td className='h-[30px] border border-white'>US Dollar vs. Japanese Yen</td>
                                                        <td className='h-[30px] border border-white'>1.2</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>100</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            {/* mobile version */}
                                            <div className='flex flex-col md:hidden'>
                                                <table className="table-auto w-[100%] border-collapse text-center font-medium">
                                                    <thead>
                                                    <tr className={`${language === 'en' ? 'bg-[#1C7800] text-[#fff] border-white text-[12px] font-medium': 
                                                                        language === 'zh' ? 'bg-[#1C7800] text-[#fff] border-white text-[12px] font-semibold':  ''}`}>
                                                        <th className='w-[87px] h-[50px] border-[2px] border-white'>{t("currenciesTable.symbolTitle")}</th>
                                                        <th className='w-[87px] h-[50px] border-[2px] border-white'>{t("currenciesTable.minimumspreadMobileTitle")}<br/>{t("currenciesTable.minimumspreadMobileTitle2")}</th>
                                                        <th className='w-[87px] h-[50px] border-[2px] border-white'>{t("currenciesTable.minimumtradesizeMobileTitle")}<br/>{t("currenciesTable.minimumtradesizeMobileTitle2")}</th>
                                                        <th className='w-[87px] h-[50px] border-[2px] border-white'>{t("currenciesTable.maximumtradesizeMobileTitle")}<br/>{t("currenciesTable.maximumtradesizeMobileTitle2")}</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody>
                                                    <tr className=' bg-[#ECFFE6] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>AUDCAD</td>
                                                        <td className='h-[30px] border-[2px] border-white'>1.6</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>AUDCHF</td>
                                                        <td className='h-[30px] border-[2px] border-white'>1.3</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>AUDJPY</td>
                                                        <td className='h-[30px] border-[2px] border-white'>1.4</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>AUDNZD</td>
                                                        <td className='h-[30px] border-[2px] border-white'>2.0</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>AUDUSD</td>
                                                        <td className='h-[30px] border-[2px] border-white'>1.2</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>100</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>CADCHF</td>
                                                        <td className='h-[30px] border-[2px] border-white'>1.3</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>CADJPY</td>
                                                        <td className='h-[30px] border-[2px] border-white'>1.4</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>CHFJPY</td>
                                                        <td className='h-[30px] border-[2px] border-white'>1.7</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>EURAUD</td>
                                                        <td className='h-[30px] border-[2px] border-white'>2.3</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>EURCAD</td>
                                                        <td className='h-[30px] border-[2px] border-white'>2.3</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>EURCHF</td>
                                                        <td className='h-[30px] border-[2px] border-white'>1.9</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>EURGBP</td>
                                                        <td className='h-[30px] border-[2px] border-white'>1.2</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>EURJPY</td>
                                                        <td className='h-[30px] border-[2px] border-white'>2.0</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>EURNZD</td>
                                                        <td className='h-[30px] border-[2px] border-white'>2.5</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>EURUSD</td>
                                                        <td className='h-[30px] border-[2px] border-white'>1.1</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>100</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>GBPAUD</td>
                                                        <td className='h-[30px] border-[2px] border-white'>2.7</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>GBPCAD</td>
                                                        <td className='h-[30px] border-[2px] border-white'>2.7</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>GBPCHF</td>
                                                        <td className='h-[30px] border-[2px] border-white'>2.1</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>GBPJPY</td>
                                                        <td className='h-[30px] border-[2px] border-white'>2.4</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>GBPNZD</td>
                                                        <td className='h-[30px] border-[2px] border-white'>2.9</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>GBPUSD</td>
                                                        <td className='h-[30px] border-[2px] border-white'>1.4</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>NZDCAD</td>
                                                        <td className='h-[30px] border-[2px] border-white'>1.5</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>NZDCHF</td>
                                                        <td className='h-[30px] border-[2px] border-white'>1.2</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>NZDJPY</td>
                                                        <td className='h-[30px] border-[2px] border-white'>1.3</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>NZDUSD</td>
                                                        <td className='h-[30px] border-[2px] border-white'>1.8</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>USDCAD</td>
                                                        <td className='h-[30px] border-[2px] border-white'>2.2</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>100</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>USDCHF</td>
                                                        <td className='h-[30px] border-[2px] border-white'>1.6</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>100</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>USDJPY</td>
                                                        <td className='h-[30px] border-[2px] border-white'>1.2</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>100</td>
                                                    </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>

                                        <div className='hidden md:flex flex-col'>
                                            <table className="table-auto w-[100%] border-collapse text-center font-medium">
                                                <thead>
                                                    <tr className=' bg-[#1C7800] text-[#fff] border-white text-[16px]'>
                                                        <th className='h-[30px] border border-white'>{t("currenciesTable.symbolTitle")}</th>
                                                        <th className='h-[30px] border border-white'>{t("currenciesTable.descriptionsTitle")}</th>
                                                        <th className='h-[30px] border border-white'>{t("currenciesTable.minimumspreadTitle")}</th>
                                                        <th className='h-[30px] border border-white'>{t("currenciesTable.minimumtradesizeTitle")}</th>
                                                        <th className='h-[30px] border border-white'>{t("currenciesTable.maximumtradesizeTitle")}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className=' bg-[#ECFFE6] text-[14px]'>
                                                        <td className='h-[30px] border border-white'>XAUUSD</td>
                                                        <td className='h-[30px] border border-white'>Gold vs. US Dollar</td>
                                                        <td className='h-[30px] border border-white'>23</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[14px]'>
                                                        <td className='h-[30px] border border-white'>XAUEUR</td>
                                                        <td className='h-[30px] border border-white'>Gold vs. Euro</td>
                                                        <td className='h-[30px] border border-white'>21</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>XAGUSD</td>
                                                        <td className='h-[30px] border border-white'>Silver vs. US Dollar</td>
                                                        <td className='h-[30px] border border-white'>109</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>20</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>XPDUSD</td>
                                                        <td className='h-[30px] border border-white'>Palladium</td>
                                                        <td className='h-[30px] border border-white'>31</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>10</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[14px]'>
                                                    <td className='h-[30px] border border-white'>XPTUSD</td>
                                                        <td className='h-[30px] border border-white'>Platinum</td>
                                                        <td className='h-[30px] border border-white'>35</td>
                                                        <td className='h-[30px] border border-white'>0.01</td>
                                                        <td className='h-[30px] border border-white'>10</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        {/* mobile version */}
                                        <div className='flex flex-col md:hidden' >
                                            <table className="table-auto w-[100%] border-collapse text-center font-medium md:hidden">
                                                <thead>
                                                    <tr className=' bg-[#1C7800] text-[#fff] border-white text-[12px]'>
                                                        <th className='w-[87px] h-[50px] border-[2px] border-white'>{t("currenciesTable.symbolTitle")}</th>
                                                        <th className='w-[87px] h-[50px] border-[2px] border-white'>{t("currenciesTable.minimumspreadMobileTitle")}<br/>{t("currenciesTable.minimumspreadMobileTitle2")}</th>
                                                        <th className='w-[87px] h-[50px] border-[2px] border-white'>{t("currenciesTable.minimumtradesizeMobileTitle")}<br/>{t("currenciesTable.minimumtradesizeMobileTitle2")}</th>
                                                        <th className='w-[87px] h-[50px] border-[2px] border-white'>{t("currenciesTable.maximumtradesizeMobileTitle")}<br/>{t("currenciesTable.maximumtradesizeMobileTitle2")}</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className=' bg-[#ECFFE6] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>XAUUSD</td>
                                                        <td className='h-[30px] border-[2px] border-white'>23</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>XAUEUR</td>
                                                        <td className='h-[30px] border-[2px] border-white'>21</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>50</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>XAGUSD</td>
                                                        <td className='h-[30px] border-[2px] border-white'>109</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>20</td>
                                                    </tr>
                                                    <tr className=' bg-[#FFF] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>XPDUSD</td>
                                                        <td className='h-[30px] border-[2px] border-white'>31</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>10</td>
                                                    </tr>
                                                    <tr className=' bg-[#ECFFE6] text-[12px]'>
                                                        <td className='h-[30px] border-[2px] border-white'>XPTUSD</td>
                                                        <td className='h-[30px] border-[2px] border-white'>35</td>
                                                        <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                        <td className='h-[30px] border-[2px] border-white'>10</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-[30px] md:gap-[50px] mx-5 md:mx-0'>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='text-[#1C7800] md:text-[#5CA346] text-2xl md:text-5xl font-bold md:font-medium text-left'>
                                        {t("Products.CFDsIndicesTitle")}
                                    </div>
                                    <div className='text-[#444] text-base md:text-2xl text-left leading-[1.20]'>
                                        <div className={`${language === 'en' ? 'font-medium md:font-normal md:w-[950px]': 
                                                            language === 'zh' ? 'font-medium md:font-normal md:w-[1000px]':  ''}`}>
                                            {t("Products.CFDsIndicesDescription")}
                                        </div>
                                    </div>
                                </div>
                                {/* <img src={CFDs_tradeData} alt="CFDsTradeData" /> */}
                                <div className='hidden md:flex flex-col'>
                                    <table className="table-auto w-[100%] border-collapse text-center font-medium">
                                        <thead>
                                            <tr className=' bg-[#1C7800] text-[#fff] border-white text-[16px]'>
                                                <th className='h-[30px] border border-white'>{t("currenciesTable.symbolTitle")}</th>
                                                <th className='h-[30px] border border-white'>{t("currenciesTable.descriptionsTitle")}</th>
                                                <th className='h-[30px] border border-white'>{t("currenciesTable.minimumspreadTitle")}</th>
                                                <th className='h-[30px] border border-white'>{t("currenciesTable.minimumtradesizeTitle")}</th>
                                                <th className='h-[30px] border border-white'>{t("currenciesTable.maximumtradesizeTitle")}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className=' bg-[#ECFFE6] text-[14px]'>
                                                <td className='h-[30px] border border-white'>#CHINA50</td>
                                                <td className='h-[30px] border border-white'>Spot China 50 (USD)</td>
                                                <td className='h-[30px] border border-white'>7.50</td>
                                                <td className='h-[30px] border border-white'>1</td>
                                                <td className='h-[30px] border border-white'>100</td>
                                            </tr>
                                            <tr className=' bg-[#FFF] text-[14px]'>
                                                <td className='h-[30px] border border-white'>#NIK225</td>
                                                <td className='h-[30px] border border-white'>Spot Japan 225 (JPY)</td>
                                                <td className='h-[30px] border border-white'>15.00</td>
                                                <td className='h-[30px] border border-white'>10</td>
                                                <td className='h-[30px] border border-white'>100</td>
                                            </tr>
                                            <tr className=' bg-[#ECFFE6] text-[14px]'>
                                            <td className='h-[30px] border border-white'>#DE40</td>
                                                <td className='h-[30px] border border-white'>Spot Germany 40 (EUR)</td>
                                                <td className='h-[30px] border border-white'>2.00</td>
                                                <td className='h-[30px] border border-white'>1</td>
                                                <td className='h-[30px] border border-white'>200</td>
                                            </tr>
                                            <tr className=' bg-[#FFF] text-[14px]'>
                                            <td className='h-[30px] border border-white'>#FR40</td>
                                                <td className='h-[30px] border border-white'>Spot France 40 (EUR)</td>
                                                <td className='h-[30px] border border-white'>1.60</td>
                                                <td className='h-[30px] border border-white'>1</td>
                                                <td className='h-[30px] border border-white'>200</td>
                                            </tr>
                                            <tr className=' bg-[#ECFFE6] text-[14px]'>
                                            <td className='h-[30px] border border-white'>#ES</td>
                                                <td className='h-[30px] border border-white'>Spot Spain 35 (EUR)</td>
                                                <td className='h-[30px] border border-white'>5.20</td>
                                                <td className='h-[30px] border border-white'>1</td>
                                                <td className='h-[30px] border border-white'>200</td>
                                            </tr>
                                            <tr className=' bg-[#FFF] text-[14px]'>
                                            <td className='h-[30px] border border-white'>#CH</td>
                                                <td className='h-[30px] border border-white'>Spot Switzerland 20 (CHF)</td>
                                                <td className='h-[30px] border border-white'>3.14</td>
                                                <td className='h-[30px] border border-white'>1</td>
                                                <td className='h-[30px] border border-white'>100</td>
                                            </tr>
                                            <tr className=' bg-[#ECFFE6] text-[14px]'>
                                            <td className='h-[30px] border border-white'>#US500</td>
                                                <td className='h-[30px] border border-white'>Spot US 500 (USD)</td>
                                                <td className='h-[30px] border border-white'>0.65</td>
                                                <td className='h-[30px] border border-white'>1</td>
                                                <td className='h-[30px] border border-white'>200</td>
                                            </tr>
                                            <tr className=' bg-[#FFF] text-[14px]'>
                                            <td className='h-[30px] border border-white'>#NAS100</td>
                                                <td className='h-[30px] border border-white'>Spot US Tech 100 (USD)</td>
                                                <td className='h-[30px] border border-white'>1.70</td>
                                                <td className='h-[30px] border border-white'>1</td>
                                                <td className='h-[30px] border border-white'>200</td>
                                            </tr>
                                            <tr className=' bg-[#ECFFE6] text-[14px]'>
                                            <td className='h-[30px] border border-white'>#GB100</td>
                                                <td className='h-[30px] border border-white'>Spot UK 100 (GBP)</td>
                                                <td className='h-[30px] border border-white'>1.60</td>
                                                <td className='h-[30px] border border-white'>1</td>
                                                <td className='h-[30px] border border-white'>200</td>
                                            </tr>
                                            <tr className=' bg-[#FFF] text-[14px]'>
                                            <td className='h-[30px] border border-white'>#EU50</td>
                                                <td className='h-[30px] border border-white'>Spot EU Stocks 50 (EUR)</td>
                                                <td className='h-[30px] border border-white'>2.10</td>
                                                <td className='h-[30px] border border-white'>1</td>
                                                <td className='h-[30px] border border-white'>200</td>
                                            </tr>
                                            <tr className=' bg-[#ECFFE6] text-[14px]'>
                                            <td className='h-[30px] border border-white'>#US30</td>
                                                <td className='h-[30px] border border-white'>Spot US 30 (USD)</td>
                                                <td className='h-[30px] border border-white'>3.20</td>
                                                <td className='h-[30px] border border-white'>1</td>
                                                <td className='h-[30px] border border-white'>200</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* mobile version */}
                                <div className='flex flex-col md:hidden'>
                                    <table className="table-auto w-[100%] border-collapse text-center font-medium">
                                        <thead>
                                            <tr className=' bg-[#1C7800] text-[#fff] border-white text-[12px]'>
                                                <th className='w-[87px] h-[50px] border border-white'>{t("currenciesTable.symbolTitle")}</th>
                                                <th className='w-[87px] h-[50px] border border-white'>{t("currenciesTable.minimumspreadMobileTitle")}<br/>{t("currenciesTable.minimumspreadMobileTitle2")}</th>
                                                <th className='w-[87px] h-[50px] border border-white'>{t("currenciesTable.minimumtradesizeMobileTitle")}<br/>{t("currenciesTable.minimumtradesizeMobileTitle2")}</th>
                                                <th className='w-[87px] h-[50px] border border-white'>{t("currenciesTable.maximumtradesizeMobileTitle")}<br/>{t("currenciesTable.maximumtradesizeMobileTitle2")}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className=' bg-[#ECFFE6] text-[12px]'>
                                                <td className='h-[30px] border border-white'>#CHINA50</td>
                                                <td className='h-[30px] border border-white'>7.50</td>
                                                <td className='h-[30px] border border-white'>1</td>
                                                <td className='h-[30px] border border-white'>100</td>
                                            </tr>
                                            <tr className=' bg-[#FFF] text-[12px]'>
                                                <td className='h-[30px] border border-white'>#NIK225</td>
                                                <td className='h-[30px] border border-white'>15.00</td>
                                                <td className='h-[30px] border border-white'>10</td>
                                                <td className='h-[30px] border border-white'>100</td>
                                            </tr>
                                            <tr className=' bg-[#ECFFE6] text-[12px]'>
                                            <td className='h-[30px] border border-white'>#DE40</td>
                                                <td className='h-[30px] border border-white'>2.00</td>
                                                <td className='h-[30px] border border-white'>1</td>
                                                <td className='h-[30px] border border-white'>200</td>
                                            </tr>
                                            <tr className=' bg-[#FFF] text-[12px]'>
                                            <td className='h-[30px] border border-white'>#FR40</td>
                                                <td className='h-[30px] border border-white'>1.60</td>
                                                <td className='h-[30px] border border-white'>1</td>
                                                <td className='h-[30px] border border-white'>200</td>
                                            </tr>
                                            <tr className=' bg-[#ECFFE6] text-[12px]'>
                                            <td className='h-[30px] border border-white'>#ES</td>
                                                <td className='h-[30px] border border-white'>5.20</td>
                                                <td className='h-[30px] border border-white'>1</td>
                                                <td className='h-[30px] border border-white'>200</td>
                                            </tr>
                                            <tr className=' bg-[#FFF] text-[12px]'>
                                            <td className='h-[30px] border border-white'>#CH</td>
                                                <td className='h-[30px] border border-white'>3.14</td>
                                                <td className='h-[30px] border border-white'>1</td>
                                                <td className='h-[30px] border border-white'>100</td>
                                            </tr>
                                            <tr className=' bg-[#ECFFE6] text-[12px]'>
                                            <td className='h-[30px] border border-white'>#US500</td>
                                                <td className='h-[30px] border border-white'>0.65</td>
                                                <td className='h-[30px] border border-white'>1</td>
                                                <td className='h-[30px] border border-white'>200</td>
                                            </tr>
                                            <tr className=' bg-[#FFF] text-[12px]'>
                                            <td className='h-[30px] border border-white'>#NAS100</td>
                                                <td className='h-[30px] border border-white'>1.70</td>
                                                <td className='h-[30px] border border-white'>1</td>
                                                <td className='h-[30px] border border-white'>200</td>
                                            </tr>
                                            <tr className=' bg-[#ECFFE6] text-[12px]'>
                                            <td className='h-[30px] border border-white'>#GB100</td>
                                                <td className='h-[30px] border border-white'>1.60</td>
                                                <td className='h-[30px] border border-white'>1</td>
                                                <td className='h-[30px] border border-white'>200</td>
                                            </tr>
                                            <tr className=' bg-[#FFF] text-[12px]'>
                                            <td className='h-[30px] border border-white'>#EU50</td>
                                                <td className='h-[30px] border border-white'>2.10</td>
                                                <td className='h-[30px] border border-white'>1</td>
                                                <td className='h-[30px] border border-white'>200</td>
                                            </tr>
                                            <tr className=' bg-[#ECFFE6] text-[12px]'>
                                            <td className='h-[30px] border border-white'>#US30</td>
                                                <td className='h-[30px] border border-white'>3.20</td>
                                                <td className='h-[30px] border border-white'>1</td>
                                                <td className='h-[30px] border border-white'>200</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[150px] md:gap-[300px]'>
                            <div className='flex flex-col gap-[100px]'>
                                <div className='flex flex-col gap-[10px] md:gap-[30px] mx-5 md:mx-0'>
                                    <div className='text-[#1C7800] md:text-[#5CA346] text-2xl md:text-5xl font-bold md:font-medium text-left'>
                                        {t("Products.stopoutlevel_Title")}
                                    </div>
                                    <div className='flex flex-col text-[#444] text-base md:text-2xl text-left gap-8'>
                                        <div className='leading-[1.20]'>
                                            <div className={`${language === 'en' ? 'font-medium md:font-normal md:w-[930px]': 
                                                            language === 'zh' ? 'font-medium md:font-normal md:w-[1000px]':  ''}`}>
                                                {t("Products.stopoutlevel_Description")}
                                            </div>
                                        </div>
                                        <div className='leading-[1.20]'>
                                            <div className={`${language === 'en' ? 'font-medium md:font-normal md:w-[910px]': 
                                                            language === 'zh' ? 'font-medium md:font-normal md:w-[985px]':  ''}`}>
                                                {t("Products.stopoutlevel_Description2")}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-[10px] md:gap-[30px] mx-5 md:mx-0'>
                                    <div className='text-[#1C7800] md:text-[#5CA346] text-2xl md:text-5xl font-bold md:font-medium text-left'>
                                        {t("Products.riskWarning_Title")}
                                    </div>
                                    <div className='flex flex-col text-[#444] text-base md:text-2xl text-left gap-5 md:gap-8'>
                                        <div className={`${language === 'en' ? 'font-medium md:font-normal leading-[1.20] md:w-[920px]': 
                                                            language === 'zh' ? 'font-medium md:font-normal leading-[1.20] md:w-[1000px]':  ''}`}>
                                            {t("Products.riskWarning_Description")}
                                        </div>
                                        <div className={`${language === 'en' ? 'font-medium md:font-normal leading-[1.20] md:w-[930px]': 
                                                            language === 'zh' ? 'font-medium md:font-normal leading-[1.20] md:w-[1000px]':  ''}`}>
                                            {t("Products.riskWarning_Description2")}
                                        </div>
                                        <div className={`${language === 'en' ? 'font-medium md:font-normal leading-[1.20] md:w-[930px]': 
                                                            language === 'zh' ? 'font-medium md:font-normal leading-[1.20] md:w-[1000px]':  ''}`}>
                                            {t("Products.riskWarning_Description3")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                    

                            <img src={QCG_Logo} alt="QCG Logo" className='w-[300px] md:w-[866px] self-center'/>

                            <div className='flex flex-col gap-[20px] md:gap-[30px] text-left mx-5 md:mx-0'>
                                <div className='text-[#1C7800] md:text-[#5CA346] text-2xl md:text-5xl font-bold md:font-medium text-left'>
                                    {t("Products.Disclaimer.disclaimerTitle")}
                                </div>
                                <div className='flex flex-col gap-6 md:gap-8'>
                                    <div className='text-[#444] text-base md:text-2xl font-bold'>
                                        {t("Products.Disclaimer.disclaimerDescription")}
                                    </div>
                                    <ol className='list-decimal text-[#444] font-normal text-base md:text-2xl mx-5 space-y-6'>
                                        <li className={`${language === 'en' ? 'font-normal leading-[1.20] md:w-[890px]': 
                                                        language === 'zh' ? ' font-normal leading-[1.20] md:w-[950px]':  ''}`}> 
                                                        <span className='font-semibold'>{t("Products.Disclaimer.disclaimerSubtitle1")}</span>
                                            {t("Products.Disclaimer.disclaimerSubtitle1Description")}
                                        </li>
                                        <li className={`${language === 'en' ? 'font-normal leading-[1.20] md:w-[890px]': 
                                                        language === 'zh' ? ' font-normal leading-[1.20] md:w-[950px]':  ''}`}> 
                                                        <span className='font-semibold'>{t("Products.Disclaimer.disclaimerSubtitle2")}</span>
                                            {t("Products.Disclaimer.disclaimerSubtitle2Description")}
                                        </li>
                                        <li className={`${language === 'en' ? 'font-normal leading-[1.20] md:w-[890px]': 
                                                        language === 'zh' ? ' font-normal leading-[1.20] md:w-[970px]':  ''}`}> 
                                                        <span className='font-semibold'>{t("Products.Disclaimer.disclaimerSubtitle3")}</span>
                                            {t("Products.Disclaimer.disclaimerSubtitle3Description")}
                                        </li>
                                        <li className={`${language === 'en' ? 'font-normal leading-[1.20] md:w-[890px]': 
                                                        language === 'zh' ? ' font-normal leading-[1.20] md:w-[970px]':  ''}`}> 
                                                        <span className='font-semibold'>{t("Products.Disclaimer.disclaimerSubtitle4")}</span>
                                            {t("Products.Disclaimer.disclaimerSubtitle4Description")}
                                        </li>
                                        <li className={`${language === 'en' ? 'font-normal leading-[1.20] md:w-[890px]': 
                                                        language === 'zh' ? ' font-normal leading-[1.20] md:w-[950px]':  ''}`}> 
                                                        <span className='font-semibold'>{t("Products.Disclaimer.disclaimerSubtitle5")}</span>
                                            {t("Products.Disclaimer.disclaimerSubtitle5Description")}
                                        </li>
                                        <li className={`${language === 'en' ? 'font-normal leading-[1.20] md:w-[890px]': 
                                                        language === 'zh' ? ' font-normal leading-[1.20] md:w-[950px]':  ''}`}> 
                                                        <span className='font-semibold'>{t("Products.Disclaimer.disclaimerSubtitle6")}</span>
                                            {t("Products.Disclaimer.disclaimerSubtitle6Description")}
                                        </li>
                                        <li className={`${language === 'en' ? 'font-normal leading-[1.20] md:w-[890px]': 
                                                        language === 'zh' ? ' font-normal leading-[1.20] md:w-[950px]':  ''}`}> 
                                                        <span className='font-semibold'>{t("Products.Disclaimer.disclaimerSubtitle7")}</span>
                                            {t("Products.Disclaimer.disclaimerSubtitle7Description")}
                                        </li>
                                        <li className={`${language === 'en' ? 'font-normal leading-[1.20] md:w-[890px]': 
                                                        language === 'zh' ? ' font-normal leading-[1.20] md:w-[950px]':  ''}`}> 
                                                        <span className='font-semibold'>{t("Products.Disclaimer.disclaimerSubtitle8")}</span>
                                            {t("Products.Disclaimer.disclaimerSubtitle8Description")}
                                        </li>
                                    </ol>
                                    <div className='leading-[1.20] text-[#444] text-base md:text-2xl'>
                                        <div className={`${language === 'en' ? 'font-semibold md:font-normal leading-[1.20] md:w-[930px]': 
                                                        language === 'zh' ? 'font-semibold md:font-normal leading-[1.20] md:w-[1000px]':  ''}`}>
                                            {t("Products.Disclaimer.disclaimerReminder")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[10px] md:gap-[30px] mx-5 md:mx-0'>
                            <div className='text-[#444] text-base md:text-3xl font-bold text-left'>
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
                                    <div className='text-[#444] text-xl font-medium text-left'> 
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
    )
}

export default Products;