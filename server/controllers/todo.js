const db = require("../database/todoDb");

//To add data to db
const putTask = async (req, res) => {
  console.log('insideputTask :>> ');
  // console.log("req.body", req.body, "req", req);
  console.log('inside putTask');
  try {
    const query = 'INSERT INTO todos(task) VALUES ($1)';
    const values = [req.body.task];
    const result = await db.query(query, values);
    console.log('Data inserted successfully');
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send('Error' + err);
  }
};

const getTask = async (req, res) => {
  console.log('Inside get todo :>> ');
  try {
    const result = await db.query("SELECT * FROM todos");

    res.send(result);
  } catch(err){
    console.log(err);
    res.send("Error" + err);
  }
};

const deleteTask = async(req, res)=>{
  console.log('deletedvalue :>> ');
  try{
    const result = await db.query(" DELETE FROM todos (req.body) VALUES ", [req.body]);
 
  console.log('removedValue :>> ', result);
  res.send(result);
  }
  catch(err){
    console.log(err);
  }

}

module.exports = {
  putTask,
  getTask,
  deleteTask
};
