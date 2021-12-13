import { useState } from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMoviesService";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import Input from "./common/input";
import _ from "lodash";
import { Link } from "react-router-dom";

const Movies = () => {
  //state
  const [allMovies, setAllMovies] = useState(getMovies());
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [sortCol, setSortCol] = useState({ path: "title", order: "asc" });
  const [searchValue, setSearchValue] = useState("");

  //data preparing
  const allGenres = [{ _id: "", name: "All Genres" }, ...getGenres()];
  const pageSize = 4;
  const filtered =
    selectedGenre && selectedGenre._id
      ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
      : searchValue
      ? allMovies.filter((m) =>
          m.title.toLowerCase().startsWith(searchValue.toLowerCase())
        )
      : allMovies;
  const itemsCount = filtered.length;
  const sorted = _.orderBy(filtered, [sortCol.path], [sortCol.order]);
  const movies = paginate(sorted, currentPage, pageSize);

  //event handlers
  const handleDelete = (movie) => {
    const newMovies = allMovies.filter((m) => m._id !== movie._id);
    setAllMovies(newMovies);
  };

  const handleLove = (movie) => {
    const newMovies = allMovies.map((m) => {
      if (m._id === movie._id) m.loved = !movie.loved;
      return m;
    });
    setAllMovies(newMovies);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleGenreSelect = (genre) => {
    setSearchValue("");
    setSelectedGenre(genre);
    setCurrentPage(1);
  };

  const handleSort = (sortCol) => {
    setSortCol(sortCol);
  };

  const handleSearch = (e) => {
    setSelectedGenre(null);
    setCurrentPage(1);
    setSearchValue(e.currentTarget.value);
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-2">
          <ListGroup
            items={allGenres}
            selectedItem={selectedGenre}
            onItemSelect={handleGenreSelect}
          />
        </div>
        <div className="col-8">
          <Link to="/movies/new">
            <button className="btn btn-primary">New Movie</button>
          </Link>
          <Input
            name={"search"}
            type={"text"}
            placeholder={"Search..."}
            value={searchValue}
            onChange={handleSearch}
          />
          <MoviesTable
            movies={movies}
            sortCol={sortCol}
            onDelete={handleDelete}
            onLove={handleLove}
            onSort={handleSort}
          />
          <Pagination
            itemsCount={itemsCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </>
  );
};

export default Movies;
