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

return (
  <NoteContext.Provider value={{}}>
    {props.children}
  </NoteContext.Provider>
)
}
export default NoteState;