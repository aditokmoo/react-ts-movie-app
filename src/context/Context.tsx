import { createContext, useState } from "react";

type childrenType = {
    children: JSX.Element | JSX.Element[]
}

export type movieShowType = {
    poster_path: string, 
    name: string,
    title: string, 
    overview: string, 
    id: number
}

type types = {
    api_key: string
    img_path: string
    movies: movieShowType | []
    shows: movieShowType | {}
    movie: movieShowType | {}
    show: movieShowType | {}
    getTopMovies: (api: string) => Promise<void>
    getMovieDetails: (id: number) => Promise<void>
    getTopShows: (api: string) => Promise<void>
    getTopShowDetails: (id: number) => Promise<void>
}

const Context = createContext<types | []>([]);

export const ContextProvider = ({ children }: childrenType) => {
    const [ movies, setMovies ] = useState<movieShowType | []>([]);
    const [ movie, setMovie ] = useState<movieShowType | {}>({});
    const [ shows, setShows ] = useState<movieShowType | []>([]);
    const [ show, setShow ] = useState<movieShowType | {}>({}); 

    const api_key: string = 'a2949ba2bbc81404864f35921a20a1d0';
    const img_path: string = 'https://image.tmdb.org/t/p/w1280';

    const getTopMovies = async (api: string) => {
        const res = await fetch(api);
        const data = await res.json();

        setMovies(data.results.slice(0, 10));
    }

    const getMovieDetails = async (id: number) => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`)        
        const data = await res.json();
    
        setMovie(data);
    }

    const getTopShows = async (api: string) => {
        const res = await fetch(api);
        const data = await res.json();
    
        setShows(data.results.slice(0, 10));
    }

    const getTopShowDetails = async (id: number) => {
        const res = await fetch(`https://api.themoviedb.org/3/tv/${id}?api_key=${api_key}&language=en-US`);
        const data = await res.json();

        setShow(data);
    }

    return <Context.Provider value={{
        movies,
        shows,
        movie,
        show,
        api_key,
        img_path,
        getTopMovies,
        getMovieDetails,
        getTopShows,
        getTopShowDetails
    }}>
        {children}
    </Context.Provider>
}

export default Context;