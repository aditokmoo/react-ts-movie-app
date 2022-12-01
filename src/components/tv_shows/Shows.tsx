import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Context, { movieShowType } from '../../context/Context';
import Header from '../Header';
import Navbar from '../Navbar';

export default function Shows() {
  const { shows, getTopShows, api_key, img_path }: any = useContext(Context);

  const tv_show_api: string = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`;

  useEffect(() => {
    getTopShows(tv_show_api)
  }, [])

  return (
    <>
      <Header />
      <Navbar />
      <section>
        <div className="container">
          <div className="section">
            {shows.map(({poster_path, name, overview, id}: movieShowType) => (
              <div className="show" key={id}>
                <img src={img_path + poster_path} alt="" />
                <div className="box">
                  <h3>{name}</h3>
                  <p>{overview ? overview.split(" ").slice(0, 20).join(" ") : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sint quasi perspiciatis quam temporibus, maxime officia! Tempore nisi nam veritatis'}...</p>
                  <Link to={`/show/${id}`} className='view-btn'>View</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
