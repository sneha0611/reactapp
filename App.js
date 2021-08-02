import React ,{useState} from "react";
import ToDolist from "../src/ToDolist";
import "./App.css";
const App =()=>{

  const [ inputList ,setInputList]=useState("");
  const [addtodo,setaddtodo]=useState([]);
  const inputEvent =(e)=>{
    setInputList(e.target.value);
  };
  const addtask=()=>{
    setaddtodo((prevval)=>{
      return [...prevval,inputList];
    });
    setInputList('');
  }
  const deleteTask=(id)=>{
    console.log('deleted');

    setaddtodo((prevval)=>{
      return prevval.filter((arrElem,index)=>{
     return index !== id;
      })
    })
}
  return (
    <>
    <div className ='main-div'>
        <div className = 'center-div'>
            <h1> to do-list</h1>
            <input type = "text" 
            placeholder ="add todo elements" 
            onChange ={inputEvent}
            value={inputList}
            />
            <button onClick ={addtask}> +</button>
            <ol>
                {/* <li>{inputList}</li> */}
                {addtodo.map( (addtodo ,index) => {
                    return <ToDolist 
                    key ={index} 
                    id={index} 
                    text ={addtodo}
                    onSelect ={deleteTask}
                    />
})}
            </ol>
        </div>
    </div>
    </>
    );
    }


 
export default App;
