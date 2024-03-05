import { Route, Routes } from "react-router-dom";
import { Authentication } from "./Routes/Authentication";
import Bookmark from "./Routes/Bookmark/Bookmark";
import Home from "./Routes/Home/Home";
import Movies from "./Routes/Movies/Movies";
import TVSeries from "./Routes/TvSeries/TvSeries";
import Navigation from "./Routes/Navigation/Navigation";
import Search from "./Routes/Search/Search";
import { BookmarksProvider } from "./context/BookmarksContext";
function App() {
  return (
    <BookmarksProvider>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/movie" element={<Movies />} />
          <Route path="/tv" element={<TVSeries />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/search" element={<Search />} />
        </Route>
        <Route path="auth/*" element={<Authentication />} />
      </Routes>
    </BookmarksProvider>
  );
}

export default App;
