
import { useState } from "react";
import axios from 'axios';



const Register = () => {

  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => setUserName(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: username,
      password:password
    };
    axios.post("http://localhost:4000/register", userData).then((response) => {
      console.log(response.status);
      console.log(response.data.token);
    });
  };


  return (
    <div className="modal fade" id="register" tabIndex="-1" aria-labelledby="register" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered  modal-sd">
        <div className="modal-content">
          <div className="container p-5">
            <div className="row text-center">
              <p className="login-title">REGISTER</p>
              <p className="text-start create"> Already Register? <span className="forgot-password" data-bs-dismiss="modal" data-bs-toggle="modal" data-bs-target="#login">Sign In</span></p>
            </div>
            <div className="row">
              <div className="input registerForm">
                <input type="text" name="username" className="form-control bg-input" placeholder="Email id.." onChange={handleEmail} value={username} />
              </div>
            </div>
            <div className="row">
              <div className="input registerForm">
                <input type="password" name="password" className="form-control bg-input" placeholder="Password" onChange={handlePassword} value={password} />
              </div>
            </div>
            <div className="row login">
              <button type="submit" className="btn deg_btn" data-bs-dismiss="modal" onClick={handleSubmit}>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
