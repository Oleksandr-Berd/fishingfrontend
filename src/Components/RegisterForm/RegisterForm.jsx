import { useDispatch } from 'react-redux';
import { register } from '../../Redux/Auth/operations';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={css.label}>
        Username
        <input className={css.registerInput} type="text" name="name" />
      </label>
      <label className={css.label}>
        Email
        <input className={css.registerInput} type="email" name="email" />
      </label>
      <label className={css.label}>
        Password
        <input className={css.registerInput} type="password" name="password" />
      </label>
      <button className={css.registerBtn} type="submit">Register</button>
      </form>
  );
};

export default RegisterForm