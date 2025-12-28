import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

const ChristmasBar = () => {
    const [isVisible, setIsVisible] = React.useState(true);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-red-600 to-green-600 text-white py-3 px-4 shadow-lg animate-in slide-in-from-bottom duration-500">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex-1 text-center md:text-left">
                    <p className="font-semibold text-sm md:text-base">
                        🎄 Christmas & New Year Offer! <span className="hidden md:inline">|</span> <span className="block md:inline">Get flat <span className="font-bold text-yellow-300">10% OFF</span> on all bookings!</span>
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    <Button
                        variant="secondary"
                        size="sm"
                        className="hidden md:inline-flex bg-white text-red-600 hover:bg-gray-100 font-bold border-none"
                        onClick={() => {
                            const phoneNumber = '919585966522';
                            const message = encodeURIComponent('Hi! I saw the Christmas offer and would like to book a session.');
                            window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
                        }}
                    >
                        Claim Offer
                    </Button>
                    <button
                        onClick={() => setIsVisible(false)}
                        className="p-1 hover:bg-white/20 rounded-full transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChristmasBar;
