import { useNavigate, useParams } from "react-router";
import { useForm } from "react-hook-form";
import Input from "./common/input";
import Select from "./common/select";
import { getGenres } from "./../services/fakeGenreService";
import { saveMovie } from "./../services/fakeMoviesService";

const MoviesForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const genres = getGenres();

  const { id: movieId } = useParams();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    saveMovie(data);
    navigate("/movies");
  };
  return (
    <div className="row justify-content-center">
      {console.log("rendering")}
      <div className="col-8 col-lg-4">
        <h2 className="mb-3">Movie Form</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label={"Title"}
            name={"title"}
            type={"text"}
            register={register}
            errors={errors.title}
            validation={{
              required: `Title is required`,
            }}
          />
          <Select
            label={"Genre"}
            name={"genre"}
            items={genres}
            register={register}
          />
          <Input
            label={"Number in Stock"}
            name={"numberInStock"}
            type={"number"}
            register={register}
            errors={errors.numberInStock}
            validation={{
              required: "Number in Stock is required",
              min: { value: 0, message: "Enter a number between 0 and 100" },
              max: { value: 100, message: "Enter a number between 0 and 100" },
            }}
          />
          <Input
            label={"Rate"}
            name={"dailyRentalRate"}
            type={"text"}
            register={register}
            errors={errors.dailyRentalRate}
            validation={{
              required: "Rate is required",
              min: { value: 0, message: "Enter a number between 0 and 10" },
              max: { value: 10, message: "Enter a number between 0 and 10" },
            }}
          />
          <button
            onSubmit={() => handleSubmit(onSubmit)}
            type="submit"
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default MoviesForm;
