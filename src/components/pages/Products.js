import React, { useState, useEffect } from 'react';
import '../../App.css';
//import { Button } from '../Button'
//import { useNavigate } from "react-router-dom";
import { db } from "../../firebase/firebase-config";
import {
  collection,
  addDoc,
  doc,
  setDoc, 
  getDocs,
} from "firebase/firestore";
import { useUserAuth } from "../../context/UserAuthContext";
import data from '../../servicioJSON/data';
import MainProducts from './MainProdutcs';

import { toast } from 'react-toastify';

export default function Products(props) {

  const { products } = data;

  const [Pedidos, setPedidos] = useState([]);

  const { user } = useUserAuth();


  toast.configure();

  const usersCollectionRef = collection(db, `user/${user.uid}/cart`);

  useEffect(() => {
    const getPedidos = async () => {
      const data = await getDocs(usersCollectionRef);
      setPedidos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPedidos();
  });


  const addCart = async (product) => {

    console.log(product.id, product.nombre);

    try {

      const docRef = await doc(db, `user/${user.uid}`)

      const shoppingData = collection(db, `user/${user.uid}/cart`);


      if (user) {

        setDoc(docRef, { uid: user.uid, nombre: user.displayName, email: user.email, phoneNumber: user.phoneNumber });

        await addDoc(shoppingData, {codigo: product.id, producto: product.nombre, precio: product.precio,
        cantidad: product.cantidad, cart: product.cart });

       
        console.log("fue añadido");

        Pedidos.forEach(pedido =>{
          if(product.id === pedido.codigo){
            return product.cart = true;
          }else{
            return product.cart = false;
          }
        })
          
        
        
        

        toast.success(` ${product.nombre} Fue Añadido a tu Carrito de Pedidos! `, {
          position: toast.POSITION.BUTTON_RIGHT
        });

      }
    } catch (error) {
      return console.log("sign in fist");
    }


  };
  return (
    <div className=' justify-center items-center min-h-screen '>

      <MainProducts key={products.id} products={products} addCart={addCart} />

    </div>

  );
}
