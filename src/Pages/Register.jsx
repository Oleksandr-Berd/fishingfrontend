import css from "./Register.module.css"
import RegisterForm from '../Components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <div className={css.registerContainer}>
        <h1>Registration</h1>
      <RegisterForm />
      <a href="http://localhost:5002/google">Authorize with Google</a>
    </div>
  );
}

export default Register