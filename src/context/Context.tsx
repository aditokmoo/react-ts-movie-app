import { createContext, useMemo, useState } from "react";

type childrenType = {
    children: JSX.Element | JSX.Element[]
}

// Movie and Show Types
export type movieShowType = {
    poster_path: string, 
    name: string,
    title: string, 
    overview: string, 
    id: number,
    key: string
}

// Context Type
type types = {
    api_key: string
    movies_api: string
    tv_show_api: string
    img_path: string
    movies: movieShowType | []
    shows: movieShowType | {}
    movie: movieShowType | {}
    show: movieShowType | {}
    movieTrailer: string
    showTrailer: string
    filterMovieData: movieShowType | []
    filterShowData: movieShowType | []
    searchMovieActive: boolean
    searchShowActive: boolean
    movieSearch: string
    setMovieSearch: any
    showSearch: string
    setShowSearch: any
    getTopMovies: (api: string) => void
    getMovieDetails: (id: number) => void
    getMovieTrailer: (id: number) => void
    getShowTrailer: (id: number) => void
    filterMovies: () => void
    filterShows: () => void
    getTopShows: (api: string) => void
    getTopShowDetails: (id: number) => void
}

const Context = createContext<types | []>([]);

export const ContextProvider = ({ children }: childrenType) => {
    // To hold movies
    const [ movies, setMovies ] = useState<movieShowType | []>([]);
    const [ shows, setShows ] = useState<movieShowType | []>([]);
    // To hold movie
    const [ movie, setMovie ] = useState<movieShowType | {}>({});
    const [ show, setShow ] = useState<movieShowType | {}>({});
    // To hold trailer
    const [ movieTrailer, setMovieTrailer ] = useState<string>('');
    const [ showTrailer, setShowTrailer ] = useState<string>('');
    // To hold data that is filterd 
    const [ filterMovieData, setFilterMovieData ] = useState<movieShowType | []>([]);
    const [ filterShowData, setFilterShowData ] = useState<movieShowType | []>([]);
    // To add class on icons
    const [ searchMovieActive, setSearchMovieActive ] = useState<boolean>(false);
    const [ searchShowActive, setSearchShowActive ] = useState<boolean>(false);
    // Movie and Show Search values
    const [ movieSearch, setMovieSearch ] = useState('');
    const [ showSearch, setShowSearch ] = useState('');

    const api_key: string = 'a2949ba2bbc81404864f35921a20a1d0';
    const movies_api: string = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
    const tv_show_api: string = `https://api.themoviedb.org/3/tv/popular?api_key=${api_key}&language=en-US&page=1`;
    const img_path: string = 'https://image.tmdb.org/t/p/w1280';

    const movieInputValue = useMemo(() => ({ movieSearch, setMovieSearch }), [movieSearch, setMovieSearch]);
    const showInputValue = useMemo(() => ({ showSearch, setShowSearch }), [showSearch, setShowSearch]);

    // Get Top 10 Movies Function
    const getTopMovies = async (api: string) => {
        const res = await fetch(api);
        const data = await res.json();

        setMovies(data.results.slice(0, 10));
        setMovieTrailer('');
    }

    // Get Movie Details Function
    const getMovieDetails = async (id: number) => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)        
        const data = await res.json();
    
        setMovie(data);
    }

    // Get Movie Trailer Function
    const getMovieTrailer = async (id: number) => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=a2949ba2bbc81404864f35921a20a1d0&language=en-US`);
        const data = await res.json();

        data.results.map(({key}: movieShowType) => {
            return setMovieTrailer(key)
        });
    } 

    // Movie Search Filter Function
    const filterMovies = async () => {
        const value = movieSearch.toLowerCase();
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query='${value}'`);
        const data = await res.json();
        
        // Add class to icons after 3rd char
        if(value.length >= 3) { 
            setSearchMovieActive(true);  
        } else {
            setSearchMovieActive(false);
        }

        // Timeout function to search after 1s
        setTimeout(() => {
            if(value.length >= 3) { 
                setFilterMovieData(data.results);
            } else {
                setFilterMovieData([]);
            }
        }, 1000);
 
    }

    // TV Show Search Filter Function
    const filterShows = async () => {
        const value = showSearch.toLowerCase();
        const res = await fetch(`https://api.themoviedb.org/3/search/tv?api_key=${api_key}&query="${value}"`);
        const data = await res.json();

        // Add class to icons after 3rd char
        if(value.length >= 3) { 
            setSearchShowActive(true);  
        } else {
            setSearchShowActive(false);
        }

        // Timeout function to search after 1s
        setTimeout(() => {
            if(value.length >= 3) { 
                setFilterShowData(data.results);
            } else {
                setFilterShowData([]);
            }
        }, 1000);
    }

    // Get Top 10 Shows Function
    const getTopShows = async (api: string) => {
        const res = await fetch(api);
        const data = await res.json();
    
        setShows(data.results.slice(0, 10));
        setShowTrailer('');
    }

    // Get Tv_Show Details Function
    const getTopShowDetails = async (id: number) => {
        const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}&language=en-US`);
        const data = await res.json();

        setShow(data);
        getShowTrailer(id);
    }

    // Get Tv_Show Trailer Function
    const getShowTrailer = async (id: number) => {
        const res = await fetch(`https://api.themoviedb.org/3/tv/${id}/videos?api_key=${api_key}&language=en-US`);
        const data = await res.json();

        data.results.map(({key}: movieShowType) => {
            return setShowTrailer(key);
        });
    } 

    return <Context.Provider value={{
        movies,
        shows,
        movie,
        show,
        movieTrailer,
        showTrailer,
        filterMovieData,
        filterShowData,
        searchMovieActive,
        searchShowActive,
        api_key,
        movies_api,
        tv_show_api,
        img_path,
        movieSearch,
        showSearch,
        setMovieSearch,
        setShowSearch,
        getTopMovies,
        getMovieDetails,
        getMovieTrailer,
        getShowTrailer,
        filterMovies,
        filterShows,
        getTopShows,
        getTopShowDetails,
    }}>
        {children}
    </Context.Provider>
}

export default Context;