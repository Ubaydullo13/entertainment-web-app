import { Fragment } from "react";
import Spinner from "../../components/Spinner/Spinner";
import "./Search.scss"


function Search() {
  return (
    <div className="search-result">
      {search ? (
        <h1 className="search-result__heading">
          Found {search.length} for "{searchInput}"
        </h1>
      ) : (
        <Fragment></Fragment>
      )}
      {isSearchLoading ? (
        <Spinner />
      ) : (
        <div className="search-result__content">
          {search
            .filter(
              (item) =>
                item.media_type !== "person" || item.release_date === null
            )
            .map((item) => (
              <Cards key={item.id} item={item} />
            ))}
        </div>
      )}
    </div>
  )
}

export default Search