import './Home.scss'
import Cards from "../../components/Cards/Cards"
import Spinner from "../../components/Spinner/Spinner"
import Trending from "../../components/Trending/Trending"
function Home() {
  return (
    <div className="home">
      <h1 className="home__trending-header">Trending</h1>
      <Trending />
      <div className="home__recommendation">
        <h1 className="home__recommendation--header">Recommended for you</h1>
        {isLoading ? (
          <Spinner />
        ) : (
          <div className="home__recommendation--content">
            {trending.map((item) => (
              <Cards key={item.id} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Home