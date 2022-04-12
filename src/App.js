import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import './App.css';
import Home from './components/pages/Home';
import { Routes, Route} from "react-router-dom";
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import ContactUs from './components/pages/ContactUs';
import SignUp from './components/pages/SignUp';
import Marketing from './components/pages/Marketing';
import Consulting from './components/pages/Consulting';
import SignIn from './components/pages/SignIn';
import Test from './components/pages/Testing';
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedRoute from "./ProtectedRoute";
import Profile from './components/pages/Profile';
import Cart from './components/pages/Cart';
import Cart2 from './components/pages/Cart2';

// toast notification
 import 'react-toastify/dist/ReactToastify.css';
 import {toast} from 'react-toastify';

//componentes
//import Home from "./componentes/Home";
//import Login from "./componentes/Login";
//import Signup from "./componentes/Signup";

function App() {

  toast.configure();
/*
  function log() {
    toast.error(`Log In Fist`, {
      position: toast.POSITION.TOP_RIGHT
    });
  }

 */
  return (

    <UserAuthContextProvider>

       <Navbar />
       
      <Routes>
        <Route
          path="/test"
          element={
            <ProtectedRoute>
              <Test />
            </ProtectedRoute>
          }
        />

        <Route path='/profile' element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
        />

        <Route path='/cart' element={
        <ProtectedRoute>
            <Cart/>
          </ProtectedRoute>}/>
          
         
        
          <Route path='/products' element={<ProtectedRoute>
            <Products />
          </ProtectedRoute>}/>
        

        <Route path='/' exact element={<Home />} />
        <Route path='/services' element={<Services />} />
        
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/marketing' element={<Marketing />} />
        <Route path='/consulting' element={<Consulting />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/profile' element={<Profile />} />
        
      </Routes>

      <Footer />
    </UserAuthContextProvider>
  );
}

export default App;

