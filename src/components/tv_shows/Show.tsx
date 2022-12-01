import { useContext, useEffect } from "react"
import { useParams, Link } from "react-router-dom";
import Context from "../../context/Context"
import { FaAngleDoubleLeft } from 'react-icons/fa'

function Show() {
  const { getTopShowDetails, show, img_path }: any = useContext(Context);
  const params = useParams();

  useEffect(() => {
    getTopShowDetails(params.id);
  }, []);

  const {
    name,
    overview,
    backdrop_path,
    poster_path
  } = show;

  return (
    <div className="details">
      <div className="container">
        <Link to='/shows' className="back-btn"><FaAngleDoubleLeft id='icon' /> Back</Link>
        <div className="poster-section">
        <img src={backdrop_path !== null ? img_path + backdrop_path : img_path + poster_path} alt="Movie poster image" />
        </div>
        <section>
          <h1>{name}</h1>
          <p>{overview ? overview : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequuntur ullam eum nemo minima deleniti illum magnam pariatur blanditiis voluptatum inventore?'}</p>
        </section>
      </div>
    </div>
  )
}

export default Show