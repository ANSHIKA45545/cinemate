import { useSearchParams } from "react-router";
import Card from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

const Search= ({apiPath}) =>{
    const [searchParams] = useSearchParams();
    const queryTerm =  searchParams.get("q");
    const {data : movies}= useFetch(apiPath, queryTerm);
    const pageTitle = useTitle(`Search result for ${queryTerm}`)

    return (
        <main>
            <section className="py-5 px-5">
                <p className="text-3xl text-gray-700 dark:text-white">{movies.length === 0 ? `No result found for '${queryTerm}'` : `Result for '${queryTerm}'`}</p>
            </section>

            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-center flex-wrap">
                    {movies.map((movie) => {
                       return(
                        <Card key={movie.id} movie={movie}/>
                       )
                    })}
                    
                </div>
            </section>
        </main>
    )
}

export default Search;