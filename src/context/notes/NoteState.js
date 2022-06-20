import NoteContext from "./noteContext";

import { useState } from "react";


const NoteState = (props) => {
  // only understand
// const s1={
//     "name":"Satyam",
//     "class":"7th"
// }
// const [state, setstate] = useState(s1);
// const update=()=>{
//     setTimeout(() => {
//         setstate({
//             "name":"lart",
//             "class":"12th"
//         })
//     }, 2000);
// }

// After practice note fetching as example
const notesInitial=[
  {
    "_id": "62aff20c81883d63c8bdf6fa",
    "user": "62aff1aa81883d63c8bdf6e1",
    "title": "Satyam Barangrwddal",
    "description": "satyamb  arrggfdranwx   alme998413@gmail.com",
    "tag": "satyam@regr123",
    "date": "2022-06-20T04:05:32.683Z",
    "__v": 0
  },
  {
    "_id": "62aff2ae81883d63c8bdf735",
    "user": "62aff1aa81883d63c8bdf6e1",
    "title": "Satyagyjhm Barangrwddal",
    "description": "satyihjyamb  arrggfdranwx   alme998413@gmail.com",
    "tag": "satyahhkm@regr123",
    "date": "2022-06-20T04:08:14.894Z",
    "__v": 0
  },
  {
    "_id": "62aff529918380db75e28102",
    "user": "62aff1aa81883d63c8bdf6e1",
    "title": "Satyceragyjhm Barangrwddal",
    "description": "satjyamb  arrggfdranwx   alme998413@gmail.com",
    "tag": "satyahhkegr123",
    "date": "2022-06-20T04:18:49.144Z",
    "__v": 0
  }
]
const [notes, setNotes] = useState(notesInitial);
return (
  <NoteContext.Provider value={{notes,setNotes}}>
    {props.children}
  </NoteContext.Provider>
)
}
export default NoteState;