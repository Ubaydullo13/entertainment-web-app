import bookmarkEmpty from '../../assets/icon-bookmark-empty.svg'
// import bookmarkFull from '../../assets/icon-bookmark-full.svg'
import Movie from '../../assets/icon-category-movie.svg'
import Tv from '../../assets/icon-category-tv.svg'
import './TrendingCard.scss'

function TrendingCard(item) {
  return (
    <div
    className="trending-card"
    style={{ backgroundImage: `url(${item.item.backdrop.url})` }}
  >
    <div className="trending-card__bookmark">
      <span className="trending-card__bookmark--img">
        <img
          src={ bookmarkEmpty}
          alt={"Bookmark Empty"}
        />
      </span>
    </div>
    <div className="trending-card__details">
      <h2 className="trending-card__details--title">
      {item.item.year}&nbsp; &#8226; &nbsp;
        <img src={item.item.type === "movie" ? Movie : Tv} alt="Movie" />
        &nbsp;
        {item.item.type === "movie" ? `Movie` : `Tv Series`}
        &nbsp;&#8226; &nbsp;{item.item.ageRating + "+"}
      </h2>
      <h1 className="trending-card__details--heading">
      {item.item.name}
      </h1>
    </div>
  </div>
  )
}

export default TrendingCard