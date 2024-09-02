// src/components/TaskForm.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const TaskForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '' }}
      validationSchema={Yup.object({
        name: Yup.string().required('Required'),
      })}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="name" type="text" placeholder="Task Name" />
          <ErrorMessage name="name" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Add Task
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default TaskForm;
