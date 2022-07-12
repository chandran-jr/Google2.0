import React from 'react'

function Socialbutton({text,col,borderCol,url,imgUrl}) {
  return (
    <a href={url}>
    <div className={`flex items-center justify-evenly h-14 w-32 rounded-xl cursor-pointer ${col} border-4 ${borderCol}`}>
        <img className="h-6 text-white" src={imgUrl} alt="logo" />
        <p className="text-white text-lg">{text}</p>
    </div>
    </a>
  )
}

export default Socialbutton