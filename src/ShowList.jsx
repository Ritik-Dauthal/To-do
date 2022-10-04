import React from "react";
import { MdDeleteForever } from "react-icons/md";

const ShowList = ({ items, id, DeleteList }) => {
  return (
    <div className="container">
      <div className="flex">
        <div className="text-black text-xl font-mono">{items}</div>
        <span className="grow"></span>
        <div>
          <button
            onClick={() => {
              DeleteList(id);
            }}
          >
            <MdDeleteForever className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default ShowList;
