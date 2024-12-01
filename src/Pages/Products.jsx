import React, { useRef, useEffect, useState } from 'react';
import google from '../Assets/Images/googleNew.svg';
import apple from '../Assets/Images/appleNew.svg';
import window from '../Assets/Images/windowNew.svg';
import QCG_Logo from '../Assets/Images/QCG_Logo.svg';
// import { AppleMobileIcon, PlayStoreIcon } from '../Components/Brand';
import ProductsMobile from '../Assets/Videos/productsMobile.mp4';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import qcgLive from '../Assets/Images/qcgLive.svg';

const Products = () => {
    
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
                <video autoPlay loop playsInline muted preload='auto' ref={videoRef} className='hidden md:block w-full'>
                    <source src='/assets/videos/products.mp4' type='video/mp4'/>
                </video>
                <video autoPlay loop playsInline muted preload='auto' className='block object-cover h-[300px] md:hidden'>
                    <source src={ProductsMobile} type='video/mp4'/>
                </video>
                <div className='absolute inset-0 flex justify-center'>
                    <div className='max-w-[1000px] w-full flex flex-col items-center justify-center gap-0px md:gap-[10px] py-[50px] px-[30px] md:px-0 md:py-[100px]'>
                        <div className='text-white text-xl md:text-[64px] font-bold leading-normal text-center'>
                            {t("Products.productsVideoTitle")}
                        </div>
                        {
                            i18n.language === 'en' ? (
                                <div className='w-[239px] md:w-full text-xs md:text-2xl text-white leading-tight md:leading-normal text-center'>
                                    {t("Products.productsVideoDescription")}
                                </div>
                            ) : (
                                <div className='w-[239px] md:w-full text-xs md:text-2xl text-white leading-tight md:leading-normal text-center'>
                                    {t("Products.productsVideoDescription")}
                                </div>
                            )
                        }
                        
                    </div>
                </div>
            </div>

            <div className='w-full flex justify-center'>
                <div className='max-w-[1000px] w-full py-[50px] px-[30px] md:px-0 md:py-[150px]'>
                    <div className='flex flex-col gap-[50px] md:gap-[100px]'>

                        <div className='flex flex-col gap-[10px] md:gap-2.5'>
                            <div className='text-[#1C7800] text-base md:text-[40px] text-left font-bold leading-normal'>
                                {t("Products.currencyTitle")}
                            </div>
                            {
                                i18n.language === 'en' ? (
                                    <div className='text-[#444] text-sm md:text-2xl text-left leading-tight md:leading-normal'>
                                        <div className='hidden md:block'>{t("Products.currencyDescription")}</div>
                                        <div className='hidden md:block'>{t("Products.currencyDescription2")}</div>
                                        <div className='hidden md:block'>{t("Products.currencyDescription3")}</div>

                                        <div className='block md:hidden'>{t("Products.currencyDescriptionMobile")}</div>
                                        <div className='block md:hidden'>{t("Products.currencyDescriptionMobile1")}</div>
                                    </div>
                                ) : (
                                    <div className='text-[#444] text-sm md:text-2xl text-left leading-tight md:w-[950px]'>
                                        <div className='hidden md:block'>{t("Products.currencyDescription")}</div>

                                        <div className='block md:hidden'>{t("Products.currencyDescriptionMobile")}</div>
                                    </div>
                                )
                            }
                            
                        </div>

                        <div className='flex flex-col gap-[30px] md:gap-[100px]'>
                            <div className='flex flex-col gap-[10px] md:gap-2.5'>
                                <div className='text-[#1C7800] text-base md:text-[40px] font-bold leading-normal text-left'>
                                    {t("Products.c&pMetal_Title")}
                                </div>
                                {
                                    i18n.language === 'en' ? (
                                        <div className='text-[#444] text-sm md:text-2xl text-left leading-normal'>
                                            <div className=' md:w-[980px]'>
                                                {t("Products.c&pMetal_Description")}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='text-[#444] text-sm md:text-2xl text-left leading-normal'>
                                            <div className='flex flex-col md:w-[980px]'>
                                                <div className='hidden md:block'>{t("Products.c&pMetal_Description")}</div>
                                                <div className='hidden md:block'>{t("Products.c&pMetal_Description2")}</div>

                                                <div className='block md:hidden'>{t("Products.c&pMetal_DescriptionMobile")}</div>
                                            </div>
                                        </div>
                                    )
                                }
                                
                            </div>
                            <div className='flex flex-col gap-[50px] md:gap-[50px]'>
                                <div className='flex flex-col gap-[20px]'>
                                    <div className='hidden md:flex flex-col'>
                                        <table className="table-auto w-[100%] border-collapse text-center">
                                            <thead>
                                                <tr className=" text-[#fff] rounded-[5px] text-sm">
                                                    <th className="p-2">
                                                        <div className="bg-[#1C7800] h-[30px] w-full flex items-center justify-center border border-white rounded-[5px] font-semibold">
                                                        {t("currenciesTable.symbolTitle")}
                                                        </div>
                                                    </th>
                                                    <th className="p-2">
                                                        <div className="bg-[#1C7800] h-[30px] w-full flex items-center justify-center border border-white rounded-[5px] font-semibold">
                                                        {t("currenciesTable.descriptionsTitle")}
                                                        </div>
                                                    </th>
                                                    <th className="p-2">
                                                        <div className="bg-[#1C7800] h-[30px] w-full flex items-center justify-center border border-white rounded-[5px] font-semibold">
                                                        {t("currenciesTable.minimumspreadTitle")}
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                                <td className='h-[30px] border border-white'>AUDCAD</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.aud")} vs. {t("Products.table.cad")}</td>
                                                <td className='h-[30px] border border-white'>1.6</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>50</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                                <td className='h-[30px] border border-white'>AUDCHF</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.aud")} vs. {t("Products.table.chf")}</td>
                                                <td className='h-[30px] border border-white'>1.3</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>50</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>AUDJPY</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.aud")} vs. {t("Products.table.jpy")}</td>
                                                <td className='h-[30px] border border-white'>1.4</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>50</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>AUDNZD</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.aud")} vs. {t("Products.table.nzd")}</td>
                                                <td className='h-[30px] border border-white'>2.0</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>50</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>AUDUSD</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.aud")} vs. {t("Products.table.usd")}</td>
                                                <td className='h-[30px] border border-white'>1.2</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>100</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>CADCHF</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.cad")} vs. {t("Products.table.chf")}</td>
                                                <td className='h-[30px] border border-white'>1.3</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>50</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>CADJPY</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.cad")} vs. {t("Products.table.chf")}</td>
                                                <td className='h-[30px] border border-white'>1.4</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>50</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>CHFJPY</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.chf")} vs. {t("Products.table.jpy")}</td>
                                                <td className='h-[30px] border border-white'>1.7</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>50</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>EURAUD</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.eur")} vs. {t("Products.table.aud")}</td>
                                                <td className='h-[30px] border border-white'>2.3</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>50</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>EURCAD</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.eur")} vs. {t("Products.table.cad")}</td>
                                                <td className='h-[30px] border border-white'>2.3</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>50</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>EURCHF</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.eur")} vs. {t("Products.table.chf")}</td>
                                                <td className='h-[30px] border border-white'>1.9</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>50</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>EURGBP</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.eur")} vs. {t("Products.table.gbp")}</td>
                                                <td className='h-[30px] border border-white'>1.2</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>50</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>EURJPY</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.eur")} vs. {t("Products.table.jpy")}</td>
                                                <td className='h-[30px] border border-white'>2.0</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>50</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>EURNZD</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.eur")} vs. {t("Products.table.nzd")}</td>
                                                <td className='h-[30px] border border-white'>2.5</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>50</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>EURUSD</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.eur")} vs. {t("Products.table.usd")}</td>
                                                <td className='h-[30px] border border-white'>1.1</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>100</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>GBPAUD</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.gbp")} vs. {t("Products.table.aud")}</td>
                                                <td className='h-[30px] border border-white'>2.7</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>50</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>GBPCAD</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.gbp")} vs. {t("Products.table.cad")}</td>
                                                <td className='h-[30px] border border-white'>2.7</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>50</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>GBPCHF</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.gbp")} vs. {t("Products.table.chf")}</td>
                                                <td className='h-[30px] border border-white'>2.1</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>50</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>GBPJPY</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.gbp")} vs. {t("Products.table.jpy")}</td>
                                                <td className='h-[30px] border border-white'>2.4</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>50</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>GBPNZD</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.gbp")} vs. {t("Products.table.nzd")}</td>
                                                <td className='h-[30px] border border-white'>2.9</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>50</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>GBPUSD</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.gbp")} vs. {t("Products.table.usd")}</td>
                                                <td className='h-[30px] border border-white'>1.4</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>50</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>NZDCAD</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.nzd")} vs. {t("Products.table.cad")}</td>
                                                <td className='h-[30px] border border-white'>1.5</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>50</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>NZDCHF</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.nzd")} vs. {t("Products.table.chf")}</td>
                                                <td className='h-[30px] border border-white'>1.2</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>50</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>NZDJPY</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.nzd")} vs. {t("Products.table.jpy")}</td>
                                                <td className='h-[30px] border border-white'>1.3</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>50</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>NZDUSD</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.nzd")} vs. {t("Products.table.usd")}</td>
                                                <td className='h-[30px] border border-white'>1.8</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>50</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>USDCAD</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.usd")} vs. {t("Products.table.cad")}</td>
                                                <td className='h-[30px] border border-white'>2.2</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>100</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>USDCHF</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.usd")} vs. {t("Products.table.chf")}</td>
                                                <td className='h-[30px] border border-white'>1.6</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>100</td> */}
                                            </tr>
                                            <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                                <td className='h-[30px] border border-white'>USDJPY</td>
                                                <td className='h-[30px] border border-white'>{t("Products.table.usd")} vs. {t("Products.table.jpy")}</td>
                                                <td className='h-[30px] border border-white'>1.2</td>
                                                {/* <td className='h-[30px] border border-white'>0.01</td>
                                                <td className='h-[30px] border border-white'>100</td> */}
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* mobile version */}
                                    <div className='flex flex-col md:hidden'>
                                        <table className="table-auto w-[100%] border-collapse text-center">
                                            <thead>
                                                <tr className=" text-[#fff] rounded-[5px] text-sm">
                                                    <th className="p-1.5">
                                                        <div className="bg-[#1C7800] h-[30px] w-full flex items-center justify-center border border-white rounded-[5px] font-semibold">
                                                        {t("currenciesTable.symbolTitle")}
                                                        </div>
                                                    </th>
                                                    <th className="p-1.5">
                                                        <div className="bg-[#1C7800] h-[30px] w-full flex items-center justify-center border border-white rounded-[5px] font-semibold">
                                                        {t("currenciesTable.minimumspreadTitle")}
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='min-w-[160px] h-[30px] border-[2px] border-white'>AUDCAD</td>
                                                    <td className='min-w-[160px] h-[30px] border-[2px] border-white'>1.6</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>AUDCHF</td>
                                                    <td className='h-[30px] border-[2px] border-white'>1.3</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>AUDJPY</td>
                                                    <td className='h-[30px] border-[2px] border-white'>1.4</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>AUDNZD</td>
                                                    <td className='h-[30px] border-[2px] border-white'>2.0</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>AUDUSD</td>
                                                    <td className='h-[30px] border-[2px] border-white'>1.2</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>100</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>CADCHF</td>
                                                    <td className='h-[30px] border-[2px] border-white'>1.3</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>CADJPY</td>
                                                    <td className='h-[30px] border-[2px] border-white'>1.4</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>CHFJPY</td>
                                                    <td className='h-[30px] border-[2px] border-white'>1.7</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>EURAUD</td>
                                                    <td className='h-[30px] border-[2px] border-white'>2.3</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>EURCAD</td>
                                                    <td className='h-[30px] border-[2px] border-white'>2.3</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>EURCHF</td>
                                                    <td className='h-[30px] border-[2px] border-white'>1.9</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>EURGBP</td>
                                                    <td className='h-[30px] border-[2px] border-white'>1.2</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>EURJPY</td>
                                                    <td className='h-[30px] border-[2px] border-white'>2.0</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>EURNZD</td>
                                                    <td className='h-[30px] border-[2px] border-white'>2.5</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>EURUSD</td>
                                                    <td className='h-[30px] border-[2px] border-white'>1.1</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>100</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>GBPAUD</td>
                                                    <td className='h-[30px] border-[2px] border-white'>2.7</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>GBPCAD</td>
                                                    <td className='h-[30px] border-[2px] border-white'>2.7</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>GBPCHF</td>
                                                    <td className='h-[30px] border-[2px] border-white'>2.1</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>GBPJPY</td>
                                                    <td className='h-[30px] border-[2px] border-white'>2.4</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>GBPNZD</td>
                                                    <td className='h-[30px] border-[2px] border-white'>2.9</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>GBPUSD</td>
                                                    <td className='h-[30px] border-[2px] border-white'>1.4</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>NZDCAD</td>
                                                    <td className='h-[30px] border-[2px] border-white'>1.5</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>NZDCHF</td>
                                                    <td className='h-[30px] border-[2px] border-white'>1.2</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>NZDJPY</td>
                                                    <td className='h-[30px] border-[2px] border-white'>1.3</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>NZDUSD</td>
                                                    <td className='h-[30px] border-[2px] border-white'>1.8</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>USDCAD</td>
                                                    <td className='h-[30px] border-[2px] border-white'>2.2</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>100</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>USDCHF</td>
                                                    <td className='h-[30px] border-[2px] border-white'>1.6</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>100</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>USDJPY</td>
                                                    <td className='h-[30px] border-[2px] border-white'>1.2</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>100</td> */}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className='flex flex-col gap-[20px]'>
                                    <div className='hidden md:flex flex-col'>
                                        <table className="table-auto w-[100%] border-collapse text-center">
                                            <thead>
                                                <tr className=" text-[#fff] rounded-[5px] text-sm">
                                                    <th className="p-2">
                                                        <div className="bg-[#1C7800] h-[30px] w-full flex items-center justify-center border border-white rounded-[5px] font-semibold">
                                                        {t("currenciesTable.symbolTitle")}
                                                        </div>
                                                    </th>
                                                    <th className="p-2">
                                                        <div className="bg-[#1C7800] h-[30px] w-full flex items-center justify-center border border-white rounded-[5px] font-semibold">
                                                        {t("currenciesTable.descriptionsTitle")}
                                                        </div>
                                                    </th>
                                                    <th className="p-2">
                                                        <div className="bg-[#1C7800] h-[30px] w-full flex items-center justify-center border border-white rounded-[5px] font-semibold">
                                                        {t("currenciesTable.minimumspreadTitle")}
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                                    <td className='min-w-[160px] h-[30px] border border-white'>XAUUSD</td>
                                                    <td className='min-w-[601px] h-[30px] border border-white'>{t("Products.table.xau")} vs. {t("Products.table.usd")}</td>
                                                    <td className='min-w-[237px] h-[30px] border border-white'>23</td>
                                                    {/* <td className='h-[30px] border border-white'>0.01</td>
                                                    <td className='h-[30px] border border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                                    <td className='h-[30px] border border-white'>XAUEUR</td>
                                                    <td className='h-[30px] border border-white'>{t("Products.table.xau")} vs. {t("Products.table.eur")}</td>
                                                    <td className='h-[30px] border border-white'>21</td>
                                                    {/* <td className='h-[30px] border border-white'>0.01</td>
                                                    <td className='h-[30px] border border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                                <td className='h-[30px] border border-white'>XAGUSD</td>
                                                    <td className='h-[30px] border border-white'>{t("Products.table.xag")} vs. {t("Products.table.usd")}</td>
                                                    <td className='h-[30px] border border-white'>109</td>
                                                    {/* <td className='h-[30px] border border-white'>0.01</td>
                                                    <td className='h-[30px] border border-white'>20</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                                <td className='h-[30px] border border-white'>XPDUSD</td>
                                                    {
                                                        i18n.language === 'en' ? (
                                                            <td className='h-[30px] border border-white'>{t("Products.table.XPDUSD")}</td>
                                                        ) : (
                                                            <td className='h-[30px] border border-white'>{t("Products.table.xpd")} vs. {t("Products.table.usd")}</td>
                                                        )
                                                    }
                                                    <td className='h-[30px] border border-white'>31</td>
                                                    {/* <td className='h-[30px] border border-white'>0.01</td>
                                                    <td className='h-[30px] border border-white'>10</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                                <td className='h-[30px] border border-white'>XPTUSD</td>
                                                    {
                                                        i18n.language === 'en' ? (
                                                            <td className='h-[30px] border border-white'>{t("Products.table.XPTUSD")}</td>
                                                        ) : (
                                                            <td className='h-[30px] border border-white'>{t("Products.table.xpd")} vs. {t("Products.table.usd")}</td>
                                                        )
                                                    }
                                                    <td className='h-[30px] border border-white'>35</td>
                                                    {/* <td className='h-[30px] border border-white'>0.01</td>
                                                    <td className='h-[30px] border border-white'>10</td> */}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    {/* mobile version */}
                                    <div className='flex flex-col md:hidden' >
                                        <table className="table-auto w-[100%] border-collapse text-center md:hidden">
                                            <thead>
                                                <tr className=" text-[#fff] rounded-[5px] text-sm">
                                                    <th className="p-1.5">
                                                        <div className="bg-[#1C7800] h-[30px] w-full flex items-center justify-center border border-white rounded-[5px] font-semibold">
                                                        {t("currenciesTable.symbolTitle")}
                                                        </div>
                                                    </th>
                                                    <th className="p-1.5">
                                                        <div className="bg-[#1C7800] h-[30px] w-full flex items-center justify-center border border-white rounded-[5px] font-semibold">
                                                        {t("currenciesTable.minimumspreadTitle")}
                                                        </div>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='min-w-[160px] h-[30px] border-[2px] border-white'>XAUUSD</td>
                                                    <td className='min-w-[160px] h-[30px] border-[2px] border-white'>23</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>XAUEUR</td>
                                                    <td className='h-[30px] border-[2px] border-white'>21</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>50</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>XAGUSD</td>
                                                    <td className='h-[30px] border-[2px] border-white'>109</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>20</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                                    <td className='h-[30px] border-[2px] border-white'>XPDUSD</td>
                                                    <td className='h-[30px] border-[2px] border-white'>31</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>10</td> */}
                                                </tr>
                                                <tr className=' bg-[#FFF] text-xs text-[#444] '>
                                                    <td className='h-[30px] border-[2px] border-white'>XPTUSD</td>
                                                    <td className='h-[30px] border-[2px] border-white'>35</td>
                                                    {/* <td className='h-[30px] border-[2px] border-white'>0.01</td>
                                                    <td className='h-[30px] border-[2px] border-white'>10</td> */}
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[50px] md:gap-[50px]'>
                            <div className='flex flex-col gap-[10px] md:gap-5'>
                                <div className='text-[#1C7800] text-base md:text-[40px] font-bold text-left leading-normal'>
                                    {t("Products.CFDsIndicesTitle")}
                                </div>
                                {
                                    i18n.language === 'en' ? (
                                        <div className='text-[#444] text-sm md:text-2xl text-left leading-normal'>
                                            <div className=' flex flex-col w-full md:w-[950px]'>
                                                <div className='hidden md:block'>{t("Products.CFDsIndicesDescription")}</div>
                                                <div className='hidden md:block'>{t("Products.CFDsIndicesDescription1")}</div>
                                                
                                                <div className='block md:hidden'>{t("Products.CFDsIndicesDescriptionMobile")}</div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className='text-[#444] text-sm md:text-2xl text-left leading-normal'>
                                            <div className=' flex flex-col w-full md:w-[950px]'>
                                                <div className='hidden md:block'>{t("Products.CFDsIndicesDescription")}</div>
                                                <div className='hidden md:block'>{t("Products.CFDsIndicesDescription1")}</div>
                                                <div className='hidden md:block'>{t("Products.CFDsIndicesDescription2")}</div>
                                                
                                                <div className='block md:hidden'>{t("Products.CFDsIndicesDescriptionMobile")}</div>
                                            </div>
                                        </div>
                                    )
                                }
                                
                            </div>
                            {/* <img src={CFDs_tradeData} alt="CFDsTradeData" /> */}
                            <div className='hidden md:flex flex-col'>
                                <table className="table-auto w-[100%] border-collapse text-center">
                                    <thead>
                                        <tr className=" text-[#fff] rounded-[5px] text-sm">
                                            <th className="p-2">
                                                <div className="bg-[#1C7800] h-[30px] w-full flex items-center justify-center border border-white rounded-[5px] font-semibold">
                                                {t("currenciesTable.symbolTitle")}
                                                </div>
                                            </th>
                                            <th className="p-2">
                                                <div className="bg-[#1C7800] h-[30px] w-full flex items-center justify-center border border-white rounded-[5px] font-semibold">
                                                {t("currenciesTable.descriptionsTitle")}
                                                </div>
                                            </th>
                                            <th className="p-2">
                                                <div className="bg-[#1C7800] h-[30px] w-full flex items-center justify-center border border-white rounded-[5px] font-semibold">
                                                {t("currenciesTable.minimumspreadTitle")}
                                                </div>
                                            </th>
                                        </tr>
                                        {/* <tr className=' bg-[#1C7800] text-[#fff] border-white text-sm font-semibold'>
                                            <th className='h-[30px] w-[120px] border border-white'>{t("currenciesTable.symbolTitle")}</th>
                                            <th className='h-[30px] w-[395px] border border-white'>{t("currenciesTable.descriptionsTitle")}</th>
                                            <th className='h-[30px] w-[140px] border border-white'>{t("currenciesTable.minimumspreadTitle")}</th>
                                            <th className='h-[30px] w-[165px] border border-white'>{t("currenciesTable.minimumtradesizeTitle")}</th>
                                            <th className='h-[30px] border border-white'>{t("currenciesTable.maximumtradesizeTitle")}</th>
                                        </tr> */}
                                    </thead>
                                    <tbody>
                                        <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='min-w-[160px] h-[30px] border border-white'>#CHINA50</td>
                                            <td className='min-w-[601px] h-[30px] border border-white'>{t("Products.table.CHINA50")}</td>
                                            <td className='min-w-[237px] h-[30px] border border-white'>7.50</td>
                                            {/* <td className='h-[30px] border border-white'>1</td>
                                            <td className='h-[30px] border border-white'>100</td> */}
                                        </tr>
                                        <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                            <td className='h-[30px] border border-white'>#NIK225</td>
                                            <td className='h-[30px] border border-white'>{t("Products.table.NIK225")}</td>
                                            <td className='h-[30px] border border-white'>15.00</td>
                                            {/* <td className='h-[30px] border border-white'>10</td>
                                            <td className='h-[30px] border border-white'>100</td> */}
                                        </tr>
                                        <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                        <td className='h-[30px] border border-white'>#DE40</td>
                                            <td className='h-[30px] border border-white'>{t("Products.table.DE40")}</td>
                                            <td className='h-[30px] border border-white'>2.00</td>
                                            {/* <td className='h-[30px] border border-white'>1</td>
                                            <td className='h-[30px] border border-white'>200</td> */}
                                        </tr>
                                        <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                        <td className='h-[30px] border border-white'>#FR40</td>
                                            <td className='h-[30px] border border-white'>{t("Products.table.FR40")}</td>
                                            <td className='h-[30px] border border-white'>1.60</td>
                                            {/* <td className='h-[30px] border border-white'>1</td>
                                            <td className='h-[30px] border border-white'>200</td> */}
                                        </tr>
                                        <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                        <td className='h-[30px] border border-white'>#ES</td>
                                            <td className='h-[30px] border border-white'>{t("Products.table.ES")}</td>
                                            <td className='h-[30px] border border-white'>5.20</td>
                                            {/* <td className='h-[30px] border border-white'>1</td>
                                            <td className='h-[30px] border border-white'>200</td> */}
                                        </tr>
                                        <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                        <td className='h-[30px] border border-white'>#CH</td>
                                            <td className='h-[30px] border border-white'>{t("Products.table.CH")}</td>
                                            <td className='h-[30px] border border-white'>3.14</td>
                                            {/* <td className='h-[30px] border border-white'>1</td>
                                            <td className='h-[30px] border border-white'>100</td> */}
                                        </tr>
                                        <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                        <td className='h-[30px] border border-white'>#US500</td>
                                            <td className='h-[30px] border border-white'>{t("Products.table.US500")}</td>
                                            <td className='h-[30px] border border-white'>0.65</td>
                                            {/* <td className='h-[30px] border border-white'>1</td>
                                            <td className='h-[30px] border border-white'>200</td> */}
                                        </tr>
                                        <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                        <td className='h-[30px] border border-white'>#NAS100</td>
                                            <td className='h-[30px] border border-white'>{t("Products.table.NAS100")}</td>
                                            <td className='h-[30px] border border-white'>1.70</td>
                                            {/* <td className='h-[30px] border border-white'>1</td>
                                            <td className='h-[30px] border border-white'>200</td> */}
                                        </tr>
                                        <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                        <td className='h-[30px] border border-white'>#GB100</td>
                                            <td className='h-[30px] border border-white'>{t("Products.table.GB100")}</td>
                                            <td className='h-[30px] border border-white'>1.60</td>
                                            {/* <td className='h-[30px] border border-white'>1</td>
                                            <td className='h-[30px] border border-white'>200</td> */}
                                        </tr>
                                        <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                        <td className='h-[30px] border border-white'>#EU50</td>
                                            <td className='h-[30px] border border-white'>{t("Products.table.EU50")}</td>
                                            <td className='h-[30px] border border-white'>2.10</td>
                                            {/* <td className='h-[30px] border border-white'>1</td>
                                            <td className='h-[30px] border border-white'>200</td> */}
                                        </tr>
                                        <tr className=' bg-[#FFF] text-sm text-[#444]'>
                                        <td className='h-[30px] border border-white'>#US30</td>
                                            <td className='h-[30px] border border-white'>{t("Products.table.US30")}</td>
                                            <td className='h-[30px] border border-white'>3.20</td>
                                            {/* <td className='h-[30px] border border-white'>1</td>
                                            <td className='h-[30px] border border-white'>200</td> */}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* mobile version */}
                            <div className='flex flex-col md:hidden'>
                                <table className="table-auto w-[100%] border-collapse text-center">
                                    <thead>
                                        <tr className=" text-[#fff] rounded-[5px] text-sm">
                                            <th className="p-1.5">
                                                <div className="bg-[#1C7800] h-[30px] w-full flex items-center justify-center border border-white rounded-[5px] font-semibold">
                                                {t("currenciesTable.symbolTitle")}
                                                </div>
                                            </th>
                                            <th className="p-1.5">
                                                <div className="bg-[#1C7800] h-[30px] w-full flex items-center justify-center border border-white rounded-[5px] font-semibold">
                                                {t("currenciesTable.minimumspreadTitle")}
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                            <td className='min-w-[160px] h-[30px] border border-white'>#CHINA50</td>
                                            <td className='min-w-[160px] h-[30px] border border-white'>7.50</td>
                                            {/* <td className='h-[30px] border border-white'>1</td>
                                            <td className='h-[30px] border border-white'>100</td> */}
                                        </tr>
                                        <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                            <td className='h-[30px] border border-white'>#NIK225</td>
                                            <td className='h-[30px] border border-white'>15.00</td>
                                            {/* <td className='h-[30px] border border-white'>10</td>
                                            <td className='h-[30px] border border-white'>100</td> */}
                                        </tr>
                                        <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                        <td className='h-[30px] border border-white'>#DE40</td>
                                            <td className='h-[30px] border border-white'>2.00</td>
                                            {/* <td className='h-[30px] border border-white'>1</td>
                                            <td className='h-[30px] border border-white'>200</td> */}
                                        </tr>
                                        <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                        <td className='h-[30px] border border-white'>#FR40</td>
                                            <td className='h-[30px] border border-white'>1.60</td>
                                            {/* <td className='h-[30px] border border-white'>1</td>
                                            <td className='h-[30px] border border-white'>200</td> */}
                                        </tr>
                                        <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                        <td className='h-[30px] border border-white'>#ES</td>
                                            <td className='h-[30px] border border-white'>5.20</td>
                                            {/* <td className='h-[30px] border border-white'>1</td>
                                            <td className='h-[30px] border border-white'>200</td> */}
                                        </tr>
                                        <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                        <td className='h-[30px] border border-white'>#CH</td>
                                            <td className='h-[30px] border border-white'>3.14</td>
                                            {/* <td className='h-[30px] border border-white'>1</td>
                                            <td className='h-[30px] border border-white'>100</td> */}
                                        </tr>
                                        <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                        <td className='h-[30px] border border-white'>#US500</td>
                                            <td className='h-[30px] border border-white'>0.65</td>
                                            {/* <td className='h-[30px] border border-white'>1</td>
                                            <td className='h-[30px] border border-white'>200</td> */}
                                        </tr>
                                        <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                        <td className='h-[30px] border border-white'>#NAS100</td>
                                            <td className='h-[30px] border border-white'>1.70</td>
                                            {/* <td className='h-[30px] border border-white'>1</td>
                                            <td className='h-[30px] border border-white'>200</td> */}
                                        </tr>
                                        <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                        <td className='h-[30px] border border-white'>#GB100</td>
                                            <td className='h-[30px] border border-white'>1.60</td>
                                            {/* <td className='h-[30px] border border-white'>1</td>
                                            <td className='h-[30px] border border-white'>200</td> */}
                                        </tr>
                                        <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                        <td className='h-[30px] border border-white'>#EU50</td>
                                            <td className='h-[30px] border border-white'>2.10</td>
                                            {/* <td className='h-[30px] border border-white'>1</td>
                                            <td className='h-[30px] border border-white'>200</td> */}
                                        </tr>
                                        <tr className=' bg-[#FFF] text-xs text-[#444]'>
                                        <td className='h-[30px] border border-white'>#US30</td>
                                            <td className='h-[30px] border border-white'>3.20</td>
                                            {/* <td className='h-[30px] border border-white'>1</td>
                                            <td className='h-[30px] border border-white'>200</td> */}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[10px] md:gap-5'>
                            <div className='text-[#1C7800] text-base md:text-[40px] font-bold text-left leading-tight'>
                                {t("Products.stopoutlevel_Title")}
                            </div>
                            <div className='flex flex-col text-[#444] text-sm md:text-2xl text-left leading-normal gap-4 md:gap-9'>
                                {
                                    i18n.language === 'en' ? (
                                        <div>
                                            {t("Products.stopoutlevel_Description")}
                                        </div>
                                    ) : (
                                        <div className='flex flex-col'>
                                            <div>{t("Products.stopoutlevel_Description")}</div>
                                            <div>{t("Products.stopoutlevel_Description1")}</div>
                                        </div>
                                    )
                                }
                                
                                <div>
                                    {t("Products.stopoutlevel_Description2")}
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-[10px] md:gap-5'>
                            <div className='text-[#1C7800] text-base md:text-[40px] font-bold text-left md:leading-tight'>
                                {t("Products.riskWarning_Title")}
                            </div>
                            <div className='flex flex-col text-[#444] text-sm md:text-2xl text-left gap-4 md:gap-9 leading-tight md:leading-normal'>
                                <div>
                                    {t("Products.riskWarning_Description")}
                                </div>
                                <div>
                                    {t("Products.riskWarning_Description2")}
                                </div>
                                <div>
                                    {t("Products.riskWarning_Description3")}
                                </div>
                            </div>
                        </div>

                        <img src={QCG_Logo} alt="QCG Logo" className='w-[200px] md:w-[866px] self-center'/>

                        <div className='flex flex-col gap-[10px] md:gap-5'>
                            <div className='text-[#1C7800] text-base md:text-[40px] font-bold text-left md:leading-normal'>
                                {t("Products.Disclaimer.disclaimerTitle")}
                            </div>
                            <div className='flex flex-col gap-4 md:gap-8'>
                                <div className='text-[#444] text-sm md:text-2xl text-left'>
                                    {t("Products.Disclaimer.disclaimerDescription")}
                                </div>
                                <div className='w-full flex flex-col gap-5 md:gap-10'>
                                    <div className='text-[#444] text-sm md:text-2xl text-left space-y-3 md:space-y-5 leading-normal'>
                                        <span className='font-bold'>{t("Products.Disclaimer.disclaimerSubtitle1")}</span>
                                        {t("Products.Disclaimer.disclaimerSubtitle1Description")}
                                    </div>
                                    <div className='text-[#444] text-sm md:text-2xl text-left space-y-3 md:space-y-5 leading-normal'>
                                        <span className='font-bold'>{t("Products.Disclaimer.disclaimerSubtitle2")}</span>
                                        {t("Products.Disclaimer.disclaimerSubtitle2Description")}
                                    </div>
                                    <div className='text-[#444] text-sm md:text-2xl text-left space-y-3 md:space-y-5 leading-normal'>
                                        <span className='font-bold'>{t("Products.Disclaimer.disclaimerSubtitle3")}</span>
                                        {t("Products.Disclaimer.disclaimerSubtitle3Description")}
                                    </div>
                                    <div className='text-[#444] text-sm md:text-2xl text-left space-y-3 md:space-y-5 leading-normal'>
                                        <span className='font-bold'>{t("Products.Disclaimer.disclaimerSubtitle4")}</span>
                                        {t("Products.Disclaimer.disclaimerSubtitle4Description")}
                                    </div>
                                    <div className='text-[#444] text-sm md:text-2xl text-left space-y-3 md:space-y-5 leading-normal'>
                                        <span className='font-bold'>{t("Products.Disclaimer.disclaimerSubtitle5")}</span>
                                        {t("Products.Disclaimer.disclaimerSubtitle5Description")}
                                    </div>
                                    <div className='text-[#444] text-sm md:text-2xl text-left space-y-3 md:space-y-5 leading-normal'>
                                        <span className='font-bold'>{t("Products.Disclaimer.disclaimerSubtitle6")}</span>
                                        {t("Products.Disclaimer.disclaimerSubtitle6Description")}
                                    </div>
                                    <div className='text-[#444] text-sm md:text-2xl text-left space-y-3 md:space-y-5 leading-normal'>
                                        <span className='font-bold'>{t("Products.Disclaimer.disclaimerSubtitle7")}</span>
                                        {t("Products.Disclaimer.disclaimerSubtitle7Description")}
                                    </div>
                                    <div className='text-[#444] text-sm md:text-2xl text-left space-y-3 md:space-y-5 leading-normal'>
                                        <span className='font-bold'>{t("Products.Disclaimer.disclaimerSubtitle8")}</span>
                                        {t("Products.Disclaimer.disclaimerSubtitle8Description")}
                                    </div>
                                </div>
                                <div className='text-[#444] text-sm md:text-2xl text-left leading-normal'>
                                    {t("Products.Disclaimer.disclaimerReminder")}
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
                                            <Link to='https://login.qcgexchange.com/register'>
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
                                        <a href="https://login.qcgexchange.com/login">
                                            <button className='w-[180px] h-[50px] md:w-[150px] bg-[#1C7800] text-white rounded-[5px] md:rounded-md flex items-center justify-center text-sm md:text-base font-bold'>
                                                {t("openTradingACC.liveACC_Title")}
                                            </button>
                                        </a>
                                        
                                    </div> */}
                                    
                                    {/* <button className=' w-[180px] md:w-[159px] bg-[#1C7800] text-white rounded-[5px] md:rounded-md items-center justify-center text-sm md:text-base font-bold hidden md:flex'>
                                        <a href="https://login.qcgexchange.com/login">
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

export default Products;