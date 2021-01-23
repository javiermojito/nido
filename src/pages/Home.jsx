import React from "react";
import { Link } from "react-router-dom";
import "./css/Home.css";

const Home = () => {
  return (
    <div>
      {/* // Landing // */}
      <div className="header-home w-full h-96 pt-10 pl-7 pr-10 mb-0">
        <div className="">
          <h1 className="font-poppins font-semibold text-4xl tracking-tighter">Cursos gratuitos de diseño</h1>
          <p className="font-popping text-2xl tracking-tighter">Aprende con recursos digitales a tu alcance</p>
          <br/>
          <Link to="/cursos">
            <div className="w-max h-auto bg-greenNido pl-4 pr-4 pt-2 pb-2 font-semibold font-poppins border-solid border-2 border-black botder-opacity-100">
              Ver Cursos
            </div>
          </Link>
        </div>
      </div>

      {/* // Feature -> sin costo // */}
      <div className="w-full flex flex-col bg-redNido col-1 h-128 pt-11 mt-0">
          <div className="h-3/5 w-auto mx-auto inline-block align-middle ">
            <img className="h-full" src="https://blush.design/api/download?shareUri=Qh8dZLB1u&s=0%7Ef7d3bb&w=800&h=800&fm=png" alt="Feature sin costo"/>
          </div>
          <div className="h-2/6 pl-6 pr-6 text-white text-center tracking-tight flex flex-col col-1 content-center justify-center">
            <h2 className="font-poppins text-2xl font-semibold">Sin costo, ni registros</h2>
            <br/>
            <p className="font-roboto text-lg leading-6">Aprende algo nuevo sin aceptar planes de dudosa beneficiencia</p>
          </div>
      </div>

      {/* //Feature -> Sin conexión// */}
      <div className="w-full flex flex-col col-1 h-128 bg-white pt-10 ">
          <div className="h-6/7 w-full inline-block align-middle">
            <img className="pl-7 pr-7 w-auto mx-auto" src="https://blush.design/api/download?shareUri=aPwzY7odD&s=0.2%7E8d574d&w=800&h=800&fm=png" alt="Feature sin conexión"/>
          </div>
          <div className="h-full pl-6 pr-6 pb-6 text-black text-center tracking-tight flex flex-col col-1 content-center justify-center ">
            <h2 className="font-poppins text-2xl font-semibold leading-6">Úsalos sin conexión a internet</h2>
            <br/>
            <p className="font-roboto text-lg leading-6">Descárgalo en tu computadora con Windows o Linux y úsalos en tu próximo viaje, cafetería favorita, tú decides.</p>
          </div>
      </div>

      {/* //Feature -> Responsive design// */}
      <div className="w-full flex flex-col col-1 h-128 bg-blueNido pt-10 ">
          <div className="h-3/5 w-auto mx-auto inline-block align-middle ">
            <img className="h-full mx-auto" src="https://blush.design/api/download?shareUri=XtWpTVm_Y&s=0.1%7E583318&w=800&h=800&fm=png" alt="Feature Resposive Design"/>
          </div>
          <div className="h-2/6 pl-6 pr-6 text-white text-center tracking-tight  flex flex-col col-1 content-center justify-center ">
            <h2 className="font-poppins text-2xl font-semibold leading-6">Accede desde cualquier dispositivo</h2>
            <br/>
            <p className="font-roboto text-lg leading-6">No importa si estas en tu celular, computadora o nevera con pantalla. Podrás disfrutar del contenido de nuestros cursos.</p>
          </div>
      </div>

      {/* // CTA //*/}
      <div className="flex flex-wrap content-center justify-center bg-purpleNido gap-y-8 pt-16 pb-6">
        <h2 className="font-poppins text-white text-2xl font-semibold text-center">Vive la experiencia de los Objetos Virtuales de Aprendizaje</h2>
        <Link to="/cursos">
            <div className="w-full h-auto mx-auto bg-greenNido pl-4 pr-4 pt-2 pb-2 font-semibold font-poppins border-solid border-2 border-black botder-opacity-100">
              Ver Cursos
            </div>
          </Link>
      </div>

      {/* //CTA image// */}
      <div className="bg-purpleNido h-36 mb-32 content-start  flex flex-wrap content-start justify-center">
        <img className="h-64" src="https://blush.design/api/download?shareUri=WXOD80qqd&s=0%7E8d574d&w=800&h=800&fm=png" alt="Peace sign"/>
      </div>
    </div>
  );
};

export default Home;