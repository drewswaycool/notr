import React from 'react'
import NoteTypeIcon from '../NoteTypeIcon/NoteTypeIcon'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const sideBarNoteStyles = css`
  width: 300px;
  text-align: left;
  padding: 20px;
  height: 20px;
`
const noteTitle = css`
  padding: 0;
  margin: 0;
`
const noteText = css`
  margin-left: 10px;
  display:inline-block;
`

export default function SideBarNote(props) {
  const { title, desc, date } = props
  return (
    <div css={sideBarNoteStyles}>
      <NoteTypeIcon />
      <div css={noteText}>
        <h3 css={noteTitle}>{title}</h3>
        <span>{desc}</span>
        <span>{date}</span>
      </div>
    </div>
  )

}