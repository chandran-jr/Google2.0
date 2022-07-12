import Head from "next/head"
import HeaderSearch from "../Components/HeaderSearch"

function Search() {
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