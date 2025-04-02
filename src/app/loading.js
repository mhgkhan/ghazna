import React from 'react'

const loading = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="relative w-64 h-2 bg-gray-300 rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-1/2 bg-pink-600 animate-loading-bar"></div>
                <div className="absolute top-0 left-1/2 h-full w-1/2 bg-yellow-600 animate-loading-bar-reverse"></div>
            </div>
        </div>
    );
};

export default loading;