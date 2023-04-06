import css from "./Register.module.css"
import RegisterForm from '../Components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <div className={css.registerContainer}>
        <h1>Registration</h1>
      <RegisterForm />
    </div>
  );
}

export default Register