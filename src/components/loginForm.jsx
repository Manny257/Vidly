import Input from "./common/input";
import { useState } from "react";

const LoginForm = () => {
  const [account, setAccount] = useState({ email: "", password: "" });
  let errors = {};

  const handleChange = ({ currentTarget: input }) => {
    const newAccount = { ...account };
    newAccount[input.type] = input.value;
    setAccount(newAccount);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    errors = validate();
    console.log("submitted");
  };

  const validate = () => {
    if (account.email.trim() === "") errors.email = "Email is required";
    if (account.password.trim() === "")
      errors.password = "Password is required";
    return Object.keys(errors).length === 0 ? null : errors;
  };

  return (
    <div className="row justify-content-center">
      <div className="col-8 col-lg-4">
        <h2 className="mb-3">Login</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type={"email"}
            label={"Email"}
            value={account.email}
            onChange={handleChange}
          />
          <Input
            type={"password"}
            label={"Password"}
            value={account.password}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
