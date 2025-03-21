import React from 'react';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className='py-[80px] px-[48px] bg-black flex flex-col gap-10'>
            {/* Heading and Form Section */}
            <div className='flex justify-between gap-8'>
                {/* Heading */}
                <h1 className='text-[96px] text-white leading-[100%] w-[400px]'>
                    Got a project? Let&rsquo;s talk.
                </h1>

                {/* Form */}
                <form className="space-y-4 w-[50%]">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                            Your name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 w-full bg-transparent border-b border-gray-500 focus:border-white focus:outline-none text-white placeholder-gray-400"
                            placeholder="I"
                            aria-label="Your name"
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
                            Your phone number
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="mt-1 w-full bg-transparent border-b border-gray-500 focus:border-white focus:outline-none text-white placeholder-gray-400"
                            placeholder=""
                            aria-label="Your phone number"
                        />
                    </div>

                    {/* Email (Optional) */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                            Your email address (optional)
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 w-full bg-transparent border-b border-gray-500 focus:border-white focus:outline-none text-white placeholder-gray-400"
                            placeholder=""
                            aria-label="Your email address (optional)"
                        />
                    </div>

                    {/* Project Description */}
                    <div>
                        <label htmlFor="project" className="block text-sm font-medium text-gray-300">
                            Your project is about
                        </label>
                        <textarea
                            id="project"
                            name="project"
                            rows="3"
                            className="mt-1 w-full bg-transparent border-b border-gray-500 focus:border-white focus:outline-none text-white placeholder-gray-400 resize-none"
                            placeholder=""
                            aria-label="Your project is about"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="px-6 py-2 bg-white text-black font-semibold rounded-full cursor-pointer hover:bg-gray-200 transition-colors duration-300"
                        aria-label="Start a journey"
                    >
                        START A JOURNEY +
                    </button>
                </form>
            </div>

            {/* Footer Links Section */}
            <div className='flex items-start justify-between text-white'>
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