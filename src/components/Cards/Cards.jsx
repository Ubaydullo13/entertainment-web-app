import BookMarkEmpty from "../../assets/icon-bookmark-empty.svg";
import BookMarkFull from "../../assets/icon-bookmark-full.svg"
import Movie from "../../assets/icon-category-movie.svg";
import Tv from "../../assets/icon-category-tv.svg";
import noImage from "../../assets/no-image-svgrepo-com.svg";
import "./Cards.scss";
import { useState } from "react";

function Cards(props) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  function handleClick() {
    const exisBookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
    const isBookmarked = exisBookmarks.some((item) => item.id === props.item.id);

    if (!isBookmarked) {
      const updatedBookmarks = [...exisBookmarks, props.item];
      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
      setIsBookmarked(true); 
    } else {
      const updatedBookmarks = exisBookmarks.filter((item) => item.id !== props.item.id);
      localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
      setIsBookmarked(false);
    }
  }

  return (
    <div className="cards">
      <div className="cards__banner">
        <img className="cards__banner--img" src={props.item.backdrop.url ? props.item.backdrop.url : noImage} alt={props.item.name} />
        <span onClick={handleClick} className="cards__banner--icon">
          <img src={isBookmarked ? BookMarkFull : BookMarkEmpty} alt="Bookmark" />
        </span>
      </div>
      <div className="cards__details">
        <h2 className="cards__details--title">
          {props.item.year}
          &nbsp; &#8226; &nbsp;
          <img src={props.item.type === "movie" ? Movie : Tv} alt="Movie" />
          &nbsp;&nbsp;
          {props.item.type === "movie" ? `Movie` : `Tv Series`}
          &nbsp; &#8226; &nbsp;{props.item.ageRating + "+"}
        </h2>
        <h1 className="cards__details--heading">
          {props.item.name}
        </h1>
      </div>
    </div>
  );
}

export default Cards;
