import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="nav-section">
          <ul>
            <li><Link to='/' className='link'>Movies</Link></li>
            <li><Link to='/shows' className='link'>TV Shows</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar