import React from 'react'
import SideBarNote from '../SideBarNote/SideBarNote'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const sideBarStyles = css`
  width: 300px;
  background: #fff;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  border-right: 1px solid #ccc;
`

export default function SideBar(props) {

  return (
      <div css={sideBarStyles}>
        <div className="header">
          <h1>notr</h1>
        </div>
        <div className="notesContainer">
          <SideBarNote title="Note #1" desc="This is an example note.." />
          <SideBarNote title="Note #2" desc="Another note.." />
        </div>
      </div>
  )

}