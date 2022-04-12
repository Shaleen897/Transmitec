import React from 'react';
import '../../App.css';
import Homeb from './Homeb';
//icons
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from '@heroicons/react/solid';

import RD from "../../images/RD.jpg";
import Support from './Support';
import AllInOne from './AllInOne';
import Pricing from './Pricing';

export default function Home() {
  return (
    <>
      <div name='home' className='w-full h-screen bg-zinc-200 flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                <p className='text-2xl'>Welcome to</p>
                <h1 className='py-3 text-5xl md:text-7xl text-indigo-600 font-bold'>Transmitec</h1>
                <p className='text-2xl'>Unique Document from your Dominican Government.</p>
                <button className='py-3 px-6 sm:w-[60%] my-4 btn hover:text-indigo-600'>Get Started</button>
            </div>
            <div>
                <img className='w-full' src={RD} alt="/" />
            </div>
            <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                <p>Data Services</p>
                <div className='flex justify-between flex-wrap px-4'>
                    <p className='flex px-4 py-2 text-slate-500'><CloudUploadIcon className='h-6 text-indigo-600' /> Good Security info</p>
                    <p className='flex px-4 py-2 text-slate-500'><DatabaseIcon className='h-6 text-indigo-600' /> Likeable Design</p>
                    <p className='flex px-4 py-2 text-slate-500'><ServerIcon className='h-6 text-indigo-600' /> Cloud Data</p>
                    <p className='flex px-4 py-2 text-slate-500'><PaperAirplaneIcon className='h-6 text-indigo-600' /> Good communication</p>
                </div>
            </div>
        </div>
    </div>
    <Homeb/>
    <Support/>
    <AllInOne/>
    <Pricing/>
    </>
  );
}
