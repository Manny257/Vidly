import { useState } from "react";
import { getGenres } from "../services/fakeGenreService";
import { getMovies } from "../services/fakeMoviesService";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import _ from "lodash";

const Movies = () => {
  //state
  const [allMovies, setAllMovies] = useState(getMovies());
  const [currentPage, setCurrentPage] = useState(1);
  const [allGenres, setAllGenres] = useState([
    { _id: "", name: "All Genres" },
    ...getGenres(),
  ]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortCol, setSortCol] = useState({ path: "title", order: "asc" });

  //data preparing
  const pageSize = 4;
  const filtered =
    selectedGenre && selectedGenre._id
      ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
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
    setSelectedGenre(genre);
    setCurrentPage(1);
  };

  const handleSort = (sortCol) => {
    setSortCol(sortCol);
  };

  return (
    <>
      <div className="row ">
        <div className="col-2">
          <ListGroup
            items={allGenres}
            selectedItem={selectedGenre}
            onItemSelect={handleGenreSelect}
          />
        </div>
        <div className="col">
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
