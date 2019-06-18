import React from 'react';
import './App.css';
import SideBar from './components/SideBar/SideBar'
import NoteBook from './components/NoteBook/NoteBook'

function App() {
  return (
    <div className="App">
      <SideBar />
      <NoteBook />
    </div>
  );
}

export default App;
