import React from 'react'

const GoogleAdsenceComponent = ({ pubid }) => {
    return (
        <script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${pubid}`}
            crossOrigin="anonymous"></script>
    )
}

export default GoogleAdsenceComponent
