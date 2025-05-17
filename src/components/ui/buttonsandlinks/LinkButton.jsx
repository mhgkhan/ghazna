import Link from 'next/link'
import React from 'react'

const LinkButton = ({ text, link }) => {
    return (
        <Link href={link} className="btn md:px-4 px-3 py-3 rounded-md mx-1 text-center hover:underline dark:bg-white dark:text-black bg-black text-white border border-2 border-transparent dark:active:border-black active:border-black border-white active:border-dotted" aria-label="View Projects">{text}</Link>
    )
}

export default LinkButton