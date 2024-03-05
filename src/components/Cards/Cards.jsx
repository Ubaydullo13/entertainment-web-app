import BookMarkEmpty from "../../assets/icon-bookmark-empty.svg";
import BookmarkFull from "../../assets/icon-bookmark-full.svg";
import Movie from "../../assets/icon-category-movie.svg";
import Tv from "../../assets/icon-category-tv.svg";
import noImage from "../../assets/no-image-svgrepo-com.svg";
import "./Cards.scss";

function Cards({item, bookmarks, handleBookmark}) {
  const isBookmarked = bookmarks.some((bookmark) => bookmark.id === item.id)
  return (
    <div className="cards">
      <div className="cards__banner">
        <img className="cards__banner--img" src={item.item.backdrop.url ? item.item.backdrop.url : noImage } alt={item.item.name} />
        <span onClick={() => handleBookmark(item)} className="cards__banner--icon">
          <img src={isBookmarked ? BookMarkEmpty : BookmarkFull} />
        </span>
      </div>
      <div className="cards__details">
      <h2 className="cards__details--title">
      {item.item.year}
          &nbsp; &#8226; &nbsp;
          <img src={item.item.type === "movie"  ? Movie : Tv} alt="Movie" />
          &nbsp;&nbsp;
          {item.item.type === "movie" ? `Movie` : `Tv Series`}
          &nbsp; &#8226; &nbsp;{item.item.ageRating + "+"}
        </h2>
        <h1 className="cards__details--heading">
          {item.item.name}
        </h1>
      </div>
    </div>
  );
}

export default Cards;
