import React from "react";

const ActionButtons = () => {
  return (
    <div className="flex flex-wrap justify-center mt-5 mb-5">
      <div className="w-4/5 sm:w-2/3 h-auto flex-wrap grid grid-cols-1 gap-y-3 gap-x-3 sm:grid-cols-2">
        {/* VERSION A */}
        {/* <div className="w-full h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-sm flex flex-wrap justify-center">
          <div className="w-1/2 flex items-center">
            <div className="w-1/4">
              <img className="mx-auto" src="https://img.icons8.com/ios-filled/32/ffffff/very-popular-topic.png"/>
            </div>
            <div className="w-3/4 mx-auto text-center text-2xl text-white font-semibold">Calificar</div>
          </div>
        </div>
        <div className="w-full h-14 rounded-xl bg-gradient-to-br from-red-400 to-red-500 shadow-sm flex flex-wrap justify-center">
          <div className="w-1/2 flex items-center">
            <div className="w-1/4">
              <img className="mx-auto" src="https://img.icons8.com/ios-filled/32/ffffff/box-important.png"/>
            </div>
            <div className="w-3/4 mx-auto text-center text-2xl text-white font-semibold">Reportar</div>
          </div>
        </div> */}

        {/* VERSION B */}
        <a className="hidden lg:inline" href="">
          <div className="w-full h-14 rounded-xl bg-gradient-to-br from-purple-400 to-purple-500 shadow-sm flex flex-row items-center justify-center transition duration-400 ease-in-out transform hover:-translate-y-0.5">
            <img className="mx-auto mr-0" src="https://img.icons8.com/fluent-systems-filled/32/ffffff/external-link-squared.png"/> 
            <span className="mx-auto ml-4 text-left text-2xl text-white font-semibold">Abrir en pestaña</span>
          </div>
        </a>

        <a href="http://javiermojito.com">
          <div className="w-full h-14 rounded-xl bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-sm flex flex-row items-center justify-center transition duration-400 ease-in-out transform hover:-translate-y-0.5">
            <img className="mx-auto mr-0" src="https://img.icons8.com/ios-filled/32/ffffff/very-popular-topic.png"/> 
            <span className="mx-auto ml-4 text-left text-2xl text-white font-semibold">Calificar OVA</span>
          </div>
        </a>
        
        <a href="">
          <div className="w-full h-14 rounded-xl bg-gradient-to-br from-red-400 to-red-500 shadow-sm flex flex-row items-center justify-center transition duration-400 ease-in-out transform hover:-translate-y-0.5">
            <img className="mx-auto mr-0" src="https://img.icons8.com/ios-filled/32/ffffff/box-important.png"/> 
            <span className="mx-auto ml-4 text-left text-2xl text-white font-semibold">Reportar error</span>
          </div>
        </a>
        
        <a href="">
          <div className="w-full h-14 rounded-xl bg-gradient-to-br from-green-400 to-green-500 shadow-sm flex flex-row items-center justify-center transition duration-400 ease-in-out transform hover:-translate-y-0.5">
            <img className="mx-auto mr-0" src="https://img.icons8.com/ios-filled/32/ffffff/circled-down.png"/> 
            <span className="mx-auto ml-4 text-left text-2xl text-white font-semibold">Descargar OVA</span>
          </div>
        </a>
        
      </div>
    </div>
  );
};

export default ActionButtons;
