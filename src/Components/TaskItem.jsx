import React from "react";
function TaskItem({item,handelDelete,handleToggle}) {
    return <div>
        <h1 style={{color:item.completed ? "green":"red"}}>{item.task}</h1>
        <button onClick={handleToggle}>{item.completed ?"Yes":"No"}</button>
        <p>{item.taskAssignedTo}</p>
        <button onClick={handelDelete}>Delete</button>
    </div>;
  }
  
  export default TaskItem;