import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import PolygonVideoPlayer from '../components/PolygonVideo';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

export default function HomePage() {
    return (
        <>
            <Head>
                <meta name="description" content="Enjoy our engaging content with a stunning video background." />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <main>
                {/* section 1 hero */}
                <section className="h-screen">
                    <NavBar /> {/* Include NavBar here */}
                    <video autoPlay muted loop className="video-background">
                        <source src="/background2.mp4" type="video/mp4" />
                    </video>
                    <div className="content">
                        <div className='mt-[70px]'>
                            <h1 className='text-white text-[172px] font-normal leading-[180px]'>Beyond Digital Solutions.</h1>
                            <p className='pt-20 px-50 text-white text-[32px] font-normal leading-[50px]'>
                                At BDS, we're more than just a design agency—we're your creative companions on the journey to design excellence.
                            </p>
                        </div>
                    </div>
                </section>
                {/* Rest of the home page content */}
                {/* section 2 logos */}
                <section className='bg-white  flex content'>
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
                {/* section 3 video  */}
                <section className='bg-white flex gap-[112px] items-center justify-center mx-22 mb-10  '>
                    <div className=''>
                        <PolygonVideoPlayer />
                    </div>
                    <div className='max-w-[660px]'>
                        <h2 className='text-[40px] text-black '>
                            Our mission is to turn your dreams into reality, one pixel at a time. With a diverse team of designers, developers, and innovators, we're constantly pushing the boundaries of what's possible in the digital world.
                        </h2>
                        <p className='mt-8 text-[24px] text-black font-bold'>
                            ABOUT BDS
                        </p>
                    </div>
                </section>
                {/* section 4  */}
                <section className="relative h-screen w-full">
                    {/* Background Image */}
                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/m.jpg"
                            alt="Background"
                            layout="fill" // Make the image cover the entire container
                            objectFit="cover" // Ensure the image covers the section
                            quality={100} // Optional: Improve image quality
                        />
                    </div>
                    {/* Content */}
                    <div className="relative z-10 flex flex-col gap-90  ">
                        <div className=' flex justify-between items-center px-12 pt-12'>
                            <span className='text-white '>1/4</span>
                            <h1 className='text-[#ABD5DE] underline underline-offset-2'>
                                ALL PROJECTS</h1>
                        </div>

                        <div className='px-12 flex items-end justify-between '>
                            <div>
                                <h1
                                    className='text-[56px] text-white'
                                >Payrole Inc.</h1>
                                <p
                                    className='text-[24px] max-w-150 text-[#E8E8E8]'
                                >
                                    Payrole Inc. is a Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                            <div className="grid grid-cols-2 gap-4 w-fit">
                                {/* Top Row - 3 Items */}
                                <div className="col-span-2 grid grid-cols-3 gap-4">
                                    <span className="p-4 rounded-[100px] text-[#FFFFFF] bg-[#FFFFFF26] text-[15px] text-center font-bold transition-all duration-300 ease-in-out hover:bg-[#FFFFFF4D] hover:scale-105 cursor-pointer">
                                        Branding Design
                                    </span>
                                    <span className="p-4 rounded-[100px] text-[#FFFFFF] bg-[#FFFFFF26] text-[15px] text-center font-bold transition-all duration-300 ease-in-out hover:bg-[#FFFFFF4D] hover:scale-105 cursor-pointer">
                                        Website Design
                                    </span>
                                    <span className="p-4 rounded-[100px] text-[#FFFFFF] bg-[#FFFFFF26] text-[15px] text-center font-bold transition-all duration-300 ease-in-out hover:bg-[#FFFFFF4D] hover:scale-105 cursor-pointer">
                                        App Design
                                    </span>
                                </div>

                                {/* Bottom Row - 1 Item Aligned to the Right */}
                                <div className="col-start-2 justify-self-end ">
                                    <span className="inline-flex p-4 rounded-full text-white bg-white/15 text-[15px] font-bold text-center transition-transform duration-300 ease-in-out hover:bg-white/30 hover:scale-105 cursor-pointer transform-gpu">
                                        Development
                                    </span>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                {/* section 5 services */}
                <section className='bg-black  w-auto  py-[112px] px-[48px]'>
                    {/* service 1 */}
                    <div
                        className='flex gap-10  justify-center'
                    >
                        <Image src={"/setting.png"} width={255} height={255} alt='' />
                        <span
                            className='text-[#E8E8E8] pt-5'
                        >01/</span>
                        <div className='flex flex-col gap-5'>
                            <h1
                                className='text-[#FFFFFF] text-[64px] max-w-[500px] font-bold leading-20 '
                            >Social media management</h1>
                            <p
                                className='text-[#E8E8E8] text-[24px] max-w-[800px] leading-8'
                            >Craft unforgettable, user-centric experiences with our product design experts. We transform ideas into beautiful, functional designs that users will adore.</p>
                        </div>
                    </div>
                    {/* service 2 */}
                    <div
                        className='flex gap-10  justify-center mt-20'
                    >
                        <Image src={"/camera.png"} width={255} height={255} alt='' />
                        <span
                            className='text-[#E8E8E8] pt-5'
                        >02/</span>
                        <div className='flex flex-col gap-5'>
                            <h1
                                className='text-[#FFFFFF] text-[64px] max-w-[500px] font-bold leading-20 '
                            >Branding</h1>
                            <p
                                className='text-[#E8E8E8] text-[24px] max-w-[800px] leading-8'
                            >Craft unforgettable, user-centric experiences with our product design experts. We transform ideas into beautiful, functional designs that users will adore.</p>
                        </div>
                    </div>
                    {/* service 3 */}
                    <div
                        className='flex gap-10  justify-center mt-20'
                    >
                        <Image
                            className='pr-10'
                            src={"/lamb.png"} width={255} height={255} alt='' />
                        <span
                            className='text-[#E8E8E8] pt-5'
                        >03/</span>
                        <div className='flex flex-col gap-5'>
                            <h1
                                className='text-[#FFFFFF] text-[64px] max-w-[900px] font-bold leading-20 '
                            >Media production</h1>
                            <p
                                className='text-[#E8E8E8] text-[24px] max-w-[800px] leading-8'
                            >Beautiful designs are at the heart of great branding. Our talented graphic artists ensure your brand makes a lasting impression through stunning visuals.</p>
                        </div>
                    </div>
                    {/* service 4 */}
                    <div
                        className='flex gap-10  justify-center '
                    >
                        <Image src={"/shot.png"} width={255} height={255} alt='' />
                        <span
                            className='text-[#E8E8E8] pt-5'
                        >04/</span>
                        <div className='flex flex-col gap-5'>
                            <h1
                                className='text-[#FFFFFF] text-[64px] max-w-[500px] font-bold leading-20 '
                            >Marketing performance</h1>
                            <p
                                className='text-[#E8E8E8] text-[24px] max-w-[800px] leading-8'
                            >Craft unforgettable, user-centric experiences with our product design experts. We transform ideas into beautiful, functional designs that users will adore.</p>
                        </div>
                    </div>
                    {/* service 5 */}
                    <div
                        className='flex gap-10  justify-center mt-20'
                    >
                        <Image src={"/sound.png"} width={255} height={255} alt='' />
                        <span
                            className='text-[#E8E8E8] pt-5'
                        >05/</span>
                        <div className='flex flex-col gap-5'>
                            <h1
                                className='text-[#FFFFFF] text-[64px] max-w-[700px] font-bold leading-20 '
                            >PR & Community Management</h1>
                            <p
                                className='text-[#E8E8E8] text-[24px] max-w-[800px] leading-8'
                            >Elevate your brand identity with ArtistryLab. We understand the importance of a strong brand, and we'll help you establish a unique and unforgettable one.</p>
                        </div>
                    </div>
                    {/* service 6 */}
                    <div
                        className='flex gap-10  justify-center mt-20'
                    >
                        <Image src={"/internet.png"} width={255} height={255} alt='' />
                        <span
                            className='text-[#E8E8E8] pt-5'
                        >06/</span>
                        <div className='flex flex-col gap-5'>
                            <h1
                                className='text-[#FFFFFF] text-[64px]  font-bold leading-20 '
                            >Website development</h1>
                            <p
                                className='text-[#E8E8E8] text-[24px] max-w-[800px] leading-8'
                            >Elevate your brand identity with ArtistryLab. We understand the importance of a strong brand, and we'll help you establish a unique and unforgettable one.</p>
                        </div>
                    </div>
                    <div className='flex items-end justify-between mt-25'>
                        <p
                            className='text-[32px] strong text-[#FFFFFF] w-[950px] font-normal'
                        >Our services are more than just solutions, they're opportunities to transform your digital presence and achieve your business objectives. We're here to make your digital dreams a reality.</p>
                        <h2
                            className='text-[#ABD5DE] underline font-bold '
                        >VIEW ALL SERVICES</h2>
                    </div>
                </section>
                {/* section 6 our clients */}
                <section className='bg-[#FFFFFF] py-[112px] px-[40px]'>
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
            </main>
            <footer>
                {/* Footer content */}
                <Footer />
            </footer>
        </>
    );
}
