import React, { useState } from "react";
import Showform from "./Showform";
import ShowList from "./ShowList";

function App() {
  const [task, SetTask] = useState("");
  const [Data, SetData] = useState([]);
  const [show, setShow] = useState(false);

  const handleChange = (event) => {
    SetTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    SetData([...Data, task]);
    SetTask("");
  };

  const DeleteList = (id) => {
    const newData = Data.filter((current, index) => {
      return index != id;
    });
    SetData(newData);
  };

  return (
    <div className="flex flex-col border-4 w-60 bg-purple-400 ">
      <div className="text-md font-bold">Create To-Do</div>
      <button
        onClick={() => setShow(!show)}
        className="px-3 py-1 text-white bg-yellow-500  border-gray-800 border-2 w-28 mt-5 mb-5 rounded-md"
      >
        Add To-Do
      </button>
      {show ? (
        <Showform
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          value={task}
          show={show}
          setShow={setShow}
        />
      ) : null}
      {Data.map((items, index) => {
        return (
          <div>
            <ShowList
              items={items}
              key={index}
              id={index}
              DeleteList={DeleteList}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
