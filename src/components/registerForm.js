import Input from "./common/input";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onTouched" });
  const [user, setUser] = useState({ email: "", password: "", name: "" });

  const onSubmit = (data) => {
    const newUser = data;
    setUser(newUser);
    console.log(data);
    reset();
  };
  return (
    <div className="row justify-content-center">
      {console.log("rendering")}
      <div className="col-8 col-lg-4">
        <h2 className="mb-3">Register</h2>
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
          <Input
            label={"Name"}
            name={"name"}
            type={"text"}
            errors={errors.name}
            register={register}
          />
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
