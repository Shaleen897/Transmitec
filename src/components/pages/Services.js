import React from 'react';
import './styles/Services.css';
import services from '../../servicioJSON/servicedata.json';


export default function Services() {

  return (

    <div className='justify-center items-center min-h-screen'>
      <div className="text-center mt-10">
        <div className="mt-2 text-3xl leading-8 font-extrabold tracking-tightx text-black sm:text-4xl">
          <h1>Servicios</h1>
        </div>
      </div>

      <div className="flex-1 max-w-5x1 p-16">
        <div className='grid lg:grid-cols-3 grid-rows gap-4 grid-flow-row-dense '>
        {services.map((servi) => (
        <div key={servi.id} className='card-serv p-4 pr-6 bg-white hover:bg-gray-100 border-1-8 border-trasnparent rounded-md shadow-lg space-y-2 text-center'>
              
              <div className="icon-wrapper-serv">
                <i className={servi.iconClass}></i>
              </div>
              <h3 className='text3-serv'>{servi.title}</h3>
              <p className='text-serv'>
                {servi.descrpcion}
              </p>
              <br/>
            </div>

            ))}
            
          </div>
          </div>
    </div>


  )
}


/*
<section className='section-serv'>
        <div className="row-serv">
          <h2 className="headtext-serv">Our Services</h2>
        </div>
        <div className="row-serv">
          <div className="column-serv">
            <div className="card-serv">
              <div className="icon-wrapper-serv">
                <i className="fas fa-hammer"></i>
              </div>
              <h3 className='text3-serv'>Service Heading</h3>
              <p className='text-serv'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column-serv">
            <div className="card-serv">
              <div className="icon-wrapper-serv">
                <i className="fas fa-brush"></i>
              </div>
              <h3 className='text3-serv'>Service Heading</h3>
              <p className='text-serv'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column-serv">
            <div className="card-serv">
              <div className="icon-wrapper-serv">
                <i className="fas fa-wrench"></i>
              </div>
              <h3 className='text3-serv'>Service Heading</h3>
              <p className='text-serv'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column-serv">
            <div className="card-serv">
              <div className="icon-wrapper-serv">
                <i className="fas fa-truck-pickup"></i>
              </div>
              <h3 className='text3-serv'>Service Heading</h3>
              <p className='text-serv'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column-serv">
            <div className="card-serv">
              <div className="icon-wrapper-serv">
                <i className="fas fa-broom"></i>
              </div>
              <h3 className='text3-serv'>Service Heading</h3>
              <p className='text-serv'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
          <div className="column-serv">
            <div className="card-serv">
              <div className="icon-wrapper-serv">
                <i className="fas fa-plug"></i>
              </div>
              <h3 className='text3-serv'>Service Heading</h3>
              <p className='text-serv'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
                consequatur necessitatibus eaque.
              </p>
            </div>
          </div>
        </div>
      </section>
*/