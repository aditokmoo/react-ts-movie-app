import { useContext } from "react";
import Context from "../context/Context";
import { FaSearch } from 'react-icons/fa';
import { BiMoviePlay } from 'react-icons/bi';

function Header() {
  const { filterShows, filterMovies, searchMovieActive, searchShowActive, searchMovieData, searchShowData }: any = useContext(Context);
  const pathName = window.location.pathname;
   
  return (
    <header>
        <div className="overlay"></div>
        <div className="container">
            <div className="header-section">
                <h1>Top {pathName === '/' ? 'Shows' : 'Movies'}</h1>
                <p>The top 10 most popular {pathName === '/' ? 'tv shows' : 'movies'} on the web</p>
                <form>
                    <BiMoviePlay className={(pathName === '/movies' && searchMovieActive) || (pathName === '/' && searchShowActive) ? 'movie-icon active' : 'movie-icon'}/>
                    <input type="text" value={pathName === '/' ? searchShowData : searchMovieData} placeholder='Search...' id='search' onChange={(e) => {pathName === '/' ? filterShows(e) : filterMovies(e)}} />
                    <FaSearch className={(pathName === '/movies' && searchMovieActive) || (pathName === '/' && searchShowActive) ? 'search-icon active' : 'search-icon'} />
                </form>
            </div>
        </div>
    </header>
  )
}

export default Header