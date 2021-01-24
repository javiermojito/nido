import React from "react";
import { Link } from "react-router-dom";
import "./css/Home.css";

const Home = () => {
  return (
    <div>
      {/* // Landing // */}
      <div className="header-home w-full h-96 pt-10 pl-7 pr-10 mb-0 block sm:header-home-sm sm:hidden">
        <div className="">
          <h1 className="font-poppins font-semibold text-4xl tracking-tighter">
            Cursos gratuitos de diseño
          </h1>
          <p className="font-popping text-2xl tracking-tighter leading-7">
            Aprende con recursos digitales a tu alcance
          </p>
          <br />
          <Link to="/cursos">
            <div className="w-max h-auto bg-greenNido pl-4 pr-4 pt-2 pb-2 font-semibold font-poppins border-solid border-2 border-black botder-opacity-100">
              Ver Cursos
            </div>
          </Link>
        </div>
      </div>

      {/* // Landing SM-MD FIX// */}
      <div className="w-full h-96 pt-10 pl-7 mb-0 flex flex-row hidden sm:flex lg:hidden">
        <div className="w-2/5 pt-5 pl-5">
          <h1 className="font-poppins font-semibold text-4xl tracking-tighter">
            Cursos gratuitos de diseño
          </h1>
          <p className="font-popping text-2xl tracking-tighter leading-7">
            Aprende con recursos digitales a tu alcance
          </p>
          <br />
          <Link to="/cursos">
            <div className="w-max h-auto bg-greenNido pl-4 pr-4 pt-2 pb-2 font-semibold font-poppins border-solid border-2 border-black botder-opacity-100">
              Ver Cursos
            </div>
          </Link>
        </div>    
        <img className="mr-0 object-contain object-right-bottom w-3/5 h-auto" src="https://i.imgur.com/uPxYhjx.png" alt="Girl sitting in front of computer"/>
      </div>

      {/* // Landing Large// */}
      <div className="mx-auto h-128 w-full xl:w-5/6 xxl:h-160 hidden lg:block">
        <div className="w-full h-full mb-0 flex flex-row hidden lg:flex ">
          <div className="w-1/2 pl-7 pr-0 mr-0 flex flex-col col-1 justify-center">
            <h1 className="font-poppins font-semibold text-5xl tracking-tighter lg:pb-1 xl:pb-2">
              Cursos gratuitos de diseño
            </h1>
            <p className="font-popping text-3xl tracking-tighter leading-7 lg:pb-2 xl:pb-0">
              Aprende con recursos digitales a tu alcance
            </p>
            <br />
            <br className="hidden xl:flex"/>
            <Link to="/cursos">
              <div className="w-max h-auto bg-greenNido text-xl pl-4 pr-4 pt-2 pb-2 font-semibold font-poppins border-solid border-2 border-black botder-opacity-100">
                Ver Cursos
              </div>
            </Link>
          </div>    
          <div className="w-1/2 flex flex-wrap content-center">
            <img  className="h-auto w-max mx-auto xxl:w-180" src="https://blush.design/api/download?shareUri=paoNDgE8b&s=0.5%7Ef7d3bb&w=800&h=800&fm=png" alt="Girl sitting in front of computer"/>
          </div>
        </div>
      </div>
      

      {/* // Feature -> sin costo // */}
      <div className="w-full flex flex-col bg-redNido col-1 h-128 pt-11 mt-0 none lg:hidden">
        <div className="h-3/5 w-auto mx-auto inline-block align-middle ">
          <img
            className="h-full"
            src="https://blush.design/api/download?shareUri=Qh8dZLB1u&s=0%7Ef7d3bb&w=800&h=800&fm=png"
            alt="Feature sin costo"
          />
        </div>
        <div className="h-2/6 pl-6 pr-6 text-white text-center tracking-tight flex flex-col col-1 content-center justify-center">
          <h2 className="font-poppins text-2xl sm:text-3xl font-semibold ">
            Sin costo, ni registros
          </h2>
          <br />
          <p className="font-roboto text-lg sm:text-xl leading-6">
            Aprende algo nuevo sin aceptar planes de dudosa beneficiencia
          </p>
        </div>
      </div>

      {/* // Feature -> sin costo Large// */}
      <div className="h-128 w-full xxl:h-144 hidden lg:block bg-redNido">
        <div className="w-full h-full mb-0 flex flex-row flex-row-reverse gap-x-0 xl:w-5/6 mx-auto">
          <div className="w-1/2 ml-5 pr-0 mr-0 flex flex-col col-1 justify-center ">
            <h1 className="font-poppins font-semibold text-4xl text-white tracking-tighter pb-3">
              Sin costo, ni registros
            </h1>
            <p className="font-roboto text-2xl text-white tracking-tighter leading-6 lg:pb-2 xl:pb-0">
              Aprende con recursos digitales a tu alcance
            </p>
            <br />
          </div>    
          <div className="w-1/2 flex flex-wrap content-center justify-end pr-14">
            <img className="w-72 xxl:w-80" src="https://blush.design/api/download?shareUri=Qh8dZLB1u&s=0%7Ef7d3bb&w=800&h=800&fm=png" alt="Feature sin costo"/>
          </div>
        </div>
      </div>

      {/* //Feature -> Sin conexión// */}
      <div className="w-full flex flex-col col-1 h-128 bg-white pt-14 none lg:hidden">
        <div className="h-6/7 w-full inline-block align-middle sm:w-auto sm:h-3/5 ">
          <img
            className="h-full mx-auto"
            src="https://blush.design/api/download?shareUri=aPwzY7odD&s=0.2%7E8d574d&w=800&h=800&fm=png"
            alt="Feature sin conexión"
          />
        </div>
        <div className="h-full pl-6 pr-6 pb-4 text-black text-center tracking-tight flex flex-col col-1 content-center justify-center ">
          <h2 className="font-poppins text-2xl sm:text-3xl font-semibold leading-6">
            Úsalos sin conexión a internet
          </h2>
          <br />
          <p className="font-roboto text-lg leading-6 sm:text-xl sm:pl-5 sm:pr-5">
            Descárgalo en tu computadora con Windows o Linux y úsalos en tu
            próximo viaje, cafetería favorita, tú decides.
          </p>
        </div>
      </div>

      {/* // Feature -> Sin conexión Large // */}
      <div className="h-128 w-full xxl:h-144 hidden lg:block bg-white">
        <div className="w-full h-full mb-0 flex flex-row gap-x-0 xl:w-3/4 xxl:w-3/5 mx-auto">
          <div className="w-1/2 pl-10 pr-5 xl:mr-0 xl:pr-10 flex flex-col col-1 justify-center ">
            <h1 className="font-poppins font-semibold text-4xl text-black tracking-tighter pb-3 ">
            Úsalos sin conexión a internet
            </h1>
            <p className="font-roboto text-2xl text-black tracking-tighter leading-6 lg:pb-2 xl:pb-0">
            Descárgalo en tu computadora con Windows o Linux y úsalos en tu
            próximo viaje, cafetería favorita, tú decides.
            </p>
            <br />
          </div>    
          <div className="w-1/2 flex flex-wrap content-center justify-start">
            <img className="w-144 xxl:w-180" src="https://blush.design/api/download?shareUri=aPwzY7odD&s=0.2%7E8d574d&w=800&h=800&fm=png" alt="Feature sin conexión"/>
          </div>
        </div>
      </div>

      {/* //Feature -> Responsive design// */}
      <div className="w-full flex flex-col col-1 h-128 bg-blueNido pt-10 pb-7">
        <div className="h-3/5 w-auto mx-auto inline-block align-middle ">
          <img
            className="h-full mx-auto"
            src="https://blush.design/api/download?shareUri=XtWpTVm_Y&s=0.1%7E583318&w=800&h=800&fm=png"
            alt="Feature Resposive Design"
          />
        </div>
        <div className="h-2/6 pl-5 pr-5 pt-6 text-white text-center tracking-tight  flex flex-col col-1 content-center justify-center ">
          <h2 className="font-poppins text-2xl sm:text-3xl font-semibold leading-6">
            Accede desde cualquier dispositivo
          </h2>
          <br />
          <p className="font-roboto text-lg sm:text-xl leading-6">
            No importa si estas en tu celular, computadora o nevera con
            pantalla. Podrás disfrutar del contenido de nuestros cursos.
          </p>
        </div>
      </div>

      {/* // CTA //*/}
      <div className="bg-purpleNido">
        <div className="flex flex-wrap content-center justify-center bg-purpleNido gap-y-8 pt-16 pb-6 mx-auto sm:flex-col sm:col-1 sm:w-128">
          <h2 className="font-poppins text-white text-2xl font-semibold text-center sm:text-3xl lg:text-4xl">
            Vive la experiencia de los Objetos Virtuales de Aprendizaje
          </h2>
          <Link to="/cursos">
            <div className="w-max h-auto mx-auto bg-greenNido pl-4 pr-4 pt-2 pb-2 font-semibold font-poppins border-solid border-2 border-black botder-opacity-100 sm:text-lg">
              Ver Cursos
            </div>
          </Link>
        </div>
      </div>

      {/* //CTA image// */}
      <div className="bg-purpleNido h-36 mb-32 content-start  flex flex-wrap content-start justify-center">
        <img
          className="h-64"
          src="https://blush.design/api/download?shareUri=WXOD80qqd&s=0%7E8d574d&w=800&h=800&fm=png"
          alt="Peace sign"
        />
      </div>
    </div>
  );
};

export default Home;
