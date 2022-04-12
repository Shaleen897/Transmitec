import React, { useState, useEffect } from "react";
import './styles/Services.css'
import { db } from "../../firebase/firebase-config";
import {
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc
} from "firebase/firestore";

import { toast } from 'react-toastify';

//import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";

export default function Cart() {

  const [Pedidos, setPedidos] = useState([]);

  const { user } = useUserAuth();
 // const navigate = useNavigate();

  const usersCollectionRef = collection(db, `user/${user.uid}/cart`);

  useEffect(() => {
    const getPedidos = async () => {
      const data = await getDocs(usersCollectionRef);
      setPedidos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPedidos();
  });

  toast.configure();
 

  const removetocart = async (id, codigo) => {
    const userDoc = doc(db, `user/${user.uid}/cart`, id);
    await deleteDoc(userDoc);
    toast.info(`Se ELIMINO el producto con el Codigo ${codigo}`, {
      position: toast.POSITION.BUTTON_RIGHT
    });
  };
  
  
  const incrementValue = async (id, cantidad) => {
    const userDoc = doc(db, `user/${user.uid}/cart`, id);
    const newFields = { cantidad: cantidad + 1 };
    await updateDoc(userDoc, newFields);
  };

  const decreaseValue = async (id, cantidad) => {
    const userDoc = doc(db, `user/${user.uid}/cart`, id);
    const newFields = { cantidad: cantidad - 1 };
    await updateDoc(userDoc, newFields);
  };

  function total() {
    let x = 0
    Pedidos.map((i) => {
      x += i.precio * i.cantidad
      return x
    })
    return x;
  }
    

  return (
    <div className='justify-center items-center min-h-screen'>
      <div className="containerShop">
        <div className="lg:text-center">
          <div className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <h1>Shopping Cart</h1>
          </div>

          <div className="mt-5 text-3xl leading-8 font-extrabold tracking-tight text-red-600 sm:text-2xl">
            {Pedidos.length === 0 && <h4>El Carrito esta Bacio</h4>}
          </div>
        </div>

        <div className="flex flex-col mt-8 ">
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
                        Precio
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Codigo
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Cantidad
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Re-mover
                      </th>

                    </tr>
                  </thead>

                  {user ? Pedidos.map((pedidos) => (
                  <tbody className="bg-white divide-y divide-gray-200" key={pedidos.id}>
              
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{pedidos.producto}</div>
                          <div className="text-sm text-gray-500"></div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{pedidos.precio}</div>

                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{pedidos.codigo}</div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500"><strong className="mr-5">{pedidos.cantidad}</strong> 
                        <button className="btn bg-indigo-600 hover:text-indigo-600"
                         onClick={() => {
                          incrementValue(pedidos.id ,pedidos.cantidad);
                        }}
                        >+</button> 
                         {pedidos.cantidad >= 2 ? <button className="btn bg-red-600 hover:text-red-600"
                        onClick={() => {
                          decreaseValue(pedidos.id ,pedidos.cantidad);
                        }}
                        >-</button> : <div></div>}
                          </div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">
                          <button className="btn bg-red-600 hover:text-red-600"
                          onClick={() => {
                            removetocart(pedidos.id, pedidos.codigo);
                          }}
                          >Eliminar</button></div>
                      </td>

                    </tr>
                  </tbody>
                  )) : <h1>Necesitas hacer log in</h1>}
                </table>
                <div className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900"><strong>Total: {total()}</strong>$ </div>
                      </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}


/*

<div className="flex flex-col mt-8">
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


                  <tbody className="bg-white divide-y divide-gray-200" >
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900"></div>
                          <div className="text-sm text-gray-500"></div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900"></div>

                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500"></div>
                      </td>

                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500"></div>
                      </td>

                    </tr>
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>

*/