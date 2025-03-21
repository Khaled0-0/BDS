import React from 'react'
import AboutVideo from '../components/AboutVideo'
import Image from 'next/image'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

export default function About() {
    return (
        <>
            {/* NavBar */}
            <NavBar /> {/* Include NavBar here */}
            {/* s1 */}
            <section className='bg-black pb-[80px] pt-[32px] px-[48px] text-white'>
                <div className='flex flex-col gap-[60px]'>
                    <h1
                        className='text-[#ffffff] text-[163px] font-normal'
                    >About us.</h1>
                    <p
                        className='font-normal text-[24px] text-[#E8E8E8] w-[80%]'
                    >
                        Our mission is to turn your dreams into reality, one pixel at a time. With a diverse team of designers, developers, and innovators, were constantly pushing the boundaries of whats possible in the digital world.

                    </p>
                </div>
            </section>
            {/* s2 */}
            <section className='bg-[#ffffff] pt-[80px] pr-[48px] pb-[120px] pl-[48px]'>
                <div className='flex flex-col gap-20'
                >
                    <h1 className='text-[#010202] text-[96px] font-normal'
                    >Who are we?</h1>
                    <div className='flex flex-col gap-[32px]'
                    >
                        <p className='text-[#010202] font-normal text-[48px]'
                        >Were here to make your design dreams come true.
                        </p>
                        <AboutVideo />
                    </div>
                </div>
            </section>
            {/* s3 */}
            <section className='bg-[#f7f7f7] py-[80px] px-[48] '>
                <div className=''>
                    <div className='flex'>
                        <div className='flex flex-col justify-between p-[56px] border-e border-b border-[#CECECE] w-[448px] h-[452px]'>
                            <h2 className='text-[#010202] text-[48px] font-normal'
                            >150+ completed projects</h2>
                            <p className='text-[#696A6E] text-[24px] font-normal'
                            >Over 150 projects successfully delivered.</p>
                        </div>
                        <div className='flex flex-col justify-between p-[56px] border-e border-b border-[#CECECE] w-[448px] h-[452px]'>
                            <h2 className='text-[#010202] text-[48px] font-normal'
                            >9 main team members</h2>
                            <p className='text-[#696A6E] text-[24px] font-normal'
                            >Our core team consists of 9 experts.</p>
                        </div>
                        <div className='flex flex-col justify-between p-[56px] border-b border-[#CECECE] w-[448px] h-[452px]'>
                            <h2 className='text-[#010202] text-[48px] font-normal'
                            >300+ creative freelancers</h2>
                            <p className='text-[#696A6E] text-[24px] font-normal'
                            >We collaborate with 300+ creative freelancers.</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='flex flex-col justify-between p-[56px] border-e border-[#CECECE] w-[448px] h-[452px]'>
                            <h2 className='text-[#010202] text-[48px] font-normal'
                            >10+ years experience</h2>
                            <p className='text-[#696A6E] text-[24px] font-normal'
                            >Bringing 10+ years of design experience to every project.</p>
                        </div>
                        <div className='flex flex-col justify-between p-[56px] border-e border-[#CECECE] w-[448px] h-[452px]'>
                            <h2 className='text-[#010202] text-[48px] font-normal'
                            >$25B+ revenue</h2>
                            <p className='text-[#696A6E] text-[24px] font-normal'
                            >Our work has contributed to over $25 billion in revenue.</p>
                        </div>
                    </div>
                </div>
            </section>
            {/* s4 */}
            <section className='bg-black py-[80px] px-[48px]'>
                <div className='flex flex-col gap-[80px]'>
                    <div className='flex flex-col gap-8'>
                        <h1 className='text-[#ffffff] text-[96px] font-normal'
                        >Why choose us?</h1>
                        <p className='text-[#E8E8E8] text-[32px] font-normal'>
                            Strategy and creativity are being separated by a mile wide, on one side are the strategies and marketing people who favor left side brain thinking and on the other side are the designers who favor the right side brain thinking. The connection between them, it is a communication between magic and logic, We communicate them, designing your business based on three things in mind.
                        </p>
                    </div>
                    <div>
                        <div className='flex items-center justify-between pb-[56px]'>
                            <h1 className='text-[#FFFFFF] text-[48px] font-normal'>Beauty</h1>
                            <p className='w-[35%] font-normal text-[18px]  text-[#E8E8E8]'>
                                With over 150 successful projects under our belt, we have a proven track record of turning ideas into remarkable designs.
                            </p>
                        </div>
                        <div className='flex items-center justify-between py-[56px]'>
                            <h1 className='text-[#FFFFFF] text-[48px] font-normal'>Thought</h1>
                            <p className='w-[35%] font-normal text-[18px]  text-[#E8E8E8]'>
                                Our core team of nine talented individuals is the creative force behind our agency, bringing diverse skills and expertise to every project.
                            </p>
                        </div>
                        <div className='flex items-center justify-between py-[56px]'>
                            <h1 className='text-[#FFFFFF] text-[48px] font-normal'>Impact</h1>
                            <p className='w-[35%] font-normal text-[18px]  text-[#E8E8E8]'>
                                We collaborate with a vast network of 300+ skilled freelancers, ensuring that every project benefits from a wealth of creative talent.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* s5 */}
            <section className='py-[112px] px-[40px]'>
                <div className='flex items-start justify-center gap-[72px]'>
                    <h1
                        className='text-[88px] w-[500px] leading-20 font-normal'
                    >Our clients experiences</h1>
                    <div
                        className='flex flex-col gap-[56px] '
                    >
                        <Image src={"/avatar.png"} alt="" width={200} height={200} />
                        <p
                            className='w-[662px] leading-8 text-[32px]'
                        >
                            I had the pleasure of working with BDS on a recent project, and I was blown away by their creativity and attention to detail. I highly recommend BDS for anyone looking for a talented and professional designers.
                        </p>
                        <p className='text-[24px]'>
                            <strong className='text-[24px] '>Jacob McDany</strong>
                            , CEO of Rackspace
                        </p>
                    </div>
                </div>
            </section>
            {/* s6 */}
            <section className='bg-[#FFFFFF]  flex content'>
                <div className='w-[180px] h-[180px]  flex items-center justify-center'>
                    <Image src={"/web-192037117.webp"} alt="logo" width={100} height={100} />
                </div>
                <div className='w-[180px] h-[180px] flex items-center justify-center'>
                    <Image src={"/apple_logo_1988.webp"} alt="logo" width={100} height={100} />
                </div>
                <div className='w-[180px] h-[180px] flex items-center justify-center'>
                    <Image src={"/web-192037117.webp"} alt="logo" width={100} height={100} />
                </div>
                <div className='w-[180px] h-[180px] flex items-center justify-center'>
                    <Image src={"/apple_logo_1988.webp"} alt="logo" width={100} height={100} />
                </div>
                <div className='w-[180px] h-[180px] flex items-center justify-center'>
                    <Image src={"/web-192037117.webp"} alt="logo" width={100} height={100} />
                </div>
                <div className='w-[180px] h-[180px] flex items-center justify-center'>
                    <Image src={"/apple_logo_1988.webp"} alt="logo" width={100} height={100} />
                </div>
                <div className='w-[180px] h-[180px] flex items-center justify-center'>
                    <Image src={"/web-192037117.webp"} alt="logo" width={100} height={100} />
                </div>
                <div className='w-[180px] h-[180px] flex items-center justify-center'>
                    <Image src={"/apple_logo_1988.webp"} alt="logo" width={100} height={100} />
                </div>
            </section>
            {/* footer */}
            <section>
                <Footer />
            </section>
        </>
    )
}
