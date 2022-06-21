import { useState } from "react";
// import { unstable_HistoryRouter } from "react-router-dom";



const Login = (props) => {
    const [credential, setCredential] = useState({email:"",password:""});
// let history=unstable_HistoryRouter();

    const handleSubmit=async (e)=>{
        e.preventDefault();
        
        const response = await fetch("http://localhost:5000/api/auth/login/", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
             
            },
            body: JSON.stringify({email:credential.email,password:credential.password})
          });
          const json=await response.json();
          console.log(json);
          if(json.sucess){
            //redirect
            // save authtoken
            localStorage.setItem('token',json.token);
            props.showAlert("Sucessfully Login!","success");
            // history.push("/");

          }
          else{
            props.showAlert("Invalid Credentail!","danger");
          }
    }

    const onChange=(e)=>{
        setCredential({...credential,[e.target.name]:e.target.value})
          }
  return (
    <div className="container my-3 pt-3">
    <h2>Login to Continue to CR-Notebook</h2>
    <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" value={credential.email} name='email' aria-describedby="emailHelp" onChange={onChange}/>
    <div id="email" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" name="password" value={credential.password} id="password" onChange={onChange}/>
  </div>
  
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
</div>
  )
}

export default Login