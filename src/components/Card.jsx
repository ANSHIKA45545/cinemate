const Card =({movie}) => {
    const {id,original_title,overview,poster_path} = movie;
    const image =`https://image.tmdb.org/t/p/w500/${poster_path}`;

    return (
        <div className="max-w-sm border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 m-3">
    <a href={`/movie/${id}`}>
        <img className="rounded-t-lg" src={image} alt="" />
    </a>
    <div className="p-5">
        <a href={`/movie/${id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-300">{original_title}</h5>
        </a>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
        
    </div>
</div>
    )
}

export default Card;