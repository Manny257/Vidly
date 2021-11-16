const Input = ({ type, onChange, label, value }) => {
  return (
    <div className="mb-3">
      <label htmlFor={type} className="form-label">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className="form-control"
        id={type}
      />
    </div>
  );
};

export default Input;
