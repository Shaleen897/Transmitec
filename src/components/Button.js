import React, { Fragment, useState } from 'react';
import './Button.css';
import { Menu, Transition } from '@headlessui/react';
import { useUserAuth } from "../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import { Dialog} from '@headlessui/react';
import GoogleButton from "react-google-button";

export function Button() {

  //auth
  const { googleSignIn } = useUserAuth();
  const { logOut, user } = useUserAuth();

  const navigate = useNavigate();


  const userNavigation = [
    { name: 'Your Profile', href: 'profile' },
    { name: 'Settings', href: 'test' },
  ]

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
    //  navigate("/profile");
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };


  //Modal
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }




  return (<>
    {user ? <Menu as="div" className="ml-3 relative button-Profile">
      <div>
        <Menu.Button className=" max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <span className="sr-only">Open user menu</span>
          <img className="h-8 w-8 rounded-full" src={user.photoURL} alt="" />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          {userNavigation.map((item) => (
            <Menu.Item key={item.name}>
              {({ active }) => (
                <a
                  href={item.href}
                  className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                  )}
                >
                  {item.name}
                </a>

              )}
            </Menu.Item>

          ))}
          <Menu.Item>
          {({ active }) => (
            <a className={classNames(
              active ? 'bg-gray-100' : '',
              'block px-4 py-2 text-sm text-gray-700'
            )} onClick={handleLogout}
            href={'/'}>
              Sign out
            </a>
          )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>  : <>
    <div className="">
    <button
      type="button"
      onClick={openModal}
      className="btn"
    >
      Sign In
    </button>
  </div>

  <Transition appear show={isOpen} as={Fragment}>
    <Dialog
      as="div"
      className="fixed inset-0 z-10 overflow-y-auto"
      onClose={closeModal}
    >
      <div className="min-h-screen px-4 text-center">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0" />
        </Transition.Child>

        {/* This element is to trick the browser into centering the modal contents. */}
        <span
          className="inline-block h-screen align-middle"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              Sign In With your Google Account
            </Dialog.Title>
            <div className="mt-2">
              
                <GoogleButton
                  className="googlebtn"
                  type="dark"
                  onClick={handleGoogleSignIn}
                />
            </div>

            <div className="mt-4">
              <button
                type="button"
                className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
  </>
    }
  </>




  );
}


/*<GoogleButton
      className="googlebtn"
      type="dark"
      onClick={handleGoogleSignIn}
    />*/