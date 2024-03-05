import Cards from '../../components/Cards/Cards';
import Spinner from '../../components/Spinner/Spinner';
import './TvSeries.scss';
import { useFetch } from '../../hooks/useFetch';

function TvSeries() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = `${import.meta.env.VITE_API}/v1.4/movie?page=8&limit=80&type=tv-series`;
  const { data, isLoading } = useFetch(apiUrl, apiKey);
  return (
    <div className="series">
      <h1 className="series__heading">Tv Series</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="series__content">
          {data.docs.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  )
}

export default TvSeries