import React, { useRef, useEffect, useState, useContext } from 'react';
import google from '../Assets/Images/googleplay.svg';
import apple from '../Assets/Images/apple.svg';
import iphone from '../Assets/Images/iphone.png';
import IpadScreenShot from '../Assets/Images/ipad-screenshot.png';
import { Window } from '../Components/Brand';
import { Built, InAppDeposit, AccountType, CurrencyPair, Partners } from '../Components/Outline';
import mobile_IOS_PS from '../Assets/Images/mobile_IOS_PS.svg';
import { LanguageContext } from "../LanguagesContext";

const Home = () => {
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
                    <source src='/assets/videos/home.mp4' type='video/mp4'/>
                </video>

                <div className='hidden md:flex flex-col absolute left-[100px] bottom-[100px] text-left gap-[50px]'>
                    <div className='flex flex-col gap-5'>
                        <div className='text-white text-9xl font-bold leading-none text-left'>
                            {t("Home.homeVideoTitle")}
                        </div>
                        <div className='flex flex-col'>
                            <div className='text-white text-2xl text-left'>
                                <div className={`${language === 'en' ? 'font-black md:w-[730px]': 
                                                   language === 'zh' ? 'font-black md:w-[720px]':  ''}`}>
                                    {t("Home.homeVideoTitle2")}
                                </div>
                            </div>
                            <div className='text-white text-xl text-left'>
                                <div className={`${language === 'en' ? 'font-medium md:w-[800px]': 
                                                   language === 'zh' ? 'font-semibold md:w-[720px]':  ''}`}>
                                    {t("Home.homeVideoDescription")}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[30px]'>
                        <div className='text-white text-[32px] leading-none text-left'>
                            <div className={`${language === 'en' ? 'font-bold md:w-[563px]': 
                                            language === 'zh' ? 'font-semibold md:w-[720px]':  ''}`}>
                                {t("openTradingACC.openTradingACC_Title")}
                            </div>
                        </div>
                        <div className='flex flex-col gap-[15px]'>
                            <div className='flex gap-[10px]'>
                                <div className='hidden md:flex gap-[10px]'>
                                    <img src={google} alt="google" />
                                    <img src={apple} alt="apple" />
                                    <Window/> 
                                </div>
                                <div className='w-[150px] bg-primary text-white rounded-md flex items-center justify-center text-base font-bold'>
                                    {t("openTradingACC.liveACC_Title")}
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-white text-xl text-left'>
                                    <div className={`${language === 'en' ? 'font-medium md:w-[700px]': 
                                                       language === 'zh' ? 'font-normal md:w-[720px]':  ''}`}>
                                        {t("openTradingACC.tradingAcc_Description")}
                                    </div>
                                </div>
                                <div className='text-white text-xl'>
                                    <div className={`${language === 'en' ? 'font-medium md:w-[700px]': 
                                                       language === 'zh' ? 'font-normal md:w-[720px]':  ''}`}>
                                        {t("openTradingACC.tradingAcc_Description2")}
                                        <span className='text-primary text-xl font-medium'> {t("openTradingACC.tradingAcc_Description3")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* MOBILE VERSION */}
                <div className='flex flex-col absolute left-5 bottom-5 text-left gap-0 md:gap-[50px] md:hidden'>
                    <div className='flex flex-col gap-[10px]'>
                        <div className='text-white text-4xl font-bold leading-none text-left'>
                            {t("Home.homeVideoTitle")}
                        </div>
                        <div className='flex flex-col gap-[10px]'>
                            <div className='text-white text-sm text-left font-black w-[200px] leading-[1.20]'>{t("Home.homeVideoTitle2")}</div>
                            <div className={`${language === 'en' ? 'text-white text-xs text-left font-medium w-[260px] leading-[1.20]': 
                                               language === 'zh' ? 'text-white text-xs text-left font-normal w-[190px] leading-[1.20]':  ''}`}>
                                {t("Home.homeVideoDescription")}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex flex-col gap-[10px] mt-[100px] md:hidden mx-5'>
                <div className='text-[#444] text-base leading-none font-bold text-left'>
                    {t("openTradingACC.openTradingACC_Title")}
                </div>
                <div className='flex flex-col gap-[30px]'>
                    <div className='flex gap-5'>
                        <div className='hidden md:flex gap-5'>
                            <img src={google} alt="google" />
                            <img src={apple} alt="apple" />
                            <Window/> 
                        </div>
                        <div className='md:hidden'>
                            <img src={mobile_IOS_PS} alt="IOS_PS" />
                        </div>
                        <div className='flex flex-col w-[180px] md:w-[150px] bg-primary text-white rounded-md justify-center text-sm font-bold'>
                            {t("openTradingACC.liveACC_Title")}
                        </div>
                    </div>
                    <div className='flex flex-col'>
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

            <div className='w-full flex flex-col items-center justify-center'>
                <div className='max-w-[1000px] w-full mt-[100px] md:mt-[200px]'>
                    <div className='flex flex-col gap-[100px] md:gap-[300px]'>
                        <div className='flex flex-col gap-[100px] md:gap-[200px] mx-5 md:mx-0'>
                            <div className='flex flex-col gap-[50px] items-center'>
                                <div className='flex flex-col gap-5'>
                                    <div className='flex flex-col text-primary text-2xl md:text-5xl items-center'>
                                        <div className={`${language === 'en' ? 'font-bold w-[270px] md:w-[550px]': 
                                                        language === 'zh' ? 'font-bold w-[180px] md:w-[1000px]':  ''}`}>
                                            {t("Home.QCGadvantage_Title")}
                                        </div>
                                    </div>
                                    <div className='hidden md:flex text-[#444 text-sm md:text-2xl font-medium leading-tight'>
                                        <div className={`${language === 'en' ? 'font-medium w-[1000px]': 
                                                           language === 'zh' ? 'font-medium w-[1000px]':  ''}`}>
                                            <div>{t("Home.QCGadvantage_Description")}</div>
                                            <div>{t("Home.QCGadvantage_Description2")}</div>
                                            <div>{t("Home.QCGadvantage_Description3")}</div>
                                            <div>{t("Home.QCGadvantage_Description4")}</div>
                                        </div>
                                    </div>
                                    <div className='text-[#444 font-medium leading-tight md:hidden'>
                                        <div className={`${language === 'en' ? 'text-sm font-medium w-[283px] leading-[1.20]': 
                                                           language === 'zh' ? 'text-base font-semibold w-[300px] leading-[1.20]':  ''}`}>
                                            <div>{t("Home.QCGadvantage_mobileDescription")}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='hidden md:flex bg-primary-50 rounded-[20px] justify-center gap-5 md:py-[75px] md:px-[95px]'>
                                    <div className='bg-white flex flex-col items-center gap-5 rounded-[20px] w-[395px] md:py-[40px] md:px-[90px] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
                                        <Built/>
                                        <div className='flex flex-col text-xl'>
                                            <div className={`${language === 'en' ? 'font-bold w-[550px]': 
                                                               language === 'zh' ? 'font-bold w-[1000px]':  ''}`}>
                                                <div>{t("Home.copyTradingSystemTitle")}</div>
                                                <div>{t("Home.copyTradingSystemTitle2")}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='bg-white flex flex-col items-center gap-4 rounded-[20px] w-[395px] md:py-[40px] md:px-[52px] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
                                        <InAppDeposit/>
                                        <div className='flex flex-col text-xl'>
                                            <div className={`${language === 'en' ? 'font-bold w-[550px]': 
                                                               language === 'zh' ? 'font-bold w-[1000px]':  ''}`}>
                                                <div>{t("Home.appDepositTitle")}</div>
                                                <div>{t("Home.appDepositTitle2")}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* mobile version */}
                                <div className='bg-primary-50 rounded-[20px] flex flex-col items-center w-[353px] gap-[30px] py-[20px] md:hidden'>
                                    <div className='bg-white flex flex-col items-center rounded-[20px] py-[30px] gap-5 w-[313px] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
                                        <Built/>
                                        <div className='flex flex-col text-base font-bold leading-[1.20]'>
                                            <div>{t("Home.copyTradingSystemMobileTitle")}</div>
                                            <div>{t("Home.copyTradingSystemMobileTitle2")}</div>
                                        </div>
                                    </div>
                                    <div className='bg-white flex flex-col items-center rounded-[20px] py-[30px] gap-5 w-[313px] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
                                        <InAppDeposit/>
                                        <div className='flex flex-col text-base font-bold leading-[1.20]'>
                                            <div>{t("Home.appDepositMobileTitle")}</div>
                                            <div>{t("Home.appDepositMobileTitle2")}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[30px] md:gap-[100px]'>
                                <div className='flex flex-col items-center gap-[20px] md:gap-[30px]'>
                                    <div className='w-[110px] md:w-[150px] border border-primary py-[7px] md:py-[10px] text-base md:text-xl text-primary font-normal text-center'>
                                        {t("Home.Platform.platformButton")}
                                    </div>
                                    <div className='flex flex-col'>
                                        <span
                                            ref={textRef}
                                            className={`text-[#444] text-[30px] md:text-[80px] font-extrabold leading-[1.20] ${
                                            animate ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'
                                            }`}
                                        >
                                            {t("Home.Platform.platformTitle")}
                                        </span>
                                        <span
                                            className={`text-primary text-[30px] md:text-[80px] font-extrabold leading-[1.20] ${
                                            animate ? 'opacity-100 transition-opacity duration-1000 delay-500' : 'opacity-0'
                                            }`}
                                        >
                                            {t("Home.Platform.platformTitle2")}
                                        </span>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[30px] items-center'>
                                    <div>
                                        <img src={IpadScreenShot} alt="ipad-screenshot"/>
                                    </div>
                                    <div className='hidden md:flex text-[#444] text-[32px] font-semibold'>
                                        {t("Home.Platform.platformDescription")}
                                    </div>
                                    <div className='text-[#444] text-base md:hidden leading-[1.20]'>
                                        <div className={`${language === 'en' ? 'font-medium': 
                                                           language === 'zh' ? 'font-semibold':  ''}`}>
                                            <div>{t("Home.Platform.platformMobileDescription")}</div>
                                            <div>{t("Home.Platform.platformMobileDescription2")}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[100px] md:gap-[300px]'>
                            <div className='flex flex-col gap-[50px]'>
                                <div className='hidden md:flex gap-[50px]'>
                                    <div className='flex flex-col'>
                                        <video autoPlay loop muted preload='auto' ref={videoRef} className='object-cover w-[500px] h-[500px]'>
                                            <source src="/assets/videos/trading.mp4" type='video/mp4'/>
                                        </video>
                                    </div>
                                    <div className='flex flex-col gap-[30px]'>
                                        <div className='w-[130px] h-[44px] border border-primary py-[6px] px-[32px] text-xl text-primary'>
                                            {t("Home.Pricing.pricingButton")}
                                        </div>
                                        <div className='flex flex-col text-primary text-6xl font-bold text-left'>
                                            <div>{t("Home.Pricing.pricingTitle")}</div>
                                            <div>{t("Home.Pricing.pricingTitle2")}</div>
                                            <div>{t("Home.Pricing.pricingTitle3")}</div>
                                            <div>{t("Home.Pricing.pricingTitle4")}</div>
                                        </div>
                                    </div>
                                </div>

                                
                                <div className='flex gap-[50px] md:hidden'>{/* mobile version */}
                                    <div className='flex flex-col gap-[30px] items-center'>
                                        <div className='flex flex-col gap-5 items-center mx-5'>
                                            <div className='flex flex-col w-[100px] h-[30px] border border-primary py-[2px] text-base font-normal text-primary text-center'>
                                                {t("Home.Pricing.pricingButton")}
                                            </div>
                                            <div className='flex flex-col text-primary text-[30px] text-center leading-[1.20] md:hidden'>
                                                <div className={`${language === 'en' ? 'font-extrabold w-[353px]': 
                                                                   language === 'zh' ? 'font-extrabold w-[220px]':  ''}`}>
                                                    {t("Home.Pricing.pricingTitle")}{t("Home.Pricing.pricingTitle2")}{t("Home.Pricing.pricingTitle3")}{t("Home.Pricing.pricingTitle4")}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col md:hidden'>
                                            <video autoPlay loop muted preload='auto' ref={videoRef} className='w-full'>
                                                <source src="/assets/videos/trading.mp4" type='video/mp4'/>
                                            </video>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='flex flex-col gap-[30px] md:gap-10 mx-5 md:mx-0'>
                                    <div className='hidden md:flex justify-center gap-[50px]'>
                                        <div className='md:w-[300px] flex flex-col gap-[30px] rounded-[20px] items-center md:py-12 md:px-[78px] bg-primary-50 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
                                            <CurrencyPair/>
                                            <div className='text-[#444] text-xl font-bold'>
                                                {t("Home.Pricing.pricingSubtitle")}
                                            </div>
                                        </div>
                                        <div className='md:w-[300px] flex flex-col gap-[30px] rounded-[20px] items-center md:py-12 md:px-[78px] bg-primary-50 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
                                            <AccountType/>
                                            <div className='text-[#444] text-xl font-bold'>
                                                {t("Home.Pricing.pricingSubtitle2")}
                                            </div>
                                        </div>
                                        <div className='md:w-[300px] flex flex-col gap-[30px] rounded-[20px] items-center md:py-12 md:px-[78px] bg-primary-50 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
                                            <Partners/>
                                            <div className='text-[#444] text-xl font-bold'>
                                                {t("Home.Pricing.pricingSubtitle3")}
                                            </div>
                                        </div>
                                    </div>
                                    {/* mobile version */}
                                    <div className='flex flex-col justify-center gap-[30px] md:gap-[50px] md:hidden items-center'>
                                        <div className='w-[313px] flex flex-col gap-[20px] rounded-[20px] items-center py-[25px] px-[99px] bg-primary-50 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
                                            <CurrencyPair/>
                                            <div className='text-[#444] text-base font-bold'>
                                                {t("Home.Pricing.pricingSubtitle")}
                                            </div>
                                        </div>
                                        <div className='w-[313px] flex flex-col gap-[20px] rounded-[20px] items-center py-[25px] px-[99px] bg-primary-50 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
                                            <AccountType/>
                                            <div className='text-[#444] text-base font-bold'>
                                                {t("Home.Pricing.pricingSubtitle2")}
                                            </div>
                                        </div>
                                        <div className='w-[313px] flex flex-col gap-[20px] rounded-[20px] items-center py-[25px] px-[99px] bg-primary-50 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
                                            <Partners/>
                                            <div className='text-[#444] text-base font-bold'>
                                                {t("Home.Pricing.pricingSubtitle3")}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-[10px]'>
                                        <span className='text-[#444] text-base md:text-[32px] font-medium md:font-semibold leading-[1.20]'>
                                            {t("Home.Pricing.pricingDescription")}
                                        </span>
                                        <span className='text-primary text-base md:text-2xl font-medium leading-[1.20]'>
                                            {t("Home.Pricing.pricingDescription2")}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='flex flex-col gap-[50px]'>
                                <div className='hidden md:flex gap-[80px]'>
                                    <div className='flex flex-col gap-[30px]'>
                                        <div className='w-[130px] border border-primary py-[10px] text-xl text-primary'>
                                            {t("Home.Securities.securitiesButton")}
                                        </div>
                                        <div className='flex flex-col gap-[50px]'>
                                                <div className='flex flex-col text-primary text-[40px] font-bold text-left leading-none'>
                                                <div>{t("Home.Securities.securitiesTitle")}</div>
                                                <div>{t("Home.Securities.securitiesTitle2")}</div>
                                                <div>{t("Home.Securities.securitiesTitle3")}</div>
                                            </div>
                                            <div className='text-[#444] text-2xl font-medium text-left md:w-[420px]'>
                                                <div>{t("Home.Securities.securitiesDescription")}</div>
                                                <div>{t("Home.Securities.securitiesDescription2")}</div>
                                                <div>{t("Home.Securities.securitiesDescription3")}</div>
                                                <div>{t("Home.Securities.securitiesDescription4")}</div>
                                                <div>{t("Home.Securities.securitiesDescription5")}</div>
                                                <div>{t("Home.Securities.securitiesDescription6")}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <video autoPlay loop muted preload='auto' ref={videoRef} className='object-cover w-[500px] h-[500px]'>
                                            <source src="/assets/videos/invest.mp4" type='video/mp4'/>
                                        </video>
                                    </div>
                                </div>
                                {/* mobile version */}
                                <div className='flex flex-col gap-[80px] md:hidden'>
                                    <div className='flex flex-col gap-[30px]'>
                                        <div className='flex flex-col gap-[20px] items-center'>
                                            <div className='w-[100px] border border-[#1C7800] py-[7px] px-[10px] text-base text-[#1C7800] font-normal'>
                                                {t("Home.Securities.securitiesButton")}
                                            </div>
                                            <div className='flex flex-col gap-[50px]'>
                                                <div className='flex flex-col text-primary text-[30px] font-extrabold text-center leading-[1.20]'>
                                                    <div>{t("Home.Securities.securitiesTitle")}</div>
                                                    <div>{t("Home.Securities.securitiesTitle2")}</div>
                                                    <div>{t("Home.Securities.securitiesTitle3")}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <video autoPlay loop muted preload='auto' ref={videoRef} className='object-cover w-full'>
                                                <source src="/assets/videos/invest.mp4" type='video/mp4'/>
                                            </video>
                                        </div>
                                        <div className='text-[#444] text-base font-medium mx-5 leading-tight'>
                                        {t("Home.Securities.securitiesMobileDescription")}{t("Home.Securities.securitiesMobileDescription2")}
                                        {t("Home.Securities.securitiesMobileDescription3")}{t("Home.Securities.securitiesMobileDescription4")}
                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-[20px] flex flex-col gap-[10px] md:gap-5 py-[35px] md:py-[30px] px-[30px] md:px-10 bg-primary-50 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)] mx-10 md:mx-0'>
                                    <span className='text-primary text-2xl md:text-5xl font-bold text-center md:text-left'>{t("Home.Securities.securitiesSubtitle")}</span>
                                    <div className='hidden md:flex text-[#444] text-2xl text-left leading-none'>
                                        <div className={`${language === 'en' ? 'font-normal md:w-[850px]': 
                                                           language === 'zh' ? 'font-normal md:w-[920px]':  ''}`}>
                                            {t("Home.Securities.securitiesSubtitle_Description")}
                                        </div>
                                    </div>
                                    <div className='text-[#444] text-base text-center leading-[1.20] font-medium md:hidden'>
                                            <div className='block'>{t("Home.Securities.securitiesSubtitle_MobileDescription")}</div>
                                            <div className='block'>{t("Home.Securities.securitiesSubtitle_MobileDescription2")}</div>
                                            <div className='block'>{t("Home.Securities.securitiesSubtitle_MobileDescription3")}</div>
                                            <div className='block'>{t("Home.Securities.securitiesSubtitle_MobileDescription4")}</div>
                                            <div className='block'>{t("Home.Securities.securitiesSubtitle_MobileDescription5")}</div>
                                            <div className='block'>{t("Home.Securities.securitiesSubtitle_MobileDescription6")}</div>
                                            <div className='block'>{t("Home.Securities.securitiesSubtitle_MobileDescription7")}</div>
                                            <div className='block'>{t("Home.Securities.securitiesSubtitle_MobileDescription8")}</div>
                                            <div className='block'>{t("Home.Securities.securitiesSubtitle_MobileDescription9")}</div>
                                            <div className='block'>{t("Home.Securities.securitiesSubtitle_MobileDescription10")}</div>
                                    </div>
                                </div>
                            </div> 
                            </div>
                            <div className='flex flex-col gap-[100px] md:gap-[150px]'>
                            <div className='flex flex-col gap-[100px] md:gap-[150px]'>
                                <div className='flex flex-col gap-[50px] items-center'>
                                    <div className='hidden md:flex'>
                                        <div>
                                            <video autoPlay loop muted preload='auto' ref={videoRef} className='object-cover w-[500px] h-[500px]'>
                                                <source src="/assets/videos/processor.mp4" type='video/mp4'/>
                                            </video>
                                        </div>
                                        <div className='flex flex-col items-end gap-[30px]'>
                                            <div className='w-[130px] border border-primary py-[10px] px-[18px] text-xl font-normal text-primary'>
                                                {t("Home.Crypto.cryptoButton")}
                                            </div>
                                            <div className='flex flex-col gap-[50px]'>
                                                <div className='flex flex-col text-primary text-[40px] font-bold leading-none text-right'>
                                                    <div>{t("Home.Crypto.cryptoTitle")}</div>
                                                    <div>{t("Home.Crypto.cryptoTitle2")}</div>
                                                </div>
                                                <div className='text-[#444] text-2xl font-medium text-right md:w-[500px]'>
                                                    <div>{t("Home.Crypto.cryptoDescription")}</div>
                                                    <div>{t("Home.Crypto.cryptoDescription2")}</div>
                                                    <div>{t("Home.Crypto.cryptoDescription3")}</div>
                                                    <div>{t("Home.Crypto.cryptoDescription4")}</div>
                                                    <div>{t("Home.Crypto.cryptoDescription5")}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                     <div className='flex flex-col gap-[30px] md:hidden'>{/* mobile version */}              
                                        <div className='flex flex-col gap-[20px]'>
                                            <div className='border border-primary text-base text-primary self-center'>
                                                <div className={`${language === 'en' ? 'font-normal w-[100px] py-[5px]': 
                                                                   language === 'zh' ? 'font-normal w-[84px] py-[7px]':  ''}`}>
                                                    {t("Home.Crypto.cryptoButton")}
                                                </div>
                                            </div>
                                        
                                            <div className='flex flex-col text-primary text-[30px] font-extrabold leading-none text-center'>
                                                <div>{t("Home.Crypto.cryptoTitle")}</div>
                                                <div>{t("Home.Crypto.cryptoTitle2")}</div>
                                            </div>
                                        </div>
                                        <div>
                                            <video autoPlay loop muted preload='auto' ref={videoRef} className='object-cover w-full'>
                                                <source src="/assets/videos/processor.mp4" type='video/mp4'/>
                                            </video>
                                        </div>
                                        <div className='flex flex-col text-[#444] text-base font-medium items-center leading-tight mx-5 md:mx-0'>
                                            <div className={`${language === 'en' ? 'font-normal w-[333px]': 
                                                                language === 'zh' ? 'font-normal w-[265px]':  ''}`}>
                                                {t("Home.Crypto.cryptoDescription")}
                                                {t("Home.Crypto.cryptoDescription2")}
                                                {t("Home.Crypto.cryptoDescription3")}
                                                {t("Home.Crypto.cryptoDescription4")}
                                                {t("Home.Crypto.cryptoDescription5")}
                                            </div>
                                        </div>
                                    </div> 

                                    <div className='rounded-[20px] flex flex-col gap-[10px] md:gap-5 py-[30px] px-[32px] md:px-10 w-[313px] md:w-[980px] bg-primary-50 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
                                        <div className='text-primary text-2xl md:text-5xl font-bold text-center md:text-left'>{t("Home.Crypto.cryptoSubtitle")}</div>
                                        <div className='text-[#444] text-base md:text-2xl font-medium text-center md:text-left leading-[1.20]'>
                                            {t("Home.Crypto.cryptoSubtitle_Description")}
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
                            <img src={iphone} alt="iphone" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;