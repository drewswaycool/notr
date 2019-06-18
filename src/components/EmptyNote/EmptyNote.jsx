import React from 'react'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const emptyNoteStyles = css`
  position: relative;
  top: 100px;
  left: 500px;
  height: 800px;
  width: 900px;
`

const textInput = css`
  display:block;
  font-size: 40px;
  height: 50px;
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
      <form>
        <input css={textInput} placeholder="Title" type="text" className="titleInput" />
        <input css={textInput} placeholder="Description" type="text" className="descriptionInput" />
        <textarea css={textareaStyles}></textarea>
      </form>
    </div>
  )

}