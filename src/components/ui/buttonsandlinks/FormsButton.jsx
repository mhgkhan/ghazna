import React from 'react'

const FormsButton = ({type, loading, text, icon}) => {
    return (
        <button disabled={loading} type={type} className="submit w-auto p-3  border-gray-500 text-white bg-pink-600 dark:bg-white text-white dark:text-black font-bold text-center my-2 flex items-center justify-center gap-2 rounded-md border border-2 border-transparent active:border-white active:dark:border-black active:border-dotted">{icon?<span>{icon}</span>:""} {text}</button>
    )
}

export default FormsButton
