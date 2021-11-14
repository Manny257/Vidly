import { useNavigate, useParams } from "react-router";

const MoviesForm = () => {
  const { id: movieId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    navigate("/movies");
  };

  return (
    <div className="container">
      <h2>Movie Form {movieId}</h2>
      <button onClick={handleSave} className="btn btn-primary">
        Save
      </button>
    </div>
  );
};

export default MoviesForm;
