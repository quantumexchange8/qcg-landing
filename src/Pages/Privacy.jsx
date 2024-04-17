import React from 'react';
import home from '../Assets/Images/home.png';
import google from '../Assets/Images/googleplay.svg';
import apple from '../Assets/Images/apple.svg';
import { Window } from '../Components/Brand';

const Privacy = () => {

    return (
        <div>
            <div className='relative'>
                <img src={home} alt='home' className='w-full'/>

                <div className='absolute right-[100px] bottom-[100px] flex flex-col justify-center items-end gap-[30px]'>
                    <div className='text-white text-5xl font-bold'>
                        Quantum Capital Group
                    </div>
                    <div className='flex flex-col text-white text-3xl text-right font-semibold'>
                        <span>Quantum Capital Group is not a typical investment</span>
                        <span>brokerage. Our history, ambition, and DNA come</span>
                        <span>from the world of creativity, software development,</span>
                        <span>and investor empowerment. These values remain</span>
                        <span>central to us as our most important core.</span>
                    </div>
                </div>
            </div>

            <div className='w-full flex flex-col items-center justify-center'>
                <div className='max-w-[1000px] w-full mt-[200px] mb-[150px]'>
                    <div className='flex flex-col gap-[200px]'>
                        <div className='flex flex-col text-primary text-5xl font-bold text-left'>
                            <span>QCG combines a unique multi-asset </span>
                            <span>trading platform with the innovative</span>
                            <span>power of a solid fintech foundation.</span>
                        </div>
                        <div className='flex flex-col gap-[50px]'>
                            <div className='flex flex-col text-primary md:text-8xl font-bold text-left'>
                                <span>CRYPTO</span>
                                <span>CURRENCIES</span>
                            </div>
                            <div className='flex flex-col md:w-[930px] text-[#444] text-4xl font-semibold text-left'>
                                <span>QCG is deeply interested in blockchain technology.</span>
                                <span>
                                    Future activities in the crypto field should occur within a 
                                    reliable, regulated framework. Through our crypto 
                                    trading, we've created an efficient trading platform for 
                                    our clients, ensuring secure, cost-effective execution 
                                    with ample liquidity in cryptocurrency trading. Currently, 
                                    over 100 cryptocurrencies can be traded via QCG, and 
                                    we're actively working to increase this number.
                                </span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[100px]'>
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col text-primary text-[40px] font-bold text-left leading-none'>
                                    <span>KEY SUCCESS FACTORS NOT LIMITED TO </span>
                                    <span>FINANCIAL ASSETS</span>
                                </div>
                                <div className='text-[#444] text-2xl font-medium text-left md:w-[940px]'>
                                    The areas we highly prioritise include protection from cyber risks and ensuring system 
                                    functionality. Therefore, QCG invests substantial funds in IT security every year. 
                                    Additionally, other areas include innovation, customer satisfaction, and environmental 
                                    footprint.
                                </div>
                            </div>
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col text-primary text-[40px] font-bold text-left leading-none'>
                                    THE QCG GROWTH STORY CONTINUES
                                </div>
                                <div className='flex flex-col gap-6 text-[#444] text-2xl font-medium text-left md:w-[940px]'>
                                    <span>
                                        QCG will enlarge its strong position in the home market, diversify its services, develop 
                                        new customer segments and expand in other target markets in Europe, Asia and the 
                                        Middle East. This will broaden the Group's income sources, helping to reduce
                                        the proportion that is transaction-based and hence more volatile. 
                                    </span>
                                    <span>
                                    QCG will also be well placed to cope with difficult market or economic situations in the 
                                    future - and to take advantage of opportunities that arise for its clients and for the 
                                    foreign exchange trading itself.
                                    </span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col text-primary text-[40px] font-bold text-left leading-none'>
                                    QCG: MORE THAN JUST ONLINE TRADING
                                </div>
                                <div className='flex flex-col gap-6 text-[#444] text-2xl font-medium text-left md:w-[940px]'>
                                    <span>
                                        On average, QCG's clients are wealthier than those of other online brokers. This is 
                                        because they also benefit from a comprehensive universal crypto payment service. 
                                        QCG's services in this area are expanding with the introduction of a modern Crypto 
                                        Payment Gateway. 
                                    </span>
                                    <span>
                                        Aligned with the democratisation and innovation in the financial sector, the Meta-
                                        Financial super app, jointly launched by QCG and the technology development team in 
                                        2021, is gaining increasing popularity.
                                    </span>
                                    <span>
                                        Moreover, institutional clients are increasingly benefiting from the diverse 
                                        opportunities offered by QCG's unique business model. Our team is continuously 
                                        expanding the asset management platform "Asset Master", which provides efficient, 
                                        
                                        cost-effective portfolio management and trading services.
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div className='flex flex-col gap-[50px]'>
                            <div className='md:text-8xl text-primary font-bold text-left'>
                                CODE OF CONDUCT
                            </div>
                            <div className='text-[#444] text-4xl font-semibold text-left md:w-[940px]'>
                                As the leader in online forex trading and as a FinTech 
                                company, innovation and technology challenge the codes 
                                of convention. the rules are respected and important 
                                corporate values are cherished. The Group's Code of 
                                Conduct guides its daily actions with internal and 
                                external investors.
                            </div>
                        </div>

                        <div className='flex flex-col gap-[150px]'>
                            <div className='flex flex-col gap-[100px]'>
                                <div className='text-primary text-5xl font-bold md:w-[950px]'>
                                    Open an investment trading account with 
                                    QCG to experience the pulse of digital in 
                                    the active financial markets.
                                </div>
                                <div className='flex flex-wrap gap-5'>
                                    <div className='w-full flex flex-col border-2 border-[#1C7800] rounded-[10px]'>
                                        <div className='bg-[#ECFFE6] rounded-t-[10px] flex justify-center text-2xl font-semibold text-primary py-5'>
                                            National Futures Association (NFA)
                                        </div>
                                        <div className='flex flex-col gap-6 md:py-[42px] md:pl-[52px] md:pr-[34px] text-2xl text-[#444] text-left'>
                                            <span>
                                                NFA is a non-profit organisation established by the United States government to 
                                                regulate and supervise futures traders and futures exchanges. NFA was 
                                                established under the Futures Exchange Act of 1974 and is authorised by the 
                                                Futures Trading Commission (CFTC).
                                            </span>
                                            <span>
                                                NFA's mission is to provide legal programs and services to protect the interests 
                                                of market participants. Besides, it helps organisational members ensure legal 
                                                liability.
                                            </span>
                                            <span>
                                                NFA's activities will be closely regulated by the Commodity Futures Trading 
                                                Commission. This committee plays an important role in regulating the US 
                                                commodity futures sector.
                                            </span>
                                            <span>
                                                Learn more about our NFA license here.s
                                            </span>
                                        </div>
                                    </div>

                                    <div className='grid grid-cols-2 gap-5'>
                                        <div className='flex flex-col border-2 border-[#1C7800] rounded-[10px]'>
                                            <div className='bg-[#ECFFE6] rounded-t-[10px] flex justify-center text-2xl font-semibold text-primary py-5'>
                                                Privacy Policy
                                            </div>
                                            <div className='flex flex-col gap-6 md:py-[42px] md:px-[30px] text-2xl text-[#444] text-left'>
                                                <span>
                                                    The document discloses the ways the 
                                                    company gathers, uses, discloses, 
                                                    and manages your personal 
                                                    information. 
                                                </span>
                                                <span>
                                                    More...
                                                </span>
                                            </div>
                                        </div>

                                        <div className='flex flex-col border-2 border-[#1C7800] rounded-[10px]'>
                                            <div className='bg-[#ECFFE6] rounded-t-[10px] flex justify-center text-2xl font-semibold text-primary py-5'>
                                                Client Agreement
                                            </div>
                                            <div className='flex flex-col gap-6'>
                                                <span className='flex flex-col gap-6 md:py-[42px] md:px-[30px] text-2xl text-[#444] text-left'>
                                                    Before you start working with QCG as 
                                                    a client or a partner, look through a set of agreements and accept their 
                                                    terms and conditions.
                                                </span>
                                            </div>
                                        </div>

                                        <div className='flex flex-col border-2 border-[#1C7800] rounded-[10px]'>
                                            <div className='bg-[#ECFFE6] rounded-t-[10px] flex justify-center text-2xl font-semibold text-primary py-5'>
                                                Risk Disclosure Notice
                                            </div>
                                            <div className='flex flex-col gap-6'>
                                                <span className='flex flex-col gap-6 md:py-[42px] md:px-[30px] text-2xl text-[#444] text-left'>
                                                    The essential document outlines 
                                                    potential financial risks, ensuring 
                                                    informed decisions by highlighting 
                                                    possible vulnerabilities in investments 
                                                    or activities.
                                                </span>
                                            </div>
                                        </div>

                                        <div className='flex flex-col border-2 border-[#1C7800] rounded-[10px]'>
                                            <div className='bg-[#ECFFE6] rounded-t-[10px] flex justify-center text-2xl font-semibold text-primary py-5'>
                                                Risk Warning
                                            </div>
                                            <div className='flex flex-col gap-6'>
                                                <span className='flex flex-col gap-6 md:py-[42px] md:px-[30px] text-2xl text-[#444] text-left'>
                                                    It thoroughly describes all possible 
                                                    risks that are typical for trading in 
                                                    financial markets and that should be 
                                                    clearly realised and taken into 
                                                    consideration by all investors.
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-[30px]'>
                                <div className='text-[#444] text-3xl font-bold text-left'>
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
                                        <span className='text-[#444] text-xl font-medium text-left'>
                                            Already have a friend at Quantum Capital Group?
                                        </span>
                                        <div className='text-[#444] text-xl font-medium text-left'> 
                                            Ask them for their referral code so you both get <span className='text-xl text-primary font-medium'>USD$100.00 - Rewards!</span>
                                        </div>
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

export default Privacy;