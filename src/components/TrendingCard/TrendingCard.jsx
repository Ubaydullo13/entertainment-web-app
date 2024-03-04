import bookmarkEmpty from '../../assets/icon-bookmark-empty.svg'
import bookmarkFull from '../../assets/icon-bookmark-full.svg'
import Movie from '../../assets/icon-category-movie.svg'
import Tv from '../../assets/icon-category-tv.svg'
import './TrendingCard.scss'

function TrendingCard() {
  return (
    <div className="trending-card">
        <div className="trending-card__bookmark">
            <span className='trending-card__bookmark--img'>
                <img src={isBookmarked ? bookmarkFull : bookmarkEmpty} alt="" />
            </span>
        </div>
        <div className="trending-card__details">
            <h2 className='trending-card__details--title'>
                year &nbsp;&#8226;&nbsp;
                <img src={media_type === "movie" ? Movie : Tv} alt="" />
                &nbsp;
                {media_type === "movie" ? `Movie` : `Tv Series`}
                &nbsp;&#8226; &nbsp;{adult ? `A` : `PG`}
            </h2>
            <h1 className='trending-card__details--heading'>
                {title ? `${title}` : `${name}`}
            </h1>
        </div>
    </div>
  )
}

export default TrendingCard