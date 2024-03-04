import BookMarkEmpty from "../../assets/icon-bookmark-empty.svg";
import BookmarkFull from "../../assets/icon-bookmark-full.svg";
import Movie from "../../assets/icon-category-movie.svg";
import Tv from "../../assets/icon-category-tv.svg";
import noImage from "../../assets/no-image-svgrepo-com.svg";
import "./Cards.scss";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__banner">
        {/* < src>< */}
        <span className="cards__banner--icon">
          <img src={item.isBookmarked ? BookmarkFull : BookMarkEmpty} alt="" />
        </span>
      </div>
      <div className="cards__details">
        <h2 className="cards__details--title">
          year &nbsp; &#8226; &nbsp;
          <img src={title ? Movie : Tv} alt="Movie" />
          &nbsp;&nbsp;
          {title ? `Movie` : `Tv Series`}
          &nbsp; &#8226; &nbsp;{adult ? `18+` : `PG`}
        </h2>
        <h1 className="cards__details--heading">
          {title ? `${title}` : `${name}`}
        </h1>
      </div>
    </div>
  );
}

export default Cards;
