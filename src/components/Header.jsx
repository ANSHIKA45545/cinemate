import { useState } from "react";
import { Link, useNavigate } from "react-router";

const Header=() =>{
  const [hidden, setHidden] = useState(true);
  const navigate = useNavigate();
  const handleSubmit=(event) =>{
    event.preventDefault();
    const queryTerm= event.target.search.value;
    event.target.reset();

    return navigate(`/search?q=${queryTerm}`);
  }

    return (
        <div>
            <nav className="bg-gray-600">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button onClick={() => setHidden(!hidden)} type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          
          <svg className="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex shrink-0 items-center text-white font-bold text-2xl">
          CINEMATE
        </div>
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-3 text-center justify-center items-center">
            <Link to="/" className="rounded-md bg-blue-500 px-3 py-2 text-sm font-medium text-white no-underline" aria-current="page">Home</Link>
            <Link to="movies/popular" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline">Popular</Link>
            <Link to="movies/top_rated" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline">Top-Rated</Link>
            <Link to="movies/upcoming" className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white no-underline">Upcoming</Link>
          </div>
        </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        

        <div className="container-fluid">
        <form onSubmit={handleSubmit} className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" name="search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
  </div>
      </div>
    </div>
  </div>

  <div className={`${hidden ? "hidden" : ""} `} id="mobile-menu">
    <div className="space-y-1 px-2 pb-3 pt-2">
      <Link to="/" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white" aria-current="page">Home</Link>
      <Link to="movies/popular" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Popular</Link>
      <Link to="movies/top-rated" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Top-rated</Link>
      <Link to="movies/upcoming"  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Upcoming</Link>
    </div>
  </div>
</nav>

        </div>
    )
}

export default Header;