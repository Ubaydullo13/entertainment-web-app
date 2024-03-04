import "./Trending.scss";
import Spinner from "../Spinner/Spinner";
import TrendingCard from "../TrendingCard/TrendingCard";

function Trending() {
  return (
    <div className="trending-container">
      {isLoading ? (
        <Spinner className="trending-container__spinner" />
      ) : (
        <div className="trending">
          {trending.map((item) => (
            <TrendingCard key={item.id} item={item} />
          ))}
          {trending.map((item) => (
            <TrendingCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Trending;
