import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col sm:flex-col md:flex-row mx-auto md:ml-auto md:gap-x-0 md:justify-center">
      <div className="md:mx-0 w-auto md:w-1/2 lg:w-1/3">
        <img src="https://i.imgur.com/RA1pMaW.png" alt="404 NOT FOUND IMAGE" />
      </div>
      <div className="flex flex-col md:my-auto md:ml-0 md:w-96" >
        <div className="text-normal text-center	text-3xl md:text-4xl md:text-left lg:text-4xl font-bold">404 NOT FOUND</div>
        <div className="text-center text-2xl pl-8 pr-8 pt-4 pb-3 md:text-left md:pl-0">
          El recurso al que intentas acceder, al parecer, no existe.
        </div>
        <div className="text-center	text-normal md:text-left">
          Illustration by <a className="font-bold" href="http://www.saramaese.com/">Sara Maese</a> from{" "}
          <a className="font-bold" href="https://icons8.com/">Icons8</a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
