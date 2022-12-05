import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Context from "../../context/Context";
import { FaAngleDoubleLeft } from 'react-icons/fa';

function Show() {
  const { getTopShowDetails, getShowTrailer, show, img_path, showTrailer }: any = useContext(Context);
  const params = useParams();

  useEffect(() => {
    getTopShowDetails(params.id);
    getShowTrailer(params.id)
  }, []);

  const {
    name,
    overview,
    backdrop_path,
  } = show;

  return (
    <div className='details'>
      <div className='container'>
        <Link to='/' className='back-btn'><FaAngleDoubleLeft id='icon' /> Back</Link>
        <div className='poster-section'>
        {showTrailer ?
          <iframe id='player' src={`https://youtube.com/embed/${showTrailer}`}></iframe> 
          : 
          <img src={backdrop_path ? img_path + backdrop_path : 'https://wallpaperaccess.com/full/2903163.jpg'} alt='Movie poster image' />
        }
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