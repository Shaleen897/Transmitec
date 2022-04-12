import React, { useState, useEffect } from 'react';
import '../../App.css';
//import { Button } from '../Button'
//import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import {toast} from 'react-toastify';
import { db } from "../../firebase/firebase-config";
import {
  collection,
  getDocs
} from "firebase/firestore";

export default function Product(props) {

    const {product, addCart } = props;

    const [Pedidos, setPedidos] = useState([]);

    const { user } = useUserAuth();

  toast.configure();

   function log() {
       toast.error(`Necesitas registrarte`, {
        position: toast.POSITION.TOP_RIGHT
      });
   }




   const usersCollectionRef = collection(db, `user/${user.uid}/cart`);

   useEffect(() => {
     const getPedidos = async () => {
       const data = await getDocs(usersCollectionRef);
       setPedidos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
     };
 
     getPedidos();
   });
  

   function pbuttonPedidos() {
    Pedidos.forEach(pedido =>{
      if(product.id === pedido.codigo){
        return product.cart = true;
      }else{
        return product.cart = false;
      }
    });
   }
    
   pbuttonPedidos();

  return (
      
            <div className='p-4 pr-6 bg-white hover:bg-gray-100 border-1-8 border-trasnparent rounded-md shadow-lg space-y-2 text-center' key={product.id}>
              <h2 className='text-lg font-semibold leanding-6'>{product.nombre}</h2>
              <p className='text-gray-600'>${product.precio}</p>
              <p className='text-gray-600'>{product.descrpcion}</p>
              
               {
                  product.cart === false
                  &&
                  <button className='hover:text-indigo-600 btn bg-indigo-500'  onClick={() => addCart(product)}>
                    Add to cart
                </button>
                }
                {
                  product.cart === true
                  &&
                  <button className='hover:text-green-600 btn bg-green-500'>
                    Added
                </button>
                }
            </div>
       
  );
}

/*
{user ? <input type="submit" onClick={() => addCart(product)} className='hover:text-indigo-600 btn bg-indigo-500' value="Add Cart" /> :
              <input type="submit" onClick={log} className='hover:text-indigo-600 btn bg-indigo-500' value="Need to log" />}
*/