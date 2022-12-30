import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div className="form-box">
    <div className="form">
    <h2 className="heading">Login/Signup</h2>
    <div className="login-signup">
      <form action="">
        <div className="input">
            <div className="element">
              <label>Name</label>
              <input className="input" type="text" placeholder="Enter your Name"></input>
            </div>
            
            <br/>
            <div className="element">
            <label>Email</label>
            <input className="input" type="email" placeholder="Enter your email address"></input>
            </div>
            
            <br/>
            <div className="element">
            <label>Password</label>
            <input className="input" type="password" placeholder="Enter Password"></input>
            </div>
            
            <br/>
            <div className="element">
            <label>Valid Identity Proof</label>
            <input className="fileupload" type="file" id="myFile" name="filename"/>
            </div>
            
        </div>
        <div className="btn">
          <input className="button" type="submit" id="login" value="Login"></input>
          <input className="button" type="submit" id="signup" value="Sign Up"></input>
        </div>
      </form>
    </div>
  </div>
  </div>,
  document.getElementById("root")
);