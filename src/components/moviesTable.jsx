import Love from "./common/love";
import Table from "./common/table";

const MoviesTable = ({ movies, onDelete, onLove, onSort, sortCol }) => {
  const columns = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      content: (movie) => (
        <Love loved={movie.loved} onClick={() => onLove(movie)} />
      ),
    },
    {
      content: (movie) => (
        <button
          className="btn btn-sm btn-danger"
          onClick={() => onDelete(movie)}
        >
          Delete
        </button>
      ),
    },
  ];
  return (
    <Table data={movies} columns={columns} sortCol={sortCol} onSort={onSort} />
  );
};

export default MoviesTable;
