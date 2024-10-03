import React from 'react';
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import DisplayMovieByTitle from './DisplayMovieByTitle';

function TitleSearch({setMovieID}) {
  const [titleResults, setTitleResults] = useState(null);

  const initialValues = {
    title: ""
  };
  const validationSchema = Yup.object().shape({
    title: Yup.string()
      .max(100)
      .required()
  });
  async function onSubmit(data){
    try{
      const response = await axios.get(`${process.env.REACT_APP_title_search_endpoint}?title=${data['title']}`)
      setTitleResults(response.data);
    } catch (error) {
      alert("There was an error fetching the data!", error);
    }
  }

  return (
    <div className="title-search">
      <div className="input-section">
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          validateOnChange={true}
        >
          <Form className="form-container">
            <div className="field-container">
              <label htmlFor="inputTitle">Title</label>
              <Field autoComplete="off" id="inputTitle" name="title" />
              <ErrorMessage 
                id="title-error"
                name="title"
                component="span"
                style={{ color: "red", position: "absolute" }}
              />
            </div>
            <button type="submit">Search</button>
          </Form>
        </Formik>
      </div>
      <div className="results-section">
        {titleResults && <DisplayMovieByTitle movies={titleResults} setMovieID={setMovieID}/>}
      </div>
    </div>
  )
}

export default TitleSearch