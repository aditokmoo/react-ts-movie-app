import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Context, { movieShowType } from '../../context/Context';
import Header from '../Header';
import Navbar from '../Navbar';
import AOS from "aos";
import "aos/dist/aos.css";

export default function Shows() {
  const { shows, getTopShows, filterShowData, searchShowData, tv_show_api, img_path }: any = useContext(Context);

  useEffect(() => {
    getTopShows(tv_show_api);
    AOS.init();
  }, [])

  return (
    <>
      <Header />
      <Navbar />
      <section>
        <div className='container'>
          <div className='section'>
          {searchShowData === '' || searchShowData.length < 3 ?
              shows.map(({poster_path, name, overview, id}: movieShowType) => (
                <div className='show' key={id} data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                  <img src={poster_path ? img_path + poster_path : 'https://vsetattoo.com.ua/wp-content/themes/tattookarma/assets/imagenotfound.svg'} alt='' />
                  <div className='box'>
                    <h3>{name}</h3>
                    <p>{overview ? overview.split(' ').slice(0, 20).join(' ') : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sint quasi perspiciatis quam temporibus, maxime officia! Tempore nisi nam veritatis'}...</p>
                    <Link to={`/show/${id}`} className='view-btn'>View</Link>
                  </div>
                </div>
                )):
                filterShowData.map(({poster_path, name, overview, id}: movieShowType) => (
                name.toLowerCase().startsWith(searchShowData) &&
                <div className='show' key={id} data-aos='fade-up' data-aos-delay='200' data-aos-duration='1000'>
                  <img src={poster_path ? img_path + poster_path : 'https://vsetattoo.com.ua/wp-content/themes/tattookarma/assets/imagenotfound.svg'} alt='' />
                  <div className='box'>
                    <h3>{name}</h3>
                    <p>{overview ? overview.split(' ').slice(0, 20).join(' ') : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sint quasi perspiciatis quam temporibus, maxime officia! Tempore nisi nam veritatis'}...</p>
                    <Link to={`/show/${id}`} className='view-btn'>View</Link>
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
