import React from 'react'
import NavBar from '../components/NavBar'
import Image from 'next/image'
import Footer from '../components/Footer'

export default function page() {
    return (
        <>
            {/* NavBar */}
            <NavBar />
            {/* s1 */}
            <section className='px-[48px] pt-[32px] pb-[96px] bg-black h-[89.7vh]'>
                <div className='flex flex-col gap-[56px] pb-[120px]'>
                    <h1 className='text-white  font-bold text-[136px]'>Our services.</h1>
                    <div className='flex items-center justify-between w-[96%]'>
                        <p
                            className='text-[#878787] font-normal text-[32px] w-[50%]'
                        >From fintech and healthcare, to e-commerce and e-learning, our dedicated team of UI/ UX design experts, ready for you.</p>
                        <button
                            className='w-[120px] h-[120px] rounded-[100px] font-[700] text-black bg-white '
                        >Scroll</button>
                    </div>
                </div>
                <div className='flex gap-[40px]'>
                    <p className='text-[#B3B3B3] font-normal text-[24px]'>Product Design</p>
                    <p className='text-[#B3B3B3] font-normal text-[24px]'>Graphic Design</p>
                    <p className='text-[#B3B3B3] font-normal text-[24px]'>Branding</p>
                    <p className='text-[#B3B3B3] font-normal text-[24px]'>Illustration</p>
                </div>
            </section>
            {/* s2 */}
            <section className='bg-white py-[120px] px-[48px]'>
                <div className='flex items-start justify-between'>
                    <p
                        className='text-[#010202] font-medium text-[64px] w-[60%] leading-[120%] tracking-[-2%]'>
                        We provide smart design solutions that address the root needs of your product, service or mission. By integrating with your team, we solve complex product challenges, while building human-centered user experiences.</p>
                    <p
                        className='text-[#696A6E] font-normal text-[32px]'
                    >Our capabilities</p>
                </div>
            </section>
            {/* s3 */}
            <section className='py-[120px] px-[48px] bg-white'>
                <div className='flex flex-col gap-[120px]'>
                    <div className='flex items-start  gap-[48px]'>
                        <div className='min-w-[560px] flex items-center justify-center'>
                            <Image src={'/p13.png'} width={200} height={200} alt="" />
                        </div>
                        <div className=''>
                            <div className='flex flex-col gap-[24px] '>
                                <span className='text-[#303030] font-normal text-[18px] leading-[120%] tracking-[2%]'>01/</span>
                                <h1 className='pb-[48px] text-[#010202] font-medium text-[64px] leading-[120%] tracking-[-2%] w-[60%]'>
                                    Social media management
                                </h1>
                            </div>
                            <div className=''>
                                <p className='pb-[48px] w-[90%] text-[32px] font-normal text-[#696A6E]'>
                                    Craft unforgettable, user-centric experiences with our product design experts. We transform ideas into beautiful, functional designs that users will adore.
                                </p>
                            </div>
                            <div className='gap-8 flex flex-col'>
                                <li className='text-[#010202] border-b-[1px] border-[#bcbcbe] font-normal text-[32px] leading-[120%] tracking-[-1%] py-[32px]'>
                                    Website and App Design
                                </li>
                                <li className='text-[#010202] font-normal text-[32px] leading-[120%] tracking-[-1%] border-b-[1px] border-[#bcbcbe] py-[32px]'>
                                    User Experience (UX) Design
                                </li>
                                <li className='text-[#010202] font-normal text-[32px] leading-[120%] tracking-[-1%] border-b-[1px] border-[#bcbcbe] py-[32px]'>
                                    User Interface (UI) Design
                                </li>
                                <li className='text-[#010202] font-normal text-[32px] leading-[120%] tracking-[-1%] border-b-[1px] border-[#bcbcbe] py-[32px]'>
                                    SaaS Solutions
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-start  gap-[48px]'>
                        <div className='min-w-[560px] flex items-center justify-center'>
                            <Image src={'/p14.png'} width={200} height={200} alt="" />
                        </div>
                        <div className=''>
                            <div className='flex flex-col gap-[24px] '>
                                <span className='text-[#303030] font-normal text-[18px] leading-[120%] tracking-[2%]'>02/</span>
                                <h1 className='pb-[48px] text-[#010202] font-medium text-[64px] leading-[120%] tracking-[-2%] w-[60%]'>
                                    Marketing performance
                                </h1>
                            </div>
                            <div className=''>
                                <p className='pb-[48px] w-[90%] text-[32px] font-normal text-[#696A6E]'>
                                    Beautiful designs are at the heart of great branding. Our talented graphic artists ensure your brand makes a lasting impression through stunning visuals.
                                </p>
                            </div>
                            <div className='gap-8 flex flex-col'>
                                <li className='text-[#010202] border-b-[1px] border-[#bcbcbe] font-normal text-[32px] leading-[120%] tracking-[-1%] py-[32px]'>
                                    Brand Strategy Development                                </li>
                                <li className='text-[#010202] font-normal text-[32px] leading-[120%] tracking-[-1%] border-b-[1px] border-[#bcbcbe] py-[32px]'>
                                    Illustration
                                </li>
                                <li className='text-[#010202] font-normal text-[32px] leading-[120%] tracking-[-1%] border-b-[1px] border-[#bcbcbe] py-[32px]'>
                                    Logo Design
                                </li>
                                <li className='text-[#010202] font-normal text-[32px] leading-[120%] tracking-[-1%] border-b-[1px] border-[#bcbcbe] py-[32px]'>
                                    3D Design
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-start  gap-[48px]'>
                        <div className='min-w-[560px] flex items-center justify-center'>
                            <Image src={'/p15.png'} width={200} height={200} alt="" />
                        </div>
                        <div className=''>
                            <div className='flex flex-col gap-[24px] '>
                                <span className='text-[#303030] font-normal text-[18px] leading-[120%] tracking-[2%]'>03/</span>
                                <h1 className='pb-[48px] text-[#010202] font-medium text-[64px] leading-[120%] tracking-[-2%] w-[60%]'>
                                    Marketing performance
                                </h1>
                            </div>
                            <div className=''>
                                <p className='pb-[48px] w-[90%] text-[32px] font-normal text-[#696A6E]'>
                                    Let our tech wizards weave their magic online. We create dynamic websites that captivate your audience and provide seamless user experiences.
                                </p>
                            </div>
                            <div className='gap-8 flex flex-col'>
                                <li className='text-[#010202] border-b-[1px] border-[#bcbcbe] font-normal text-[32px] leading-[120%] tracking-[-1%] py-[32px]'>
                                    Website and App Development
                                </li>
                                <li className='text-[#010202] font-normal text-[32px] leading-[120%] tracking-[-1%] border-b-[1px] border-[#bcbcbe] py-[32px]'>
                                    Content Management Systems (CMS)
                                </li>
                                <li className='text-[#010202] font-normal text-[32px] leading-[120%] tracking-[-1%] border-b-[1px] border-[#bcbcbe] py-[32px]'>
                                    No-Code Development (Webflow & Framer)
                                </li>
                                <li className='text-[#010202] font-normal text-[32px] leading-[120%] tracking-[-1%] border-b-[1px] border-[#bcbcbe] py-[32px]'>
                                    Backend Development
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-start  gap-[48px]'>
                        <div className='min-w-[560px] flex items-center justify-center'>
                            <Image src={'/p16.png'} width={200} height={200} alt="" />
                        </div>
                        <div className=''>
                            <div className='flex flex-col gap-[24px] '>
                                <span className='text-[#303030] font-normal text-[18px] leading-[120%] tracking-[2%]'>04/</span>
                                <h1 className='pb-[48px] text-[#010202] font-medium text-[64px] leading-[120%] tracking-[-2%] '>
                                    Media production
                                </h1>
                            </div>
                            <div className=''>
                                <p className='pb-[48px] w-[90%] text-[32px] font-normal text-[#696A6E]'>
                                    Let our tech wizards weave their magic online. We create dynamic websites that captivate your audience and provide seamless user experiences.
                                </p>
                            </div>
                            <div className='gap-8 flex flex-col'>
                                <li className='text-[#010202] border-b-[1px] border-[#bcbcbe] font-normal text-[32px] leading-[120%] tracking-[-1%] py-[32px]'>
                                    Website and App Development
                                </li>
                                <li className='text-[#010202] font-normal text-[32px] leading-[120%] tracking-[-1%] border-b-[1px] border-[#bcbcbe] py-[32px]'>
                                    Content Management Systems (CMS)
                                </li>
                                <li className='text-[#010202] font-normal text-[32px] leading-[120%] tracking-[-1%] border-b-[1px] border-[#bcbcbe] py-[32px]'>
                                    No-Code Development (Webflow & Framer)
                                </li>
                                <li className='text-[#010202] font-normal text-[32px] leading-[120%] tracking-[-1%] border-b-[1px] border-[#bcbcbe] py-[32px]'>
                                    Backend Development
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-start  gap-[48px]'>
                        <div className='min-w-[560px] flex items-center justify-center'>
                            <Image src={'/p17.png'} width={200} height={200} alt="" />
                        </div>
                        <div className=''>
                            <div className='flex flex-col gap-[24px] '>
                                <span className='text-[#303030] font-normal text-[18px] leading-[120%] tracking-[2%]'>05/</span>
                                <h1 className='pb-[48px] text-[#010202] font-medium text-[64px] leading-[120%] tracking-[-2%] w-[90%]'>
                                    PR & Community Management
                                </h1>
                            </div>
                            <div className=''>
                                <p className='pb-[48px] w-[90%] text-[32px] font-normal text-[#696A6E]'>
                                    Let our tech wizards weave their magic online. We create dynamic websites that captivate your audience and provide seamless user experiences.
                                </p>
                            </div>
                            <div className='gap-8 flex flex-col'>
                                <li className='text-[#010202] border-b-[1px] border-[#bcbcbe] font-normal text-[32px] leading-[120%] tracking-[-1%] py-[32px]'>
                                    Website and App Development
                                </li>
                                <li className='text-[#010202] font-normal text-[32px] leading-[120%] tracking-[-1%] border-b-[1px] border-[#bcbcbe] py-[32px]'>
                                    Content Management Systems (CMS)
                                </li>
                                <li className='text-[#010202] font-normal text-[32px] leading-[120%] tracking-[-1%] border-b-[1px] border-[#bcbcbe] py-[32px]'>
                                    No-Code Development (Webflow & Framer)
                                </li>
                                <li className='text-[#010202] font-normal text-[32px] leading-[120%] tracking-[-1%] border-b-[1px] border-[#bcbcbe] py-[32px]'>
                                    No-Code Development (Webflow & Framer)
                                </li>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-start  gap-[48px]'>
                        <div className='min-w-[560px] flex items-center justify-center'>
                            <Image src={'/p18.png'} width={200} height={200} alt="" />
                        </div>
                        <div className=''>
                            <div className='flex flex-col gap-[24px] '>
                                <span className='text-[#303030] font-normal text-[18px] leading-[120%] tracking-[2%]'>06/</span>
                                <h1 className='pb-[48px] text-[#010202] font-medium text-[64px] leading-[120%] tracking-[-2%]'>
                                    Website development
                                </h1>
                            </div>
                            <div className=''>
                                <p className='pb-[48px] w-[90%] text-[32px] font-normal text-[#696A6E]'>
                                    Let our tech wizards weave their magic online. We create dynamic websites that captivate your audience and provide seamless user experiences.
                                </p>
                            </div>
                            <div className='gap-8 flex flex-col'>
                                <li className='text-[#010202] border-b-[1px] border-[#bcbcbe] font-normal text-[32px] leading-[120%] tracking-[-1%] py-[32px]'>
                                    Website and App Development
                                </li>
                                <li className='text-[#010202] font-normal text-[32px] leading-[120%] tracking-[-1%] border-b-[1px] border-[#bcbcbe] py-[32px]'>
                                    Content Management Systems (CMS)
                                </li>
                                <li className='text-[#010202] font-normal text-[32px] leading-[120%] tracking-[-1%] border-b-[1px] border-[#bcbcbe] py-[32px]'>
                                    No-Code Development (Webflow & Framer)
                                </li>
                                <li className='text-[#010202] font-normal text-[32px] leading-[120%] tracking-[-1%] border-b-[1px] border-[#bcbcbe] py-[32px]'>
                                    Backend Development
                                </li>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
            {/* s4 */}
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
            {/* s5 */}
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
            {/* s6 */}
            <section>
                <Footer />
            </section>
        </>
    )
}
