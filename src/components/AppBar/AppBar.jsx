import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import s from "./AppBar.module.css";
const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  return (
    <header className={s.wrapper}>
      <Navigation />
      {user.email && <h4>{user.email}</h4>}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
export default AppBar;
