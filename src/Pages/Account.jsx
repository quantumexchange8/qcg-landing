import React, { useRef, useEffect, useState, useContext } from 'react';
import google from '../Assets/Images/googleplay.svg';
import apple from '../Assets/Images/apple.svg';
import window from '../Assets/Images/window.png';
// import mobile_IOS_PS from '../Assets/Images/mobile_IOS_PS.svg';
import { LanguageContext } from "../LanguagesContext";
import { AppleMobileIcon, PlayStoreIcon } from '../Components/Brand';
import AccountMobile from '../Assets/Videos/account.mp4';

const Account = () => {
    const textRef = useRef(null);
    const [, setAnimate] = useState(false);
    const { t, language} = useContext(LanguageContext);
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
                    <source src='/assets/videos/account.mp4' type='video/mp4'/>
                </video>

                <video autoPlay loop playsInline muted preload='auto' ref={videoRef} className='block object-cover h-[300px] md:hidden'>
                    <source src={AccountMobile} type='video/mp4'/>
                </video>

                <div className='absolute inset-0 flex justify-center'>
                    <div className='max-w-[1000px] w-full flex flex-col items-start justify-end gap-[10px] md:gap-5 py-[50px] px-[30px] md:px-0 md:py-[100px]'>
                        <div className='text-white text-xl md:text-5xl text-left font-bold leading-none'>
                            <div className='w-[160px] md:w-full'>
                                {t("Account.accountVideoTitle")}
                            </div>
                            
                        </div>
                        {
                            language === 'en' ? (
                                <div className='text-white text-sm md:text-2xl text-left leading-tight md:leading-none font-semibold md:font-bold max-w-[175px] md:max-w-[300px]'>
                                    {t("Account.accountVideoDescription")}
                                </div>
                            ) : (
                                <div className='flex flex-col text-white text-sm md:text-2xl text-left leading-tight md:leading-tight font-semibold md:font-bold max-w-[175px] md:max-w-[300px]'>
                                    <div>{t("Account.accountVideoDescription")}</div>
                                    <div>{t("Account.accountVideoDescription1")}</div>
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <div className='max-w-[1000px] w-full py-[50px] px-[30px] md:px-0 md:py-[150px]'>

                    <div className='flex flex-col gap-[50px] md:gap-[150px]'>

                        <div className='flex flex-col gap-[10px] md:gap-5'>
                            <div className='flex flex-col text-[#1C7800] text-left text-xl md:text-5xl font-bold leading-tight'>
                                {t("Account.accountTitle")}
                            </div>
                            {
                                language === 'en' ? (
                                    <div className='flex flex-col text-[#444] text-left text-sm md:text-2xl font-semibold leading-tight'>
                                        <div className='hidden md:block'>{t("Account.accountDescription")}</div>
                                        <div className='hidden md:block'>{t("Account.accountDescription2")}</div>

                                        <div className='block md:hidden'>{t("Account.accountDescriptionMobile")}</div>
                                    </div>
                                ) : (
                                    <div className='flex flex-col text-[#444] text-left text-sm md:text-2xl font-semibold leading-tight'>
                                        <div className='hidden md:block'>{t("Account.accountDescription")}</div>

                                        <div className='block md:hidden'>{t("Account.accountDescriptionMobile")}</div>
                                    </div>
                                )
                            }
                            
                        </div>

                        {
                            language === 'en' ? (
                                <div className='block md:hidden'></div>
                            ) : (
                                null
                            )
                        }
                        

                        <div className='flex flex-col gap-[10px] md:gap-5'>
                            <div className='text-[#1C7800] text-2xl md:text-5xl font-bold text-left'>
                                {t("Account.Standard.standardTitle")}
                            </div>
                            
                            <div className='hidden md:flex flex-col'>
                                <ul className='list-disc text-[#444] font-normal text-2xl text-left mx-7 space-y-8'>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Account.Standard.standardSubtitle1")}</div>
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=' md:w-[700px]'> {t("Account.Standard.standardSubtitle1_Description")}</div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Account.Standard.standardSubtitle2")}</div>
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=' md:w-[700px]'> {t("Account.Standard.standardSubtitle2_Description")}</div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Account.Standard.standardSubtitle3")}</div>
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=' md:w-[700px]'> {t("Account.Standard.standardSubtitle3_Description")}</div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Account.Standard.standardSubtitle4")}</div>
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=' md:w-[700px]'> {t("Account.Standard.standardSubtitle4_Description")}</div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Account.Standard.standardSubtitle5")}</div>
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=' md:w-[700px]'> {t("Account.Standard.standardSubtitle5_Description")}</div> 
                                            </div>
                                        </div>
                                    </li>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Account.Standard.standardSubtitle6")}</div>
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=' md:w-[700px]'> {t("Account.Standard.standardSubtitle6_Description")}</div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    {
                                        language === 'en' ? (
                                            <li> 
                                                <div className='font-bold flex flex-col'>
                                                    <div>{t("Account.Standard.standardSubtitle7")}</div>
                                                    <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-2'>
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
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-1'>
                                                <div className='font-semibold'> - </div>
                                                <div className='font-medium'> {t("Account.Standard.standardSubtitle1_Description")}</div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className='leading-[1.20] text-left'>
                                        <div className='flex flex-col'>
                                            <div className='font-bold'>{t("Account.Standard.standardSubtitle2")}</div>
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-1'>
                                                <div className='font-semibold'> - </div>
                                                <div className='font-medium'> {t("Account.Standard.standardSubtitle2_Description")}</div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className='leading-[1.20] text-left'>
                                        <div className='flex flex-col'>
                                            <div className='font-bold'>{t("Account.Standard.standardSubtitle3")}</div>
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-1'>
                                                <div className='font-semibold'> - </div>
                                                <div className='font-medium'> {t("Account.Standard.standardSubtitle3_Description")}</div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className='leading-[1.20] text-left'>
                                        <div className='flex flex-col'>
                                            <div className='font-bold'>{t("Account.Standard.standardSubtitle4")}</div>
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-1'>
                                                <div className='font-semibold'> - </div>
                                                <div className='font-medium'> {t("Account.Standard.standardSubtitle4_Description")}</div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className='leading-[1.20] text-left'>
                                        <div className='flex flex-col'>
                                            <div className='font-bold'>{t("Account.Standard.standardSubtitle5")}</div>
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-1'>
                                                <div className='font-semibold'> - </div>
                                                <div className='font-medium'> {t("Account.Standard.standardSubtitle5_Description")}</div> 
                                            </div>
                                        </div>  
                                    </div>
                                    <div className='leading-[1.20] text-left'>
                                        <div className='flex flex-col'>
                                            <div className='font-bold'>{t("Account.Standard.standardSubtitle6")}</div>
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-1'>
                                                <div className='font-semibold'> - </div>
                                                <div className='font-medium'> {t("Account.Standard.standardSubtitle6_Description")}</div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[10px] md:gap-5'>
                            <div className='text-[#1C7800] text-2xl md:text-5xl font-bold text-left'>
                                {t("Account.ECN.ECNTitle")}
                            </div>
                            <div className='hidden md:flex flex-col'>
                                <ul className='list-disc text-[#444] font-normal text-2xl text-left mx-7 space-y-8'>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Account.ECN.ECNSubtitle1")}</div>
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-2'>
                                                <div> - </div>
                                                <div>{t("Account.ECN.ECNSubtitle1_Description")} </div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Account.ECN.ECNSubtitle2")}</div>
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=' md:w-[700px]'> {t("Account.ECN.ECNSubtitle2_Description")}</div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Account.ECN.ECNSubtitle3")}</div>
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=' md:w-[700px]'> {t("Account.ECN.ECNSubtitle3_Description")}</div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    {
                                        language === 'en' ? (
                                            <li> 
                                                <div className='font-bold flex flex-col'>
                                                    <div>{t("Account.ECN.ECNSubtitle4")}</div>
                                                    <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-2'>
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
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=' md:w-[700px]'> {t("Account.ECN.ECNSubtitle5_Description")}</div> 
                                            </div>
                                        </div>
                                    </li>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Account.ECN.ECNSubtitle6")}</div>
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=' md:w-[700px]'> {t("Account.ECN.ECNSubtitle6_Description")}</div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    {
                                        language === 'en' ? (
                                            <li> 
                                                <div className='font-bold flex flex-col'>
                                                    <div>{t("Account.ECN.ECNSubtitle7")}</div>
                                                    <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-2'>
                                                        <div> - </div>
                                                        <div> {t("Account.ECN.ECNSubtitle7_Description")}</div> 
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
                                            {
                                                language === 'en' ? (
                                                    <div className='font-bold'>{t("Account.Standard.standardSubtitle1")}</div>
                                                ) : (
                                                    <div className='font-bold'>{t("Account.Standard.standardSubtitle1")}</div>
                                                )
                                            }
                                            
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-1'>
                                                <div className='font-semibold'> - </div>
                                                <div className='font-medium'> {t("Account.ECN.ECNSubtitle1_Description")}</div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className='leading-[1.20] text-left'>
                                        <div className='flex flex-col'>
                                            <div className='font-bold'>{t("Account.ECN.ECNSubtitle2")}</div>
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-1'>
                                                <div className='font-semibold'> - </div>
                                                <div className='font-medium'> {t("Account.ECN.ECNSubtitle2_Description")}</div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className='leading-[1.20] text-left'>
                                        <div className='flex flex-col'>
                                            <div className='font-bold'>{t("Account.ECN.ECNSubtitle3")}</div>
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-1'>
                                                <div className='font-semibold'> - </div>
                                                <div className='font-medium'> {t("Account.ECN.ECNSubtitle3_Description")}</div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className='leading-[1.20] text-left'>
                                        <div className='flex flex-col'>
                                            <div className='font-bold'>{t("Account.ECN.ECNSubtitle4")}</div>
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-1'>
                                                <div className='font-semibold'> - </div>
                                                <div className='font-medium'> {t("Account.ECN.ECNSubtitle4_Description")}</div> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className='leading-[1.20] text-left'>
                                        <div className='flex flex-col'>
                                            <div className='font-bold'>{t("Account.ECN.ECNSubtitle5")}</div>
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-1'>
                                                <div className='font-semibold'> - </div>
                                                <div className='font-medium'> {t("Account.ECN.ECNSubtitle5_Description")}</div> 
                                            </div>
                                        </div>  
                                    </div>
                                    <div className='leading-[1.20] text-left'>
                                        {
                                            language === 'en' ? (
                                                <div className='flex flex-col'>
                                                    <div className='font-bold'>{t("Account.ECN.ECNSubtitle7")}</div>
                                                    <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-1'>
                                                        <div className='font-semibold'> - </div>
                                                        <div className='font-medium'> {t("Account.ECN.ECNSubtitle7_Description")}</div> 
                                                    </div>
                                                </div>
                                            ) : (
                                                <div className='flex flex-col'>
                                                    <div className='font-bold'>{t("Account.ECN.ECNSubtitle7")}</div>
                                                    <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-1'>
                                                        <div className='font-semibold'> - </div>
                                                        <div className='font-medium'> {t("Account.ECN.ECNSubtitle71_Description")}</div> 
                                                    </div>
                                                </div>
                                            )
                                        }
                                        
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
                                        {/* <Window/> */}
                                    </div>
                                    <div className='flex items-center gap-[26px] md:hidden'>
                                        {/* <img src={mobile_IOS_PS} alt="IOS_PS" /> */}
                                        <AppleMobileIcon/>
                                        <PlayStoreIcon/>
                                        <a href="https://login.qcgbrokertw.com/login">
                                            <button className='w-[180px] h-[50px] md:w-[150px] bg-[#1C7800] text-white rounded-[5px] md:rounded-md flex items-center justify-center text-sm md:text-base font-bold'>
                                                {t("openTradingACC.liveACC_Title")}
                                            </button>
                                        </a>
                                        
                                    </div>
                                    
                                    <button className=' w-[180px] md:w-[159px] bg-[#1C7800] text-white rounded-[5px] md:rounded-md items-center justify-center text-sm md:text-base font-bold hidden md:flex'>
                                        <a href="https://login.qcgbrokertw.com/login">
                                            {t("openTradingACC.liveACC_Title")}
                                        </a>
                                    </button>
                                    
                                </div>
                                {
                                    language === 'en' ? (
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
                                    ) : (
                                        <div className='hidden md:flex flex-col'>
                                            <div className='text-[#444] text-2xl text-left font-semibold leading-tight'>
                                                {t("openTradingACC.tradingAcc_Description")}
                                            </div>
                                            <div className='text-[#444] text-2xl text-left font-semibold leading-tight'> 
                                                {t("openTradingACC.tradingAcc_Description2")}
                                                <span className="text-[#1C7800]">
                                                    {t("openTradingACC.tradingAcc_Description3")}
                                                </span>
                                            </div>
                                        </div>
                                    )
                                }
                                
                                <div className='flex flex-col md:hidden'>
                                    {
                                        language === 'en' ? (
                                            <div className='text-[#444] text-sm md:text-2xl font-medium text-left leading-[1.20]'>
                                                {t("openTradingACC.tradingAcc_Description")}
                                                {t("openTradingACC.tradingAcc_Description2")} <span className='text-primary font-semibold md:font-medium'>{t("openTradingACC.tradingAcc_Description3")}</span>
                                            </div>
                                        ) : (
                                            <div className='text-[#444] text-sm md:text-2xl font-semibold text-left leading-[1.20]'>
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