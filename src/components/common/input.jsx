const Input = ({ name, type, label, errors, register, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        {...register(name, { required: `${label} is required` })}
        type={type}
        onChange={onChange}
        className="form-control"
        name={name}
        id={name}
      />
      {errors && <small className="text-danger">{errors.message}</small>}
    </div>
  );
};

export default Input;
