import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SearchBox = ({ onSearch }) => {
  const validationSchema = Yup.object({
    searchTerm: Yup.string()
      .required('Search term is required')
      .min(3, 'Search term must be at least 3 characters')
      .max(50, 'Search term must be at most 50 characters')
  });

  return (
    <Formik
      initialValues={{ searchTerm: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSearch(values.searchTerm);
      }}
    >
      {() => (
        <Form>
          <Field
            type="text"
            name="searchTerm"
            placeholder="Search contacts..."
            onChange={(event) => onSearch(event.target.value)}
          />
          <ErrorMessage name="searchTerm" component="div" style={{ color: 'red' }} />
        </Form>
      )}
    </Formik>
  );
};

export default SearchBox
