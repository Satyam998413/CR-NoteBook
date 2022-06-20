
import React,{useContext} from 'react';
import noteContext from '../context/notes/noteContext';
import AddNote from './AddNote';
import NoteItem from './NoteItem';

const Notes = () => {
    const context = useContext(noteContext);
  const {notes}=context;
  return (
    <>
    <AddNote/>
<div className="container my-3 ">
      <h1>Your's Notes Here</h1>
      {notes.map((note)=>{
        return <NoteItem note={note}/>
      })}
    </div>
    </>
  )
}

export default Notes;