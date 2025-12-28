import React from 'react';

const SantaHat = ({ className }: { className?: string }) => {
    return (
        <svg
            viewBox="0 0 512 512"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={{ filter: 'drop-shadow(2px 2px 2px rgba(0,0,0,0.3))' }}
        >
            {/* White Pom Pom */}
            <circle cx="430" cy="80" r="40" fill="white" />

            {/* Red Hat Body */}
            <path
                d="M60 400 C 60 400, 100 100, 256 50 C 350 20, 430 80, 430 80 C 430 80, 350 150, 300 200 C 250 250, 400 380, 400 400 Z"
                fill="#D42426"
            />

            {/* White Fur Trim */}
            <path
                d="M40 400 L 420 400 C 440 400, 440 460, 420 460 L 40 460 C 20 460, 20 400, 40 400 Z"
                fill="white"
            />
        </svg>
    );
};

export default SantaHat;
