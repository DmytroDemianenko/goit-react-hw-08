import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { registerThunk } from "../redux/auth/operations";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: "",
    name: "",
    password: "",
  };
  const handleSubmit = (values, options) => {
    dispatch(registerThunk(values));
    options.resetForm();
  };
  return (
    <div className="formWrapper">
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className="form">
          <label>
            <span>Name:</span>
            <Field name="name" />
          </label>
          <label>
            <span>Email:</span>
            <Field name="email" />
          </label>
          <label>
            <span>Password:</span>
            <Field name="password" type="password" />
          </label>
          <button type="submit">Register</button>
          <p style={{ color: "black" }}>
            You already have account? <Link to="/login">Get IT!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default Register;
