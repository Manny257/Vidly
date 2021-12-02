import React from "react";

export default function Select({ name, label, items, register }) {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <select {...register(name)} className="form-select" id={name}>
        <option key={0} value=""></option>
        {items.map((item) => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
}
