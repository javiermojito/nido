import React from "react";

const CourseHero = (props) => {
  console.log(props);
  return (
    <div className="flex flex-row h-60 md:h-96 xxl:h-screen/2	" style={props.backgroundStyle}>
      {/* <div className="w-3/5 font-poppins flex flex-col justify-center pl-5 pr-1">
        <div className="text-lg font-bold pb-1 pl-0 md:text-4xl md:pl-0 lg:text-5xl lg:pl-5 xl:text-6xl xl:pl-8 xxl:text-7xl xxl:pl-6" >{props.title}</div>
        <div className="text-xs font-light pl-0.5 md:pl-1 lg:pl-6 xl:pl-9 xxl:pl-7 md:text-lg lg:text-xl xl:text-2xl xxl:text-3xl" >{props.description}</div>
      </div> */}

      <div className="w-3/5 font-poppins flex flex-col justify-center pr-1 pl-3 sm:pl-8 md:pl-8 lg:pl-9 xl:pl-10 xx:pl-12">
        <div className="text-lg font-bold pb-1 text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl xxl:text-7xl" style={props.textColor}>{props.title}</div>
        <div className="text-xs font-light text-xm sm:text-base md:text-base lg:text-xl xl:text-2xl xxl:text-3xl" style={props.textColor}>{props.description}</div>
      </div>
      <div className="w-2/5 flex flex-wrap content-center">
        <img className="my-20 mx-auto w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 xxl:w-96 xxl:h-96" src={props.imageHR} alt={props.imageAlt}/>
      </div>
    </div>
  );

};

export default CourseHero;