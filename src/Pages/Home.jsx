import React from 'react';
import google from '../Assets/Images/googleplay.svg';
import apple from '../Assets/Images/apple.svg';
import { Window } from '../Components/Brand';
import { Built, InAppDeposit } from '../Components/Outline';

const Home = () => {

    return (
        <div>
            <div className='relative'>
                <video autoPlay loop playsInline muted className='w-full'>
                    <source src='/assets/videos/home.mp4'/>
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
                <div className='max-w-[1000px] w-full mt-[200px] mb-[150px]'>
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

                            </div>
                        </div>
                        <div className='flex flex-col gap-[300px]'>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;