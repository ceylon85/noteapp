import React, { useState } from 'react';
import './App.css';
import { Note } from './models/note.model'

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date).toString(),
    title: 'Meeting',
    text: 'Shedule Meeting',
    color: '#dfdfdf',
    date: (new Date).toString(),
  }])
  
  return (
    <div className="App">
      App
    </div>
  );
}

export default App;
