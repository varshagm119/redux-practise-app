import { Fragment } from "react";
import Counter from "./components/Counter";
import Header from '../src/components/Header';
import Auth from '../src/components/Auth';
import UserProfile from '../src/components/UserProfile';
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
