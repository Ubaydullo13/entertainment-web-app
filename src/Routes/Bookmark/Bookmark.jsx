import { useContext } from "react";
import { BookmarksContext } from "../../context/BookmarksContext";
import Cards from "../../components/Cards/Cards";
import "./Bookmark.scss"

function Bookmark() {
  const {bookmarks, handleBookmark} = useContext(BookmarksContext);
  return (
    <div className="bookmark">
      <h1 className="bookmark__movies-heading">Bookmarked Movies</h1>
      <div className="bookmark__movies">
        
      </div>
      <h1 className="bookmark__series-heading">Bookmarked Tv Series</h1>
      <div className="bookmark__series">
        
          </div>
    </div>
  )
}

export default Bookmark