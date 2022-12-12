import { useContext, useEffect } from "react";
import Context from "../context/Context";
import { FaSearch } from 'react-icons/fa';
import { BiMoviePlay } from 'react-icons/bi';

function Header() {
  const { filterShows, filterMovies, searchMovieActive, searchShowActive, movieSearch, setMovieSearch, showSearch, setShowSearch }: any = useContext(Context);
  const pathName = window.location.pathname;

  useEffect(() => {
    // If value on movie search exist filter movies
    if(movieSearch) {
      filterMovies();
    }
    // If value on show search exist filter shows
    if(showSearch) {
      filterShows();
    }
  }, [movieSearch, showSearch])
   
  return (
    <header>
        <div className="overlay"></div>
        <div className="container">
            <div className="header-section">
                <h1>Top {pathName === '/' ? 'Shows' : 'Movies'}</h1>
                <p>The top 10 most popular {pathName === '/' ? 'tv shows' : 'movies'} on the web</p>
                <form>
                    <BiMoviePlay className={(pathName === '/movies' && searchMovieActive) || (pathName === '/' && searchShowActive) ? 'movie-icon active' : 'movie-icon'}/>
                    <input type="text" value={pathName === '/' ? showSearch : movieSearch} placeholder='Search...' id='search' onChange={(e) => {pathName === '/' ? setShowSearch(e.target.value) : setMovieSearch(e.target.value)}} />
                    <FaSearch className={(pathName === '/movies' && searchMovieActive) || (pathName === '/' && searchShowActive) ? 'search-icon active' : 'search-icon'} />
                </form>
            </div>
        </div>
    </header>
  )
}

export default Header