import MovieItem from './MovieItem';



const  Movies =  (props) =>  {
    const { data } = props;
    return (
      <div className="row mt-4">
        {data.map((movie) => (
          <MovieItem movie={movie} key={movie.id} />
        ))}
      </div>
    );
  
}


export default Movies;


