import {GlobeIcon,LightningBoltIcon} from '@heroicons/react/solid';


function Footer() {
  return (
    <footer>
        <div className="border-2 border-blue-800 flex flex-col items-center text-white text-lg bg-blue-600">
            <p className="flex space-between">ALL COPYRIGHTS RESERVED 2022<GlobeIcon className="ml-1 mt-1 text-green-500 h-5" /></p>
            <p className="flex">BUILT BY <a className="ml-1 flex hover:underline hover:text-yellow-400" href="https://github.com/chandran-jr">GOVIND BY CHANDRAN <LightningBoltIcon className="ml-1 mt-1 text-yellow-400 h-5"/> </a></p>
            <p>BUILT USING NEXT.JS AND TAILWIND CSS</p>
        </div>
    </footer>
  )
}

export default Footer