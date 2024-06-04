import React, { useRef, useEffect, useState, useContext } from 'react';
import google from '../Assets/Images/googleplay.svg';
import apple from '../Assets/Images/apple.svg';
import { Window } from '../Components/Brand';
import partner_IMG from '../Assets/Images/partner_img.png';
import Equal from '../Assets/Images/equal.png';
import Gifts from '../Assets/Images/gift.png';
import { Sponsor, Friends, Bonuses} from '../Components/Outline';
import mobile_IOS_PS from '../Assets/Images/mobile_IOS_PS.svg';
import { LanguageContext } from "../LanguagesContext";

const Partner = () => {
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
        <div>
            <div className='relative'>
                <video autoPlay loop playsInline muted preload='auto' ref={videoRef} className='w-full'>
                    <source src='/assets/videos/partner.mp4' type='video/mp4'/>
                </video>

                <div className='absolute left-[20px] md:left-[100px] bottom-[20px] md:bottom-[100px] flex flex-col justify-center items-start gap-[50px]'>
                    <div className='flex flex-col gap-[15px] md:gap-5'>
                        <div className='text-white text-base md:text-5xl font-bold leading-none text-left w-[210px] md:w-[624px]'>
                            {t("Partner.partnerVideoTitle")}
                        </div>
                        <div className='flex flex-col'>
                            <div className='text-white text-left'>
                                <div className={`${language === 'en' ? 'text-xs md:text-2xl font-semibold w-[310px] md:w-[650px]': 
                                                   language === 'zh' ? 'text-xs md:text-3xl font-semibold w-[350px] md:w-[850px]':  ''}`}>
                                        {t("Partner.partnerVideoDescription")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center'>
                <div className='max-w-[1000px] w-full mt-[100px] md:mt-[150px]'>
                    <div className='flex flex-col gap-[100px] md:gap-[150px] mb-[100px] md:mb-[150px] mx-5 md:mx-0'>
                        <div className='flex flex-col gap-[50px] md:gap-[200px]'>
                            <div className='flex flex-col gap-[100px] md:gap-[200px]'>
                                <div className='flex flex-col gap-[150px]'>
                                    <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                        <div className='flex flex-col text-[#1C7800] text-left'>
                                            <div className={`${language === 'en' ? 'text-[24px] md:text-[40px] font-bold md:w-[1000px] leading-[1.20]': 
                                                               language === 'zh' ? 'text-[24px] md:text-[40px] font-bold md:w-[1000px] leading-[1.20]':  ''}`}>
                                                    <div className='hidden md:flex flex-col'>
                                                        <div>{t("Partner.partnerTitle")}</div> 
                                                        <div>{t("Partner.partnerTitle2")}</div> 
                                                    </div>
                                                    <div className='md:hidden'>
                                                        {t("Partner.partnerTitle")}
                                                        {t("Partner.partnerTitle2")}
                                                    </div>
                                                    
                                            </div>
                                        </div>
                                        <div className='flex flex-col text-[#444] font-medium text-left'>
                                            <div className={`${language === 'en' ? 'text-base md:text-[36px] font-medium md:w-[900px] leading-[1.20]': 
                                                               language === 'zh' ? 'text-base md:text-[36px] font-medium md:w-[1000px] leading-[1.20]':  ''}`}>
                                                {t("Partner.partnerDescription")}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className='flex flex-row gap-[45px] md:gap-[147px] justify-center'>
                                    <img src={partner_IMG} alt="partners" className='w-[60px] h-[60px] md:h-[200px] md:w-[200px]' />
                                    <div className='flex flex-col w-[30px] md:w-[100px] h-[18px] md:h-[60px] mt-[25px] md:mt-[70px]'>
                                        <img src={Equal} alt="Equal" />
                                    </div>
                                    
                                    <div className='flex flex-row gap-[2px] md:gap-[5px]'>
                                        <img src={Gifts} alt="gifts" className='w-[60px] md:w-[200px] h-[60px] md:h-[200px]'/>
                                        <img src={Gifts} alt="gifts" className='w-[60px] md:w-[200px] h-[60px] md:h-[200px]'/>
                                    </div>
                                </div>

                                <div className='hidden md:flex justify-center gap-[50px]'>
                                    <div className='w-[300px] flex flex-col gap-[30px] rounded-[20px] items-center pt-[38px] pb-[62px] px-[40px] bg-primary-50 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
                                        <div className='flex flex-col text-[#1C7800] text-left text-[16px] font-bold'>
                                            {t("Partner.partnerSubtitle")}
                                        </div>
                                        <Sponsor/>
                                        <div className='text-[#444]'>
                                            <div className={`${language === 'en' ? 'md:text-base font-bold w-[220px]': 
                                                            language === 'zh' ? 'md:text-base font-bold w-[220px]':  ''}`}>
                                                <div className='leading-[1.20]'>{t("Partner.partnerSubtitleDescription")}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-[300px] flex flex-col gap-[30px] rounded-[20px] items-center pt-[38px] pb-[82px] px-[40px] bg-primary-50 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
                                        <div className='flex flex-col text-[#1C7800] text-left text-[16px] font-bold'>
                                            {t("Partner.partnerSubtitle2")}
                                        </div>
                                        <Friends/>
                                        <div className='text-[#444]'>
                                            <div className={`${language === 'en' ? 'md:text-base font-bold w-[220px]': 
                                                            language === 'zh' ? 'md:text-base font-bold w-[220px]':  ''}`}>
                                                <div className='leading-[1.20]'>{t("Partner.partnerSubtitle2Description")}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-[300px] flex flex-col gap-[30px] rounded-[20px] items-center pt-[39px] pb-[62px] px-[40px] bg-primary-50 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
                                        <div className='flex flex-col text-[#1C7800] text-left text-[16px] font-bold'>
                                            {t("Partner.partnerSubtitle3")}
                                        </div>
                                        <Bonuses/>
                                        <div className='text-[#444]'>
                                            <div className={`${language === 'en' ? 'md:text-base font-bold w-[220px]': 
                                                            language === 'zh' ? 'md:text-base font-bold w-[220px]':  ''}`}>
                                                <div className='leading-[1.20]'>{t("Partner.partnerSubtitle3Description")}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* mobile version */}
                                <div className='flex flex-col justify-center gap-[30px] md:gap-[50px] md:hidden items-center'>
                                    <div className='w-[313px] flex flex-col gap-[20px] rounded-[20px] items-center pt-[30px] pb-[60px] px-[31px] bg-primary-50 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
                                        <div className='flex flex-col text-[#1C7800] text-left text-[16px] font-bold leading-tight'>
                                            {t("Partner.partnerSubtitle")}
                                        </div>
                                        <Sponsor/>
                                        <div className='text-[#444] leading-tight'>
                                            <div className={`${language === 'en' ? 'text-base font-bold w-[225px]': 
                                                               language === 'zh' ? 'text-base font-bold w-[205px]':  ''}`}>
                                                <div className='leading-[1.20]'>{t("Partner.partnerSubtitleDescription")}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='w-[313px] flex flex-col gap-[20px] rounded-[20px] items-center pt-[30px] pb-[60px] px-[31px] bg-primary-50 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
                                        <div className='flex flex-col text-[#1C7800] text-left text-[16px] font-bold leading-tight'>
                                            {t("Partner.partnerSubtitle2")}
                                        </div>
                                        <Friends/>
                                        <div className='text-[#444] leading-tight'>
                                            <div className={`${language === 'en' ? 'text-base font-bold w-[220px]': 
                                                               language === 'zh' ? 'text-base font-bold w-[170px]':  ''}`}>
                                                    <div className='leading-[1.20]'>{t("Partner.partnerSubtitle2Description")}</div>
                                                </div>
                                            </div>
                                    </div>
                                    <div className='w-[313px] flex flex-col gap-[20px] rounded-[20px] items-center pt-[30px] pb-[45px] px-[32px] bg-primary-50 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
                                        <div className='flex flex-col text-[#1C7800] text-left text-[16px] font-bold leading-tight'>
                                            {t("Partner.partnerSubtitle3")}
                                        </div>
                                        <Bonuses/>
                                        <div className='text-[#444] leading-tight'>
                                            <div className={`${language === 'en' ? 'text-base font-bold w-[240px]': 
                                                               language === 'zh' ? 'text-base font-bold w-[220px]':  ''}`}>
                                                <div className='leading-[1.20]'>{t("Partner.partnerSubtitle3Description")}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[10px]'>
                                    <div className='flex flex-col text-[#1C7800] text-left text-2xl md:text-[40px] font-bold'>
                                        {t("Partner.Rewards.rewardsTitle")}
                                    </div>
                                    <div className='flex flex-col text-[#444] text-left'>
                                        <div className={`${language === 'en' ? 'text-base md:text-xl font-medium md:w-[900px] leading-[1.20]': 
                                                           language === 'zh' ? 'text-base md:text-4xl font-medium md:w-[1000px] leading-[1.20]':  ''}`}>
                                            <div className='leading-[1.20]'>{t("Partner.Rewards.rewardsDescription")}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[10px] md:gap-[20px]'>
                                    <div>
                                        <table className="table-auto w-[100%] border-collapse text-center font-medium">
                                            <thead>
                                            <tr className=' bg-[#1C7800] text-[#fff] border-white text-[10px] md:text-[16px]'>
                                                <th className='h-[30px] border-[2px] border-white w-[69px] md:w-[312px] pl-[6px] md:pl-[20px] font-medium'>
                                                    <div className='hidden md:flex text-left font-medium'>{t("Partner.Rewards.rewardsCol1_Title")}</div>
                                                    <div className='md:hidden text-left'>
                                                        <div className={`${language === 'en' ? 'font-semibold md:font-medium': 
                                                                       language === 'zh' ? 'font-semibold md:font-medium':  ''}`}>
                                                            {t("Partner.Rewards.rewardsCol1_mobileTitle")}<br />{t("Partner.Rewards.rewardsCol1_mobileTitle2")}
                                                        </div>
                                                    </div>
                                                </th>
                                                <th className='h-[30px] w-[69px] md:w-[170px] border-[2px] border-white'>
                                                    <div className='hidden md:flex justify-center font-medium'>{t("Partner.Rewards.rewardsCol2_Title")}</div>
                                                    <div className='md:hidden justify-center'>{t("Partner.Rewards.rewardsCol2_mobileTitle")}
                                                        <br />{t("Partner.Rewards.rewardsCol2_mobileTitle2")}
                                                    </div>
                                                </th>
                                                <th className='h-[30px] w-[69px] md:w-[170px] border-[2px] border-white'>
                                                    <div className='hidden md:flex justify-center font-medium'>{t("Partner.Rewards.rewardsCol3_Title")}</div>
                                                    <div className='md:hidden justify-center'>{t("Partner.Rewards.rewardsCol3_mobileTitle")}
                                                        <br />{t("Partner.Rewards.rewardsCol3_mobileTitle2")}
                                                    </div>
                                                </th>
                                                <th className='h-[30px] w-[69px] md:w-[170px] border-[2px] border-white'>
                                                    <div className='hidden md:flex justify-center font-medium'>{t("Partner.Rewards.rewardsCol4_Title")}</div>
                                                    <div className='md:hidden justify-center'>{t("Partner.Rewards.rewardsCol4_mobileTitle")}
                                                        <br />{t("Partner.Rewards.rewardsCol4_mobileTitle2")}
                                                    </div>
                                                </th>
                                                <th className='h-[30px] w-[69px] md:w-[170px] border-[2px] border-white'>
                                                    <div className='hidden md:flex justify-center font-medium'>{t("Partner.Rewards.rewardsCol5_Title")}</div>
                                                    <div className='md:hidden justify-center'>{t("Partner.Rewards.rewardsCol5_mobileTitle")}
                                                        <br />{t("Partner.Rewards.rewardsCol5_mobileTitle2")}
                                                    </div>
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr className=' bg-[#ECFFE6] text-[10px] md:text-[14px]'>
                                                <td className='h-[40px] md:h-[30px] border-[2px] border-white text-left pl-[6px] md:pl-[20px]'>
                                                    <div className='hidden md:flex'>{t("Partner.Rewards.rewardsRow1_Title")}</div>
                                                    <div className='md:hidden'>{t("Partner.Rewards.rewardsRow1_mobileTitle")}
                                                        <br />{t("Partner.Rewards.rewardsRow1_mobileTitle2")}
                                                    </div>
                                                </td>
                                                <td rowSpan={4}>14</td>
                                                <td className='h-[30px] border-[2px] border-white'>3,000.00</td>
                                                <td className='h-[30px] border-[2px] border-white'>5,000.00</td>
                                                <td className='h-[30px] border-[2px] border-white'>10,000.00</td>
                                            </tr>
                                            <tr className=' bg-[#ECFFE6] text-[10px] md:text-[14px]'>
                                                <td className='h-[40px] md:h-[30px] border-[2px] border-white text-left pl-[6px] md:pl-[20px]'>
                                                    <div className='hidden md:flex'>{t("Partner.Rewards.rewardsRow2_Title")}</div>
                                                    <div className='md:hidden'>{t("Partner.Rewards.rewardsRow2_mobileTitle")}
                                                    <br />{t("Partner.Rewards.rewardsRow2_mobileTitle2")}</div>
                                                </td>
                                                <td className='h-[30px] border-[2px] border-white hidden md:table-cell'>{t("Partner.Rewards.rewardsData1")}</td>
                                                <td className='h-[30px] border-[2px] border-white hidden md:table-cell'>{t("Partner.Rewards.rewardsData2")}</td>
                                                <td className='h-[30px] border-[2px] border-white hidden md:table-cell'>{t("Partner.Rewards.rewardsData3")}</td>
                                                <td className='h-[30px] border-[2px] border-white md:hidden'>{t("Partner.Rewards.rewardsMobileData1")}</td>
                                                <td className='h-[30px] border-[2px] border-white md:hidden'>{t("Partner.Rewards.rewardsMobileData2")}</td>
                                                <td className='h-[30px] border-[2px] border-white md:hidden'>{t("Partner.Rewards.rewardsMobileData3")}</td>
                                            </tr>
                                            <tr className=' bg-[#ECFFE6] text-[10px] md:text-[14px]'>
                                                <td className='h-[40px] md:h-[30px] border-[2px] border-white text-left pl-[6px] md:pl-[20px]'>
                                                    <div className='hidden md:flex'>{t("Partner.Rewards.rewardsRow3_Title")}</div>
                                                    <div className='md:hidden'>{t("Partner.Rewards.rewardsRow3_mobileTitle")}
                                                    <br />{t("Partner.Rewards.rewardsRow3_mobileTitle2")}</div>
                                                </td>
                                                <td className='h-[30px] border-[2px] border-white'>100.00</td>
                                                <td className='h-[30px] border-[2px] border-white'>200.00</td>
                                                <td className='h-[30px] border-[2px] border-white'>500.00</td>
                                            </tr>
                                            <tr className=' bg-[#ECFFE6] text-[10px] md:text-[14px]'>
                                                <td className='h-[40px] md:h-[30px] border-[2px] border-white text-left pl-[6px] md:pl-[20px]'>
                                                    <div className='hidden md:flex'>{t("Partner.Rewards.rewardsRow4_Title")}</div>
                                                    <div className='md:hidden'>{t("Partner.Rewards.rewardsRow4_mobileTitle")}
                                                    <br />{t("Partner.Rewards.rewardsRow4_mobileTitle2")}</div>
                                                </td>
                                                <td className='h-[30px] border-[2px] border-white'>100.00</td>
                                                <td className='h-[30px] border-[2px] border-white'>200.00</td>
                                                <td className='h-[30px] border-[2px] border-white'>500.00</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <ul className='list-disc text-[#444] font-normal text-2xl mx-7'>
                                        <li className=' text-[#1C7800] text-xs font-medium underline text-left'>
                                            <div className={`${language === 'en' ? 'text-xs md:text-[20px] font-medium': 
                                                               language === 'zh' ? 'text-sm md:text-[20px] font-semibold md:font-medium':  ''}`}>
                                                {t("Partner.Rewards.rewardReminder")}
                                            </div>
                                        </li> 
                                    </ul>
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

export default Partner;