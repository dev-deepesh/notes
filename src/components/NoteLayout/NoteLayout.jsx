import React from 'react'
import NoteList from '../NoteList/NoteList'
import NoteEditor from '../NoteEditor/NoteEditor'

function NoteLayout() {
  return (
    <div>
      <NoteList/>
      <NoteEditor/>
    </div>
  )
}

export default NoteLayout