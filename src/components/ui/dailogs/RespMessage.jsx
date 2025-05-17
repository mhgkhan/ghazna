// import Loading from '@/components/Loading'
import React from 'react'

const RespMessage = ({ message, isErr, hide}) => {

    return (
        <div className={`text-xl transition-all duration-300 italic text-white p-5 rounded-md ${isErr ? "bg-red-600" : "bg-green-600"}`} onClick={hide}>{message}</div>
    )
}

export default RespMessage
