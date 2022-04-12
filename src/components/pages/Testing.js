import React, { useState, useEffect } from 'react';
import './styles/Contact.css';

import { db } from "../../firebase/firebase-config";
import {
  collection,
  getDocs,
} from "firebase/firestore";

import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";

/*import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";*/

export default function Testing() {

  const [Contacts, setContacts] = useState([]);
  const usersCollectionRef = collection(db, "Contacts");


  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();


  useEffect(() => {
    const getContacts = async () => {
      const data = await getDocs(usersCollectionRef);
      setContacts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getContacts();
  });

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };



  return (

    <div className='container'>
      <div className="">
        Hello Welcome <br />
        {user && user.email}
        <br/>
        {user.displayName}
      </div>
      <div className="">
        <button className='btn'  onClick={handleLogout}>
          Log out
        </button>
      </div>

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Mensaje
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Date
                    </th>

                  </tr>
                </thead>

                {Contacts.map((person) => (
                  <tbody className="bg-white divide-y divide-gray-200" key={person.id}>
                    <tr key={person.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person.name}</div>
                          <div className="text-sm text-gray-500">{person.email}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{person.id}</div>

                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{person.mensaje}</div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500"></div>
                      </td>

                    </tr>
                  </tbody>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );


}
