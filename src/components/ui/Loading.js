import React from "react"

const Loading = () => {
    return (
        <div className="flex w-full h-10 items-center justify-center gap-5">
            <div className="w-[5px] h-[5px] bg-black rounded-full animate-[ping_800ms_ease_0ms_infinite]"></div>
            <div className="w-[5px] h-[5px] bg-black rounded-full animate-[ping_800ms_ease_400ms_infinite]"></div>
            <div className="w-[5px] h-[5px] bg-black rounded-full animate-[ping_800ms_ease_700ms_infinite]"></div>
        </div>

    )
}

export default Loading