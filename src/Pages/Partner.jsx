import React, { useRef, useEffect, useState } from 'react';
import { BonusIcon, 
    CreditBonusIcon, 
    DailyRebateIcon, 
    // FormIcon, 
    IntelligentIcon, 
    RebateAllocateIcon, 
    RebateIcon, 
    RegisterIcon, 
    ShareIcon, 
    StreamLinedIcon,
    RebateMobileIcon,
    CreditBonusMobileIcon,
    RebateAllocateMobileIcon,
    DailyRebateMobileIcon,
    IntelligentMobileIcon,
    StreamLinedMobileIcon,
    // FormMobileIcon,
} from '../Components/Brand';
import Trade from '../Assets/Videos/trade.mp4';
// import Modal from '../Components/Modal';
// import { AppleMobileIcon, PlayStoreIcon } from '../Components/Brand';
import google from '../Assets/Images/googleNew.svg';
import apple from '../Assets/Images/appleNew.svg';
import window from '../Assets/Images/windowNew.svg';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import qcgLive from '../Assets/Images/qcgLive.svg';

const Partner = () => {
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

    //   const [openButton, setOpenButton] = useState(false);
    //   const [selectedButton, setSelectedButton] = useState(null);

    //   const handleButtonClick = (button) => {
    //     setOpenButton(true);
    //     setSelectedButton(button);
    // };

    const { t, i18n } = useTranslation();

    return (
        <div className='flex flex-col md:pt-[60px]'>
            <div className='relative mt-[60px] md:mt-0'>
                <video autoPlay loop playsInline muted preload='auto' ref={videoRef} className='w-full'>
                    <source src='/assets/videos/partner.mp4' type='video/mp4'/>
                </video>

                <div className='absolute inset-0 flex justify-center'>
                    <div className='max-w-[1000px] w-full flex flex-col items-center justify-center gap-[10px] md:gap-[10px] py-[50px] px-[30px] md:px-0 md:py-[100px]'>
                        <div className='text-white text-xl md:text-[64px] text-center font-bold leading-normal'>
                            {t("Partner.partnerVideoTitle")}
                        </div>
                        {
                            i18n.language === 'en' ? (
                                <div className='hidden md:flex flex-col text-white text-xs md:text-2xl leading-normal text-center'>
                                    <span>{t("Partner.partnerVideoDescriptionMobile")}</span>
                                    <span>{t("Partner.partnerVideoDescriptionMobile2")}</span>
                                </div>
                            ) : (
                                <div className='hidden md:flex gap-0.5 text-white text-xs md:text-2xl leading-normal text-center '>
                                    <div>{t("Partner.partnerVideoDescription")} </div>
                                    <div> {t("Partner.partnerVideoDescription1")}</div>
                                </div>
                            )
                        }
                        
                        <div className='flex flex-col md:hidden text-white text-xs md:text-2xl md:font-bold leading-tight text-center w-full md:w-[530px]'>
                            <div>{t("Partner.partnerVideoDescriptionMobile")}</div>
                            <div className=''>{t("Partner.partnerVideoDescriptionMobile2")}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <div className='max-w-[1000px] w-full py-[50px] px-[30px] md:px-0 md:py-[150px]'>

                    <div className='flex flex-col gap-[50px] md:gap-[100px]'>
                        <div className='flex flex-col gap-[50px] md:gap-[100px]'>
                            <div className='flex flex-col gap-[10px] md:gap-[10px]'>
                                <div className='flex flex-col text-[#1C7800] text-left text-base md:text-[40px] font-bold leading-normal'>
                                    <div className='hidden md:flex flex-col'>
                                        <div>{t("Partner.partnerTitle")}</div> 
                                        <div>{t("Partner.partnerTitle2")}</div> 
                                    </div>
                                    {
                                        i18n.language === 'en' ? (
                                            <div className='flex flex-col md:hidden'>
                                                <div>{t("Partner.partnerTitleMobile")}</div>
                                                <div>{t("Partner.partnerTitleMobile2")}</div>
                                                <div>{t("Partner.partnerTitleMobile3")}</div>
                                            </div>
                                        ) : (
                                            <div className='flex flex-col min-w-[333px] md:hidden'>
                                                <div>{t("Partner.partnerTitleMobile")}</div>
                                                <div>{t("Partner.partnerTitleMobile2")}</div>
                                            </div>
                                        )
                                    }
                                    
                                </div>
                                <div className='flex flex-col text-[#444] text-left text-sm md:text-2xl leading-normal w-[310px] md:w-full'>
                                    <div className='max-w-[230px] md:max-w-none'>
                                        {t("Partner.partnerDescription")}
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row justify-center items-center gap-[50px] md:gap-[150px]'>
                                
                                <div className='md:max-w-[100px] flex flex-col justify-center items-center gap-5 md:gap-[30px] min-w-[170px]'>
                                    <div>
                                        <ShareIcon className='w-[60px] h-[60px] md:w-[100px] md:h-[100px]'/>
                                    </div>
                                    {
                                        i18n.language === 'en' ? (
                                            <div className='text-sm font-bold text-[#444] leading-normal md:w-20'>{t("Partner.Referral.referral1")}</div>
                                        ) : (
                                            <>
                                                <div className='hidden md:flex flex-col text-sm font-bold text-[#444] leading-normal md:max-w-[91px]'><span>{t("Partner.Referral.referral1")}</span><span>{t("Partner.Referral.referral11")}</span> </div>
                                                <div className='block md:hidden text-sm font-bold text-[#444] leading-normal md:max-w-[91px]'><span>{t("Partner.Referral.referral1")}</span><span>{t("Partner.Referral.referral11")}</span> </div>
                                            </>
                                        )
                                    }
                                    
                                    
                                </div>
                                <div className='md:max-w-[170px] flex flex-col justify-center items-center gap-5 md:gap-[30px] rounded-[5px] min-w-[170px]'>
                                    <div>
                                        <RegisterIcon className='w-[60px] h-[60px] md:w-[100px] md:h-[100px]'/>
                                    </div>
                                    {
                                        i18n.language === 'en' ? (
                                            <div className='text-sm font-bold text-[#444] leading-normal flex flex-col'>
                                                <div>{t("Partner.Referral.referral2")}</div>
                                                <div>{t("Partner.Referral.referral21")}</div>
                                            </div>
                                        ) : (
                                            <div className='md:max-w-[70px] text-sm font-bold text-[#444] leading-normal flex flex-col'>
                                                <div>{t("Partner.Referral.referral2Cn")}</div>
                                            </div>
                                        )
                                    }
                                </div>
                                <div className='md:max-w-[119px] flex flex-col justify-center items-center gap-5 md:gap-[30px] min-w-[170px]'>
                                    <div>
                                        <BonusIcon className='w-[60px] h-[60px] md:w-[100px] md:h-[100px]'/>
                                    </div>
                                    {
                                        i18n.language === 'en' ? (
                                            <div className='text-sm font-bold text-[#444] leading-normal md:w-32'>{t("Partner.Referral.referral3")}</div>
                                        ) : (
                                            <div className='md:max-w-[56px] text-sm font-bold text-[#444] leading-normal'>{t("Partner.Referral.referral3")}</div>
                                        )
                                    }
                                    
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[50px]'>
                            <div className='flex flex-col items-center gap-[10px] md:gap-5'>
                                <div className='hidden md:flex flex-col items-center text-2xl md:text-[40px] font-bold leading-normal'>
                                    <div className=' text-primary'>{t("Partner.Referral.businessads")}</div>
                                    <div className=' text-[#444]'>{t("Partner.Referral.businessads2")}</div>
                                </div>
                                {
                                    i18n.language === 'en' ? (
                                        <div className='max-w-[280px] md:hidden text-xl md:text-[64px] font-bold md:font-extrabold leading-normal'>
                                            <div className=' text-primary'>{t("Partner.Referral.businessads")} <span className='text-[#444]'>{t("Partner.Referral.businessads2")}</span></div>
                                        </div>
                                    ) : (
                                        <div className='max-w-[280px] md:hidden text-xl md:text-[64px] font-bold md:font-extrabold leading-normal'>
                                            <div className=' text-primary'>{t("Partner.Referral.businessads")} </div>
                                            <div className='text-[#444]'>{t("Partner.Referral.businessads2")}</div>
                                        </div>
                                    )
                                }
                                
                                {
                                    i18n.language === 'en' ? (
                                        <div className=' text-[#444] text-sm md:text-2xl leading-normal w-full'>
                                            {t("Partner.Referral.qcgbusinessads")}
                                        </div>
                                    ) : (
                                        <div className=' text-[#444] text-sm md:text-2xl leading-tight '>
                                            {/* <div className='hidden md:block'>{t("Partner.Referral.qcgbusinessads")}</div>
                                            <div className='hidden md:block'>{t("Partner.Referral.qcgbusinessads2")}</div> */}

                                            <div className=''>{t("Partner.Referral.qcgbusinessadsMobile")}</div>
                                        </div>
                                    )
                                }
                                
                            </div>
                            <div>
                                <video autoPlay loop playsInline muted preload='auto' ref={videoRef} className='w-full rounded-[20px]'>
                                    <source src={Trade} type='video/mp4'/>
                                </video>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[50px] md:gap-[150px] items-center'>
                            <div className='flex flex-col text-xl md:text-[40px] font-bold leading-normal'>
                                <div className=' text-primary'>
                                    {t("Partner.Referral.benefit")}
                                </div>
                                <div className='text-[#444]'>
                                    {t("Partner.Referral.benefit2")}
                                </div>
                            </div>
                            <div className=' hidden md:flex flex-col gap-[100px] w-full'>
                                <div className='flex items-center justify-center md:gap-[150px] w-[700px] md:w-full'>
                                    <div className='flex flex-col gap-[30px] md:gap-5 items-center min-w-[160px]'>
                                        <div>
                                            <RebateIcon/>
                                        </div>
                                        <div className='flex flex-col text-xl leading-normal'>
                                            <div>{t("Partner.Referral.rebate")} <span className=' text-primary font-bold'>$8.00</span></div>
                                            <div>{t("Partner.Referral.rebate2")}</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-[30px] md:gap-5 items-center min-w-[160px]'>
                                        <div>
                                            <CreditBonusIcon/>
                                        </div>
                                        <div className='flex flex-col text-xl leading-normal'>
                                            <div>{t("Partner.Referral.creditBonus")}</div>
                                            <div className=' text-primary font-bold'>{t("Partner.Referral.creditBonus2")}</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-[30px] md:gap-5 items-center min-w-[160px]'>
                                        <div>
                                            <RebateAllocateIcon/>
                                        </div>
                                        <div className='flex flex-col text-xl leading-normal'>
                                            <div>{t("Partner.Referral.rebateAllocate")}</div>
                                            <div className=' text-primary font-bold'>{t("Partner.Referral.rebateAllocate2")}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-center md:gap-[150px] w-[700px] md:w-full'>
                                    <div className='flex flex-col gap-[30px] items-center min-w-[160px]'>
                                        <div>
                                            <DailyRebateIcon/>
                                        </div>
                                        <div className='flex flex-col text-xl leading-normal'>
                                            <div className=' text-primary font-bold'>{t("Partner.Referral.DailyRebate")}</div>
                                            <div>{t("Partner.Referral.DailyRebate2")}</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-[30px] items-center min-w-[160px]'>
                                        <div>
                                            <IntelligentIcon/>
                                        </div>
                                        <div className='flex flex-col text-xl leading-normal'>
                                            <div>{t("Partner.Referral.intelligent")}</div>
                                            <div className=' text-primary font-bold'>{t("Partner.Referral.intelligent2")}</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-[30px] items-center min-w-[160px]'>
                                        <div>
                                            <StreamLinedIcon/>
                                        </div>
                                        <div className='flex flex-col text-xl leading-normal'>
                                            <div className=' text-primary font-bold'>{t("Partner.Referral.streamlined")}</div>
                                            <div>{t("Partner.Referral.streamlined2")}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='grid grid-cols-2 items-center justify-center gap-[50px] md:hidden'>
                                <div className='flex flex-col gap-[30px] items-center'>
                                    <div>
                                        <RebateMobileIcon/>
                                    </div>
                                    <div className='flex flex-col text-base font-medium leading-normal'>
                                        <div>{t("Partner.Referral.rebate")} <span className=' text-primary font-bold'>$8.00</span></div>
                                        <div>{t("Partner.Referral.rebate2")}</div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[30px] items-center'>
                                    <div>
                                        <CreditBonusMobileIcon/>
                                    </div>
                                    <div className='flex flex-col text-base font-medium leading-normal'>
                                        <div>{t("Partner.Referral.creditBonus")}</div>
                                        <div className=' text-primary font-bold'>{t("Partner.Referral.creditBonus2")}</div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[30px] items-center'>
                                    <div>
                                        <RebateAllocateMobileIcon/>
                                    </div>
                                    <div className='flex flex-col text-base font-medium leading-normal'>
                                        <div>{t("Partner.Referral.rebateAllocate")}</div>
                                        <div className=' text-primary font-bold'>{t("Partner.Referral.rebateAllocate2")}</div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[30px] items-center'>
                                    <div>
                                        <DailyRebateMobileIcon/>
                                    </div>
                                    <div className='flex flex-col text-base font-medium leading-normal'>
                                        <div className=' text-primary font-bold'>{t("Partner.Referral.DailyRebate")}</div>
                                        <div>{t("Partner.Referral.DailyRebate2")}</div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[30px] items-center'>
                                    <div>
                                        <IntelligentMobileIcon/>
                                    </div>
                                    <div className='flex flex-col text-base font-medium leading-normal'>
                                        <div>{t("Partner.Referral.intelligent")}</div>
                                        <div className=' text-primary font-bold'>{t("Partner.Referral.intelligent2")}</div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[30px] items-center'>
                                    <div>
                                        <StreamLinedMobileIcon/>
                                    </div>
                                    <div className='flex flex-col text-base font-medium leading-normal'>
                                        <div className=' text-primary font-bold'>{t("Partner.Referral.streamlined")}</div>
                                        <div>{t("Partner.Referral.streamlined2")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* <div className='w-full h-[1px] bg-primary'></div> */}

                        <div className='flex flex-col gap-[50px] md:gap-[50px]'>
                            <div className='flex flex-col gap-[10px] md:gap-[10px]'>
                                <div className=' text-xl md:text-[40px] font-bold text-left leading-normal'>
                                    {
                                        i18n.language === 'en' ? (
                                            <div className='text-[#444]'>{t("Partner.Micro.microtitle")} <span className='text-[#1C7800]'>{t("Partner.Micro.microtitle2")}</span></div>
                                        ) : (
                                            <div className='text-[#444]'>{t("Partner.Micro.microtitle")}<span className='text-[#1C7800]'>{t("Partner.Micro.microtitle2")}</span></div>
                                        )
                                    }
                                    
                                </div>
                                {
                                    i18n.language === 'en' ? (
                                        <div className='text-sm md:text-2xl text-[#444] font-bold leading-normal text-left'>
                                            {t("Partner.Micro.microdesc")}
                                        </div>
                                    ) : (
                                        <div className='text-sm md:text-2xl text-[#444] font-bold leading-normal text-left'>
                                            {/* <div className='hidden md:block'>{t("Partner.Micro.microdesc")}</div>
                                            <div className='hidden md:block'>{t("Partner.Micro.microdesc2")}</div> */}

                                            <div className='block md:'>{t("Partner.Micro.microdescMobile")}</div>
                                        </div>
                                    )
                                }
                                
                                <div className='flex flex-col md:hidden'>
                                    <div className='text-[#444] text-sm space-y-4'>
                                        <div className='leading-[1.20] text-left'>
                                            <div className='flex flex-col'>
                                                <div className='font-bold'>{t("Partner.Micro.rapid")}</div>
                                                <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-1'>
                                                    <div className='font-normal'> - </div>
                                                    <div className='font-normal leading-normal'> {t("Partner.Micro.rapid2")}</div> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className='leading-[1.20] text-left'>
                                            <div className='flex flex-col'>
                                                <div className='font-bold'>{t("Partner.Micro.cost")}</div>
                                                <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-1'>
                                                    <div className='font-normal'> - </div>
                                                    <div className='font-normal leading-normal'> {t("Partner.Micro.cost2")}</div> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className='leading-[1.20] text-left'>
                                            <div className='flex flex-col'>
                                                <div className='font-bold'>{t("Partner.Micro.risk")}</div>
                                                <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-1'>
                                                    <div className='font-normal'> - </div>
                                                    <div className='font-normal leading-normal'> {t("Partner.Micro.risk2")}</div> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className='leading-[1.20] text-left'>
                                            <div className='flex flex-col'>
                                                <div className='font-bold'>{t("Partner.Micro.brand")}</div>
                                                <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-1'>
                                                    <div className='font-normal'> - </div>
                                                    <div className='font-normal leading-normal'> {t("Partner.Micro.brand2")}</div> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className='leading-[1.20] text-left'>
                                            <div className='flex flex-col'>
                                                <div className='font-bold'>{t("Partner.Micro.focus")}</div>
                                                <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-1'>
                                                    <div className='font-normal'> - </div>
                                                    <div className='font-normal leading-normal'> {t("Partner.Micro.focus2")}</div> 
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='hidden md:flex flex-col'>
                                <ul className='list-none text-[#444] font-normal text-2xl text-left space-y-8'>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Partner.Micro.rapid")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=''> {t("Partner.Micro.rapid2")}</div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Partner.Micro.cost")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=' md:w-[900px]'> {t("Partner.Micro.cost2")}</div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Partner.Micro.risk")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=''> {t("Partner.Micro.risk2")}</div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Partner.Micro.brand")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=''> {t("Partner.Micro.brand2")}</div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Partner.Micro.focus")}</div>
                                            <div className='text-[#444] md:text-2xl font-normal flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=' md:w-[900px]'> {t("Partner.Micro.focus2")}</div> 
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                                <div className='flex flex-col gap-2.5 md:gap-[10px]'>
                                    <div className=' text-xl md:w-full md:text-[40px] font-bold text-left leading-normal'>
                                        <div className='text-[#444]'>{t("Partner.MicroLabel.microtitle")}<span className='text-[#1C7800]'>{t("Partner.MicroLabel.microtitle2")}</span></div>
                                    </div>
                                    <div className='flex flex-col gap-[10px] md:gap-0'>
                                        <div className=' text-xl md:text-[40px] text-[#444] font-bold leading-tight text-left'>
                                            {t("Partner.MicroLabel.microdesctitle")}
                                        </div>
                                        {
                                            i18n.language === 'en' ? (
                                                <div className=' text-[#444] text-sm md:text-[24px] leading-normal text-left'>
                                                    {t("Partner.MicroLabel.microdesc")}
                                                </div>
                                            ) : (
                                                <div className=' text-[#444] text-sm md:text-[24px] leading-normal text-left'>
                                                    <div className='hidden md:block'>{t("Partner.MicroLabel.microdesc")}</div>
                                                    {/* <div className='hidden md:block'>{t("Partner.MicroLabel.microdesc2")}</div> */}
                                                    
                                                    <div className='block md:hidden'>{t("Partner.Micro.microdesc2Mobile")}</div>

                                                </div>
                                            )
                                        }
                                       
                                    </div>
                                </div>
                                {/* <div className='flex items-center gap-5 md:gap-9 md:w-[500px] cursor-pointer hover:bg-[#eaeaea2c] hover:rounded-[21px]' onClick={() => handleButtonClick('service')}>
                                    <div className=' hidden md:flex justify-center items-center rounded-[21px] border border-[#ccc] bg-white p-[22px]'>
                                        <FormIcon/>
                                    </div>
                                    <div className=' flex md:hidden justify-center items-center rounded-[10px] border border-[#ccc] bg-white p-[11px]'>
                                        <FormMobileIcon/>
                                    </div>
                                    <div className='flex flex-col text-left text-[#666] text-sm md:text-2xl font-semibold'>
                                        <div>{t("Partner.MicroLabel.form")}</div>
                                        <div>{t("Partner.MicroLabel.form2")}</div>
                                    </div>
                                </div> */}
                            </div>
                        </div>

                        <div className='flex flex-col gap-5 md:gap-[30px]'>
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

            {/* <Modal open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton}/> */}

        </div>
    )
}

export default Partner;