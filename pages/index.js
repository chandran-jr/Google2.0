import Head from 'next/head'
import Avatar from '../Components/avatar';
import {MicrophoneIcon, ViewGridIcon} from '@heroicons/react/solid';
import {SearchIcon} from '@heroicons/react/outline';
import Image from 'next/image';
import Footer from '../Components/Footer';
import Socialbutton from '../Components/Socialbutton';
import { useRef } from 'react';
import {useRouter} from 'next/router';

export default function Home() {

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
    <div className="flex-col flex h-screen">
      <Head>
        <title>Google</title>
        <meta name="description" content="Google by Govind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    {/*Header*/}

    <header className="flex w-full p-5 justify-between text-md text-gray-700">

      {/*Left*/}
      <div className='flex space-x-4 items-center'>
          <p className="link">About</p>
          <p className="link">Store</p>
      </div>

      <div className='flex space-x-3 items-center'>
        <Socialbutton text="Github" col="bg-gray-500" borderCol="border-black" url="https://github.com/chandran-jr" imgUrl="https://cdn-icons-png.flaticon.com/512/25/25231.png"/>
        <Socialbutton text="Twitter" col="bg-blue-500" borderCol="border-blue-700" url="https://twitter.com/GovindChandran5" imgUrl="https://www.pngkey.com/png/full/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png"/>
        <Socialbutton text="Instagram" col="bg-purple-600" borderCol="border-yellow-500" url="https://instagram.com/chandran.jr" imgUrl="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"/>
        <Socialbutton text="WhatsApp" col="bg-green-400" borderCol="border-green-700" url="https://wa.me/+918330025649" imgUrl="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"/>
      </div>

      {/*Right*/}
      <div className='flex space-x-4 items-center'>

        <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer"/>

        <Avatar url="https://github.com/chandran-jr.png" />
      </div>
    </header>


    {/*Body*/}

    <form className="flex flex-col items-center mt-24 flex-grow ">
      <Image src="https://thumbs.dreamstime.com/b/google-icon-logo-simple-vector-filled-flat-google-icon-logo-solid-pictogram-isolated-white-background-159029191.jpg" height={100} width={300} />

      <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl ">
        <SearchIcon className="cursor-pointer hover:text-gray-900 rounded-full h-5 mr-3 text-gray-500"/>
        <input placeholder="Whatchya thinkin' today? 😎" ref={searchInputRef} type="text" className="flex-grow focus: outline-none" />
        <MicrophoneIcon className="h-5 mr-3 text-gray-500 cursor-pointer hover:text-gray-900 rounded-full"/>
      </div>

      <div className="flex flex-col w-1/2 sm:space-y-0 sm:flex-row sm:space-x-4 mt-8 space-y-2 justify-center">
        <button onClick={search} className="button">Google Search</button>
        <a href="https://github.com/sponsors/chandran-jr">
        <button onClick className="button">I'm Feeling Lucky</button> </a>
      </div>
    </form>

    {/*Footer*/}

    <Footer/>
      
    </div>
  )
}
