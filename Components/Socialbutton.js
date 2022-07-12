import React from 'react'

function Socialbutton({text,col,borderCol,url,imgUrl}) {
  return (
    <a href={url}>
    <div className={`lg:h-14 lg:w-32 lg:flex-row flex flex-col items-center justify-evenly h-2 w-8 rounded-xl cursor-pointer ${col} border-4 ${borderCol}`}>
        <img className="h-6 text-white" src={imgUrl} alt="logo" />
        <p className="invisible lg:visible text-white text-lg">{text}</p>
    </div>
    </a>
  )
}

export default Socialbutton