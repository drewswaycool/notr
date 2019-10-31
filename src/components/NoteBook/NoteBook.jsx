import React from 'react'
import EmptyNote from '../EmptyNote/EmptyNote'
import Note from '../Note/Note'
import CreateButton from '../CreateButton/CreateButton';
import SaveButton from '../SaveButton/SaveButton';

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

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

const noPage = css`
  color: #cccccc;
  font-size: 1em;
  margin-left: 300px;
`
export default function NoteBook(props) {

  return (
    <div css={noteBookContainerStyles}>
      <div css={noPage}>
        <h3>Select or Create a Note</h3>
      </div>
      <EmptyNote />
      {/* <Note title="Note #1" description="This is an example note.." content="A note will have a title, a description and content." /> */}
      <div css={noteBookControls}>
        {/* <SaveButton /> */}
        <CreateButton />
      </div>
    </div>
  )

}