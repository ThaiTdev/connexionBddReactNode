import { useInputTestBdd } from "./Hooks/useInputTestBdd";
import { accountService } from "../_services/accountServices";

const TestBdd = () => {
  const [register, handleSubmit] = useInputTestBdd();

  const showData = (data) => {
    let value = {
      email: data.email,
      password: data.password,
    };
    accountService
      .testBdd(value, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log(res));
  };

  return (
    <form onSubmit={handleSubmit(showData)}>
      <label htmlFor="email">votre mail</label>
      <input
        type="email"
        id="email"
        name="email"
        className="fz-12 mb-10 "
        {...register("email")}
        required
      />
      <label htmlFor="password">votre mot de passe</label>
      <input
        type="password"
        id="password"
        name="password"
        className="fz-12 mb-10 "
        {...register("password")}
        required
      />
      <button type="submit">click here</button>
    </form>
  );
};
export default TestBdd;
