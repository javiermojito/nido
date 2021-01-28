import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col sm:flex-col md:flex-row mx-auto md:ml-auto md:gap-x-0 md:justify-center h-screen  bg-purpleNido text-white flex justify-center content-center">
      <div className="md:mx-0 md:w-1/2 lg:w-1/3 flex flex-wrap content-center justify-center xxl:justify-end xxl:pr-12">
        <img
          className="h-72 lg:h-80 xl:h-96"
          src="https://blush.design/api/download?shareUri=ISAlVtb8a&s=0%7Ef7d3bb&w=800&h=800&fm=png"
          alt="404 NOT FOUND IMAGE"
        />
      </div>
      <div className="flex justify-center content-center xxl:content-left xxl:justify-left">
        <div className="flex flex-col md:my-auto md:ml-0 md:w-96">
          <div className="text-normal text-center	text-3xl md:text-4xl md:text-left lg:text-4xl font-extrabold">
            404 NOT FOUND
          </div>
          <div className="text-center text-2xl pl-8 pr-8 pt-4 pb-3 md:text-left md:pl-0">
            El recurso al que intentas acceder, al parecer,{" "}
            <span className="font-bold">no existe.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
