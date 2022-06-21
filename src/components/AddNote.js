

import React,{useContext,useState} from 'react';
import noteContext from '../context/notes/noteContext'

const AddNote = (props) => {
    
    const context = useContext(noteContext);
  const {addNote}=context;
  const [note, setNote] = useState({ title:"",description:"",tag:""});
  const handleClick=(e)=>{
    e.preventDefault();
    addNote(note.title,note.description,note.tag);
    setNote({ title:"",description:"",tag:""});
    props.showAlert("Sucessfully Added Your's Note!","success");
  }
  const onChange=(e)=>{
setNote({...note,[e.target.name]:e.target.value})
  }
  return (
    <div className='container'>
        <h1>Add a Notes</h1>
      <form className="">
        <div className="mb-3 m-2">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" value={note.title} name="title" id="title" aria-describedby="title" onChange={onChange}/>
          
        </div>
        <div className="mb-3 m-2">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" value={note.description} name='description' id="description" onChange={onChange}/>
        </div>
        <div className="mb-3 m-2">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control" value={note.tag} name='tag' id="tag" onChange={onChange}/>
        </div>
        
        <button type="submit" className="btn btn-primary m-2" onClick={handleClick}>Add Note</button>
      </form>
    </div>
  )
}

export default AddNote