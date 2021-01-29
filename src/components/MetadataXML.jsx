import React, { useRef } from "react";
import XMLViewer from "react-xml-viewer";
import { getMetadataXMLFromCourseId } from "../data";

const MetadataXML = (props) => {
  
  var xml = getMetadataXMLFromCourseId(props.id);
  var customTheme = {
    attributeKeyColor: "#5975AB",
    attributeValueColor: "#A0D762",
    textColor: "#FFF",
    separatorColor: "#FFF",
    tagColor: "#FF786E",
    overflowBreak: true,
  };

  const refName = useRef(null);

  const selectAllText = (e) => {
    selectElementContents(refName.current)
  };

  const selectElementContents = (el) => {
    var range = document.createRange();
    range.selectNodeContents(el);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }

  return (
    <div className="bg-gray-50">
      <div className="font-poppins text-4xl font-bold text-center pt-12">
        Metadata (XML)
      </div>
      <div className="w-10/12 mx-auto pt-12 pb-12">
        <div className="bg-white shadow overflow-hidden rounded-lg mx-auto overscroll-auto">
          <div className="px-4 py-5 sm:px-6 flex flex-row justify-between">
            <h3 className="text-lg leading-6 font-medium text-gray-900">XML</h3>
            <h3
              class="text-sm leading-6 font-medium text-gray-400 cursor-pointer"
              onClick={selectAllText}
            >
              Seleccionar todo
            </h3>
          </div>
          <div ref={refName} className="border-t border-gray-200 bg-consoleNido p-6 font-console text-sm font-regular h-screen/70v overflow-auto ">
            <XMLViewer xml={xml} theme={customTheme} collapsible={true}  />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MetadataXML;
