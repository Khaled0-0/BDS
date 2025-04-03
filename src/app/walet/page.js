import React from 'react';
import NavBar from '../components/NavBar';
import Image from 'next/image';
import Footer from '../components/Footer';

export default function Page() {
    return (
        <>
            {/* Section 1 */}
            <section className='h-[772px] pb-[96px]'>
                {/* NavBar */}
                <NavBar />
                <div className='pt-5 px-[40px] gap-[40px] flex flex-col'>
                    <div className='h-[408px]'>
                        <h1 className='text-[136px] font-normal leading-[120%] text-[#010202]'>
                            The next-gen crypto wallet & trading platform.
                        </h1>
                    </div>
                    <div className='flex items-end justify-between text-[24px]'>
                        <p className='text-[24px] leading-[120%]'>VISIT WEBSITE</p>
                        <div className='flex flex-col gap-[32px]'>
                            <p className='text-end leading-[120%]'>OUR PROJECTS/ CRYPTOZY</p>
                            <p className='w-[426px] leading-[120%]'>
                                All of your cryptocurrency in one place — from Bitcoin and Ethereum to Litecoin and Ripple.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2 */}
            <section className='px-[48px]'>
                <div>
                    <Image src={'/p6.png'} alt="" width={1440} height={756} />
                </div>
            </section>

            {/* Section 3 */}
            <section className='py-[120px] px-[48px]'>
                <div className='flex flex-col gap-[80px]'>
                    <div className='flex items-start justify-between gap-13'>
                        <p className='text-[32px] text-[#696A6E] font-normal leading-[120%]'>Overview</p>
                        <p className='text-[48px] text-[#010202] font-normal leading-[120%]'>
                            Cryptozy is a cutting-edge web-based crypto trading platform designed to provide users with a seamless and secure experience in the world of cryptocurrency trading. The platform offers real-time market data, advanced trading features, and a user-friendly interface, catering to both novice and experienced traders.
                        </p>
                    </div>
                    <div className='flex items-start justify-between gap-10 w-full'>
                        <p className='text-[32px] text-[#696A6E] font-normal w-[40%] leading-[120%]'>
                            About the Client
                        </p>
                        <p className='text-[48px] text-[#010202] font-normal leading-[120%]'>
                            Teaming up with Quantum Investments Ltd. in Zurich, Switzerland, led by CEO Mr. Alexander Stein, was pivotal. Their insights and feedback were crucial to Cryptozy&rsquo;s success, showcasing a global partnership that fueled our project.
                        </p>
                    </div>
                </div>
            </section>
            {/* s4 */}
            <section className='px-[48px] py-0'>
                <Image src={'/p7.png'} alt="" width={1440} height={1482} className={''} />
            </section>
            {/* s5 */}
            <section className='py-[120px] px-[48px]'>
                <div className='flex flex-col gap-[80px]'>
                    <div>
                        <h1 className='text-[#696A6E] text-[32px] font-normal'>Our Process</h1>
                    </div>
                    <div>
                        <div className='flex justify-between gap-[40px]  py-[56px] border-b border-[#CECECE]'>
                            <p className='text-[#010202] text-[48px] font-normal  '>1. Research and Planning</p>
                            <p className='text-[#303030] text-[24px] font-normal w-[670px]'>Extensive market research was conducted to identify user needs and market trends.</p>
                        </div>
                        <div className='flex  justify-between gap-[40px] py-[56px] border-b border-[#CECECE]'>
                            <p className='text-[#010202] text-[48px] font-normal  '>2. Design and Prototyping</p>
                            <p className='text-[#303030] text-[24px] font-normal w-[670px]'>
                                A team of UI/UX designers created wireframes and prototypes for the platform&apos;s interface.</p>
                        </div>
                        <div className='flex  justify-between gap-[40px]  py-[56px] border-b border-[#CECECE]'>
                            <p className='text-[#010202] text-[48px] font-normal  '>
                                3. Development</p>
                            <p className='text-[#303030] text-[24px] font-normal w-[670px]'>
                                The platform was built using the latest web technologies, ensuring scalability and security.
                            </p>
                        </div>
                        <div className='flex  justify-between gap-[40px]  py-[56px] border-b border-[#CECECE]'>
                            <p className='text-[#010202] text-[48px] font-normal  '>
                                4. Testing</p>
                            <p className='text-[#303030] text-[24px] font-normal w-[670px]'>
                                Rigorous testing was performed to identify and fix bugs, ensuring a smooth user experience.
                            </p>
                        </div>
                        <div className='flex  justify-between gap-[40px]  py-[56px] border-b border-[#CECECE]'>
                            <p className='text-[#010202] text-[48px] font-normal  '>
                                5. Lunch</p>
                            <p className='text-[#303030] text-[24px] font-normal w-[670px]'>
                                Cryptozy was officially launched on July 15, 2022, after thorough testing and optimization.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* s6 */}
            <section className='px-[48px]'>
                <div className='bg-[#F3F1FF] py-[97px] px-[112px]'>
                    <Image src={'/p8.png'} alt="" width={1120} height={661} />
                </div>
            </section>
            {/* s7 */}
            <section className='py-[120px] px-[48px]'>
                <div className='flex'>
                    <div className='w-[323px] text-[#696A6E] text-[32px] font-normal'>
                        Timeline
                    </div>
                    <div className='flex flex-col gap-[48px]'>
                        <div>
                            <p className='w-[1023px]  text-[#010202] text-[48px] font-normal'>Working on Cryptozy took us only a few months from start to finish. Isn&apos;
                                t it impressive for a startup? Only three months after its inception, the platform had become the fastest-growing SaaS startup in history.
                            </p>
                        </div>
                        <div className='py-[32px] flex justify-between border-b border-[#CECECE]'>
                            <p className='text-[#696A6E] text-[32px] font-normal'>
                                Project Manager
                            </p>
                            <p className='text-[#010202] text-[32px] font-normal'>
                                Kristin Watson
                            </p>
                        </div>
                        <div className='py-[32px] flex justify-between border-b border-[#CECECE]'>
                            <p className='text-[#696A6E] text-[32px] font-normal'>
                                Product Designer
                            </p>
                            <p className='text-[#010202] text-[32px] font-normal'>
                                Courtney Henry
                            </p>
                        </div>
                        <div className='py-[32px] flex justify-between border-b border-[#CECECE]'>
                            <p className='text-[#696A6E] text-[32px] font-normal'>
                                Developer
                            </p>
                            <p className='text-[#010202] text-[32px] font-normal'>
                                Jacob Jones
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* s8 */}
            <section className='p-[120px]'>
                <div className='flex flex-col gap-[64px]'>
                    <div className='text-center'>
                        <p className='text-[#010202] text-[48px] font-normal'>
                            I had the pleasure of working with Ivan on a recent project, and I was blown away by their creativity and attention to detail. I highly recommend BDS for anyone looking for a talented and professional designer.
                        </p>
                    </div>
                    <div className='flex flex-col items-center gap-[28px]'>
                        <div>

                            <Image src={'/p8.png'} alt="" width={100} height={100} className='rounded-full border border-[#CECECE]' />
                        </div>
                        <div className='flex'>
                            <p className='text-[#010202] text-[24px] font-medium'>
                                Jacob McDany
                            </p>
                            <p className='text-[#696A6E] text-[24px] font-normal'>
                                , CEO of Cryptozy
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* s9 */}
            <section className='px-[48px] pb-[120px] flex flex-col gap-[32px]'>
                <div className='w-full'>
                    <Image src={'/p9.png'} width={1500} height={756} alt='' />
                </div>
                <div className='flex justify-between'>
                    <div className='pt-[50px] pr-[50px] bg-[#DAF727]'>
                        <Image src={'/p11.png'} width={500} height={800} alt='' />
                    </div>
                    <div className='pt-[65px] px-[48px] pb-[101.01px] bg-black'>
                        <Image src={'/p10.png'} width={500} height={800} alt={''} />
                    </div>
                </div>
                <div className='pt-[96px] flex justify-center'>
                    <button className='w-[216px] h-[70px] rounded-[100px] border border-black 
                    text-[#010202] text-[18px] font-semibold px-[32px] py-[24px]'>VISIT WEBSITE</button>
                </div>
            </section>
            {/* s10 */}
            <section className='px-[48px] py-[120px] flex flex-col gap-[48px]'>
                <h1 className='font-normal text-[96px] text-[#010202] w0[713px]'>
                    What&apos;s nexts?
                </h1>
                <div className='flex gap-[29px] w-[1344px] items-start'>
                    <div className='w-[30%] '>
                        <h2 className='text-[#010202] text-[56px] font-normal '>
                            Weave Inc.
                        </h2>
                    </div>
                    <div className='flex flex-col gap-[48px] items-start'>
                        <p className='text-[#696A6E] text-[24px] font-normal mt-[15px]'>
                            Weave is a Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className='grid grid-cols-3 gap-3'>
                            <button
                                className='w-[162px] rounded-[100px] border border-black text-[#010202] text-[15px] font-semibold p-[16px]'>
                                Branding Design
                            </button>
                            <button
                                className='w-[162px] rounded-[100px] border border-black text-[#010202] text-[15px] font-semibold p-[16px]'
                            >
                                Website Design
                            </button>
                            <button
                                className='w-[162px] rounded-[100px] border border-black text-[#010202] text-[15px] font-semibold p-[16px]'
                            >
                                App Design
                            </button>
                            <button
                                className='w-[162px] rounded-[100px] border border-black text-[#010202] text-[15px] font-semibold p-[16px]'
                            >
                                Development
                            </button>
                        </div>
                    </div>
                </div>

                <div className='flex gap-[29px] w-[1344px] items-start'>
                    <div>
                        <Image src={'/p12.png'} width={753} height={300} alt={''} />
                    </div>
                    <div className=' flex flex-col gap-[48px]'>
                        <div className='flex gap-[29px]'>
                            <div>
                                <h2 className='text-[#010202] text-[56px] font-normal '>
                                    Cryptozy
                                </h2>
                            </div>
                            <div className='flex flex-col gap-[48px] items-start'>
                                <p className='text-[#696A6E] text-[24px] font-normal mt-[15px]'>
                                    Weave is a Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <button
                                className='w-[162px] rounded-[100px] border border-black text-[#010202] text-[15px] font-semibold p-[16px]'>
                                Branding Design
                            </button>
                            <button
                                className='w-[162px] rounded-[100px] border border-black text-[#010202] text-[15px] font-semibold p-[16px]'
                            >
                                Website Design
                            </button>
                            <button
                                className='w-[162px] rounded-[100px] border border-black text-[#010202] text-[15px] font-semibold p-[16px]'
                            >
                                App Design
                            </button>
                            <button
                                className='w-[162px] rounded-[100px] border border-black text-[#010202] text-[15px] font-semibold p-[16px]'
                            >
                                Development
                            </button>
                        </div>
                    </div>
                </div>

                <div className='flex gap-[29px] w-[1344px] items-start'>
                    <div className='w-[30%] '>
                        <h2 className='text-[#010202] text-[56px] font-normal '>
                            Estatery
                        </h2>
                    </div>
                    <div className='flex flex-col gap-[48px] items-start'>
                        <p className='text-[#696A6E] text-[24px] font-normal mt-[15px]'>
                            Weave is a Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className='grid grid-cols-3 gap-3'>
                            <button
                                className='w-[162px] rounded-[100px] border border-black text-[#010202] text-[15px] font-semibold p-[16px]'>
                                Branding Design
                            </button>
                            <button
                                className='w-[162px] rounded-[100px] border border-black text-[#010202] text-[15px] font-semibold p-[16px]'
                            >
                                Website Design
                            </button>
                            <button
                                className='w-[162px] rounded-[100px] border border-black text-[#010202] text-[15px] font-semibold p-[16px]'
                            >
                                App Design
                            </button>
                            <button
                                className='w-[162px] rounded-[100px] border border-black text-[#010202] text-[15px] font-semibold p-[16px]'
                            >
                                Development
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}