import React from 'react';
import Image from 'next/image';
import BubblesName from '../public/BubblesName.png';

const HeroSection = () => {
    return (
        <div className="hero">
            <Image src={BubblesName} alt="Bubbles Name" />
            {/* Add other hero content here */}
        </div>
    );
};

export default HeroSection;
