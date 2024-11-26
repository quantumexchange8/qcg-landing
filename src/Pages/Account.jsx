import React, { useRef, useEffect, useState } from 'react';
import google from '../Assets/Images/googleNew.svg';
import apple from '../Assets/Images/appleNew.svg';
import window from '../Assets/Images/windowNew.svg';
// import { AppleMobileIcon, PlayStoreIcon } from '../Components/Brand';
import AccountMobile from '../Assets/Videos/account.mp4';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import qcgLive from '../Assets/Images/qcgLive.svg';

const Account = () => {
    const textRef = useRef(null);
    const [, setAnimate] = useState(false);
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

    const { t, i18n } = useTranslation();
    
    return (
        <div className='flex flex-col md:pt-[60px]'>
            <div className='relative mt-[60px] md:mt-0'>
                <video autoPlay loop playsInline muted preload='auto' ref={videoRef} className='hidden md:block md:w-full'>
                    <source src='/assets/videos/account.mp4' type='video/mp4'/>
                </video>

                <video autoPlay loop playsInline muted preload='auto' ref={videoRef} className='block object-cover h-[300px] md:hidden'>
                    <source src={AccountMobile} type='video/mp4'/>
                </video>

                <div className='absolute inset-0 flex justify-center'>
                    <div className='max-w-[1000px] w-full flex flex-col items-center justify-center gap-[10px] md:gap-5 py-[50px] px-[30px] md:px-0 md:py-[100px]'>
                        <div className='text-white text-xl md:text-[64px] text-center font-bold leading-none'>
                            <div className='w-full'>
                                {t("Account.accountVideoTitle")}
                            </div>
                            
                        </div>
                        {
                            i18n.language === 'en' ? (
                                <div className='text-white text-xs md:text-2xl text-center leading-tight md:leading-none '>
                                    {t("Account.accountVideoDescription")}
                                </div>
                            ) : (
                                <div className=' text-white text-sm md:text-2xl text-center leading-tight md:leading-tight '>
                                    <div>{t("Account.accountVideoDescription")}{t("Account.accountVideoDescription1")}</div>
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <div className='max-w-[1000px] w-full py-[50px] px-[30px] md:px-0 md:py-[150px]'>

                    <div className='flex flex-col gap-[50px] md:gap-[100px]'>

                        <div className='flex flex-col gap-[10px] md:gap-5'>
                            <div className='flex flex-col text-[#1C7800] text-left text-base md:text-[40px] font-bold leading-normal'>
                                {t("Account.accountTitle")}
                            </div>
                            {
                                i18n.language === 'en' ? (
                                    <div className='flex flex-col text-[#444] text-left text-sm md:text-2xl leading-normal'>
                                        <div className='hidden md:block'>{t("Account.accountDescription")}</div>
                                        <div className='hidden md:block'>{t("Account.accountDescription2")}</div>

                                        <div className='block md:hidden'>{t("Account.accountDescriptionMobile")}</div>
                                    </div>
                                ) : (
                                    <div className='flex flex-col text-[#444] text-left text-sm md:text-2xl leading-normal'>
                                        <div className='hidden md:block'>{t("Account.accountDescription")}</div>

                                        <div className='block md:hidden'>{t("Account.accountDescriptionMobile")}</div>
                                    </div>
                                )
                            }
                            
                        </div>

                        {/* {
                            i18n.language === 'en' ? (
                                <div className='block md:hidden'></div>
                            ) : (
                                null
                            )
                        } */}
                        

                        <div className='flex flex-col gap-[10px] md:gap-5'>
                            <div className='text-[#1C7800] text-xl md:text-[40px] font-bold text-left'>
                                {t("Account.Standard.standardTitle")}
                            </div>
                            
                            <div className='hidden md:flex flex-col'>
                                <ul className='list-none text-[#444] font-normal text-2xl text-left space-y-8'>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Account.Standard.standardSubtitle1")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=' md:w-[700px]'> {t("Account.Standard.standardSubtitle1_Description")}</div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Account.Standard.standardSubtitle2")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=' md:w-[700px]'> {t("Account.Standard.standardSubtitle2_Description")}</div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Account.Standard.standardSubtitle3")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=' md:w-[700px]'> {t("Account.Standard.standardSubtitle3_Description")}</div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Account.Standard.standardSubtitle4")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=' md:w-[700px]'> {t("Account.Standard.standardSubtitle4_Description")}</div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Account.Standard.standardSubtitle5")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=' md:w-[700px]'> {t("Account.Standard.standardSubtitle5_Description")}</div> 
                                            </div>
                                        </div>
                                    </li>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Account.Standard.standardSubtitle6")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=' md:w-[700px]'> {t("Account.Standard.standardSubtitle6_Description")}</div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    {
                                        i18n.language === 'en' ? (
                                            <li> 
                                                <div className='font-bold flex flex-col'>
                                                    <div>{t("Account.Standard.standardSubtitle7")}</div>
                                                    <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-2'>
                                                        <div> - </div>
                                                        <div className=' md:w-[700px]'> {t("Account.Standard.standardSubtitle7_Description")}</div> 
                                                    </div>
                                                </div>
                                            </li>
                                        ) : (
                                            null
                                        )
                                    }
                                    
                                </ul>
                            </div>
                            <div className='flex flex-col md:hidden'>
                                <div className='text-[#444] text-sm space-y-3'>
                                    <div className='leading-[1.20] text-left'>
                                        <div className='flex flex-col'>
                                            <div className='font-bold'>{t("Account.Standard.standardSubtitle1")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-1'>
                                                <div className='font-normal'> - </div>
                                                <div className='font-normal'> {t("Account.Standard.standardSubtitle1_Description")}</div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className='leading-[1.20] text-left'>
                                        <div className='flex flex-col'>
                                            <div className='font-bold'>{t("Account.Standard.standardSubtitle2")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-1'>
                                                <div className='font-normal'> - </div>
                                                <div className='font-normal'> {t("Account.Standard.standardSubtitle2_Description")}</div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className='leading-[1.20] text-left'>
                                        <div className='flex flex-col'>
                                            <div className='font-bold'>{t("Account.Standard.standardSubtitle3")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-1'>
                                                <div className='font-normal'> - </div>
                                                <div className='font-normal'> {t("Account.Standard.standardSubtitle3_Description")}</div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className='leading-[1.20] text-left'>
                                        <div className='flex flex-col'>
                                            <div className='font-bold'>{t("Account.Standard.standardSubtitle4")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-1'>
                                                <div className='font-normal'> - </div>
                                                <div className='font-normal'> {t("Account.Standard.standardSubtitle4_Description")}</div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className='leading-[1.20] text-left'>
                                        <div className='flex flex-col'>
                                            <div className='font-bold'>{t("Account.Standard.standardSubtitle5")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-1'>
                                                <div className='font-normal'> - </div>
                                                <div className='font-normal'> {t("Account.Standard.standardSubtitle5_Description")}</div> 
                                            </div>
                                        </div>  
                                    </div>
                                    <div className='leading-[1.20] text-left'>
                                        <div className='flex flex-col'>
                                            <div className='font-bold'>{t("Account.Standard.standardSubtitle6")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-1'>
                                                <div className='font-normal'> - </div>
                                                <div className='font-normal'> {t("Account.Standard.standardSubtitle6_Description")}</div> 
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        i18n.language === 'en' ? (
                                            <div className='leading-[1.20] text-left'>
                                                <div className='flex flex-col'>
                                                    <div className='font-bold'>{t("Account.Standard.standardSubtitle7")}</div>
                                                    <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-1'>
                                                        <div className='font-normal'> - </div>
                                                        <div className='font-normal'> {t("Account.Standard.standardSubtitle7_Description")}</div> 
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            null
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[10px]'>
                            <div className='text-[#1C7800] text-xl md:text-[40px] font-bold leading-normal text-left'>
                                {t("Account.ECN.ECNTitle")}
                            </div>
                            <div className='hidden md:flex flex-col'>
                                <ul className='list-none text-[#444] font-normal text-2xl text-left space-y-8'>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Account.ECN.ECNSubtitle1")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-2'>
                                                <div> - </div>
                                                <div>{t("Account.ECN.ECNSubtitle1_Description")} </div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Account.ECN.ECNSubtitle2")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=' md:w-[700px]'> {t("Account.ECN.ECNSubtitle2_Description")}</div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Account.ECN.ECNSubtitle3")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=' md:w-[700px]'> {t("Account.ECN.ECNSubtitle3_Description")}</div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    {
                                        i18n.language === 'en' ? (
                                            <li> 
                                                <div className='font-bold flex flex-col'>
                                                    <div>{t("Account.ECN.ECNSubtitle4")}</div>
                                                    <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-2'>
                                                        <div> - </div>
                                                        <div className=' md:w-[700px]'> {t("Account.ECN.ECNSubtitle4_Description")}</div> 
                                                    </div>
                                                </div>
                                                
                                            </li>
                                        ) : (
                                            null
                                        )
                                    }
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Account.ECN.ECNSubtitle5")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=' md:w-[700px]'> {t("Account.ECN.ECNSubtitle5_Description")}</div> 
                                            </div>
                                        </div>
                                    </li>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Account.ECN.ECNSubtitle6")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=' md:w-[700px]'> {t("Account.ECN.ECNSubtitle6_Description")}</div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Account.ECN.ECNSubtitle7")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className='pr-2'> {t("Account.ECN.ECNSubtitle7_Description")}</div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                </ul>
                            </div>
                            <div className='flex flex-col md:hidden'>
                                <div className='text-[#444] text-sm space-y-3'>
                                    <div className='leading-[1.20] text-left'>
                                        <div className='flex flex-col'>
                                            {
                                                i18n.language === 'en' ? (
                                                    <div className='font-bold'>{t("Account.Standard.standardSubtitle1")}</div>
                                                ) : (
                                                    <div className='font-bold'>{t("Account.Standard.standardSubtitle1")}</div>
                                                )
                                            }
                                            
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-1'>
                                                <div className='font-normal'> - </div>
                                                <div className='font-normal leading-normal'> {t("Account.ECN.ECNSubtitle1_Description")}</div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className='leading-[1.20] text-left'>
                                        <div className='flex flex-col'>
                                            <div className='font-bold'>{t("Account.ECN.ECNSubtitle2")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-1'>
                                                <div className='font-normal'> - </div>
                                                <div className='font-normal leading-normal'> {t("Account.ECN.ECNSubtitle2_Description")}</div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className='leading-[1.20] text-left'>
                                        <div className='flex flex-col'>
                                            <div className='font-bold'>{t("Account.ECN.ECNSubtitle3")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-1'>
                                                <div className='font-normal'> - </div>
                                                <div className='font-normal leading-normal'> {t("Account.ECN.ECNSubtitle3_Description")}</div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className='leading-[1.20] text-left'>
                                        <div className='flex flex-col'>
                                            <div className='font-bold'>{t("Account.ECN.ECNSubtitle4")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-1'>
                                                <div className='font-normal'> - </div>
                                                <div className='font-normal leading-normal'> {t("Account.ECN.ECNSubtitle4_Description")}</div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className='leading-[1.20] text-left'>
                                        <div className='flex flex-col'>
                                            <div className='font-bold'>{t("Account.ECN.ECNSubtitle5")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-1'>
                                                <div className='font-normal'> - </div>
                                                <div className='font-normal leading-normal'> {t("Account.ECN.ECNSubtitle5_Description")}</div> 
                                            </div>
                                        </div>  
                                    </div>
                                    <div className='leading-[1.20] text-left'>
                                        {
                                            i18n.language === 'en' ? (
                                                <div className='flex flex-col'>
                                                    <div className='font-bold'>{t("Account.ECN.ECNSubtitle7")}</div>
                                                    <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-1'>
                                                        <div className='font-normal'> - </div>
                                                        <div className='font-normal leading-normal'> {t("Account.ECN.ECNSubtitle7_Description")}</div> 
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className='flex flex-col'>
                                                    <div className='font-bold'>{t("Account.ECN.ECNSubtitle7")}</div>
                                                    <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-1'>
                                                        <div className='font-normal'> - </div>
                                                        <div className='font-normal leading-normal'> {t("Account.ECN.ECNSubtitle71_Description")}</div> 
                                                    </div>
                                                </div>
                                            )
                                        }
                                        
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-5 md:gap-[20px]'>
                            <div className='text-[#444] text-base md:text-2xl text-left font-bold leading-tight md:leading-normal'>
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
                                            {/* <div className='text-[#444] text-2xl text-left leading-normal'>
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
                                            <div className='text-[#444] text-sm md:text-2xl text-left leading-normal'>
                                                {/* {t("openTradingACC.tradingAcc_Description")} */}
                                                {t("openTradingACC.tradingAcc_Description2")} <span className='text-primary md:font-medium'>{t("openTradingACC.tradingAcc_Description3")}</span>
                                            </div>
                                        ) : (
                                            <div className='text-[#444] text-sm md:text-2xl text-left leading-normal'>
                                                {t("openTradingACC.tradingAcc_Description")}
                                                {t("openTradingACC.tradingAcc_Description2")} <span className='text-primary font-semibold md:font-medium'>{t("openTradingACC.tradingAcc_Description3")}</span>
                                            </div>
                                        )
                                    }
                                    
                                </div>
                            </div>
                        </div>

                        {/* HERE */}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Account;