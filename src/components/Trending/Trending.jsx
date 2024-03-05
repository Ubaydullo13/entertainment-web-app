import "./Trending.scss";
import Spinner from "../Spinner/Spinner";
import TrendingCard from "../TrendingCard/TrendingCard";
import { useFetch } from "../../hooks/useFetch";

function Trending() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = `${import.meta.env.VITE_API}/v1.4/movie?page=6&limit=20`;
  const { data, isLoading } = useFetch(apiUrl, apiKey);
  return (
    <div className="trending-container">
      {isLoading ? (
        <Spinner className="trending-container__spinner" />
      ) : (
        <div className="trending">
          {data.docs && data.docs.map((item) => (
            <TrendingCard key={item.id} item={item} />
          ))}
          {data.docs && data.docs.map((item) => (
            <TrendingCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Trending;
