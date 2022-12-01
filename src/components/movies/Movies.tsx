import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import Context, { movieShowType } from '../../context/Context';
import Header from '../Header';
import Navbar from '../Navbar';

function Movies() {
  const { movies, getTopMovies, api_key, img_path }: any = useContext(Context);

  const movies_api: string = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;

  useEffect(() => {
    getTopMovies(movies_api);
  }, [])

  return (
    <>
      <Header />
      <Navbar />
      <section>
        <div className="container">
          <div className="section">
            {movies.map(({poster_path, title, overview, id}: movieShowType) => (
              <div className="movie" key={id}>
                <img src={img_path + poster_path} alt="" />
                <div className="box">
                  <h3>{title}</h3>
                  <p>{overview ? overview.split(" ").slice(0, 20).join(" ") : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sint quasi perspiciatis quam temporibus, maxime officia! Tempore nisi nam veritatis'}...</p>
                  <Link to={`/movie/${id}`} className='view-btn'>View</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Movies