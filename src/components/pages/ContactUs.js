import React, { useState } from 'react';
import './styles/Contact.css';

import { NavLink } from "react-router-dom";

import { db } from "../../firebase/firebase-config";
import {
  collection,
  addDoc,
} from "firebase/firestore";

import {toast} from 'react-toastify';

/*import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";*/

import { useNavigate } from "react-router-dom";

export default function ContactUs() {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  toast.configure();

  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newMensaje, setNewMensaje] = useState("");

  const usersContact = collection(db, "Contacts");

  const createContact = async () => {
    handleClick();

    if(newName !== "" && newEmail !== "" && newMensaje !== ""){
    let date = new Date();
    await addDoc(usersContact, { name: newName, email: newEmail, mensaje: newMensaje, date: date });
    toast.success(` ${newName} Tu Informacion fue Enviada! `, {
      position: toast.POSITION.TOP_RIGHT
    });
  }else{
    toast.error(`A segura completar toda la informacion requerida`, {
      position: toast.POSITION.TOP_RIGHT
    });
  }
  };



  return (
    <div className=' justify-center items-center min-h-screen'>
      <div className="lg:text-center mt-10">
          <div className="mt-2 text-3xl leading-8 font-extrabold tracking-tightx text-black sm:text-4xl">
            <h1>Contact Us</h1>
          </div>
        </div>
      <div className="containe">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="fas fa-map-marker-alt"></i>
              <div className="topic">Location</div>
              <div className="text-one">Surkhet, NP12</div>
              <div className="text-two">Birendranagar 06</div>
            </div>
            <div className="phone details">
              <i className="fas fa-phone-alt"></i>
              <div className="topic">Tel:</div>
              <div className="text-one">+0098 9893 5647</div>
              <div className="text-two">+0096 3434 5678</div>
            </div>
            <div className="email details">
              <i className="fas fa-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">codinglab@gmail.com</div>
              <div className="text-two">info.codinglab@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Envianos un mensaje</div>
            <p>Si tienes algun problema con alguna documentacion o algun proceso, Puedes enviarnos un mensaje aqui. Sera un placer ayudarle.</p>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Entra tu nombre" required
                  onChange={(e) => {
                    setNewName(e.target.value);
                  }} />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Entra tu email" required
                  onChange={(e) => {
                    setNewEmail(e.target.value);
                  }} />
              </div>
              <div className="input-box message-box">
                <textarea rows="" cols="" placeholder="Mensaje" required
                  onChange={(e) => {
                    setNewMensaje(e.target.value);
                  }}></textarea>
              </div>
              <div className="button">
                <button
                  className="btncontact"
                  onClick={createContact}
                >Enviar Ahora
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );


}
