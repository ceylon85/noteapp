import React, { useState } from 'react';
import './App.css';
import { Note } from './models/note.model';
import Header from './components/Header';
import NoteList from './components/NoteList';
import CreateNotes from './components/CreateNotes';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  const [notes, setNotes] = useState<Note[]>([{
    id: (new Date()).toString(),
    title: 'Meeting', 
    text: 'Shedule Meeting',
    color: '#dfdfdf',
    date: (new Date()).toString(),
  }])

  return (
    <>
      <Header />
      <Container className="mt-5">
        <Row>
          <Col>
            <NoteList notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
        <Row>
          <Col>
            <CreateNotes notes={notes} setNotes={setNotes} />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
