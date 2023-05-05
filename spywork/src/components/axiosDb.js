import axios from 'axios';
import config from '../services/config.json';

const addTodoTask = async(tasks) =>{
    const data = { tasks};
    console.log('data :>> ', data);
    await axios.post(`${config.api_base_url}/api/todo`, data)
    .then((data)=>{
         console.log(data);
    })

    .catch((error)=>{
        console.log(error)
    })
};

const getTodoList = async()=>{
    await axios.get(`${config.api_base_url}/api/todo`)
    .then((data)=>{
         console.log(data);
    })

    .catch((error)=>{
        console.log(error)
    })

}

const deleteTodoList = async(tasks)=>{
    const data = {tasks};
    console.log('data :>> ', data);
    await axios.delete(`${config.api_base_url}/api/todo`, data)
    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
})
}
export {addTodoTask,getTodoList, deleteTodoList}
