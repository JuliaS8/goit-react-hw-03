import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Name cannot be more than 50 characters')
    .matches(/^[A-Za-z\s]+$/, 'Name cannot contain symbols or digits')
    .required('Required'),
    
  number: Yup.string()
    .min(3, 'Number must be at least 3 characters')
    .max(50, 'Number cannot be more than 50 characters')
    .matches(/^[0-9]+$/, 'Phone number must contain only digits')
    .required('Required')
});

const ContactForm = ({ onAdd }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAdd({
          id: Date.now(),
          name: values.name,
          number: values.number
        });
        resetForm();
      }}
    >
      {() => (
        <Form className={css.form}>
          <div className={css.formGroup}>
            <label htmlFor="name" className={css.label}>Name</label>
            <Field
              id="name"
              className={css.input}
              type="text"
              name="name"
              placeholder="Name"
            />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>
          <div className={css.formGroup}>
            <label htmlFor="number" className={css.label}>Number</label>
            <Field
              id="number"
              className={css.input}
              type="text"
              name="number"
              placeholder="Number"
            />
            <ErrorMessage name="number" component="div" className={css.error} />
          </div>
          <button type="submit" className={css.addContactBtn}>Add contact</button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;