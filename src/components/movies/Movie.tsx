import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Context from "../../context/Context";
import { FaAngleDoubleLeft } from 'react-icons/fa';

function Movie() {
  const { getMovieDetails, getMovieTrailer, movie, img_path, movieTrailer }: any = useContext(Context);
  const params = useParams();
  
  useEffect(() => {
    getMovieDetails(params.id);
    getMovieTrailer(params.id)
  }, []);

  const {
    title,
    overview,
    backdrop_path,
  } = movie;

  return (
    <div className='details'>
      <div className='container'>
        <Link to='/movies' className='back-btn'><FaAngleDoubleLeft id='icon' /> Back</Link>
        <div className='poster-section'>
        {movieTrailer ? 
          <iframe id='player' src={`https://youtube.com/embed/${movieTrailer}`}></iframe> 
          : 
          <img src={backdrop_path ? img_path + backdrop_path : 'https://wallpaperaccess.com/full/2903163.jpg'} alt='Movie poster image' />
        }
        </div>
        <section>
          <h1>{title}</h1>
          <p>{overview ? overview : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ullam eum nemo minima deleniti illum magnam pariatur blanditiis voluptatum inventore?'}</p>
        </section>
      </div>
    </div>
  )
}

export default Movie