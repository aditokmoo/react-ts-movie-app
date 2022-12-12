import { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import Context, { movieShowType } from '../../context/Context';
import Header from '../Header';
import Navbar from '../Navbar';
import AOS from "aos";
import "aos/dist/aos.css";

function Movies() {
  const { movies, getTopMovies, movies_api, img_path, filterMovieData, movieSearch }: any = useContext(Context);

  useEffect(() => {
    getTopMovies(movies_api);
    AOS.init();
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <section>
        <div className='container'>
          <div className='section'>
            {movieSearch === '' || movieSearch.length < 3 ?
              movies.map(({poster_path, title, overview, id}: movieShowType) => (
                <div className='movie' key={id} data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                  <img src={poster_path ? img_path + poster_path : 'https://vsetattoo.com.ua/wp-content/themes/tattookarma/assets/imagenotfound.svg'} alt='' />
                  <div className='box'>
                    <h3>{title}</h3>
                    <p>{overview ? overview.split(' ').slice(0, 20).join(' ') : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sint quasi perspiciatis quam temporibus, maxime officia! Tempore nisi nam veritatis'}...</p>
                    <Link to={`/movie/${id}`} className='view-btn'>View</Link>
                  </div>
                </div>
                )):
                filterMovieData.map(({poster_path, title, overview, id}: movieShowType) => (
                  title.toLowerCase().startsWith(movieSearch) &&
                  <div className='movie' key={id} data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                    <img src={poster_path ? img_path + poster_path : 'https://vsetattoo.com.ua/wp-content/themes/tattookarma/assets/imagenotfound.svg'} alt='' />
                    <div className='box'>
                      <h3>{title}</h3>
                      <p>{overview ? overview.split(' ').slice(0, 20).join(' ') : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sint quasi perspiciatis quam temporibus, maxime officia! Tempore nisi nam veritatis'}...</p>
                      <Link to={`/movie/${id}`} className='view-btn'>View</Link>
                    </div>
                  </div>
              ))
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Movies