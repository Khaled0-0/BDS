import React from 'react';
import Image from 'next/image';
import NavBar from '../components/NavBar'; // Import NavBar

export default function Page() {
    return (
        <>
            <section className="relative h-[80vh] w-full">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/m.jpg"
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                </div>
                <NavBar /> {/* Include NavBar here */}
                {/* Content */}
                <div className="relative pt-80">
                    <div className='px-12 flex items-end justify-between'>
                        <div>
                            <h1 className='text-[56px] text-white'>Payrole Inc.</h1>
                            <p className='text-[24px] max-w-150 text-[#E8E8E8]'>
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
                            <div className="col-start-2 justify-self-end">
                                <span className="inline-flex p-4 rounded-full text-white bg-white/15 text-[15px] font-bold text-center transition-transform duration-300 ease-in-out hover:bg-white/30 hover:scale-105 cursor-pointer transform-gpu">
                                    Development
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-black py-[120px] px-[48px] text-white'>
                khaled features
            </section>
        </>
    );
}