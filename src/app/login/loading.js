import React from 'react'

const loading = () => {
    return (
        <div className='min-h-screen w-full flex items-center justify-center'>

            <div className="w-[100px] h-[100px] relative">
                <div className="animate-spin duration-400 loading w-full relative h-full border-2 border-dotted border-l-0 dark:border-t-gray-700 border-5-gray-500 border-r-green-500 border-b-green-700">
                </div>
                <div className="GH absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"><h3 className='text-xl font-bold'>GH</h3></div>
            </div>

        </div>
    );
};

export default loading;