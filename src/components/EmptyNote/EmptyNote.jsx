import React from 'react'
import { Formik } from 'formik';

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const emptyNoteStyles = css`
  position: relative;
  top: 100px;
  left: 500px;
  height: 800px;
  width: 900px;
`

const titleInput = css`
  display:block;
  font-size: 40px;
  height: 50px;
  width: 500px;
  margin-top:5px;
  background: none;
  border: none;
`

const textInput = css`
  display:block;
  font-size: 20px;
  height: 30px;
  width: 500px;
  margin-top:5px;
  background: none;
  border: none;
`

const textareaStyles = css`
  display:block;
  margin-top: 10px;
  width: 500px;
  height: 500px;
  background: none;
  border: none;
  resize: none;
`


export default function EmptyNote(props) {

  return (
    <div css={emptyNoteStyles}>
      <Formik
        initialValues={{ title: '', description: '', content: '' }}
        validate={values => {
          let errors = {};
          if (!values.title) {
            errors.title = 'Required';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
            <form onSubmit={handleSubmit}>
              <input
                placeholder="Title"
                css={titleInput}
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {errors.title && touched.title && errors.title}
              <input
                placeholder="Description"
                css={textInput}
                type="text"
                name="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              {errors.description && touched.description && errors.description}
              <textarea
                css={textareaStyles}
                name="content"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
              />
              <button type="submit" disabled={isSubmitting}>
                Submit
          </button>
            </form>
          )}
      </Formik>
    </div>
  )

}