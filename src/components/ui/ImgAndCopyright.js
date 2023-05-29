import React from "react"

const ImgAndCopyright = ({ src, alt, copyright, className }) => {
    return (
        <div className={`flex flex-col items-end text-[10px] text-gray-600 ${className}`}>
            <img
                src={src}
                alt={alt}
            />
            <h4>{copyright}</h4>
        </div>
    )
}

export default ImgAndCopyright