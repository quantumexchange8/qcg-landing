import React, { useRef, useEffect, useState } from 'react';
import google from '../Assets/Images/googleplay.svg';
import apple from '../Assets/Images/apple.svg';
import iphone from '../Assets/Images/iphone.png';
import IpadScreenShot from '../Assets/Images/ipad-screenshot.png';
import { Window } from '../Components/Brand';
import { Built, InAppDeposit, AccountType, CurrencyPair, Partners } from '../Components/Outline';

const Home = () => {

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
        <div>
            <div className='relative'>
                <video autoPlay loop playsInline muted preload='auto' ref={videoRef} className='w-full'>
                    <source src='/assets/videos/home.mp4' type='video/mp4'/>
                </video>

                <div className='absolute left-[100px] bottom-[100px] flex flex-col justify-center items-start gap-[50px]'>
                    <div className='flex flex-col gap-5'>
                        <div className='text-white text-9xl font-bold leading-none text-left'>
                            Unlimited
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-white text-2xl text-left font-extrabold'>Trade with Quantum Capital for unlimited opportunities</span>
                            <span className='text-white text-2xl text-left font-medium'>Unleash your financial potential with QCG's solid liquidity and high-class execution</span>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[30px]'>
                        <div className='text-white text-[32px] leading-none font-bold text-left'>
                            OPEN YOUR TRADING ACCOUNT
                        </div>
                        <div className='flex flex-col gap-[15px]'>
                            <div className='flex gap-[10px]'>
                                <img src={google} alt="google" />
                                <img src={apple} alt="apple" />
                                <Window/>
                                <div className='w-[150px] bg-primary text-white rounded-md flex items-center justify-center text-base font-bold'>
                                    Live account
                                </div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='text-white text-xl font-medium text-left'>Already have a friend at Quantum Capital Group?</div>
                                <div className='text-white text-xl font-medium'>
                                    Ask them for their referral code so you both get <span className='text-primary text-xl font-medium'> USD$100.00 - Rewards!</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center'>
                <div className='max-w-[1000px] w-full mt-[200px]'>
                    <div className='flex flex-col gap-[300px]'>
                        <div className='flex flex-col gap-[200px]'>
                            <div className='flex flex-col gap-[50px]'>
                                <div className='flex flex-col gap-5'>
                                    <div className='flex flex-col text-primary text-5xl font-bold'>
                                        <span>The advantage of QCG</span>
                                        <span>is different from others</span>
                                    </div>
                                    <div className='text-[#444 text-2xl font-medium leading-tight'>
                                        Elevate your financial situation within the comfortable and secure environment of a
                                        Quantum Capital Group without having to overpay for it. Our highly intuitive platform,
                                        extensive forex variety information, and customer service team accompanying you
                                        every step of the way open up a world full of opportunities for you.
                                    </div>
                                </div>
                                <div className='bg-primary-50 rounded-[20px] flex justify-center gap-5 md:py-[75px] md:px-[90px]'>
                                    <div className='bg-white flex flex-col items-center gap-5 rounded-[20px] w-[395px] md:py-[75px] md:px-[90px] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
                                        <Built/>
                                        <div className='flex flex-col text-xl font-bold'>
                                            <span>Built-in</span>
                                            <span>CopyTrading System</span>
                                        </div>
                                    </div>
                                    <div className='bg-white flex flex-col items-center gap-4 rounded-[20px] w-[395px] md:py-[75px] md:px-[52px] drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
                                        <InAppDeposit/>
                                        <div className='flex flex-col text-xl font-bold'>
                                            <span>In-App deposit,</span>
                                            <span>withdrawal & Internal transfer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[100px]'>
                                <div className='flex flex-col items-center gap-[30px]'>
                                    <div className='w-[130px] border border-primary py-[10px] px-[25px] text-xl text-primary'>
                                        Platform
                                    </div>
                                    <div className='flex flex-col'>
                                        <span
                                            ref={textRef}
                                            className={`text-[#444] text-[80px] font-extrabold leading-none ${
                                            animate ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'
                                            }`}
                                        >
                                            You must have the best
                                        </span>
                                        <span
                                            className={`text-primary text-[80px] font-extrabold leading-none ${
                                            animate ? 'opacity-100 transition-opacity duration-1000 delay-500' : 'opacity-0'
                                            }`}
                                        >
                                            trading environment
                                        </span>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[30px]'>
                                    <div>
                                        <img src={IpadScreenShot} alt="ipad-screenshot" />
                                    </div>
                                    <div className='text-[#444] text-[32px] font-semibold'>
                                        World-class platform. Seamless execution. Radical confifence.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[300px]'>
                            <div className='flex flex-col gap-[50px]'>
                                <div className='flex gap-[50px]'>
                                    <div>
                                        <video autoPlay loop muted preload='auto' ref={videoRef} className='object-cover w-[500px] h-[500px]'>
                                            <source src="/assets/videos/trading.mp4" type='video/mp4'/>
                                        </video>
                                    </div>
                                    <div className='flex flex-col gap-[30px]'>
                                        <div className='w-[130px] border border-primary py-[10px] px-[25px] text-xl text-primary'>
                                            Pricing
                                        </div>
                                        <div className='flex flex-col text-primary text-6xl font-bold text-left'>
                                            <span>You can trade</span>
                                            <span>anytime,</span>
                                            <span>anywhere,</span>
                                            <span>any place.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-10'>
                                    <div className='flex justify-center gap-[50px]'>
                                        <div className='w-[300px] flex flex-col gap-[30px] rounded-[20px] items-center py-12 px-[78px] bg-primary-50 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
                                            <CurrencyPair/>
                                            <div className='text-[#444] text-xl font-bold'>
                                                Currency Pairs
                                            </div>
                                        </div>
                                        <div className='w-[300px] flex flex-col gap-[30px] rounded-[20px] items-center py-12 px-[78px] bg-primary-50 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
                                            <AccountType/>
                                            <div className='text-[#444] text-xl font-bold'>
                                                Account Types
                                            </div>
                                        </div>
                                        <div className='w-[300px] flex flex-col gap-[30px] rounded-[20px] items-center py-12 px-[78px] bg-primary-50 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
                                            <Partners/>
                                            <div className='text-[#444] text-xl font-bold'>
                                                Partners
                                            </div>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-[10px]'>
                                        <span className='text-[#444] text-[32px] font-semibold leading-none'>
                                            Are you bothered by hidden fees from other forex platforms?
                                        </span>
                                        <span className='text-primary text-2xl font-medium'>
                                            Feel free to consider the advantages of our pricing, which are also very fair.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[50px]'>
                                <div className='flex gap-[80px]'>
                                    <div className='flex flex-col gap-[30px]'>
                                        <div className='w-[130px] border border-primary py-[10px] px-[18px] text-xl text-primary'>
                                            Securities
                                        </div>
                                        <div className='flex flex-col gap-[50px]'>
                                            <div className='flex flex-col text-primary text-[40px] font-bold text-left leading-none'>
                                                <span>The most influential</span>
                                                <span>financial investment</span>
                                                <span>instrument.</span>
                                            </div>
                                            <div className='text-[#444] text-2xl font-medium text-left md:w-[420px]'>
                                                Stocks, ETFs, funds, bonds, options 
                                                & futures, derivatives - you name it. 
                                                Everything essential to trading is at 
                                                your fingertips, helping you build a 
                                                financially robust investment 
                                                portfolio.
                                            </div>
                                        </div>
                                        
                                    </div>

                                    <div>
                                        <video autoPlay loop muted preload='auto' ref={videoRef} className='object-cover w-[500px] h-[500px]'>
                                            <source src="/assets/videos/invest.mp4" type='video/mp4'/>
                                        </video>
                                    </div>
                                </div>
                                <div className='rounded-[20px] flex flex-col gap-5 py-[30px] px-10 bg-primary-50 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
                                    <span className='text-primary text-5xl font-bold text-left'>CFDs Indices</span>
                                    <div className='text-[#444] text-2xl text-left leading-none'>
                                        QCG's platforms also allow you to trade on the movements of all the main 
                                        European and American indices, as well as Japan's. Most of these CFDs are 
                                        available both as Forward (with an expiration date) or Spot/Synthetic
                                        (no expiration date, overnight rollover/swap interest applies).
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[150px]'>
                                <div className='flex flex-col gap-[50px]'>
                                    <div className='flex gap-[80px]'>
                                        <div>
                                            <video autoPlay loop muted preload='auto' ref={videoRef} className='object-cover w-[500px] h-[500px]'>
                                                <source src="/assets/videos/processor.mp4" type='video/mp4'/>
                                            </video>
                                        </div>
                                        <div className='flex flex-col items-end gap-[30px]'>
                                            <div className='w-[130px] border border-primary py-[10px] px-[18px] text-xl text-primary'>
                                                Crypto
                                            </div>
                                            <div className='flex flex-col gap-[50px]'>
                                                <div className='flex flex-col text-primary text-[40px] font-bold leading-none text-right'>
                                                    <span>QCG: the best of all</span>
                                                    <span>crypto trading</span>
                                                </div>
                                                <div className='text-[#444] text-2xl font-medium text-right md:w-[390px]'>
                                                    QCG offers a total of 100+ 
                                                    cryptocurrencies and an infinity of 
                                                    opportunities. Learn more about 
                                                    the benefits of each digital 
                                                    currency available on our platform.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='rounded-[20px] flex flex-col gap-5 py-[30px] px-10 bg-primary-50 drop-shadow-[2px_2px_4px_rgba(0,0,0,0.5)]'>
                                        <span className='text-primary text-5xl font-bold text-left'>Crypto Wallet</span>
                                        <div className='text-[#444] text-2xl text-left leading-none'>
                                            Store and manage your portfolio of cryptocurrencies in complete safety because 
                                            of our crypto wallet feature. 
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-[30px]'>
                                    <div className='text-[32px] leading-none font-bold text-left'>
                                        OPEN YOUR TRADING ACCOUNT
                                    </div>
                                    <div className='flex flex-col gap-[15px]'>
                                        <div className='flex gap-[10px]'>
                                            <img src={google} alt="google" />
                                            <img src={apple} alt="apple" />
                                            <Window/>
                                            <div className='w-[150px] bg-primary text-white rounded-md flex items-center justify-center text-base font-bold'>
                                                Live account
                                            </div>
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='text-xl font-medium text-left'>Already have a friend at Quantum Capital Group?</div>
                                            <div className='text-xl font-medium text-left'>
                                                Ask them for their referral code so you both get <span className='text-primary text-xl font-medium'> USD$100.00 - Rewards!</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <img src={iphone} alt="iphone" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;