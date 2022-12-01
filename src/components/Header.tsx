import { useContext } from "react"
import Context from "../context/Context";

function Header() {
  const { movies }: any = useContext(Context);
  const pathName = window.location.pathname;
 
  return (
    <header>
        <div className="overlay"></div>
        <div className="container">
            <div className="header-section">
                <h1>Top {pathName === '/' ? 'Movies' : 'Shows'}</h1>
                <p>The top 10 most popular {pathName === '/' ? 'movies' : 'tv shows'} on the web</p>
                <form>
                    <input type="text" placeholder='Search...' id='search' />
                    <button>Search</button>
                </form>
            </div>
        </div>
    </header>
  )
}

export default Header