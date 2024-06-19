import React, { useEffect, useState } from 'react';
import home from '../Assets/Images/qcgpp.png';
import homeMobile from '../Assets/Images/qcgpp1.png';
import google from '../Assets/Images/GetItOnGooglePlay.png';
import apple from '../Assets/Images/apple.png';
import window from '../Assets/Images/window.png';
import { AppleMobileIcon, PlayStoreIcon } from '../Components/Brand';
import LazyLoad from 'react-lazyload';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Privacy = () => {
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
                <LazyLoad height={200} offset={100} once>
                    <img src={home} alt='home' className='w-full hidden md:block'/>
                </LazyLoad>
                <LazyLoad height={200} offset={100} once>
                    <img src={homeMobile} alt='homeMobile' className='w-full block md:hidden'/>
                </LazyLoad>

                <div className='absolute inset-0 flex justify-center'>
                    <div className='max-w-[1000px] w-full flex flex-col items-start justify-end gap-[10px] md:gap-5 py-[50px] px-[30px] md:px-0 md:py-[100px]'>
                        <div className='text-white text-xl md:text-[50px] font-bold leading-none'>
                            {t("Privacy.privacyVideoTitle")}
                        </div>
                        <div className='text-white text-sm md:text-2xl text-left leading-tight md:leading-none font-semibold md:font-bold max-w-[200px] md:max-w-[346px]'>
                            {t("Privacy.privacyVideoDescription")}
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <div className='max-w-[1000px] w-full py-[50px] px-[30px] md:px-0 md:py-[150px]'>
                    <div className='flex flex-col gap-[50px] md:gap-[150px]'>
                        {
                            language === 'en' ? (
                                <div className='text-[#1C7800] max-w-[320px] md:max-w-none text-base md:text-4xl leading-none font-bold text-left'>
                                    {t("Privacy.QCG_BasicDescription")}
                                </div>
                            ) : (
                                <div className='text-[#1C7800] max-w-[320px] md:max-w-none text-base md:text-5xl leading-tight font-bold text-left flex flex-col md:gap-2'>
                                    <div>{t("Privacy.QCG_BasicDescriptionCn")}</div>
                                    <div>{t("Privacy.QCG_BasicDescriptionCn2")}</div>
                                </div>
                            )
                        }
                        

                        <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                            <div className='flex flex-col text-[#1C7800] text-2xl md:text-[64px] text-left leading-none md:leading-[1.20] font-bold'>
                                <div>{t("Privacy.Crypto.crypto_Title1")}</div>
                                {
                                    language === 'en' ? (
                                        <div>{t("Privacy.Crypto.crypto_Title2")}</div>
                                    ) : (
                                        null
                                    )
                                }
                                
                            </div>
                            
                            <div className='flex flex-col text-[#444] text-sm md:text-4xl text-left leading-tight md:leading-[1.20] font-bold md:font-semibold'>
                                {
                                    language === 'en' ? (
                                        <div className='hidden md:block '>
                                            <div>
                                                {t("Privacy.Crypto.crypto_Description1")}
                                            </div>
                                            <div>
                                                {t("Privacy.Crypto.crypto_Description2")}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='hidden md:block '>
                                            {t("Privacy.Crypto.crypto_DescriptionCn")}
                                        </div>
                                    )
                                }
                                
                                
                                <div className='block md:hidden'>
                                    {t("Privacy.Crypto.crypto_DescriptionMobile")}
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                            <div className='flex flex-col text-primary text-base md:text-4xl font-bold text-left leading-tight md:leading-[1.20]'>
                                {
                                    language === 'en' ? (
                                        <div>
                                            <div className='hidden md:block '>
                                                {t("Privacy.Crypto.cryptoSubtitle1")}
                                            </div>
                                            <div className='hidden md:block'>{t("Privacy.Crypto.cryptoSubtitle11")}</div>
                                            <div className='block md:hidden'>{t("Privacy.Crypto.cryptoSubtitle1Mobile")}</div>
                                        </div>
                                    ) : (
                                        <div>
                                            <div className='hidden md:block '>
                                                {t("Privacy.Crypto.cryptoSubtitleCN")}
                                            </div>
                                            <div className='block md:hidden'>{t("Privacy.Crypto.cryptoSubtitle1Mobile")}</div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className='text-[#444] text-[14px] md:text-2xl font-semibold text-left leading-tight'>
                                {t("Privacy.Crypto.cryptoSubtitle_Description")}
                            </div>
                        </div>

                        <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                            <div className='text-primary text-base md:text-4xl font-bold text-left leading-tight md:leading-none'>
                                {t("Privacy.Crypto.cryptoSubtitle2")}
                            </div>
                            <div className='flex flex-col gap-3 md:gap-6 text-[#444] text-sm md:text-2xl font-semibold text-left leading-tight md:leading-tight'>
                                <div>{t("Privacy.Crypto.cryptoSubtitle2_Description")}</div>
                                <div>{t("Privacy.Crypto.cryptoSubtitle2_Description2")}</div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[10px] md:gap-[30px]'>
                            <div className='text-primary text-base md:text-4xl font-bold text-left leading-tight md:leading-none'>
                                {t("Privacy.Crypto.cryptoSubtitle3")}
                            </div>
                            <div className='flex flex-col gap-4 md:gap-6 min-w-[330px] md:min-w-none text-[#444] text-sm md:text-2xl font-semibold text-left leading-tight md:leading-[1.20]'>
                                <div>{t("Privacy.Crypto.cryptoSubtitle3_Description")}</div>
                                {
                                        language === 'en' ? (
                                            <div>
                                                {t("Privacy.Crypto.cryptoSubtitle3_Description2")}
                                            </div>
                                        ) : (
                                            <div className='flex flex-col'>
                                                <div>{t("Privacy.Crypto.cryptoSubtitle3_Description2_1")}</div>
                                                <div>{t("Privacy.Crypto.cryptoSubtitle3_Description2_2")}</div>
                                            </div>
                                        )
                                    }
                                
                                <div> {t("Privacy.Crypto.cryptoSubtitle3_Description3")}</div>
                            </div>
                        </div>

                        <div className='w-full h-[1px] bg-primary'></div>

                        <div className='flex flex-col gap-[10px] md:gap-[30px] w-full'>
                            {
                                language === 'en' ? (
                                    <div className='text-2xl md:text-[64px] text-primary font-bold text-left leading-tight'>
                                        {t("Privacy.COC_Title")}
                                    </div>
                                ) : (
                                    <div className='text-2xl md:text-[96px] text-primary font-bold text-left leading-tight'>
                                        {t("Privacy.COC_Title")}
                                    </div>
                                )
                            }
                            {
                                language === 'en' ? (
                                    <div className='flex flex-col text-[#444] text-sm md:text-4xl text-left leading-tight font-semibold'>
                                        <div className='hidden md:block'>{t("Privacy.COC_Description1")}</div>
                                        <div className='hidden md:block'>{t("Privacy.COC_Description2")}</div>
                                        <div className='block md:hidden min-w-[320px]'>{t("Privacy.COC_DescriptionMobile")}</div>
                                    </div>
                                ) : (
                                <div className='flex flex-col text-[#444] text-sm md:text-4xl text-left leading-tight font-semibold'>
                                    <div className='hidden md:block'>{t("Privacy.COC_Description1")}</div>
                                    <div className='hidden md:block'>{t("Privacy.COC_Description2")}</div>
                                    <div className='block md:hidden min-w-[320px]'>{t("Privacy.COC_DescriptionMobile")}</div>
                                </div>
                                )
                            }
                            
                            
                        </div>


                        <div className='flex flex-col gap-[50px]'>
                            {
                                language === 'en' ? (
                                    <div className='flex flex-col text-primary text-2xl md:text-[40px] text-left font-bold leading-tight'>
                                        <div className='hidden md:block'>{t("Privacy.openAccountTitle")}</div>
                                        <div className='hidden md:block'>{t("Privacy.openAccountTitle2")}</div>
                                        <div className='block md:hidden'>{t("Privacy.openAccountTitleMobile")}</div>
                                        <div className='block md:hidden min-w-[333px]'>{t("Privacy.openAccountTitle2Mobile")}</div>
                                    </div>
                                ) : (
                                    <div className='flex flex-col text-primary text-2xl md:text-[40px] text-left font-bold leading-tight'>
                                        <div className='hidden md:block'>{t("Privacy.openAccountTitle")}</div>
                                        <div className='block md:hidden'>{t("Privacy.openAccountTitleMobile")}</div>
                                    </div>
                                )
                            }

                            <div className='flex flex-col gap-[10px] md:gap-5'>
                                <div className='text-primary text-base md:text-[32px] text-left font-bold md:font-semibold leading-tight md:leading-none'>
                                    National Futures Association (NFA)
                                </div>
                                <div className='flex flex-col gap-4 md:gap-6 text-left text-[#444] text-sm md:text-2xl font-semibold leading-tight'>
                                    <div>
                                        NFA is a non-profit organisation established by the United States government to 
                                        regulate and supervise futures traders and futures exchanges. NFA was 
                                        established under the Futures Exchange Act of 1974 and is authorised by the 
                                        Futures Trading Commission (CFTC).
                                    </div>
                                    <div>
                                        NFA's mission is to provide legal programs and services to protect the interests 
                                        of market participants. Besides, it helps organisational members ensure legal 
                                        liability.
                                    </div>
                                    <div>
                                        NFA's activities will be closely regulated by the Commodity Futures Trading 
                                        Commission. This committee plays an important role in regulating the US 
                                        commodity futures sector.
                                    </div>
                                    <div>
                                        Learn more about our NFA license <a href="https://www.nfa.futures.org/BasicNet/basic-profile.aspx?nfaid=P9pXtPj6e%2F4%3D"><span className='text-[#0028FC] text-base md:text-2xl font-semibold md:font-medium underline'>here...</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[50px] md:gap-[100px]'>
                            <div className='flex flex-col gap-[10px] md:gap-5'>
                                <div className=' text-base md:text-[32px] text-primary font-bold md:font-semibold leading-tight md:leading-none text-left'>
                                    Privacy Policy
                                </div>
                                <div className='text-[#444] text-left text-sm md:text-2xl font-semibold leading-tight md:leading-none'>
                                    The document discloses the ways the 
                                    company gathers, uses, discloses, 
                                    and manages your personal 
                                    information. <a href="/privacy-policy "><span className='text-[#0028FC] text-base md:text-2xl font-semibold md:font-medium underline'>more...</span></a>
                                </div>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <div className=' text-base md:text-[32px] text-primary font-bold md:font-semibold leading-tight md:leading-none text-left'>
                                    Client Agreement
                                </div>
                                <div className=' text-[#444] text-left text-sm md:text-2xl font-semibold leading-tight md:leading-none'>
                                    Before you start working with QCG as a client or a partner, look through a set of agreements and accept their terms and conditions.
                                </div>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <div className=' text-base md:text-[32px] text-primary font-bold md:font-semibold leading-tight md:leading-none text-left'>
                                    Risk Disclosure Notice
                                </div>
                                <div className=' text-[#444] text-left text-sm md:text-2xl font-semibold leading-tight md:leading-none min-w-[310px]'>
                                    The essential document outlines potential financial risks, ensuring informed decisions by highlighting possible vulnerabilities in investments or activities.
                                </div>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <div className=' text-base md:text-[32px] text-primary font-bold md:font-semibold leading-tight md:leading-none text-left'>
                                    Risk Warning
                                </div>
                                <div className=' text-[#444] text-left text-sm md:text-2xl font-semibold leading-tight md:leading-none min-w-[310px]'>
                                    It thoroughly describes all possible risks that are typical for trading in financial markets and that should be clearly realised and taken into consideration by all investors.
                                </div>
                            </div>
                        </div>

                        <div className=' block md:hidden'></div>

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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Privacy;