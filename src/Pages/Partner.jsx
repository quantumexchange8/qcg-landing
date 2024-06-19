import React, { useRef, useEffect, useState } from 'react';
import { BonusIcon, 
    CreditBonusIcon, 
    DailyRebateIcon, 
    FormIcon, 
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
    FormMobileIcon,
} from '../Components/Brand';
import Trade from '../Assets/Videos/trade.mp4';
import Modal from '../Components/Modal';
import { AppleMobileIcon, PlayStoreIcon } from '../Components/Brand';
import google from '../Assets/Images/GetItOnGooglePlay.png';
import apple from '../Assets/Images/apple.png';
import window from '../Assets/Images/window.png';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

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

      const [openButton, setOpenButton] = useState(false);
      const [selectedButton, setSelectedButton] = useState(null);

      const handleButtonClick = (button) => {
        setOpenButton(true);
        setSelectedButton(button);
    };

    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    useEffect(() => {
        if (i18n.language !== 'en') {
            i18n.changeLanguage('en');
        }
        const languageChangeListener = () => {
            setLanguage(i18n.language);
        };

        if (i18n.on) {
            i18n.on('languageChanged', languageChangeListener);
        }

        return () => {
            if (i18n.off) {
                i18n.off('languageChanged', languageChangeListener);
            }
        };
    }, [i18n]);

    return (
        <div className='flex flex-col md:pt-[60px]'>
            <div className='relative mt-[60px] md:mt-0'>
                <video autoPlay loop playsInline muted preload='auto' ref={videoRef} className='w-full'>
                    <source src='/assets/videos/partner.mp4' type='video/mp4'/>
                </video>

                <div className='absolute inset-0 flex justify-center'>
                    <div className='max-w-[1000px] w-full flex flex-col items-start justify-end gap-[10px] md:gap-5 py-[50px] px-[30px] md:px-0 md:py-[100px]'>
                        <div className='text-white text-xl md:text-5xl text-left font-bold leading-none'>
                            {t("Partner.partnerVideoTitle")}
                        </div>
                        {
                            language === 'en' ? (
                                <div className='hidden md:block text-white text-sm md:text-2xl font-semibold md:font-bold leading-tight text-left w-[260px] md:w-[530px]'>
                                    {t("Partner.partnerVideoDescription")}
                                </div>
                            ) : (
                                <div className='hidden md:flex flex-col text-white text-sm md:text-2xl font-semibold md:font-bold leading-tight text-left w-[260px] md:w-[530px]'>
                                    <div>{t("Partner.partnerVideoDescription")}</div>
                                    <div>{t("Partner.partnerVideoDescription1")}</div>
                                </div>
                            )
                        }
                        
                        <div className='flex flex-col md:hidden text-white text-sm md:text-2xl font-semibold md:font-bold leading-tight text-left w-[260px] md:w-[530px]'>
                            <div>{t("Partner.partnerVideoDescriptionMobile")}</div>
                            <div className='w-[250px]'>{t("Partner.partnerVideoDescriptionMobile2")}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <div className='max-w-[1000px] w-full py-[50px] px-[30px] md:px-0 md:py-[150px]'>

                    <div className='flex flex-col gap-[100px] md:gap-[150px]'>

                        <div className='flex flex-col gap-[100px]'>
                            <div className='flex flex-col gap-[10px] md:gap-5'>
                                <div className='flex flex-col text-[#1C7800] text-left text-xl md:text-[40px] font-bold leading-tight'>
                                    <div className='hidden md:flex flex-col'>
                                        <div>{t("Partner.partnerTitle")}</div> 
                                        <div>{t("Partner.partnerTitle2")}</div> 
                                    </div>
                                    {
                                        language === 'en' ? (
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
                                <div className='flex flex-col text-[#444] font-semibold text-left text-sm md:text-2xl leading-tight w-[310px] md:w-full'>
                                    {t("Partner.partnerDescription")}
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row items-center gap-5 md:gap-[50px]'>
                                <div className=' w-full md:w-[300px] h-[180px] bg-[#ECFFE6] flex flex-col justify-center items-center gap-[30px] rounded-[5px]'>
                                    <div className='text-base font-bold text-primary leading-none'>{t("Partner.Referral.referral1")}</div>
                                    <div>
                                        <ShareIcon/>
                                    </div>
                                </div>
                                <div className=' w-full md:w-[300px] h-[180px] bg-[#ECFFE6] flex flex-col justify-center items-center gap-[30px] rounded-[5px]'>
                                    {
                                        language === 'en' ? (
                                            <div className='text-base font-bold text-primary leading-none flex flex-col'>
                                                <div>{t("Partner.Referral.referral2")}</div>
                                                <div>{t("Partner.Referral.referral21")}</div>
                                            </div>
                                        ) : (
                                            <div className='text-base font-bold text-primary leading-none flex flex-col'>
                                                <div>{t("Partner.Referral.referral2Cn")}</div>
                                            </div>
                                        )
                                    }
                                    
                                    <div>
                                        <RegisterIcon/>
                                    </div>
                                </div>
                                <div className=' w-full md:w-[300px] h-[180px] bg-[#ECFFE6] flex flex-col justify-center items-center gap-[30px] rounded-[5px]'>
                                    <div className='text-base font-bold text-primary leading-none'>{t("Partner.Referral.referral3")}</div>
                                    <div>
                                        <BonusIcon/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[100px]'>
                            <div className='flex flex-col items-center gap-[10px] md:gap-5'>
                                <div className='hidden md:flex flex-col items-center text-2xl md:text-[64px] font-bold md:font-extrabold leading-tight'>
                                    <div className=' text-primary'>{t("Partner.Referral.businessads")}</div>
                                    <div className=' text-[#444]'>{t("Partner.Referral.businessads2")}</div>
                                </div>
                                {
                                    language === 'en' ? (
                                        <div className='md:hidden text-2xl md:text-[64px] font-bold md:font-extrabold leading-tight'>
                                            <div className=' text-primary'>{t("Partner.Referral.businessads")} <span className='text-[#444]'>{t("Partner.Referral.businessads2")}</span></div>
                                        </div>
                                    ) : (
                                        <div className='md:hidden text-2xl md:text-[64px] font-bold md:font-extrabold leading-tight'>
                                            <div className=' text-primary'>{t("Partner.Referral.businessads")} </div>
                                            <div className='text-[#444]'>{t("Partner.Referral.businessads2")}</div>
                                        </div>
                                    )
                                }
                                
                                {
                                    language === 'en' ? (
                                        <div className=' text-[#444] text-sm md:text-2xl font-semibold leading-tight md:w-[730px]'>
                                            {t("Partner.Referral.qcgbusinessads")}
                                        </div>
                                    ) : (
                                        <div className=' text-[#444] text-sm md:text-2xl font-semibold leading-tight md:w-[730px]'>
                                            <div className='hidden md:block'>{t("Partner.Referral.qcgbusinessads")}</div>
                                            <div className='hidden md:block'>{t("Partner.Referral.qcgbusinessads2")}</div>

                                            <div className='block md:hidden'>{t("Partner.Referral.qcgbusinessadsMobile")}</div>
                                        </div>
                                    )
                                }
                                
                            </div>
                            <div>
                                <video autoPlay loop playsInline muted preload='auto' ref={videoRef} className='w-full rounded-[5px]'>
                                    <source src={Trade} type='video/mp4'/>
                                </video>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[100px] items-center'>
                            <div className='flex flex-col text-2xl md:text-[64px] font-bold md:font-extrabold leading-tight'>
                                <div className=' text-primary'>
                                    {t("Partner.Referral.benefit")}
                                </div>
                                <div className='text-[#444]'>
                                    {t("Partner.Referral.benefit2")}
                                </div>
                            </div>
                            <div className=' hidden md:flex flex-col gap-[100px]'>
                                <div className='flex items-center justify-between w-[700px]'>
                                    <div className='flex flex-col gap-[30px] items-center'>
                                        <div>
                                            <RebateIcon/>
                                        </div>
                                        <div className='flex flex-col text-xl leading-tight'>
                                            <div>{t("Partner.Referral.rebate")} <span className=' text-primary font-bold'>$8.00</span></div>
                                            <div>{t("Partner.Referral.rebate2")}</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-[30px] items-center'>
                                        <div>
                                            <CreditBonusIcon/>
                                        </div>
                                        <div className='flex flex-col text-xl leading-tight'>
                                            <div>{t("Partner.Referral.creditBonus")}</div>
                                            <div className=' text-primary font-bold'>{t("Partner.Referral.creditBonus2")}</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-[30px] items-center'>
                                        <div>
                                            <RebateAllocateIcon/>
                                        </div>
                                        <div className='flex flex-col text-xl leading-tight'>
                                            <div>{t("Partner.Referral.rebateAllocate")}</div>
                                            <div className=' text-primary font-bold'>{t("Partner.Referral.rebateAllocate2")}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex items-center justify-between w-[700px]'>
                                    <div className='flex flex-col gap-[30px] items-center'>
                                        <div>
                                            <DailyRebateIcon/>
                                        </div>
                                        <div className='flex flex-col text-xl leading-tight'>
                                            <div className=' text-primary font-bold'>{t("Partner.Referral.DailyRebate")}</div>
                                            <div>{t("Partner.Referral.DailyRebate2")}</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-[30px] items-center'>
                                        <div>
                                            <IntelligentIcon/>
                                        </div>
                                        <div className='flex flex-col text-xl leading-tight'>
                                            <div>{t("Partner.Referral.intelligent")}</div>
                                            <div className=' text-primary font-bold'>{t("Partner.Referral.intelligent2")}</div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-[30px] items-center'>
                                        <div>
                                            <StreamLinedIcon/>
                                        </div>
                                        <div className='flex flex-col text-xl leading-tight'>
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
                                    <div className='flex flex-col text-base font-medium leading-tight'>
                                        <div>{t("Partner.Referral.rebate")} <span className=' text-primary font-bold'>$8.00</span></div>
                                        <div>{t("Partner.Referral.rebate2")}</div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[30px] items-center'>
                                    <div>
                                        <CreditBonusMobileIcon/>
                                    </div>
                                    <div className='flex flex-col text-base font-medium leading-tight'>
                                        <div>{t("Partner.Referral.creditBonus")}</div>
                                        <div className=' text-primary font-bold'>{t("Partner.Referral.creditBonus2")}</div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[30px] items-center'>
                                    <div>
                                        <RebateAllocateMobileIcon/>
                                    </div>
                                    <div className='flex flex-col text-base font-medium leading-tight'>
                                        <div>{t("Partner.Referral.rebateAllocate")}</div>
                                        <div className=' text-primary font-bold'>{t("Partner.Referral.rebateAllocate2")}</div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[30px] items-center'>
                                    <div>
                                        <DailyRebateMobileIcon/>
                                    </div>
                                    <div className='flex flex-col text-base font-medium leading-tight'>
                                        <div className=' text-primary font-bold'>{t("Partner.Referral.DailyRebate")}</div>
                                        <div>{t("Partner.Referral.DailyRebate2")}</div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[30px] items-center'>
                                    <div>
                                        <IntelligentMobileIcon/>
                                    </div>
                                    <div className='flex flex-col text-base font-medium leading-tight'>
                                        <div>{t("Partner.Referral.intelligent")}</div>
                                        <div className=' text-primary font-bold'>{t("Partner.Referral.intelligent2")}</div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[30px] items-center'>
                                    <div>
                                        <StreamLinedMobileIcon/>
                                    </div>
                                    <div className='flex flex-col text-base font-medium leading-tight'>
                                        <div className=' text-primary font-bold'>{t("Partner.Referral.streamlined")}</div>
                                        <div>{t("Partner.Referral.streamlined2")}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='w-full h-[1px] bg-primary'></div>

                        <div className='flex flex-col gap-[50px] md:gap-[50px]'>
                            <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                                <div className=' text-2xl md:text-5xl font-bold text-left'>
                                    {
                                        language === 'en' ? (
                                            <div className='text-[#444]'>{t("Partner.Micro.microtitle")} <span className='text-[#1C7800]'>{t("Partner.Micro.microtitle2")}</span></div>
                                        ) : (
                                            <div className='text-[#444]'>{t("Partner.Micro.microtitle")}<span className='text-[#1C7800]'>{t("Partner.Micro.microtitle2")}</span></div>
                                        )
                                    }
                                    
                                </div>
                                {
                                    language === 'en' ? (
                                        <div className='text-sm md:text-2xl text-[#444] font-bold md:font-semibold leading-tight text-left'>
                                            {t("Partner.Micro.microdesc")}
                                        </div>
                                    ) : (
                                        <div className='text-sm md:text-2xl text-[#444] font-bold md:font-semibold leading-tight text-left'>
                                            <div className='hidden md:block'>{t("Partner.Micro.microdesc")}</div>
                                            <div className='hidden md:block'>{t("Partner.Micro.microdesc2")}</div>

                                            <div className='block md:'>{t("Partner.Micro.microdescMobile")}</div>
                                        </div>
                                    )
                                }
                                
                                <div className='flex flex-col md:hidden'>
                                    <div className='text-[#444] text-sm space-y-4'>
                                        <div className='leading-[1.20] text-left'>
                                            <div className='flex flex-col'>
                                                <div className='font-bold'>{t("Partner.Micro.rapid")}</div>
                                                <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-1'>
                                                    <div className='font-semibold'> - </div>
                                                    <div className='font-medium'> {t("Partner.Micro.rapid2")}</div> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className='leading-[1.20] text-left'>
                                            <div className='flex flex-col'>
                                                <div className='font-bold'>{t("Partner.Micro.cost")}</div>
                                                <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-1'>
                                                    <div className='font-semibold'> - </div>
                                                    <div className='font-medium'> {t("Partner.Micro.cost2")}</div> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className='leading-[1.20] text-left'>
                                            <div className='flex flex-col'>
                                                <div className='font-bold'>{t("Partner.Micro.risk")}</div>
                                                <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-1'>
                                                    <div className='font-semibold'> - </div>
                                                    <div className='font-medium'> {t("Partner.Micro.risk2")}</div> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className='leading-[1.20] text-left'>
                                            <div className='flex flex-col'>
                                                <div className='font-bold'>{t("Partner.Micro.brand")}</div>
                                                <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-1'>
                                                    <div className='font-semibold'> - </div>
                                                    <div className='font-medium'> {t("Partner.Micro.brand2")}</div> 
                                                </div>
                                            </div>
                                        </div>
                                        <div className='leading-[1.20] text-left'>
                                            <div className='flex flex-col'>
                                                <div className='font-bold'>{t("Partner.Micro.focus")}</div>
                                                <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-1'>
                                                    <div className='font-semibold'> - </div>
                                                    <div className='font-medium'> {t("Partner.Micro.focus2")}</div> 
                                                </div>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='hidden md:flex flex-col'>
                                <ul className='list-disc text-[#444] font-normal text-2xl text-left mx-7 space-y-8'>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Partner.Micro.rapid")}</div>
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=''> {t("Partner.Micro.rapid2")}</div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Partner.Micro.cost")}</div>
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=' md:w-[900px]'> {t("Partner.Micro.cost2")}</div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Partner.Micro.risk")}</div>
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=''> {t("Partner.Micro.risk2")}</div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Partner.Micro.brand")}</div>
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=''> {t("Partner.Micro.brand2")}</div> 
                                            </div>
                                        </div>
                                        
                                    </li>
                                    <li> 
                                        <div className='font-bold flex flex-col'>
                                            <div>{t("Partner.Micro.focus")}</div>
                                            <div className='text-[#444] md:text-2xl font-medium flex flex-row gap-2'>
                                                <div> - </div>
                                                <div className=' md:w-[900px]'> {t("Partner.Micro.focus2")}</div> 
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className='flex flex-col gap-[30px] md:gap-[50px]'>
                                <div className='flex flex-col gap-5 md:gap-[30px]'>
                                    <div className=' text-2xl w-[210px] md:w-full md:text-5xl font-bold text-left leading-tight'>
                                        <div className='text-[#444]'>{t("Partner.MicroLabel.microtitle")}<span className='text-[#1C7800]'>{t("Partner.MicroLabel.microtitle2")}</span></div>
                                    </div>
                                    <div className='flex flex-col gap-[10px] md:gap-5'>
                                        <div className=' text-xl md:text-5xl text-[#444] font-bold leading-tight text-left'>
                                            {t("Partner.MicroLabel.microdesctitle")}
                                        </div>
                                        {
                                            language === 'en' ? (
                                                <div className=' text-[#444] text-sm md:text-[32px] leading-tight font-semibold text-left'>
                                                    {t("Partner.MicroLabel.microdesc")}
                                                </div>
                                            ) : (
                                                <div className=' text-[#444] text-sm md:text-[32px] leading-tight font-semibold text-left'>
                                                    <div className='hidden md:block'>{t("Partner.MicroLabel.microdesc")}</div>
                                                    <div className='hidden md:block'>{t("Partner.MicroLabel.microdesc2")}</div>
                                                    
                                                    <div className='block md:hidden'>{t("Partner.Micro.microdesc2Mobile")}</div>

                                                </div>
                                            )
                                        }
                                       
                                    </div>
                                </div>
                                <div className='flex items-center gap-5 md:gap-9 md:w-[500px] cursor-pointer hover:bg-[#eaeaea2c] hover:rounded-[21px]' onClick={() => handleButtonClick('service')}>
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
                                        <Link to='https://play.google.com/store/apps/details?id=com.spotware.ct&hl=en'>
                                            <img src={google} alt="google" className='h-full'/>
                                        </Link>
                                        <Link to='https://apps.apple.com/my/app/ctrader/id767428811?platform=iphone'>
                                            <img src={apple} alt="apple" className='h-full'/>
                                        </Link>
                                        <Link to='https://spotware.ctrader.com/ctrader-spotware-setup.exe'>
                                            <img src={window} alt="window" className='h-full'/>
                                        </Link>
                                        {/* <Window/> */}
                                    </div>
                                    <div className='flex items-center gap-[26px] md:hidden'>
                                        {/* <img src={mobile_IOS_PS} alt="IOS_PS" /> */}
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

            <Modal open={openButton} onClose={() => setOpenButton(false)} selectedButton={selectedButton}/>

        </div>
    )
}

export default Partner;