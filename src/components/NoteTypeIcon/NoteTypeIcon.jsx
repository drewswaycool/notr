import React from 'react'

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

const noteTypeIconStyles = css`
  width: 35px;
  height: 35px;
  display: inline-block;
  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwb2x5bGluZSBmaWxsPSJub25lIiBwb2ludHM9IiAgIDY0OSwxMzcuOTk5IDY3NSwxMzcuOTk5IDY3NSwxNTUuOTk5IDY2MSwxNTUuOTk5ICAiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPjxwb2x5bGluZSBmaWxsPSJub25lIiBwb2ludHM9IiAgIDY1MywxNTUuOTk5IDY0OSwxNTUuOTk5IDY0OSwxNDEuOTk5ICAiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPjxwb2x5bGluZSBmaWxsPSJub25lIiBwb2ludHM9IiAgIDY2MSwxNTYgNjUzLDE2MiA2NTMsMTU2ICAiIHN0cm9rZT0iI0ZGRkZGRiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48Zz48Zz48cGF0aCBkPSJNMjUsMzBIM2MtMC41NTIsMC0xLTAuNDQ3LTEtMVYxMWMwLTAuNTUyLDAuNDQ4LTEsMS0xczEsMC40NDgsMSwxdjE3aDIwVjhIM0MyLjQ0OCw4LDIsNy41NTIsMiw3czAuNDQ4LTEsMS0xaDIyICAgIGMwLjU1MywwLDEsMC40NDgsMSwxdjIyQzI2LDI5LjU1MywyNS41NTMsMzAsMjUsMzB6Ii8+PC9nPjxnPjxwYXRoIGQ9Ik0yOSwyMmMtMC41NTMsMC0xLTAuNDQ3LTEtMVY0SDExYy0wLjU1MiwwLTEtMC40NDgtMS0xczAuNDQ4LTEsMS0xaDE4YzAuNTUzLDAsMSwwLjQ0OCwxLDF2MThDMzAsMjEuNTUzLDI5LjU1MywyMiwyOSwyMiAgICB6Ii8+PC9nPjwvZz48L3N2Zz4=');
  background-position-y: 5px;
  background-repeat: no-repeat;
`

export default function NoteTypeIcon(props) {

  return (
    <div css={noteTypeIconStyles}></div>
  )

}