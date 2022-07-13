import Pagination from "./pagination"


function Searchresults({results}) {
  return (
    <div className="mx-auto w-full pl-3 pr-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
        <p className="text-gray-600 text-md mb-5 mt-3">About {results.searchInformation?.formattedTotalResults} results in {results.searchInformation?.formattedSearchTime} seconds </p>

        {results.items?.map((result) => (
            <div key={result.link} className="max-w-xl mb-8">
                <div className="group">
                    <a className="text-sm" href={result.link}>{result.formattedUrl}</a>
                    <a href={result.link}><h2 className="group-hover:underline truncate text-xl text-blue-800 font-medium group">{result.title}</h2></a>
                </div>
                <p className="line-clamp-2">{result.snippet}</p>
            </div>
        ))}

        <Pagination />
    </div>
  )
}

export default Searchresults