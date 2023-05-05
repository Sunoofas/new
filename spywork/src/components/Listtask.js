import React from "react";

const Listtask =({task, index, deleteTask})=>{
    return(
        <>
            <div className="list-task">
                {task.title}
                <button  onClick={()=>{deleteTask(index)}}className="delete-btn">Delete</button>
            </div>
        </>
    );
};

export default Listtask;