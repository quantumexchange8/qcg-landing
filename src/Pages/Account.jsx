import React, { useRef, useEffect, useState, useContext } from 'react';
import google from '../Assets/Images/googleplay.svg';
import apple from '../Assets/Images/apple.svg';
import { Window } from '../Components/Brand';
import mobile_IOS_PS from '../Assets/Images/mobile_IOS_PS.svg';
import { LanguageContext } from "../LanguagesContext";

const Account = () => {
    const textRef = useRef(null);
    const [animate, setAnimate] = useState(false);
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
        <div className='mt-[60px] md:mt-0'>
            <div className='relative'>
                <video autoPlay loop playsInline muted preload='auto' ref={videoRef} className='w-full'>
                    <source src='/assets/videos/account.mp4' type='video/mp4'/>
                </video>

                <div className='absolute left-[20px] md:left-[100px] bottom-[20px] md:bottom-[100px] flex flex-col justify-center items-start gap-[50px]'>
                    <div className='flex flex-col gap-[15px] md:gap-5'>
                        <div className='text-white text-left'>
                            <div className={`${language === 'en' ? 'text-base md:text-5xl font-bold w-[170px] md:w-[510px] leading-[1.20]': 
                                               language === 'zh' ? 'text-base md:text-5xl font-bold w-[353px] md:w-[800px] leading-[1.20]':  ''}`}>
                                {t("Account.accountVideoTitle")}
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <div className='text-white text-left'>
                                <div className={`${language === 'en' ? 'text-xs md:text-2xl font-semibold w-[325px] md:w-[500px] leading-[1.20]': 
                                                   language === 'zh' ? 'text-xs md:text-3xl font-semibold w-[320px] md:w-[800px] leading-[1.20]':  ''}`}>
                                    {t("Account.accountVideoDescription")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center'>
                <div className='max-w-[1000px] w-full mt-[100px] md:mt-[150px]'>
                    <div className='flex flex-col gap-[100px] md:gap-[150px] mb-[100px] md:mb-[150px] mx-5'>
                        <div className='flex flex-col gap-[100px]  md:gap-[200px]'>
                            <div className='flex flex-col gap-[100px] md:gap-[150px]'>
                                <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                    <div className='flex flex-col text-[#1C7800] text-left'>
                                        <div className={`${language === 'en' ? 'text-2xl md:text-5xl font-bold w-[250px] md:w-[1000px] leading-[1.20]': 
                                                           language === 'zh' ? 'text-2xl md:text-5xl font-bold w-[353px] md:w-[1000px] leading-[1.20]':  ''}`}>
                                            {t("Account.accountTitle")}
                                        </div>
                                    </div>
                                    <div className='flex flex-col text-[#444] text-left'>
                                        <div className={`${language === 'en' ? 'text-base md:text-4xl font-medium md:w-[950px] leading-[1.20]': 
                                                           language === 'zh' ? 'text-base md:text-4xl font-medium md:w-[995px] leading-[1.20]':  ''}`}>
                                            {t("Account.accountDescription")}
                                        </div>
                                    </div>

                                    {/* <div className='text-[#444] text-base font-medium leading-tight text-left md:hidden'>
                                        <span>Your Investment Account is a full-featured QCG account,</span>
                                        <span>without opening or maintenance fees. All you need to</span>
                                        <span>open your account online is your ID, a proof of residence</span>
                                        <span>(phone or utility bill), just a few minutes.</span>
                                    </div> */}
                                </div>

                                <div className='flex flex-col gap-[10px] md:gap-[50px] text-left'>
                                    <div className='text-[#1C7800] text-base md:text-4xl font-bold text-left'>
                                        <span className='text-[32px] md:text-8xl'>{t("Account.Standard.standardTitle")}</span> {t("Account.Standard.standardTitle2")}
                                    </div>
                                    <div className='hidden md:flex flex-col'>
                                        <ul className='list-disc text-[#444] font-normal text-2xl mx-7 space-y-2'>
                                            <li> <span className='font-bold'>{t("Account.Standard.standardSubtitle1")}</span>
                                                {t("Account.Standard.standardSubtitle1_Description")}
                                            </li>
                                            <li> <span className='font-bold'>{t("Account.Standard.standardSubtitle2")}</span>
                                                {t("Account.Standard.standardSubtitle2_Description")}
                                            </li>
                                            <li> <span className='font-bold'>{t("Account.Standard.standardSubtitle3")}</span>
                                                {t("Account.Standard.standardSubtitle3_Description")}
                                            </li>
                                            <li> <span className='font-bold'>{t("Account.Standard.standardSubtitle4")}</span>
                                                {t("Account.Standard.standardSubtitle4_Description")}
                                            </li>
                                            <li> <span className='font-bold'>{t("Account.Standard.standardSubtitle5")}</span>
                                                {t("Account.Standard.standardSubtitle5_Description")}
                                            </li>
                                            <li> <span className='font-bold'>{t("Account.Standard.standardSubtitle6")}</span>
                                                {t("Account.Standard.standardSubtitle6_Description")}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className='flex flex-col md:hidden'>
                                        <div className='text-[#444] font-normal text-base space-y-3'>
                                            <div className='leading-[1.20]'>
                                                <div className='block font-semibold'>{t("Account.Standard.standardSubtitle1")}</div>
                                                    {t("Account.Standard.standardSubtitle1_Description")}
                                            </div>
                                            <div className='leading-[1.20]'>
                                                <div className='block font-semibold'>{t("Account.Standard.standardSubtitle2")}</div>
                                                    {t("Account.Standard.standardSubtitle2_Description")}
                                            </div>
                                            <div className='leading-[1.20]'>
                                                <div className='block font-semibold'>{t("Account.Standard.standardSubtitle3")}</div>
                                                    {t("Account.Standard.standardSubtitle3_Description")}
                                            </div>
                                            <div className='leading-[1.20]'>
                                                <div className='block font-semibold'>{t("Account.Standard.standardSubtitle4")}</div>
                                                    {t("Account.Standard.standardSubtitle4_Description")}
                                            </div>
                                            <div className='leading-[1.20]'>
                                                <div className='block font-semibold'>{t("Account.Standard.standardSubtitle5")}</div>
                                                    {t("Account.Standard.standardSubtitle5_Description")}
                                            </div>
                                            <div className='leading-[1.20]'>
                                                <div className='block font-semibold'>{t("Account.Standard.standardSubtitle6")}</div>
                                                    {t("Account.Standard.standardSubtitle6_Description")}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='flex flex-col gap-[10px] md:gap-[50px] text-left'>
                                <div className='text-[#1C7800] text-base md:text-4xl font-bold text-left'>
                                    <span className='text-[32px] md:text-8xl'>{t("Account.ECN.ECNTitle")}</span> {t("Account.ECN.ECNTitle2")}
                                </div>
                                <div className='hidden md:flex flex-col'>
                                    <ul className='list-disc text-[#444] font-normal text-2xl mx-7 space-y-2'>
                                        <li> <span className='font-bold'>{t("Account.ECN.ECNSubtitle1")}</span>
                                            {t("Account.ECN.ECNSubtitle1_Description")}
                                        </li>
                                        <li> <span className='font-bold'>{t("Account.ECN.ECNSubtitle2")}</span>
                                            {t("Account.ECN.ECNSubtitle2_Description")}
                                        </li>
                                        <li> <span className='font-bold'>{t("Account.ECN.ECNSubtitle3")}</span>
                                            {t("Account.ECN.ECNSubtitle3_Description")}
                                        </li>
                                        <li> <span className='font-bold'>{t("Account.ECN.ECNSubtitle4")}</span>
                                            {t("Account.ECN.ECNSubtitle4_Description")}
                                        </li>
                                        <li> <span className='font-bold'>{t("Account.ECN.ECNSubtitle5")}</span>
                                            {t("Account.ECN.ECNSubtitle5_Description")}
                                        </li>
                                        <li> <span className='font-bold'>{t("Account.ECN.ECNSubtitle6")}</span>
                                            {t("Account.ECN.ECNSubtitle6_Description")}
                                        </li>
                                    </ul>
                                </div>
                                    
                                <div className='flex flex-col md:hidden'>       {/* mobile version */}
                                    <div className='text-[#444] font-normal text-base space-y-3'>
                                        <div className='leading-[1.20]'>
                                            <div className='block font-semibold'>{t("Account.ECN.ECNSubtitle1")}</div>
                                                {t("Account.ECN.ECNSubtitle1_Description")}
                                        </div>
                                        <div className='leading-[1.20]'>
                                            <div className='block font-semibold'>{t("Account.ECN.ECNSubtitle2")}</div>
                                                {t("Account.ECN.ECNSubtitle2_Description")}
                                        </div>
                                        <div className='leading-[1.20]'>
                                            <div className='block font-semibold'>{t("Account.ECN.ECNSubtitle3")}</div>
                                                {t("Account.ECN.ECNSubtitle3_Description")}
                                        </div>
                                        <div className='leading-[1.20]'>
                                            <div className='block font-semibold'>{t("Account.ECN.ECNSubtitle4")}</div>
                                                {t("Account.ECN.ECNSubtitle4_Description")}
                                        </div>
                                        <div className='leading-[1.20]'>
                                            <div className='block font-semibold'>{t("Account.ECN.ECNSubtitle5")}</div>
                                                {t("Account.ECN.ECNSubtitle5_Description")}
                                        </div>
                                        <div className='leading-[1.20]'>
                                            <div className='block font-semibold'>{t("Account.ECN.ECNSubtitle6")}</div>
                                                {t("Account.ECN.ECNSubtitle6_Description")}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-[10px] md:gap-[50px] text-left'>
                                <div className='text-[#1C7800] text-base md:text-4xl font-bold text-left'>
                                    <span className='text-[32px] md:text-8xl'>{t("Account.Social.SocialTitle")}</span> {t("Account.Social.SocialTitle2")}
                                </div>
                                <div className='hidden md:flex flex-col'>
                                    <ul className='list-disc text-[#444] font-normal text-2xl mx-7 space-y-2'>
                                        <li> <span className='font-bold'>{t("Account.Social.SocialSubtitle1")}</span>
                                            {t("Account.Social.SocialSubtitle1_Description")}
                                        </li>
                                        <li> <span className='font-bold'>{t("Account.Social.SocialSubtitle2")}</span>
                                            {t("Account.Social.SocialSubtitle2_Description")}
                                        </li>
                                        <li> <span className='font-bold'>{t("Account.Social.SocialSubtitle3")}</span>
                                            {t("Account.Social.SocialSubtitle3_Description")}
                                        </li>
                                        <li> <span className='font-bold'>{t("Account.Social.SocialSubtitle4")}</span>
                                            {t("Account.Social.SocialSubtitle4_Description")}
                                        </li>
                                        <li> <span className='font-bold'>{t("Account.Social.SocialSubtitle5")}</span>
                                            {t("Account.Social.SocialSubtitle5_Description")}
                                        </li>
                                        <li> <span className='font-bold'>{t("Account.Social.SocialSubtitle6")}</span>
                                            {t("Account.Social.SocialSubtitle6_Description")}
                                        </li>
                                    </ul>
                                </div>

                                <div className='flex flex-col md:hidden'>
                                    <div className='text-[#444] font-normal text-base space-y-3'>
                                        <div className='leading-[1.20]'>
                                            <div className='block font-semibold'>{t("Account.Social.SocialSubtitle1")}</div>
                                                {t("Account.Social.SocialSubtitle1_Description")}
                                        </div>
                                        <div className='leading-[1.20]'>
                                            <div className='block font-semibold'>{t("Account.Social.SocialSubtitle2")}</div>
                                                {t("Account.Social.SocialSubtitle2_Description")}
                                        </div>
                                        <div className='leading-[1.20]'>
                                            <div className='block font-semibold'>{t("Account.Social.SocialSubtitle3")}</div>
                                                {t("Account.Social.SocialSubtitle3_Description")}
                                        </div>
                                        <div className='leading-[1.20]'>
                                            <div className='block font-semibold'>{t("Account.Social.SocialSubtitle4")}</div>
                                                {t("Account.Social.SocialSubtitle4_Description")}
                                        </div>
                                        <div className='leading-[1.20]'>
                                            <div className='block font-semibold'>{t("Account.Social.SocialSubtitle5")}</div>
                                                {t("Account.Social.SocialSubtitle5_Description")}
                                        </div>
                                        <div className='leading-[1.20]'>
                                            <div className='block font-semibold'>{t("Account.Social.SocialSubtitle6")}</div>
                                                {t("Account.Social.SocialSubtitle6_Description")}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[10px] md:gap-[30px]'>
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

export default Account;