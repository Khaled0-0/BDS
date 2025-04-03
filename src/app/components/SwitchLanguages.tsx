import { useState } from 'react';

interface LanguageSwitchProps {
    onChange?: (language: 'en' | 'ar') => void;
    initialLanguage?: 'en' | 'ar';
}

export default function LanguageSwitch({
    onChange,
    initialLanguage = 'en'
}: LanguageSwitchProps) {
    const [language, setLanguage] = useState<'en' | 'ar'>(initialLanguage);

    const handleToggle = () => {
        const newLanguage = language === 'en' ? 'ar' : 'en';
        setLanguage(newLanguage);
        onChange?.(newLanguage);
    };

    return (
        <div
            className="flex items-center bg-[#696A6E] rounded-full p-1 w-20 h-10 cursor-pointer"
            onClick={handleToggle}
            role="switch"
            aria-checked={language === 'ar'}
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    handleToggle();
                    e.preventDefault();
                }
            }}
        >
            <div className="relative flex items-center justify-between w-full">
                {/* Switch Knob */}
                <div
                    className={`absolute z-10 w-10 h-8 bg-gray-800 rounded-full transform transition-transform duration-200 ease-in-out ${language === 'ar' ? 'translate-x-8' : 'translate-x-0'
                        }`}
                ></div>

                {/* Labels */}
                <div className={`flex-1 text-center font-medium text-sm z-20 ${language === 'ar' ? 'text-[#010202]' : ' text-[#B3B3B3]'
                    }`}>
                    EN
                </div>
                <div className={`flex-1 text-center font-medium text-sm z-20 ${language === 'ar' ? 'text-[#B3B3B3]' : 'text-[#010202]'
                    }`}>
                    ع
                </div>
            </div>
        </div>
    );
}

// Example usage with page language switching
const LanguageSwitchExample = () => {
    const handleLanguageChange = (language: 'en' | 'ar') => {
        console.log(`Switched to ${language === 'en' ? 'English' : 'Arabic'}`);
        // In a real application, you would set the document direction and apply language changes
        // document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        // document.documentElement.lang = language;
    };

    return (
        <div className="flex items-center justify-center p-8 bg-gray-100">
            <LanguageSwitch
                onChange={handleLanguageChange}
            />
        </div>
    );
};

export { LanguageSwitchExample };