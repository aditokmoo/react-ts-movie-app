import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Movie from './components/movies/Movie';
import Movies from './components/movies/Movies';
import Show from './components/tv_shows/Show';
import Shows from './components/tv_shows/Shows';
import { ContextProvider } from './context/Context';

function App() {
  return (
    <>
    <ContextProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Shows />} />
          <Route path='/movie/:id' element={<Movie />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/show/:id' element={<Show />} />
        </Routes>
      </Router>
    </ContextProvider>
    </>
  );
}

export default App;
