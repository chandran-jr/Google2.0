import { XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import {useRouter} from 'next/router';
import { useRef } from 'react';

function HeaderSearch() {

    const router = useRouter();
    const searchInputRef = useRef(null);

  return (
    <header>
        <Image onClick={() => {router.push("/")}} className="cursor-pointer" height={40} width={120} src="https://thumbs.dreamstime.com/b/google-icon-logo-simple-vector-filled-flat-google-icon-logo-solid-pictogram-isolated-white-background-159029191.jpg"/>

        <form className="flex border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5">
            <input className="flex-grow w-full focus:outline-none " ref={searchInputRef} type="text"></input>
            <XIcon onClick={() => (searchInputRef.current.value="")} className="sm:mr-3 h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"/> 
        </form>
    </header>
  )
}

export default HeaderSearch