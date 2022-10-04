import React from "react";

const Showform = ({ handleChange, handleSubmit, value, setShow, show }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <div>
            <input
              className="border-2 border-gray-800 rounded-md"
              type="text"
              placeholder="Add task"
              onChange={handleChange}
              value={value}
            />
          </div>
          <div className="mt-2 mb-4 ">
            <button
              type="submit"
              className="px-3 py-1  border-gray-800  rounded-md bg-yellow-500 text-white border-2"
            >
              Save
            </button>
            <button
              onClick={() => setShow(!show)}
              type="button"
              className="px-2 py-1 ml-1  border-gray-800 rounded-md border-2 bg-white text-black "
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Showform;
