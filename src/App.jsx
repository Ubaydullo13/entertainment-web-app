import { Route, Routes } from "react-router-dom";
import { Authentication } from "./Routes/Authentication";
import Bookmark from "./Routes/Bookmark/Bookmark";
import Home from "./Routes/Home/Home";
import Movies from "./Routes/Movies/Movies";
import TVSeries from "./Routes/TvSeries/TvSeries";
import Navigation from "./Routes/Navigation/Navigation";
import Search from "./Routes/Search/Search";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<TVSeries />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/search" element={<Search />} />
      </Route>
      <Route path="auth/*" element={<Authentication />} />
    </Routes>
  );
}

export default App;
