import "./Home.scss";
import Cards from "../../components/Cards/Cards";
import Spinner from "../../components/Spinner/Spinner";
import Trending from "../../components/Trending/Trending";
import { useFetch } from "../../hooks/useFetch";
function Home() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = `${import.meta.env.VITE_API}/v1.4/movie?page=8&limit=40`;
  const { data, isLoading } = useFetch(apiUrl, apiKey);
  return (
    <div className="home">
      <h1 className="home__trending-header">Trending</h1>
      <Trending />
      <div className="home__recommendation">
        <h1 className="home__recommendation--header">Recommended for you</h1>
        {isLoading ? (
          <Spinner className="home__recommendation--spinner" />
        ) : (
          <div className="home__recommendation--content">
            {data.docs.length &&
              data.docs.map((item) => (
                <Cards
                  key={item.id}
                  item={item}
                />
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
