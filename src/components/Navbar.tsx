import { Link } from 'react-router-dom';

function Navbar() {
  const pathName = window.location.pathname;

  return (
    <nav>
      <div className='container'>
        <div className='nav-section'>
          <ul>
            <li><Link to='/' className={pathName === '/' ? 'link active' : 'link'}>TV Shows</Link></li>
            <li><Link to='/movies' className={pathName === '/movies' ? 'link active' : 'link'}>Movies</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar