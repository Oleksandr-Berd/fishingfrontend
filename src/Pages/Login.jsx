import css from "./Login.module.css"
import LoginForm from '../Components/LoginForm/LoginForm';

const Login = () => {
  return (
    <div className={css.loginContainer}>
        <h1>Login</h1>
      <LoginForm />
    </div>
  );
}

export default Login
