import { Fragment, useState } from "react"
import Spinner from "../../components/Spinner/Spinner";
import "./Search.scss";
import { useFetch } from "../../hooks/useFetch";
import searchIcon from "../../assets/icon-search.svg"
import Cards from "../../components/Cards/Cards";

function Search() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiUrl = `${import.meta.env.VITE_API}/v1.4/movie?page=8&limit=40`;

  const [query, setQuery] = useState("");
  const { data, isLoading } = useFetch(query ? `https://api.kinopoisk.dev/v1.4/movie/search?query=${query}` : apiUrl, apiKey);

  function handleSearch(){
    setQuery(document.getElementById("search__input").value);
  }
  return (
    <>
      
    <div className="search">
        <img src={searchIcon} alt="searchIcon" className="search__icon" />
        <input onChange={handleSearch} id="search__input" className="search__input"
        placeholder="Search for Movies and TV series"
        name="search"
         />
    </div>

    <Fragment></Fragment>
    <div className="search-result">
      
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="search-result__content">
          {
         data.docs.length && data.docs.map((item) => (
            <Cards key={item.id} item={item} />
          ))
          }
        </div>
      )}
    </div>
    </>
  
  );
}

export default Search;
