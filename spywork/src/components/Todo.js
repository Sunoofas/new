import React, { useEffect, useState } from "react";
import "./Todo.css";
import Addtask from "./Addtask";
import Listtask from "./Listtask";
import TrainingImage from "./assets/contactus.avif";
import { addTodoTask, getTodoList } from "./axiosDb";

export default function Todo() {
  const [tasks, setTasks] = useState([]);
  const [list, setList] = useState([]);
  useEffect(() => {
   //  setList(getTodoList());
    document.title = `You have ${tasks.length} pending task(s)`;
  },[]);
  getTodoList();

  const addTask = (title) => {
    const newTask = [...tasks, { title }];
    addTodoTask(newTask);
    setTasks(newTask);
  };

  const deleteTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };

  console.log('list :>> ', list);

  return (
    <>
      <div
        className="todo-conatiner"
        style={{ backgroundImage: `url(${TrainingImage})` }}
      >
        <div className="header">TodoApp</div>
        <div className="addtask">
          <Addtask addTask={addTask} />
        </div>
        <div className="listtask">
          {tasks.map((task, index) => (
            <Listtask
              task={task}
              deleteTask={deleteTask}
              index={index}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}
