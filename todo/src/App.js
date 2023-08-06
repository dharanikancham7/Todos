import React,{useState} from "react"
import {v4 as uuid} from "uuid"
import './App.css';
import Item from "./item";

function App() {
  const [write,setWrite]=useState("")
  const [name,setName]=useState([])
// input value
  const onWrite=(e)=>{
    setWrite(e.target.value)

  }
  // delete
  const onDelete=(id)=>{
    const final=name.filter(each=>
      each.id!==id)
      setName(final)

  }
// creating object and updating to array
  const onTodo=(e)=>{
    e.preventDefault()
    const obj={
      id:uuid(),
      write,

    }
    setName((pre)=>[...pre,obj])
    setWrite("")

  }
  const onEdit=(id)=>{
    // const updatedTodos = [...name];
// find out the index and set the updated text
    const index = name.findIndex(item=> item.id === id)
    updatedTodos[index] = updatedText;
    setWrite(updatedTodos)
    // console.log(write)

  }
  return (
    <div className="container"> 
      <form onSubmit={onTodo}>
      <input  value={write} className="in" onChange={onWrite}type="text"/>
      <button className="but" type="submit">add</button>
    
        {name.length > 0 ? name.map((each)=>{
          return <Item setwrite={setWrite}each={each} onDelete={onDelete} onEdit={onEdit} />

        }): <p>no todos</p>}
      
      </form>
    </div>

  );
}

export default App;
