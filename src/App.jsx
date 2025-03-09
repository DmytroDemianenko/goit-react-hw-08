import "modern-normalize";
import "./App.css";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import Layout from "./components/Layout/Layout";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contacts/operations";
import { Route, Routes } from "react-router-dom";
import { refreshUser } from "./redux/auth/operations";
import { selectIsRefreshing } from "./redux/auth/selectors";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? null : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <Contacts />
            </PrivateRoute>
          }
        />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route
        path="/login"
        element={
          <RestrictedRoute component={<Login />} redirectTo="/contacts" />
        }
      />
    </Routes>
  );
};
// return (
//   <>
//     <div className="wrapper">
//       <h1 className="pageTitle">Phonebook</h1>
//       <ContactForm />
//       <SearchBox />
//       <ContactList />
//     </div>
//   </>
//   );
// }

export default App;
