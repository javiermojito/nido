import React from "react";
import Badge from "../components/Badge";

const UpNext = (props) => {
  return (
    <div className="bg-gray-200 w-full">
      <div className="pt-10 pb-12 w-auto sm:w-2/3 lg:w-1/2 mx-auto">
        <div className="font-semibold text-2xl text-center text-grey-600 pb-3">
          Continúa con:
        </div>
        <div className="m-4">
          <Badge {...props} />
        </div>
      </div>
    </div>
  );
};

export default UpNext;
