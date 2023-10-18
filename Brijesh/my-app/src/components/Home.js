import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../redux/actions";

export default function Home() {
  const [name, setName] = useState("");
  const [namenew, setNamenew] = useState("");
  const [dataArray, setDataArray] = useState([]);
  const todos = useSelector((state) => state.todoReducer);

  const dispatch = useDispatch();
  const dataAddFuncton = () => {
    const x = [...dataArray, name];
    setDataArray(x);
    setName("");
    dispatch(addTodo(x));
  };

  const deleteData = (element) => {
    const arrayFilter = dataArray?.filter((id) => {
      return element !== id;
    });
    setDataArray(arrayFilter);
    dispatch(addTodo(arrayFilter));
  };

  const editData = (item) => {
    setName(item);
    setNamenew(item)
   
  };  
  const dataAddEditFuncton = () => {
  
     dataArray.forEach((element,index) => {
      if( element === namenew){
        console.log(index)
        dataArray[index] = name
      }
    })
    setName('');
  };
  return (
    <>
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dataAddFuncton();
        }}
      >
        add
      </button>
      <button
        onClick={() => {
          dataAddEditFuncton();
        }}
      >
        addEdit
      </button>
      {todos?.map((item,index) => {
        return (
          <div key={index}>
            <h1>{item}</h1>
            <button
              onClick={() => {
                deleteData(item);
              }}
            >
              delete
            </button>
            <button
              onClick={() => {
                editData(item);
              }}
            >
              edit
            </button>
          </div>
        );
      })}
    </>
  );
}
