import { SearchIcon, XIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import {useRouter} from 'next/router';
import { useRef } from 'react';
import {MicrophoneIcon, ViewGridIcon} from '@heroicons/react/solid';
import Avatar from './avatar';
import HeaderOptions from './HeaderOptions';

function HeaderSearch() {

    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (e) => {
        e.preventDefault();
        const term = searchInputRef.current.value;
    
        if(!term) {
          return;
        }
    
        router.push(`/search?term=${term}`);
    
    
      }

  return (
    <header className="sticky top-0 bg-white w-full">
    <div className="flex w-full p-6 items-center">
    <Image onClick={() => {router.push("/")}} className="cursor-pointer" height={40} width={120} src="https://thumbs.dreamstime.com/b/google-icon-logo-simple-vector-filled-flat-google-icon-logo-solid-pictogram-isolated-white-background-159029191.jpg"/>

<form className="flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5">
    <input defaultValue={router.query.term} placeholder="Search something else! 🤟" className="flex-grow w-full focus:outline-none " ref={searchInputRef} type="text"></input>
    <XIcon onClick={() => (searchInputRef.current.value="")} className="sm:mr-3 h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125"/> 
    <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer hover:text-gray-900" />
    <SearchIcon onClick={search} className="h-6 mr-3 hidden sm:inline-flex text-blue-500 cursor-pointer hover:text-gray-900"/>
    <button hidden type="submit" onClick={search}>Search</button>
</form>

<Avatar className="ml-auto" url="https://github.com/chandran-jr.png" />
    </div>

    <HeaderOptions/>
    
    </header>
  )
}

export default HeaderSearch