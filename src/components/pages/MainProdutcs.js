import React from 'react';
import '../../App.css';
//import { Button } from '../Button'
//import { useNavigate } from "react-router-dom";
import Servicios from '../../servicioJSON/data';
import { db } from "../../firebase/firebase-config";
import {
  collection,
  addDoc,
  doc,
  setDoc
} from "firebase/firestore";
import { useUserAuth } from "../../context/UserAuthContext";
import Product from './Product';

export default function MainProducts(props) {



  const {products, addCart } = props;

  const { user } = useUserAuth();

 
  return (
    <div className=''>
      <div className="text-center mt-10">
        <div className="mt-2 text-3xl leading-8 font-extrabold tracking-tightx text-black sm:text-4xl">
          <h1>Choose your documents</h1>
        </div>
      </div>
      <div className="flex-1 max-w-5x1 p-16">
        <div className='grid lg:grid-cols-3 grid-rows gap-4 grid-flow-row-dense '>

          {products.map((product) => (
            <Product key={product.id} product={product} addCart={addCart} />
          ))}
        </div>

      </div>

    </div>
  );
}