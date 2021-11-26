import Input from "./common/input";
import { useState } from "react";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [account, setAccount] = useState({ email: "", password: "" });

  const onSubmit = (data) => {
    const newAccount = data;
    setAccount(newAccount);
    console.log(data);
    reset();
  };

  console.log(errors);
  return (
    <div className="row justify-content-center">
      {console.log("rendering")}
      <div className="col-8 col-lg-4">
        <h2 className="mb-3">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label={"Email"}
            name={"email"}
            type={"email"}
            errors={errors.email}
            register={register}
          />
          <Input
            label={"Password"}
            name={"password"}
            type={"password"}
            errors={errors.password}
            register={register}
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
