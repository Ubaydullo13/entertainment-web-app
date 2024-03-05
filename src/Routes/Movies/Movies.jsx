import './Movies.scss';
import Cards from '../../components/Cards/Cards';
import Spinner from '../../components/Spinner/Spinner';
import { useFetch } from '../../hooks/useFetch';


function Movies() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = `${import.meta.env.VITE_API}/v1.4/movie?page=5&limit=200&type=movie`;
  const { data, isLoading } = useFetch(apiUrl, apiKey);

  return (
    <div className="movies">
    <h1 className="movies__heading">Movies</h1>
    {isLoading ? (
      <Spinner />
    ) : (
      <div className="movies__content">
        {data.docs.length && data.docs.map((item) => (
          <Cards key={item.id} item={item} />
        ))}
      </div>
    )}
  </div>
  )
}

export default Movies