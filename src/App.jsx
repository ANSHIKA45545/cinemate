import {BrowserRouter,Routes,Route} from "react-router-dom"
import  MovieList  from "./pages/MovieList"
import MovieDetails from "./pages/MovieDetails"
import PageNotFound  from "./pages/PageNotFound"
import  Search  from "./pages/Search"
import Header from "./components/Header"
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';
import ScrollToTop from "./components/ScrollToTop"


function App() {

  return (
    <div className="dark:bg-slate-700">
      <BrowserRouter>
      <ScrollToTop />
    <Header />
    <Routes>
      <Route path="/" element={<MovieList apiPath="movie/now_playing" title="Home"/>}/>
      <Route path="movie/:id" element={<MovieDetails/>}/>
      <Route path="movies/popular" element={<MovieList apiPath="movie/popular" title="Popular"/>}/>
      <Route path="movies/top_rated" element={<MovieList apiPath="movie/top_rated" title="Top Rated"/>}/>
      <Route path="movies/upcoming" element={<MovieList apiPath="movie/upcoming" title="Upcoming"/>}/>
      <Route path="*" element={<PageNotFound title="Page not found"/>}/>
      <Route path="search" element={<Search apiPath="search/movie"/>}/>
    </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  )
}

export default App;
