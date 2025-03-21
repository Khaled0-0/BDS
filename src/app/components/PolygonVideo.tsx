"use client";

import { useState, useRef } from 'react';

const PolygonVideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPolygonVisible, setIsPolygonVisible] = useState(true); // State for polygon visibility
    const videoRef = useRef<HTMLVideoElement>(null); // Properly type the videoRef

    // Handle polygon click
    const handlePolygonClick = () => {
        console.log("Polygon clicked!");
        setIsPlaying(true); // Start playing the video
        setIsPolygonVisible(false); // Hide the polygon
        if (videoRef.current) {
            videoRef.current.play(); // Now TypeScript knows videoRef.current is an HTMLVideoElement
        }
    };

    // Handle video click
    const handleVideoClick = () => {
        console.log("Video clicked!");
        setIsPlaying(false); // Pause the video
        setIsPolygonVisible(true); // Show the polygon
        if (videoRef.current) {
            videoRef.current.pause(); // Now TypeScript knows videoRef.current is an HTMLVideoElement
        }
    };

    return (
        <div className="relative w-full h-[600px] flex items-center justify-center">
            {/* Video Element */}
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                controls={false}
                autoPlay={isPlaying}
                loop
                muted
                onClick={handleVideoClick} // Add click handler for video
            >
                <source src={"/video1.mp4"} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Clickable Polygon */}
            {isPolygonVisible && ( // Conditionally render the polygon
                <svg
                    className="absolute inset-0 w-fit flex items-center justify-center h-[100px] ml-[40%] mt-[45%] opacity-80 hover:opacity-100 transition duration-300 ease-in-out rotate-90"
                    viewBox="0 0 100 100"
                    onClick={handlePolygonClick}
                    pointerEvents="visible"
                >
                    <polygon
                        points="50,10 90,90 10,90"
                        fill="rgba(255, 255, 255, 0.3)"
                        fillOpacity="0.5"
                        stroke="white"
                        strokeWidth="2"
                        className="cursor-pointer hover:fill-opacity-75 transition duration-300 ease-in-out"
                    />
                </svg>
            )}
        </div>
    );
};

export default PolygonVideoPlayer;