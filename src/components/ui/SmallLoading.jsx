import React from 'react'

const SmallLoading = () => {
    return (
        <div className="w-[80px] h-[80px] relative p-1">
            <div className="animate-spin rounded-full duration-400 loading w-full relative h-full border-2 border-dotted border-l-0 dark:border-t-gray-700 border-5-gray-500 border-r-green-500 border-b-green-700">
            </div>
            {/* <div className="w-full h-full absolute rounded-full border border-dotted border-green-500 bg-none animate-ping"></div> */}
            <div className="GH absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"><h3 className='text-sm font-bold'>Wait</h3></div>
        </div>
    )
}

export default SmallLoading
