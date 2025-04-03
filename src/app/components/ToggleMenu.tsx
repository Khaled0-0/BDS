import { useState } from 'react';
import { X } from 'lucide-react';

export default function MobileMenuWithToggle() {
    const [isOpen, setIsOpen] = useState(false);
    const [language, setLanguage] = useState<'en' | 'ar'>('en');

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Two-line Burger Menu Button */}
            {!isOpen && (
                <button
                    className="fixed top-4 left-4 z-40 p-2"
                    onClick={toggleMenu}
                    aria-label="Open menu"
                >
                    <div className="w-6 h-0.5 bg-black mb-1.5"></div>
                    <div className="w-6 h-0.5 bg-black"></div>
                </button>
            )}

            {/* Full Menu */}
            {isOpen && (
                <div className="fixed inset-0 bg-black text-white z-50">
                    <div className="max-w-xs w-full h-full flex flex-col p-6">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-8">
                            <span className="text-sm text-gray-300">Menu</span>
                            <button
                                className="flex items-center text-sm text-gray-300"
                                onClick={toggleMenu}
                                aria-label="Close menu"
                            >
                                Close <X className="ml-2 h-5 w-5" />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <nav className="mb-10">
                            <ul className="space-y-4">
                                <li><a href="/work" className="text-xl font-light block py-1">Home</a></li>
                                <li><a href="/work" className="text-xl font-light block py-1">Work</a></li>
                                <li><a href="/services" className="text-xl font-light block py-1">Services</a></li>
                                <li><a href="/contact" className="text-xl font-light block py-1">Contact</a></li>
                            </ul>
                        </nav>

                        {/* Contact Info */}
                        <div className="mb-8">
                            <a href="mailto:hello@BDS.studio" className="block text-sm text-gray-300 mb-1">hello@BDS.studio</a>
                            <a href="tel:+31222433112" className="block text-sm text-gray-300">+31 222 433 112</a>
                        </div>

                        {/* Social Links */}
                        <div className="mb-auto">
                            <ul className="space-y-1">
                                <li><a href="#" className="block text-sm py-1">Behance</a></li>
                                <li><a href="#" className="block text-sm py-1">Dribbble</a></li>
                                <li><a href="#" className="block text-sm py-1">LinkedIn</a></li>
                            </ul>
                        </div>

                        {/* Language Toggle */}
                        <div className="mt-6">
                            <div className="flex rounded-full overflow-hidden bg-gray-800">
                                <button
                                    className={`py-2 px-4 text-sm flex-1 ${language === 'en' ? 'bg-gray-700' : ''}`}
                                    onClick={() => setLanguage('en')}
                                >
                                    English
                                </button>
                                <button
                                    className={`py-2 px-4 text-sm flex-1 ${language === 'ar' ? 'bg-gray-700' : ''}`}
                                    onClick={() => setLanguage('ar')}
                                >
                                    العربية
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

// Demo wrapper
const MobileMenuDemo = () => {
    return (
        <div className="min-h-screen bg-gray-100">
            <MobileMenuWithToggle />
            <div className="p-16 pt-20">
                <h1 className="text-2xl font-bold">Your Website Content</h1>
                <p className="mt-4">Click the menu button in the top left to open the navigation.</p>
            </div>
        </div>
    );
};

export { MobileMenuDemo };