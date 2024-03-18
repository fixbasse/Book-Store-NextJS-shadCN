import React from 'react'

const Loading = () => {
    return (
        <div className="fixed top-0 bg-slate-50/70 w-full h-screen flex items-center justify-center z-[51]">
            <div className="loader border-[5px] border-r-primary"></div>
        </div>
    )
}

export default Loading