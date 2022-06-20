


import React from 'react'

export default function 
Home() {
  return (
    <div>
      <h1>Add a Notes</h1>
      <form className="">
        <div className="mb-3 m-2">
          <label for="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3 m-2">
          <label for="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3 m-2 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
          <label className="form-check-label" for="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary m-2">Submit</button>
      </form>
      <div class="container my-3"></div>
      <h1>Your's Notes Here</h1>
    </div>
  )
}
