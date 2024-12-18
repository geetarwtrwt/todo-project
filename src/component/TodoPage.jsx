import React from "react";

function TodoPage() {
  return (
    <>
      <div className="h-screen bg-bgcolor text-white flex flex-col items-center justify-center gap-8">
        <h1 className="capitalize text-5xl font-bold">my todos</h1>

        <div className="bg-DarkGray px-8 py-10 space-y-5 rounded-md">
          <div className="flex items-end gap-8 border-b-2 pb-4">
            <div className="flex flex-col gap-1 ">
              <label>Title</label>
              <input
                className="ps-2 rounded-md py-1.5"
                type="text"
                placeholder="What's the task title?"
              ></input>
            </div>
            <div className="flex flex-col">
              <label>Description</label>
              <input
                className="ps-2 rounded-md py-1.5"
                type="text"
                placeholder="What's the task description?"
              ></input>
            </div>
            <div>
              <button className="btn !bg-green-600">Add</button>
            </div>
          </div>

          <div className="">
            <button className="btn !bg-green-600">todo</button>
            <button className="btn !bg-zinc-600">completed</button>
          </div>

          <div className="capitalize">
            <div>
              <h3 className="text-2xl font-bold">task 1</h3>
              <p>description</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoPage;
