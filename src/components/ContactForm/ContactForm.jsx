import React, { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Name cannot be more than 50 characters')
    .matches(/^[A-Za-z\s]+$/, 'Name cannot contain symbols or digits')
    .required('Required'),
    
  number: Yup.string()
    .min(3, 'Too short')
    .max(50, 'Number cannot be more than 50 digits')
    .matches(/^[0-9]+$/, 'Phone number must contain only digits')
    .required('Required')
});

const ContactForm = ({ onAdd }) => {
  const nameId = useId();
  const numberId = useId();
    
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
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor={nameId} className={css.label}>Name</label>
          <Field
            id={nameId}
            name="name"
            type="text"
            className={css.input}
            placeholder="Name"
          />
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>

        <div className={css.formGroup}>
          <label htmlFor={numberId} className={css.label}>Number</label>
          <Field
            id={numberId}
            name="number"
            type="text"
            className={css.input}
            placeholder="Number"
          />
          <ErrorMessage name="number" component="div" className={css.error} />
        </div>

        <button type="submit" className={css.addContactBtn}>Add contact</button>
      </Form>
    </Formik>
  );
};


export default ContactForm;