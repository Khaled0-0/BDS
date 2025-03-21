'use client'; // Mark this as a Client Component

import { usePathname } from 'next/navigation'; // Use next/navigation for App Router
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
    const pathname = usePathname(); // Get the current path

    // Determine the background and text color based on the pathname
    const getBackgroundAndTextColor = () => {
        if (pathname === '/' || pathname === '/work') {
            return 'bg-transparent'; // Transparent background for home and work pages
        } else if (pathname === '/about') {
            return 'bg-black text-white'; // Black background for the About page
        } else if (pathname === '/services') {
            return 'bg-red-500 text-white'; // Red background for the Services page
        } else {
            return 'bg-black text-white'; // Black background for all other pages
        }
    };

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
            <div className={`flex items-center px-10 relative z-10 pt-[32px] ${getBackgroundAndTextColor()}`}>
                <div className='mr-auto'>
                    <Link href={'/'}>
                        <Image src={"/logo.png"} alt="logo" width={100} height={100} />
                    </Link>
                </div>
                <div>
                    <ul className='flex gap-12 items-center justify-center'>
                        <Link href={'/about'}>
                            <li className={pathname === '/about' ? 'text-white' : 'text-white'}>About</li>
                        </Link>
                        <Link href={'/work'}>
                            <li className={pathname === '/work' ? 'text-white' : 'text-white'}>Work</li>
                        </Link>
                        <Link href={'/services'}>
                            <li className={pathname === '/services' ? 'text-white' : 'text-white'}>Services</li>
                        </Link>
                        <button
                            onClick={handleScrollToEnd}
                            className='flex items-center justify-center border border-white cursor-pointer rounded-full px-4 py-2 text-white '
                        >GET IN TOUCH
                            <Image src={"/right-arrow.png"} alt="" width={20} height={20} className="ml-2 " />
                        </button>
                        <button
                            className='cursor-pointer rounded-full px-4 py-2 text-white '
                        >translate
                        </button>
                    </ul>
                </div>
            </div>
        </>
    );
}