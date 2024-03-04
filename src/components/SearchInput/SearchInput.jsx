import { useNavigate } from "react-router-dom";
import searchIcon from '../../assets/icon-search.svg'
import "./SearchInput.scss";

function SearchInput() {
    const navigate = useNavigate();

  return (
    <div className="search">
        <img src={searchIcon} alt="searchIcon" className="search__icon" />
        <input className="search__input"
        placeholder="Search for Movies and TV series"
        name="search"
        value=""
         />
    </div>
  )
}

export default SearchInput