import Image from 'next/image';
import {useRouter} from 'next/router';

function HeaderSearch() {

    const router = useRouter();

  return (
    <header>
        <Image onClick={() => {router.push("/")}} className="cursor-pointer" height={40} width={120} src="https://thumbs.dreamstime.com/b/google-icon-logo-simple-vector-filled-flat-google-icon-logo-solid-pictogram-isolated-white-background-159029191.jpg"/>
    </header>
  )
}

export default HeaderSearch