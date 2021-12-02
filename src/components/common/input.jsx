const Input = ({ name, type, label, errors, register, validation }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        {...register(name, validation)}
        type={type}
        className="form-control"
        name={name}
        id={name}
      />
      {errors && <small className="text-danger">{errors.message}</small>}
    </div>
  );
};

export default Input;
