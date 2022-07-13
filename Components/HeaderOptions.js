import HeaderOption from "./HeaderOption"
import {DotsVerticalIcon, MapIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon} from '@heroicons/react/outline';


function HeaderOptions() {
  return (

    <div  className="flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b-[1px]">

    <div className="flex space-x-6 ">
        <HeaderOption Icon={SearchIcon} title="All" selected/>
        <HeaderOption Icon={PhotographIcon} title="Images"/>
        <HeaderOption Icon={PlayIcon} title="Videos"/>
        <HeaderOption Icon={NewspaperIcon} title="News"/>
        <HeaderOption Icon={MapIcon} title="Maps"/>
        <HeaderOption Icon={DotsVerticalIcon} title="More"/>
    </div>


<div className="flex space-x-4">
    <p className="border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3">Settings</p> 
    <p className="border-b-4 border-transparent hover:text-blue-500 cursor-pointer hover:border-blue-500 pb-3">Tools</p>
    </div>
    </div>
  )
}

export default HeaderOptions