const Input = ({
  name,
  type,
  label,
  placeholder,
  value,
  onChange,
  errors,
  register,
  validation,
}) => {
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
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {errors && <small className="text-danger">{errors.message}</small>}
    </div>
  );
};
Input.defaultProps = {
  register: () => null,
  onChange: () => null,
  value: undefined,
};

export default Input;
