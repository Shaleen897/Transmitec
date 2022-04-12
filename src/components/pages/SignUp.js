import React, { useState } from 'react';
import logo from "../../images/logo.jpg";
import { NavLink } from "react-router-dom";
import './styles/signUp.css';
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useUserAuth } from "../../context/UserAuthContext";
import { db } from "../../firebase/firebase-config";
import {
  collection,
  addDoc
} from "firebase/firestore";

export default function SignUp() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  

  const [email, setEmail] = useState("");
  const [displayName, setUsername] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const usersCollectionRef = collection(db, "User");

  const createContact = async () => {
    handleClick();
    let date = new Date();
    await addDoc(usersCollectionRef, { displayName: displayName, email: email, password: password, date: date });
    
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password, displayName);
      navigate("/sign-in");
    } catch (err) {
      setError(err.message);
    }

    createContact();

  }



  return (
    <div className='form-container-up'>
      <div className='form-content-left-up'>
        <img className='form-img-up' src={logo} alt='TransmitecLogo' />
      </div>
      <div className='form-content-right-up'>

        {error && <Alert variant="danger">{error}</Alert>}

        <form className='form-up' onSubmit={handleSubmit}>
          <h1>
            Empieza con nosotros hoy! Create una cuenta completando la informacion debajo.
          </h1>
          <div className='form-inputs-up'>
            <label className='form-label-up'>Username</label>
            <input onChange={(e) => setUsername(e.target.value)} required
              className='form-input-up'
              type='text'
              name='sername'
              placeholder='Enter your Username'
            />


          </div>
          <div className='form-inputs-up'>
            <label className='form-label-up'>Email</label>
            <input onChange={(e) => setEmail(e.target.value)} required
              className='form-input-up'
              type='email'
              name='email'
              placeholder='Enter your email'
            />

          </div>
          <div className='form-inputs-up'>
            <label className='form-label'>Password</label>
            <input onChange={(e) => setPassword(e.target.value)} required
              className='form-input-up'
              type='password'
              name='password'
              placeholder='Enter your password'
            />
          </div>

          <input className='form-input-btn-up' type='submit' value="Sign Up" />

          <span className='form-input-login-up'>
            Already have an account?

            <NavLink
              to="/sign-in"
              className="nav-links-up"
              onClick={handleClick}
            >
              Log In
            </NavLink>
          </span>
        </form>
      </div>
    </div>
  );

}


