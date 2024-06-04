import React from 'react';
import footer from '../Assets/Images/footer.png';
import logo from '../Assets/Images/footer_logo.svg';

const Footer = () => {

    return (
        <div>
            <div className='relative'>
                <img src={footer} alt="footer" className='w-full h-[500px] md:h-[426px]'/>

                <div className='absolute inset-0 flex justify-center items-center'>
                    <div className='max-w-[1000px] w-full'>
                        <div className='flex flex-col gap-4 md:gap-[30px] px-5 py-5 md:px-0 md:py-0'>
                            <div className='flex flex-col gap-[15px]'>
                                <img src={logo} alt="footer_logo" className='w-[80px] md:w-[102px] h-[30.5px] md:h-[39px]'/>

                                <div className='flex flex-col text-white text-[12px] md:text-base font-normal text-left'>
                                    <div className='flex flex-col leading-[1.20]'>
                                        Quantum Capital Group establish in 2021. It committed to delivering a comprehensive and reliable trading experience for forex 
                                        traders globally. With our team of industry experts and cutting-edge technology, we empower traders with the necessary tools and 
                                        knowledge to navigate the dynamic foreign exchange market. Our platform provides comprehensive resources, competitive 
                                        offerings, and robust customer support to ensure a secure and successful trading journey. We strive to be the trusted partner for 
                                        traders seeking a comprehensive and rewarding forex trading experience.
                                    </div>
                                    
                                </div>
                            </div>
                            <div className='flex flex-col text-secondary text-[12px] md:text-base font-bold text-left'>
                                <div className='flex flex-col leading-[1.20]'>
                                    <span>NFA ID: 0555532</span>
                                    <span>Copyright © Quantum Capital Group 2021. All rights reserved.</span>
                                </div>
                                
                            </div>
                            <div className='flex flex-col gap-[10px]'>
                                <span className='text-red text-xs md:text-sm font-bold text-left'>Risk Warning: </span>
                                <span className='text-white text-[10px] md:text-xs font-light text-left'>
                                    Trading foreign exchange, spot precious metals and any other product on the Forex platform involves significant risk of loss and may not be suitable for all investors. Prior to opening an account with QCG, consider 
                                    your level of experience, investment objectives, assets, income and risk appetite. The possibility exists that you could sustain a loss of some or all of your initial investment and therefore you should not speculate, 
                                    invest or hedge with capital you cannot afford to lose, that is borrowed or urgently needed or necessary for personal or family subsistence. You should be aware of all the risks associated with foreign exchange 
                                    trading, and seek advice from an independent financial advisor if you have any doubts. The content of this website represents advertising material and has not been submitted to nor approved by any supervisory 
                                    authority.
                                </span>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer;