import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>my todos</h1>

        <div >
          <div>
            <label>Title</label>
            <input type="text" placeholder="What's the task title?"></input>
          </div>
          <div>
            <label>Description</label>
            <input type="text" placeholder="What's the task description?"></input>
          </div>
          <div><button>Add</button>
          </div>
        </div>
        <div className="">
          <button>todo</button>
          <button>completed</button>
        </div>
      </div>
    </>
  );
}

export default App;
