import { useEffect, useState } from "react";

import Cards from "../../components/Cards/Cards";
import "./Bookmark.scss"

function Bookmark() {
  const [bookmarks, setBookmarks] = useState([]);
  useEffect(() => {
    const storedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
    setBookmarks(storedBookmarks);
  }, []);
  return (
    <div className="bookmark">
      <h1 className="bookmark__movies-heading">Bookmarked Movies</h1>
      <div className="bookmark__movies">
        {
             bookmarks.length && bookmarks.map((item) => (
                <Cards key={item.id} item={item} />
              ))
            }
      </div>
    </div>
  )
}

export default Bookmark