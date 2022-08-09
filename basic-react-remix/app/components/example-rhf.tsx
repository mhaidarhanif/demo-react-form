import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";

type Inputs = {
  example: string;
  exampleRequired: string;
};

export function ExampleReactHookForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("example")} />

      <input
        type="email"
        {...register("exampleRequired", { required: true })}
      />

      {errors.exampleRequired && <p>This field is required</p>}

      <button type="submit">Save contact</button>
    </form>
  );
}
