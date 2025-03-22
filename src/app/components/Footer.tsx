'use client'; // Mark this as a Client Component

import { usePathname } from 'next/navigation'; // Use next/navigation for App Router
import Link from 'next/link';

export default function Footer() {
    const pathname = usePathname(); // Get the current path

    // Determine the background and text color based on the pathname
    const getBackgroundAndTextColor = () => {
        if (pathname === '/') {
            return { bg: 'bg-black', text: 'text-white', buttonBg: 'bg-white', buttonText: 'text-black' }; // Home page
        } else if (pathname === '/about') {
            return { bg: 'bg-black', text: 'text-white', buttonBg: 'bg-white', buttonText: 'text-black' }; // About page
        } else if (pathname === '/work') {
            return { bg: 'bg-white', text: 'text-black', buttonBg: 'bg-black', buttonText: 'text-white' }; // Work page
        } else if (pathname === '/services') {
            return { bg: 'bg-red-500', text: 'text-white', buttonBg: 'bg-black', buttonText: 'text-white' }; // Services page
        } else {
            return { bg: 'bg-black', text: 'text-white', buttonBg: 'bg-white', buttonText: 'text-black' }; // Default
        }
    };

    const { bg, text, buttonBg, buttonText } = getBackgroundAndTextColor();

    return (
        <footer className={`py-[80px] px-[48px] flex flex-col gap-10 ${bg} ${text}`}>
            {/* Heading and Form Section */}
            <div className='flex justify-between gap-8'>
                {/* Heading */}
                <h1 className='text-[96px] leading-[100%] w-[400px]'>
                    Got a project? Let&rsquo;s talk.
                </h1>

                {/* Form */}
                <form className="space-y-4 w-[50%]">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium">
                            Your name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 w-full bg-transparent border-b border-gray-500 focus:outline-none placeholder-gray-400"
                            placeholder="I"
                            aria-label="Your name"
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium">
                            Your phone number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="mt-1 w-full bg-transparent border-b border-gray-500 focus:outline-none placeholder-gray-400"
                            placeholder=""
                            aria-label="Your phone number"
                        />
                    </div>

                    {/* Email (Optional) */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">
                            Your email address (optional)
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 w-full bg-transparent border-b border-gray-500 focus:outline-none placeholder-gray-400"
                            placeholder=""
                            aria-label="Your email address (optional)"
                        />
                    </div>

                    {/* Project Description */}
                    <div>
                        <label htmlFor="project" className="block text-sm font-medium">
                            Your project is about
                        </label>
                        <textarea
                            id="project"
                            name="project"
                            rows={3}
                            className="mt-1 w-full bg-transparent border-b border-gray-500 focus:outline-none placeholder-gray-400 resize-none"
                            placeholder=""
                            aria-label="Your project is about"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className={`px-6 py-2 ${buttonBg} ${buttonText} font-semibold rounded-full cursor-pointer hover:opacity-80 transition-opacity duration-300`}
                        aria-label="Start a journey"
                    >
                        START A JOURNEY +
                    </button>
                </form>
            </div>

            {/* Footer Links Section */}
            <div className='flex items-start justify-between'>
                {/* Social Links */}
                <div>
                    <div className='flex gap-10'>
                        <a href="https://www.behance.net" target="_blank" rel="noopener noreferrer" aria-label="Behance">
                            Behance
                        </a>
                        <a href="https://www.dribbble.com" target="_blank" rel="noopener noreferrer" aria-label="Dribbble">
                            Dribbble
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            Linkedin
                        </a>
                    </div>
                    <div className='mt-10'>
                        <p>hello@bds.studio</p>
                        <p>+31 222 433 112</p>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className='flex gap-20'>
                    <div className='flex flex-col gap-[30px]'>
                        <Link href={'/about'}>
                            <p aria-label="About">About</p>
                        </Link>
                        <Link href={'/work'}>
                            <p aria-label="Projects">Projects</p>
                        </Link>
                        <Link href={'/services'}>
                            <p aria-label="Services">Services</p>
                        </Link>
                    </div>
                    <div>
                        <Link href={''}>
                            <p aria-label="Contact">Contact</p>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}