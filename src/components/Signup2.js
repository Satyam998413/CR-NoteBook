import { useState } from "react";
// import { unstable_HistoryRouter } from "react-router-dom";
import React from 'react'

const Signup2 = (props) => {
    const [credential, setCredential] = useState({name:"", email: "", password: "",cpassword:"" });
    // let history = unstable_HistoryRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const {name,email,password}=credential;
        const response = await fetch("http://localhost:5000/api/auth/signup/", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify({ name,email,password})
        });
        const json = await response.json();
        console.log(json);
        if(json.sucess){
            //redirect
            // save authtoken
            localStorage.setItem('token', json.token);
            props.showAlert("Sucessfully Created Accounts!","success");
            // history.push("/");
        }
        else{
          props.showAlert("Invalid Credentail!","danger");
        }
    }
        

    const onChange = (e) => {
        setCredential({ ...credential, [e.target.name]: e.target.value })
    }
  return (
    <div className="container my-3 py-3">
    <h2>Signup to Continue to CR-Notebook</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" name="name" value={credential.name} id="name" onChange={onChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" value={credential.email} name='email' aria-describedby="emailHelp" onChange={onChange} />
                    <div id="email" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" name="password" value={credential.password} id="password" onChange={onChange} required minLength={5} />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm-Password</label>
                    <input type="password" className="form-control" name="cpassword" value={credential.cpassword} id="cpassword" onChange={onChange} minLength={5} required/>
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form> 
     
    </div>
  )
}

export default Signup2