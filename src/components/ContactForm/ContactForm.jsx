import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Занадто коротке!")
    .max(50, "Занадто довге!")
    .required("Це поле обов'язкове!"),
  number: Yup.string()
    .matches(/^\+?[0-9\s()-]+$/, "Це має бути номер телефону")
    .required("Це поле обов'язкове!"),
});

const ContactForm = () => {
  const initialValues = { name: "", number: "" };
  const dispatch = useDispatch();

  const onSubmit = (values, options) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };

    dispatch(addContact(newContact));
    options.resetForm();
  };
  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      <Form className={s.wrapper}>
        <label className={s.label}>
          <span className={s.labelName}>Name</span>
          <Field className={s.field} name="name" />
          <ErrorMessage name="name" component="p" className={s.errorMessage} />
        </label>
        <label className={s.label}>
          <span className={s.labelName}>Number</span>
          <Field className={s.field} name="number" />
          <ErrorMessage
            name="number"
            component="p"
            className={s.errorMessage}
          />
        </label>

        <button className={s.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
