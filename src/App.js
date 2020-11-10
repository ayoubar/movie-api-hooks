import logo from './logo.svg';
import { useState  } from 'react'
import axios from 'axios'
import {  Movies, SideNav } from "./components/test";
import { BrowserRouter , Switch , Route } from 'react-router-dom'
import MovieDetail from './components/movies/MovieDetail'

import './App.css';


const  App  = () =>  {


    const [movies, setMovies] = useState([])
    const [movie, setMovie ] = useState({})
    const [loading, setLoading] = useState(true)



  // componentDidMount() {
  //   this.getAllMovies();
  // }

  const getAllMovies = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/popular?api_key=e366d974f73ae203397850eadc7bce1f`
      );
      const data = await res.data;
      // this.setState({ movies: data.results });
      setMovies(data.results)
    } catch (error) {}
  };

  const getDetailMovie = async (id) => {
    try {
      setLoading(true)
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=e366d974f73ae203397850eadc7bce1f&append_to_response=video`
      );
      const data = await res.data;
      setMovie(data)
      setLoading(false)

    } catch (error) {}
  };

  const searchForMovies = async (query) => {
    try {
      // call Search API
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=e366d974f73ae203397850eadc7bce1f&query=${query}`
      )

      const data = await res.data



      setMovies(data.results)


    } catch (error) {}
  };


    return (
      <BrowserRouter>
        <SideNav title={'Movie API'}  searchMovie={searchForMovies}/>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <div className="container">
                <Movies data={movies} />
              </div>
            )}
          />

          <Route
            exact
            path="/movie/:id"
            render={(props) => (
              <MovieDetail
                {...props}
                getDetailMovie={getDetailMovie}
                movie={movie}
                loading={loading}
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }

export default App;
