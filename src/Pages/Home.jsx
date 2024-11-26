import React, { useRef, useEffect, useState } from 'react';
import google from '../Assets/Images/googleNew.svg';
import apple from '../Assets/Images/appleNew.svg';
import iphone from '../Assets/Images/iphone.png';
import IpadScreenShot from '../Assets/Images/ipad-screenshot.png';
import window from '../Assets/Images/windowNew.svg';
import HomeVideo from '../Assets/Videos/home.mp4';
import HomeMobile from '../Assets/Videos/homeMobile.mp4';
import { Built, InAppDeposit, Pamm } from '../Components/Outline';
// import { AppleMobileIcon, PlayStoreIcon } from '../Components/Brand';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import qcgLive from '../Assets/Images/qcgLive.svg';

const Home = () => {
    const textRef = useRef(null);
    const [animate, setAnimate] = useState(false);
    const videoRef = useRef(null);
    const { t, i18n } = useTranslation();

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
                    <source src={HomeVideo} type='video/mp4'/>
                </video>

                <video autoPlay loop playsInline muted preload='auto' className='block object-cover h-[300px] md:hidden'>
                    <source src={HomeMobile} type='video/mp4'/>
                </video>

                <div className=' flex flex-col justify-center items-center absolute inset-x-0 inset-y-0 text-left gap-[10px]'>
                    {
                        i18n.language === 'en' ? (
                            <div className='max-w-[1000px] text-white text-4xl md:text-[64px] font-bold leading-normal text-left'>
                                {t("Home.homeVideoTitle")}
                            </div>
                        ) : (
                            <div className='max-w-[1000px] text-white text-[36px] md:text-[64px] font-bold leading-none text-left'>
                                {t("Home.homeVideoTitle")}
                            </div>
                        )
                    }

                    {
                        i18n.language === 'en' ? (
                            <div className='flex flex-col gap-[20px] w-full items-center'>
                                <div className='text-white text-xs md:text-2xl text-center leading-normal' >
                                    Open an Unlimited Opportunity Trading Account
                                </div>
                                <div className='flex items-center justify-center w-[170px] h-[40px] md:w-[300px] md:h-[60px] border-2 border-white rounded-[5px] bg-transparent text-white text-sm md:text-2xl font-bold' >
                                    {/* register link */}
                                    Open Account Now
                                </div>
                            </div>
                        ) : (
                            <div className='flex flex-col gap-[30px] w-full items-center'>
                                <div className='text-white text-xs md:text-2xl text-center leading-normal' >
                                    {t("Home.homeVideoTitle3")}
                                </div>
                                <div className='flex items-center justify-center w-[170px] h-[30px] md:w-[300px] md:h-[50px] border-2 border-white rounded-[5px] bg-transparent text-white text-sm md:text-2xl font-semibold' >
                                    {t("Home.openAcc")}
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <div className='max-w-[1000px] w-full py-[50px] px-[30px] md:px-0 md:pt-[150px] md:pb-0'>
                    <div className='flex flex-col gap-[50px] md:gap-[100px]'>

                        <div className='flex flex-col gap-[50px] md:gap-[50px] items-center'>
                            <div className='w-full flex flex-col items-center gap-[10px] md:gap-2.5'>
                                <div className={`'flex flex-col text-primary text-base md:max-w-none md:text-[40px] font-bold items-center md:gap-1 leading-normal' ${i18n.language === 'en' ? 'max-w-[188px]' : 'max-w-none' } `}>
                                    <div>{t("Home.QCGadvantage_Title1")}</div>
                                </div>
                                {
                                    i18n.language === 'en' ? (
                                        <div className='text-[#444] text-sm md:text-2xl leading-normal min-w-[280px] md:w-full'>
                                            <div className='hidden md:block'>{t("Home.QCGadvantage_Description")}</div>
                                            <div className='block md:hidden '>{t("Home.QCGadvantage_Description")}</div>
                                        </div>
                                    ) : (
                                        <div className='flex flex-col items-center text-[#444] text-sm md:text-2xl leading-normal w-full'>
                                            <div className='hidden md:block'>{t("Home.QCGadvantage_Description")}</div>
                                            {/* <div className='hidden md:block'>{t("Home.QCGadvantage_Description2")}</div> */}
                                            <div className='block md:hidden '>{t("Home.QCGadvantage_DescriptionMobile")}</div>
                                        </div>
                                    )
                                }
                                
                            </div>
                            <div className='w-full flex flex-col md:flex-row items-center justify-center gap-[50px] md:gap-[150px] '>

                                <div className='bg-white flex flex-col items-center justify-center gap-5 rounded-[5px]'>
                                    <Built className='w-[60px] h-[60px] md:w-[100px] md:h-[100px]' />
                                    <div className={`'flex flex-col text-sm md:text-sm font-bold leading-normal ' ${i18n.language === 'en' ? 'md:max-w-[98px]' : 'md:max-w-[70px]'}`}>
                                        <div className=' hidden md:block'>{t("Home.copyTradingSystemTitle")}</div>
                                        <div className='block md:hidden'>{t("Home.copyTradingSystemTitleMobile")}</div>
                                        {/* <div className='block md:hidden'>{t("Home.copyTradingSystemTitleMobile2")}</div> */}
                                    </div>
                                </div>

                                <div className='bg-white flex flex-col items-center justify-center gap-5 rounded-[5px]'>
                                    <Pamm className='w-[60px] h-[60px] md:w-[100px] md:h-[100px]' />
                                    {
                                        i18n.language === 'en' ? (
                                            <div className='flex flex-col text-sm md:text-sm font-bold leading-normal md:max-w-[99px]'>
                                                <div className=' hidden md:block'>{t("Home.copyPammTitle")}</div>
                                                <div className='block md:hidden'>{t("Home.copyPammTitleMobile")}</div>
                                                <div className='block md:hidden'>{t("Home.copyPammTitleMobile2")}</div>
                                            </div>
                                        ) : (
                                            <div className='flex flex-col text-sm md:text-sm font-bold leading-normal md:max-w-[99px]'>
                                                <div className=''>{t("Home.copyPammTitleMobile")}</div>
                                                <div className=''>{t("Home.copyPammTitleMobile2")}</div>
                                            </div>
                                        )
                                    }
                                    
                                </div>

                                <div className='bg-white flex flex-col items-center justify-center gap-5 rounded-[5px]'>
                                    <InAppDeposit className='w-[60px] h-[60px] md:w-[100px] md:h-[100px]' />
                                    {
                                        i18n.language === 'en' ? (
                                            <div className='flex flex-col text-sm md:text-sm font-bold leading-normal md:max-w-[118px]'>
                                                <div className=' hidden md:block'>{t("Home.appDepositTitle")}</div>
                                                <div className='block md:hidden'>{t("Home.appDepositTitleMobile")}</div>
                                                <div className='block md:hidden'>{t("Home.appDepositTitleMobile2")}</div>
                                            </div>
                                        ) : (
                                            <div className='flex flex-col text-sm md:text-sm font-bold leading-normal md:max-w-[126px]'>
                                                <div className=''>{t("Home.appDepositTitleMobile")}</div>
                                                <div className=''>{t("Home.appDepositTitleMobile2")}</div>
                                            </div>
                                        )
                                    }
                                    
                                </div>
                            </div>
                        </div>
                        
                        <div className='flex flex-col gap-[30px] md:gap-[50px] items-center'>
                            <div className='flex flex-col items-center gap-[30px] md:gap-[50px]'>
                                <div className='w-[150px] border border-primary py-[10px] text-base text-primary font-normal text-center rounded-[10px]'>
                                    {t("Home.Platform.platformButton")}
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-5 items-center'>
                                    <div className='flex flex-col'>
                                        <span
                                            ref={textRef}
                                            className={`text-[#444] text-2xl md:text-[40px] font-bold md:font-extrabold leading-normal ${
                                            animate ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'
                                            }`}
                                        >
                                            {t("Home.Platform.platformTitle")}
                                        </span>
                                        <span
                                            className={`text-primary text-2xl md:text-[40px] font-bold md:font-extrabold leading-normal ${
                                            animate ? 'opacity-100 transition-opacity duration-1000 delay-500' : 'opacity-0'
                                            }`}
                                        >
                                            {t("Home.Platform.platformTitle2")}
                                        </span>
                                    </div>
                                    {
                                        i18n.language === 'en' ? (
                                            <div className='flex text-[#444] text-sm md:text-2xl'>
                                                {t("Home.Platform.platformDescription")}
                                            </div>
                                        ) : (
                                            <div className='flex justify-center text-[#444] text-sm md:text-2xl min-w-[160px] w-full md:w-full'>
                                                {t("Home.Platform.platformDescription")}
                                            </div>
                                        )
                                    }
                                    

                                </div>
                            </div>

                            <div>
                                <img src={IpadScreenShot} alt="ipad-screenshot"/>
                            </div>

                        </div>

                        <div className='flex flex-col gap-[30px] md:gap-[50px] items-center'>
                            <div className='flex flex-col items-center gap-[20px] md:gap-[50px]'>
                                <div className=' w-[150px] md:w-[130px] h-[50px] border border-primary px-[42px] py-3 md:py-3 md:px-[32px] text-base text-primary rounded-[10px]'>
                                    {t("Home.Pricing.pricingButton")}
                                </div>
                                <div className='flex flex-col gap-2.5 items-center'>
                                    {
                                        i18n.language === 'en' ? (
                                            <div className='flex flex-col text-center'>
                                                <div className='text-[#444] text-2xl md:text-[40px] font-bold leading-normal'>{t("Home.Pricing.pricingTitle")}</div>
                                                <div className='text-primary text-2xl md:text-[40px] font-bold leading-normal'>{t("Home.Pricing.pricingTitle2")} {t("Home.Pricing.pricingTitle3")}</div>
                                            </div>
                                        ) : (
                                            <div className='flex flex-col text-center'>
                                                <div className='text-[#444] md: text-2xl md:text-[40px] font-bold leading-normal'>{t("Home.Pricing.pricingTitle2")}</div>
                                                <div className='text-primary text-2xl md:text-[40px] font-bold leading-normal'>{t("Home.Pricing.pricingTitle")}</div>
                                            </div>
                                        )
                                    }
                                    {
                                        i18n.language === 'en' ? (
                                            <div className=' text-[#444] text-sm md:text-2xl w-[228px] md:w-full'>
                                                {t("Home.Pricing.pricingDescription")}
                                            </div>
                                        ) : (
                                            <div className=' text-[#444] text-sm md:text-2xl w-full'>
                                                {t("Home.Pricing.pricingDescription")}
                                            </div>
                                        )
                                    }
                                    
                                </div>
                            </div>
                            <div className='flex flex-col gap-5 md:gap-[100px]'>
                                <video playsInline autoPlay loop muted preload='auto' ref={videoRef} className='w-full rounded-[10px]'>
                                    <source src="/assets/videos/trading.mp4" type='video/mp4'/>
                                </video>
                                <div className='w-full bg-[#ECFFE6] rounded-[20px] flex justify-center p-4 md:py-[47px] '>
                                    <div className=' flex flex-col text-xs md:text-xl font-bold text-[#444] leading-normal w-full md:w-[780px]'>
                                        <div className='hidden md:block'>{t("Home.Pricing.explore")}</div>
                                        <div className='block md:hidden'>{t("Home.Pricing.exploreMobile")}</div>
                                        {/* <div className='block md:hidden'>{t("Home.Pricing.exploreMobile2")}</div> */}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[30px] md:gap-[50px] items-center'>
                            <div className='flex flex-col gap-[30px] md:gap-[50px] items-center w-full'>
                                <div className='w-[150px] border border-primary py-[10px] text-base text-primary rounded-[10px]'>
                                    {t("Home.Securities.securitiesButton")}
                                </div>
                                 <div className='flex flex-col gap-5 items-center'>
                                    {
                                        i18n.language === 'en' ? (
                                            <div className='flex flex-col items-center md:w-[920px]'>
                                                <div className='text-[#444] text-2xl md:text-[40px] font-bold leading-normal hidden md:block'>{t("Home.Securities.securitiesTitle")}</div>
                                                <div className='text-[#444] text-2xl md:text-[40px] font-bold leading-normal block md:hidden'>{t("Home.Securities.securitiesTitleMobile")}</div>
                                                <div className='text-[#444] text-2xl md:text-[40px] font-bold leading-normal block md:hidden'>{t("Home.Securities.securitiesTitleMobile2")}</div>

                                                <div className='text-[#1C7800] text-2xl md:text-[40px] font-bold leading-normal'>{t("Home.Securities.securitiesTitle2")}</div>
                                            </div>
                                        ) : (
                                            <div className='flex flex-col items-center md:w-[920px]'>
                                                <div className='text-[#444] text-2xl md:text-[40px] font-bold leading-normal hidden md:block'>{t("Home.Securities.securitiesTitle")}</div>
                                                <div className='text-[#444] text-2xl md:text-[40px] font-bold leading-normal block md:hidden'>{t("Home.Securities.securitiesTitleMobile")}</div>

                                                <div className='text-[#1C7800] text-2xl md:text-[40px] font-bold leading-normal'>{t("Home.Securities.securitiesTitle2")}</div>
                                            </div>
                                        )
                                    }
                                    
                                    {
                                        i18n.language === 'en' ? (
                                            <div className='text-[#444] text-sm md:text-2xl leading-normal '>
                                                {t("Home.Securities.securitiesDescription")}
                                            </div>
                                        ) : (
                                            <div className='flex flex-col text-[#444] text-sm md:text-2xl leading-normal w-full min-w-[310px] md:w-[740px]'>
                                                <div className='hidden md:block'>{t("Home.Securities.securitiesDescription")}</div>
                                                <div className='hidden md:block'>{t("Home.Securities.securitiesDescription2")}</div>

                                                <div className='block md:hidden'>{t("Home.Securities.securitiesDescriptionCnMobile1")}</div>
                                                {/* <div className='block md:hidden'>{t("Home.Securities.securitiesDescriptionCnMobile2")}</div>
                                                <div className='block md:hidden'>{t("Home.Securities.securitiesDescriptionCnMobile3")}</div> */}
                                            </div>
                                        )
                                    }
                                    
                                 </div>
                            </div>
                            <div className='flex flex-col gap-[50px] md:gap-[120px]'>
                                <video playsInline autoPlay loop muted preload='auto' ref={videoRef} className=' w-full rounded-[20px]'>
                                    <source src="/assets/videos/invest.mp4" type='video/mp4'/>
                                </video>
                                <div className='w-full bg-[#ECFFE6] rounded-[20px] flex justify-center py-4 px-4 md:py-[25px] md:px-0'>
                                    {
                                        i18n.language === 'en' ? (
                                            <div className=' text-xs md:text-xl font-bold text-[#444] leading-normal w-[300px] md:w-[780px]'>
                                                {t("Home.Securities.offer")}
                                            </div>
                                        ) : (
                                            <div className=' flex flex-col text-xs md:text-xl font-semibold text-[#444] leading-tight md:w-[850px]'>
                                                <div className='hidden md:block'>{t("Home.Securities.offer")}</div>
                                                <div className='hidden md:block'>{t("Home.Securities.offer2")}</div>

                                                <div className='block md:hidden'>{t("Home.Securities.offerMobile")}</div>
                                                {/* <div className='block md:hidden'>{t("Home.Securities.offerMobile2")}</div>
                                                <div className='block md:hidden'>{t("Home.Securities.offerMobile3")}</div>
                                                <div className='block md:hidden'>{t("Home.Securities.offerMobile4")}</div> */}
                                            </div>
                                        )
                                    }
                                    
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[30px] md:gap-[50px] items-center'>
                            <div className='flex flex-col gap-[20px] items-center'>
                                <div className='w-[150px] border border-primary py-[10px] px-[18px] text-base font-normal text-primary rounded-[10px]'>
                                    {t("Home.Crypto.cryptoButton")}
                                </div>
                                <div className='flex flex-col gap-[10px] items-center md:gap-5'>
                                    {
                                        i18n.language === 'en' ? (
                                            <div className='flex flex-col items-center gap-1 md:gap-0'>
                                                <div className='text-primary text-2xl md:text-[40px] font-bold leading-normal'>{t("Home.Crypto.cryptoTitle")}</div>
                                                <div className='text-[#444] text-2xl md:text-[40px] font-bold leading-normal'>{t("Home.Crypto.cryptoTitle2")}</div>
                                            </div>
                                        ) : (
                                            <div className='flex flex-col items-center gap-1 md:gap-0'>
                                                <div className='text-primary text-2xl md:text-[40px] font-bold leading-normal'>{t("Home.Crypto.cryptoTitle")}</div>
                                                <div className='text-[#444] text-2xl md:text-[40px] font-bold leading-normal'>{t("Home.Crypto.cryptoTitle2")}</div>
                                            </div>
                                        )
                                    }
                                    
                                    {
                                        i18n.language === 'en' ? (
                                            <div className='text-[#444] text-sm md:text-2xl '>
                                                {t("Home.Crypto.cryptoDescription")}
                                            </div>
                                        ) : (
                                            <div className='flex flex-col text-[#444] text-sm md:text-2xl min-w-[335px] md:w-[660px]'>
                                                <div>{t("Home.Crypto.cryptoDescription")}</div>
                                                <div>{t("Home.Crypto.cryptoDescription2")}</div>
                                            </div>
                                        )
                                    }
                                    
                                </div>
                            </div>
                            <div className='flex flex-col gap-[50px] md:gap-[100px]'>
                                <video playsInline autoPlay loop muted preload='auto' ref={videoRef} className='w-full rounded-[20px]'>
                                    <source src="/assets/videos/processor.mp4" type='video/mp4'/>
                                </video>
                                <div className='w-full bg-[#ECFFE6] rounded-[20px] flex justify-center p-4 md:py-10 md:px-0'>
                                    {
                                        i18n.language === 'en' ? (
                                            <div className='flex flex-col md:flex-row items-center gap-[10px] md:gap-[30px]'>
                                                {/* <div className='text-primary text-xl md:text-[40px] font-bold text-center md:text-left'>{t("Home.Crypto.cryptoSubtitle")}</div> */}
                                                <div className='text-xs md:text-xl font-bold text-[#444] leading-normal w-[300px] md:w-[780px] md:text-center'>
                                                    {t("Home.Crypto.cryptoSubtitle_Description")}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className='flex flex-col md:flex-row items-center px-4 gap-[10px] md:gap-[30px]'>
                                                {/* <div className='text-primary text-xl md:text-[40px] font-bold text-center md:text-left'>{t("Home.Crypto.cryptoSubtitle")}</div> */}
                                                <div className=' flex flex-col text-xs md:text-xl  text-center font-semibold text-[#444] leading-tight md:w-[640px]'>
                                                    <div className='hidden md:block'>{t("Home.Crypto.cryptoSubtitle_Description")}</div>
                                                    <div className='hidden md:block'>{t("Home.Crypto.cryptoSubtitle_Description2")}</div>

                                                    <div className='block text-center md:hidden'>{t("Home.Crypto.cryptoSubtitle_DescriptionMobile")}</div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-5 md:gap-[20px]'>
                            <div className='text-[#444] text-base md:text-[32px] text-left font-bold md:leading-normal'>
                                {t("openTradingACC.openTradingACC_Title")}
                            </div>
                            <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                                <div className='flex w-full'>
                                    <div className='flex flex-col md:flex md:flex-row items-center gap-[20px] md:gap-[26px]'>
                                        <div className=' w-full'>
                                            <Link to='https://play.google.com/store/apps/details?id=com.spotware.ct&hl=en'>
                                                <img src={qcgLive} alt="qcg_live" className='max-w-[200px] max-h-[58px] md:w-full '/>
                                            </Link>
                                        </div>
                                        <div className=' w-full'>
                                            <Link to='https://play.google.com/store/apps/details?id=com.spotware.ct&hl=en'>
                                                <img src={google} alt="google" className='max-w-[200px] max-h-[58px] md:w-full '/>
                                            </Link>
                                        </div>
                                        <div className=' w-full'>
                                            <Link to='https://apps.apple.com/my/app/ctrader/id767428811?platform=iphone'>
                                                <img src={apple} alt="apple" className='max-w-[200px] max-h-[58px] md:w-full '/>
                                            </Link>
                                        </div>
                                        <div className=' w-full'>
                                            <Link to='https://spotware.ctrader.com/ctrader-spotware-setup.exe'>
                                                <img src={window} alt="window" className='max-w-[200px] max-h-[58px] md:w-full '/>
                                            </Link>
                                        </div>
                                        {/* <Window/> */}
                                    </div>
                                    {/* <div className='flex items-center gap-[26px] md:hidden'>
                                        <Link to='https://apps.apple.com/my/app/ctrader/id767428811?platform=iphone'>
                                            <AppleMobileIcon/>
                                        </Link>
                                        <Link to='https://play.google.com/store/apps/details?id=com.spotware.ct&hl=en'>
                                            <PlayStoreIcon/>
                                        </Link>
                                        <a href="https://login.qcgbrokertw.com/login">
                                            <button className='w-[180px] h-[50px] md:w-[150px] bg-[#1C7800] text-white rounded-[5px] md:rounded-md flex items-center justify-center text-sm md:text-base font-bold'>
                                                {t("openTradingACC.liveACC_Title")}
                                            </button>
                                        </a>
                                        
                                    </div> */}
                                    
                                    {/* <button className=' w-[180px] md:w-[159px] bg-[#1C7800] text-white rounded-[5px] md:rounded-md items-center justify-center text-sm md:text-base font-bold hidden md:flex'>
                                        <a href="https://login.qcgbrokertw.com/login">
                                            {t("openTradingACC.liveACC_Title")}
                                        </a>
                                    </button> */}
                                    
                                </div>
                                {
                                    i18n.language === 'en' ? (
                                        <div className='hidden md:flex flex-col'>
                                            {/* <div className='text-[#444] text-2xl text-left font-medium leading-tight'>
                                                {t("openTradingACC.tradingAcc_Description")}
                                            </div> */}
                                            <div className='text-[#444] text-2xl text-left leading-normal'> 
                                                {t("openTradingACC.tradingAcc_Description2")}
                                                <span className="text-[#1C7800]">
                                                    {t("openTradingACC.tradingAcc_Description3")}
                                                </span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='hidden md:flex flex-col'>
                                            <div className='text-[#444] text-2xl text-left leading-tight'>
                                                {t("openTradingACC.tradingAcc_Description")} {t("openTradingACC.tradingAcc_Description2")}
                                                <span className="text-[#1C7800]">
                                                    {t("openTradingACC.tradingAcc_Description3")}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                }
                                
                                <div className='flex flex-col md:hidden'>
                                    {
                                        i18n.language === 'en' ? (
                                            <div className='text-[#444] text-sm md:text-2xl font-normal text-left leading-normal'>
                                                {/* {t("openTradingACC.tradingAcc_Description")} */}
                                                {t("openTradingACC.tradingAcc_Description2")} <span className='text-primary font-normal md:font-medium'>{t("openTradingACC.tradingAcc_Description3")}</span>
                                            </div>
                                        ) : (
                                            <div className='text-[#444] text-base md:text-2xl text-left leading-[1.20]'>
                                                {t("openTradingACC.tradingAcc_Description")}
                                                {t("openTradingACC.tradingAcc_Description2")} <span className='text-primary font-normal md:font-medium'>{t("openTradingACC.tradingAcc_Description3")}</span>
                                            </div>
                                        )
                                    }
                                    
                                </div>
                            </div>
                        </div>

                        <img src={iphone} alt="iphone" className='block mb-[-50px] md:mb-[-2px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;