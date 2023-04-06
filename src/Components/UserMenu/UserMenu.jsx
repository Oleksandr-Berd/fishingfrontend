import { useDispatch } from 'react-redux';
import { logOut } from '../../Redux/Auth/operations';
import { useAuth } from '../../Utilities/Hooks/useAuth';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button type="button" className={css.logOutBtn} onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};
