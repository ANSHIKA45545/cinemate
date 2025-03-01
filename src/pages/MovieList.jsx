import Card from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useTitle } from "../hooks/useTitle";

const MovieList=({apiPath,title}) =>{
    const {data : movies}= useFetch(apiPath);
     useTitle(title);
    
    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-center flex-wrap other:justify-evenly">
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

export default MovieList;