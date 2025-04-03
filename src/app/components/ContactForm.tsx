"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';

type NicheType = 'Brand Identity Design' | 'Graphic Design' | 'Illustrations';

interface FormData {
    name: string;
    email: string;
    projectDetails: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        projectDetails: ''
    });

    const [selectedNiche, setSelectedNiche] = useState<NicheType>('Brand Identity Design');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleNicheSelect = (niche: NicheType) => {
        setSelectedNiche(niche);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log({ ...formData, projectNiche: selectedNiche });
    };

    const niches: NicheType[] = ['Brand Identity Design', 'Graphic Design', 'Illustrations'];

    return (
        <div className="flex items-start justify-between">
            {/* Form Section */}
            <div className="w-full md:w-1/2 pr-0 md:pr-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="border-b border-gray-300 pb-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="mt-1 w-full border-none focus:ring-0 p-0"
                            required
                        />
                    </div>

                    <div className="border-b border-gray-300 pb-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your email address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="mt-1 w-full border-none focus:ring-0 p-0"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Project&apos;
                            s niche</label>
                        <div className="flex flex-wrap gap-3">
                            {niches.map((niche) => (
                                <div
                                    key={niche}
                                    onClick={() => handleNicheSelect(niche)}
                                    className={`flex items-center rounded-full px-4 py-2 border cursor-pointer ${selectedNiche === niche ? 'bg-black text-white' : 'bg-white text-black'
                                        }`}
                                >
                                    <div className={`w-4 h-4 rounded-full flex items-center justify-center mr-2 ${selectedNiche === niche ? 'bg-white' : 'border border-gray-400'
                                        }`}>
                                        {selectedNiche === niche && <div className="w-2 h-2 rounded-full bg-black"></div>}
                                    </div>
                                    <span>{niche}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border-b border-gray-300 pb-2">
                        <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-700">Your project is about</label>
                        <textarea
                            id="projectDetails"
                            name="projectDetails"
                            value={formData.projectDetails}
                            onChange={handleInputChange}
                            rows={3}
                            className="mt-1 w-full border-none focus:ring-0 p-0 resize-none"
                        ></textarea>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="bg-black text-white px-6 py-3 rounded-full inline-flex items-center gap-2 hover:bg-gray-800 transition-colors"
                        >
                            START A JOURNEY
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>

            {/* Contact Info Section */}
            <div className="max-w-[400px] md:w-1/2 mt-12 md:mt-0">
                <div className="space-y-8">
                    <div>
                        <h3 className="text-gray-500 font-medium mb-2">EMAIL US</h3>
                        <p className="text-xl font-medium">hello@BDS.studio</p>
                    </div>

                    <div>
                        <h3 className="text-gray-500 font-medium mb-2">CONTACT US</h3>
                        <p className="text-xl font-medium">+31 222 433 112</p>
                    </div>

                    <div>
                        <h3 className="text-gray-500 font-medium mb-2">LET&apos;
                            S GRAB SOME COFFEE</h3>
                        <p className="text-xl font-medium">We are based in Cairo, 6 Maadi St.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;