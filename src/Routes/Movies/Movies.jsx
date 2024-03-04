import './Movies.scss';
import Cards from '../../components/Cards/Cards';
import Spinner from '../../components/Spinner/Spinner';


function Movies() {
  return (
    <div className="movies">
      <h1 className="movies__heading">Movies</h1>
      {isMovieLoading ? (
        <Spinner />
      ) : (
        <div className="movies__content">
          {movies.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Movies