import { useContext, useEffect } from "react"
import { useParams, Link } from "react-router-dom";
import Context from "../../context/Context"
import { FaAngleDoubleLeft } from 'react-icons/fa'

function Movie() {
  const { getMovieDetails, movie, img_path }: any = useContext(Context);
  const params = useParams();
  
  useEffect(() => {
    getMovieDetails(params.id)
  }, []);

  const {
    title,
    overview,
    backdrop_path
  } = movie;

  return (
    <div className="details">
      <div className="container">
        <Link to='/' className="back-btn"><FaAngleDoubleLeft id='icon' /> Back</Link>
        <div className="poster-section">
        <img src={img_path + backdrop_path} alt="Movie poster image" />
        </div>
        <section>
          <h1>{title}</h1>
          <p>{overview}</p>
        </section>
      </div>
    </div>
  )
}

export default Movie