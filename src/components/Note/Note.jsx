import React from 'react'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const noteStyles = css`
  text-align: left;
  position: relative;
  top: 100px;
  left: 500px;
  height: 800px;
  width: 900px;
`

const noteTitle = css`
  margin:0;
  padding:0;
`

const noteContent = css`
  margin-top:50px;
`

export default function DeleteButton(props) {

  return (
    <div css={noteStyles}>
      <h2 css={noteTitle}>{props.title}</h2>
      <p>{props.description}</p>
      <div css={noteContent}>
        <p>{props.content}</p>
      </div>
    </div>
  )

}