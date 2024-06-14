import React, { useRef, useEffect, useState, useContext } from 'react';
import google from '../Assets/Images/google.svg';
import apple from '../Assets/Images/apple.svg';
import iphone from '../Assets/Images/iphone.png';
import IpadScreenShot from '../Assets/Images/ipad-screenshot.png';
import window from '../Assets/Images/window.png';
import HomeMobile from '../Assets/Videos/homeMobile.mp4';
import { Built, InAppDeposit, AccountType, CurrencyPair, Partners } from '../Components/Outline';
import mobile_IOS_PS from '../Assets/Images/mobile_IOS_PS.svg';
import { LanguageContext } from "../LanguagesContext";
import { AppleMobileIcon, PlayStoreIcon } from '../Components/Brand';

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
        <div className='flex flex-col md:pt-[60px]'>
            <div className='relative mt-[60px] md:mt-0'>
                <video autoPlay loop playsInline muted preload='auto' ref={videoRef} className='hidden md:block md:w-full'>
                    <source src='/assets/videos/home.mp4' type='video/mp4'/>
                </video>

                <video autoPlay loop playsInline muted preload='auto' className='block object-cover h-[300px] md:hidden'>
                    <source src={HomeMobile} type='video/mp4'/>
                </video>

                <div className=' flex justify-center items-center absolute inset-x-0 inset-y-0 text-left gap-[50px]'>
                    <div className='max-w-[1000px] text-[#ffffff66] text-5xl md:text-[200px] font-bold leading-none text-left'>
                        {t("Home.homeVideoTitle")}
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <div className='max-w-[1000px] w-full py-[50px] px-[30px] md:px-0 md:pt-[150px] md:pb-0'>
                    <div className='flex flex-col gap-[100px] md:gap-[150px]'>

                        <div className='flex flex-col gap-[50px] md:gap-[100px] items-center'>
                            <div className='w-full flex flex-col items-center gap-[10px] md:gap-5'>
                                <div className='flex flex-col text-primary text-xl md:text-5xl font-bold items-center md:gap-1 leading-tight'>
                                    <div>{t("Home.QCGadvantage_Title1")}</div>
                                    <div>{t("Home.QCGadvantage_Title2")}</div>
                                </div>
                                <div className='text-[#444] text-sm md:text-2xl font-semibold leading-tight min-w-[280px] md:w-[950px]'>
                                    <div className='hidden md:block'>{t("Home.QCGadvantage_Description")}</div>
                                    <div className='block md:hidden w-[290px]'>{t("Home.QCGadvantage_DescriptionMobile")}</div>
                                </div>
                            </div>
                            <div className='w-full bg-[#ECFFE6] rounded-[5px] flex flex-col md:flex-row justify-center gap-5 p-4 md:p-[17px]'>
                                <div className='w-full h-[160px] md:h-[238px] bg-white flex flex-col items-center justify-center gap-5 rounded-[5px]'>
                                    <Built/>
                                    <div className='flex flex-col text-base md:text-2xl font-semibold md:font-bold leading-tight'>
                                        <div className=' hidden md:block'>{t("Home.copyTradingSystemTitle")}</div>
                                        <div className=' hidden md:block'>{t("Home.copyTradingSystemTitle2")}</div>
                                        <div className='block md:hidden'>{t("Home.copyTradingSystemTitleMobile")}</div>
                                        <div className='block md:hidden'>{t("Home.copyTradingSystemTitleMobile2")}</div>
                                    </div>
                                </div>
                                <div className='w-full h-[160px] md:h-[238px] bg-white flex flex-col items-center justify-center gap-5 rounded-[5px]'>
                                    <InAppDeposit/>
                                    <div className='flex flex-col text-base md:text-2xl font-semibold md:font-bold leading-tight'>
                                        <div className=' hidden md:block'>{t("Home.appDepositTitle")}</div>
                                        <div className=' hidden md:block'>{t("Home.appDepositTitle2")}</div>
                                        <div className='block md:hidden'>{t("Home.appDepositTitleMobile")}</div>
                                        <div className='block md:hidden'>{t("Home.appDepositTitleMobile2")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='flex flex-col gap-[50px] md:gap-[100px] items-center'>
                            <div className='flex flex-col items-center gap-[30px] md:gap-[50px]'>
                                <div className='w-[150px] border border-primary py-[10px] text-xl text-primary font-normal text-center rounded-[5px]'>
                                    {t("Home.Platform.platformButton")}
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-5 items-center'>
                                    <div className='flex flex-col'>
                                        <span
                                            ref={textRef}
                                            className={`text-[#444] text-2xl md:text-[64px] font-bold md:font-extrabold leading-[1.20] ${
                                            animate ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'
                                            }`}
                                        >
                                            {t("Home.Platform.platformTitle")}
                                        </span>
                                        <span
                                            className={`text-primary text-2xl md:text-[64px] font-bold md:font-extrabold leading-[1.20] ${
                                            animate ? 'opacity-100 transition-opacity duration-1000 delay-500' : 'opacity-0'
                                            }`}
                                        >
                                            {t("Home.Platform.platformTitle2")}
                                        </span>
                                    </div>
                                    <div className='flex text-[#444] text-sm md:text-2xl font-semibold min-w-[160px] w-[180px] md:w-[400px]'>
                                        {t("Home.Platform.platformDescription")}
                                    </div>

                                </div>
                            </div>

                            <div>
                                <img src={IpadScreenShot} alt="ipad-screenshot"/>
                            </div>

                        </div>

                        <div className='flex flex-col gap-[50px] md:gap-[100px] items-center'>
                            <div className='flex flex-col items-center gap-[30px] md:gap-[50px]'>
                                <div className=' w-[150px] md:w-[130px] h-[50px] md:h-[44px] border border-primary px-[42px] py-3 md:py-[6px] md:px-[32px] text-xl text-primary rounded-[5px]'>
                                    {t("Home.Pricing.pricingButton")}
                                </div>
                                <div className='flex flex-col gap-5 items-center'>
                                    <div className='flex flex-col text-center'>
                                        <div className='text-[#444] text-2xl md:text-[64px] font-bold leading-none'>{t("Home.Pricing.pricingTitle")}</div>
                                        <div className='text-primary text-2xl md:text-[64px] font-bold leading-none'>{t("Home.Pricing.pricingTitle2")} {t("Home.Pricing.pricingTitle3")}</div>
                                    </div>
                                    <div className='hidden md:block text-[#444] text-2xl font-semibold md:w-[400px]'>
                                        {t("Home.Pricing.pricingDescription")}
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <video playsInline autoPlay loop muted preload='auto' ref={videoRef} className='w-full rounded-[5px]'>
                                    <source src="/assets/videos/trading.mp4" type='video/mp4'/>
                                </video>
                                <div className='w-full bg-[#ECFFE6] rounded-[5px] flex justify-center p-4 md:py-5 '>
                                    <div className=' flex flex-col text-sm md:text-2xl font-semibold text-[#444] leading-tight w-[300px] md:w-[780px]'>
                                        <div className='hidden md:block'>{t("Home.Pricing.explore")}</div>
                                        <div className='block md:hidden'>{t("Home.Pricing.exploreMobile")}</div>
                                        <div className='block md:hidden'>{t("Home.Pricing.exploreMobile2")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[50px] md:gap-[100px] items-center'>
                            <div className='flex flex-col gap-[30px] md:gap-[50px] items-center w-full'>
                                <div className='w-[150px] border border-primary py-[10px] text-xl text-primary rounded-[5px]'>
                                    {t("Home.Securities.securitiesButton")}
                                </div>
                                 <div className='flex flex-col gap-5 items-center'>
                                    <div className='flex flex-col items-center md:w-[920px]'>
                                        <div className='text-[#444] text-2xl md:text-[64px] font-bold leading-none hidden md:block'>{t("Home.Securities.securitiesTitle")}</div>
                                        <div className='text-[#444] text-2xl md:text-[64px] font-bold leading-none block md:hidden'>{t("Home.Securities.securitiesTitleMobile")}</div>
                                        <div className='text-[#444] text-2xl md:text-[64px] font-bold leading-none block md:hidden'>{t("Home.Securities.securitiesTitleMobile2")}</div>

                                        <div className='text-[#1C7800] text-2xl md:text-[64px] font-bold leading-none'>{t("Home.Securities.securitiesTitle2")}</div>
                                    </div>
                                    <div className='text-[#444] text-sm md:text-2xl font-semibold leading-none w-[320px] min-w-[310px] md:w-[740px]'>
                                        {t("Home.Securities.securitiesDescription")}
                                    </div>
                                 </div>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <video playsInline autoPlay loop muted preload='auto' ref={videoRef} className=' w-full rounded-[5px]'>
                                    <source src="/assets/videos/invest.mp4" type='video/mp4'/>
                                </video>
                                <div className='w-full bg-[#ECFFE6] rounded-[5px] flex justify-center py-3 px-4 md:py-[25px] md:px-0'>
                                    <div className=' text-sm md:text-2xl font-semibold text-[#444] leading-tight md:w-[850px]'>
                                        {t("Home.Securities.offer")}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[50px] md:gap-[100px] items-center'>
                            <div className='flex flex-col gap-[50px] items-center'>
                                <div className='w-[150px] border border-primary py-[10px] px-[18px] text-xl font-normal text-primary rounded-[5px]'>
                                    {t("Home.Crypto.cryptoButton")}
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-5'>
                                    <div className='flex flex-col items-center gap-2 md:gap-0'>
                                        <div className='text-primary text-2xl md:text-[64px] font-bold leading-none'>{t("Home.Crypto.cryptoTitle")}</div>
                                        <div className='text-[#444] text-2xl md:text-[64px] font-bold leading-none'>{t("Home.Crypto.cryptoTitle2")}</div>
                                    </div>
                                    <div className='text-[#444] text-sm md:text-2xl font-semibold w-[320px] md:w-[660px]'>
                                        {t("Home.Crypto.cryptoDescription")}
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <video playsInline autoPlay loop muted preload='auto' ref={videoRef} className='object-cover w-full'>
                                    <source src="/assets/videos/processor.mp4" type='video/mp4'/>
                                </video>
                                <div className='w-full bg-[#ECFFE6] rounded-[5px] flex justify-center p-4 md:py-[25px] md:px-0'>
                                    <div className='flex flex-col md:flex-row items-center gap-[10px] md:gap-[30px]'>
                                        <div className='text-primary text-xl md:text-[40px] font-bold text-center md:text-left'>{t("Home.Crypto.cryptoSubtitle")}</div>
                                        <div className='text-sm md:text-2xl font-semibold text-[#444] leading-tight md:w-[640px]'>
                                            {t("Home.Crypto.cryptoSubtitle_Description")}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-5 md:gap-[30px]'>
                            <div className='text-[#444] text-base md:text-2xl text-left font-bold leading-tight md:leading-none'>
                                {t("openTradingACC.openTradingACC_Title")}
                            </div>
                            <div className='flex flex-col gap-[30px] md:gap-[15px]'>
                                <div className='flex gap-[20px] md:gap-[10px]'>
                                    <div className='hidden md:flex gap-[20px] md:gap-[10px]'>
                                        <img src={google} alt="google" />
                                        <img src={apple} alt="apple" />
                                        <img src={window} alt="window" />
                                    </div>
                                    <div className='flex items-center gap-[26px] md:hidden'>
                                        <AppleMobileIcon/>
                                        <PlayStoreIcon/>
                                        <div className='w-[180px] h-[50px] md:w-[150px] bg-[#1C7800] text-white rounded-[5px] md:rounded-md flex items-center justify-center text-sm md:text-base font-bold'>
                                            {t("openTradingACC.liveACC_Title")}
                                        </div>
                                    </div>
                                    <div className='w-[180px] md:w-[159px] bg-[#1C7800] text-white rounded-[5px] md:rounded-md items-center justify-center text-sm md:text-base font-bold hidden md:flex'>
                                        {t("openTradingACC.liveACC_Title")}
                                    </div>
                                </div>
                                <div className='hidden md:flex flex-col'>
                                    <div className='text-[#444] text-2xl text-left font-medium leading-tight'>
                                        {t("openTradingACC.tradingAcc_Description")}
                                    </div>
                                    <div className='text-[#444] text-2xl text-left font-medium leading-tight'> 
                                        {t("openTradingACC.tradingAcc_Description2")}
                                        <span className="text-[#1C7800]">
                                            {t("openTradingACC.tradingAcc_Description3")}
                                        </span>
                                    </div>
                                </div>
                                <div className='flex flex-col md:hidden'>
                                    <div className='text-[#444] text-sm md:text-2xl font-medium text-left leading-[1.20]'>
                                        {t("openTradingACC.tradingAcc_Description")}
                                        {t("openTradingACC.tradingAcc_Description2")} <span className='text-primary font-semibold md:font-medium'>{t("openTradingACC.tradingAcc_Description3")}</span>
                                        {language === 'en' ? (
                                            <span className='text-[#1C7800] font-medium leading-[1.20]'>
                                                
                                            </span>
                                        ) : language === 'zh' ? (
                                            <div className='text-base  font-medium leading-[1.20]'>
                                                {t("openTradingACC.tradingAcc_Description3")}
                                            </div>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <img src={iphone} alt="iphone" className='hidden md:block' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;