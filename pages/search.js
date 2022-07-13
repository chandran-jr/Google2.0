import Head from "next/head"
import HeaderSearch from "../Components/HeaderSearch"
import {API_KEY, CONTEXT_KEY} from "../keys";

function Search({results}) {

    console.log(results);

  return (
    <div>
        <Head>
            <title>Search Results</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <HeaderSearch/>
    </div>
  )
}

export default Search


export async function getServerSideProps(context) {
    const useDummyData  = false;

    const data = await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}`).then(response => response.json());

    return {
        props: {
            results: data
        }
    }


}