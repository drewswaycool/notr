import React from 'react'
import Note from '../Note/Note'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import CreateButton from '../CreateButton/CreateButton';

const noteBookContainerStyles = css`
  width: 100%;
  height: 100vh;
`

const noteBookControls = css`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 250px;
  height: 150px;
`
export default function NoteBook(props) {

  return (
    <div css={noteBookContainerStyles}>
      <Note title="Note #1" description="This is an example note.." content="A note will have a title, a description and content." />
      <div css={noteBookControls}>
        <CreateButton />
      </div>
    </div>
  )

}