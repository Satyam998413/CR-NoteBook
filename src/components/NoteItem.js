
import React,{useContext} from 'react';
import noteContext from '../context/notes/noteContext'

const NoteItem = (props) => {
    const context = useContext(noteContext);
  const {deleteNote}=context;
    const { note,updateNote } = props;
    return (
        <div className='col-md-3' >
            <div className="card m-3">
                <div className="card-body my-3">
                    <div className='d-flex align-item-center'>
                        <h5 className="card-title"> {note.title}</h5>
                        <i className="fa-solid fa-trash-can m-2" onClick={()=>{deleteNote(note._id);props.showAlert("Sucessfully Deleted Your's Note!","success");}}></i>
                        <i className="far fa-edit m-2" onClick={()=>{updateNote(note);props.showAlert("Sucessfully Updated Your's Note!","success");}}></i>
                    </div>
                    <p className="card-text">{note.description}</p>
                </div>
            </div>
        </div>
    )
}

export default NoteItem