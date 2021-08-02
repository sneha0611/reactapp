import React from 'react';
const ToDolist =(props)=>{

    
    return (
        <>
         <div className = 'todo_style'> 
         <i className ="fa fa-times"  
         arian ="true"  
         onClick = {(()=>{
         props.onSelect(props.id);
         })}
         
         
         /> 
        </div> 
    <li>{props.text}</li>
    </>
    );
    };
export default ToDolist;