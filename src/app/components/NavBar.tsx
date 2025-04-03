'use client'; // Mark this as a Client Component

import { usePathname } from 'next/navigation'; // Use next/navigation for App Router
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SwitchLanguages from './SwitchLanguages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

export default function NavBar() {
    const pathname = usePathname(); // Get the current path

    // Determine the background and text color based on the pathname
    const getBackgroundAndTextColor = () => {
        if (pathname === '/' || pathname === '/work') {
            return { bg: 'bg-transparent', text: 'text-white' }; // Transparent background and white text for home and work pages
        } else if (pathname === '' || pathname === '/services') {
            return { bg: 'bg-black', text: 'text-white' }; // White background and black text for About and Services pages
        } else if (pathname === '/touch' || pathname === '/walet') {
            return { bg: 'bg-white', text: 'text-black', }; // White background and black text for Touch and Walet pages
        } else {
            return { bg: 'bg-black', text: 'text-white' }; // Default to black background and white text for other pages
        }
    };

    const { bg, text } = getBackgroundAndTextColor();

    const handleScrollToEnd = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth', // Optional: Adds smooth scrolling
        });
    };

    return (
        <>
            {/* Video background for the home page */}
            {pathname === '/' && (
                <video
                    autoPlay
                    loop
                    muted
                    className="absolute top-0 left-0 w-full h-full object-cover z-0"
                >
                    <source src="/background2.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}

            {/* NavBar content */}
            <div className={`flex  items-center px-10 relative z-10 pt-[32px] ${bg} ${text}`}>
                <div className='mr-auto'>
                    <Link href={'/'}>
                        <Image src={"/logo.png"} alt="logo" width={100} height={100} />
                    </Link>
                </div>
                <div>
                    <ul className='flex gap-12 items-center justify-center'>
                        <Link href={'/about'}>
                            <li className={text}>About</li>
                        </Link>
                        <Link href={'/work'}>
                            <li className={text}>Work</li>
                        </Link>
                        <Link href={'/services'}>
                            <li className={text}>Services</li>
                        </Link>
                        <Link href={'/walet'}>
                            <li className={text}>Wallet</li>
                        </Link>
                        <Link href={'/touch'}>
                            <li className={text}>Touch</li>
                        </Link>
                        <div
                            onClick={handleScrollToEnd}
                            className={`flex items-center justify-center gap-2 border ${pathname === '/walet' || pathname === '/touch' ? 'border-black' :
                                pathname === '/services' ? 'border-white' : 'border-white'
                                } cursor-pointer rounded-full px-4 py-2 ${text} hover:opacity-80 transition-opacity duration-300`}
                        >
                            GET IN TOUCH
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className={`transition-colors duration-300 ${pathname === '/walet' || pathname === '/touch'
                                    ? "text-black"
                                    : "text-white"
                                    }`}
                            />
                        </div>
                        <SwitchLanguages />
                    </ul>
                </div>
            </div>
        </>
    );
}