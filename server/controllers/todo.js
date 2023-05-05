const db = require("../database/todoDb");

//To add data to db
const putTask = async (req, res) => {
  console.log('insideputTask :>> ');
  console.log("req.body", req.body, "req", req);
  try {
    const result = await db.any(
      "INSERT INTO todo(data) VALUES ($1) RETURNING",
      [req.body]
    );
    console.log("resultput", result);
    // res.send(result);
    res.end();
  } catch (err) {
    console.log(err);
    res.send("Error" + err);
    res.send();
  }
};

const getTask = async (req, res) => {
  console.log('Inside get todo :>> ');
  try {
    const result = await db.any("SELECT * FROM todo");

    res.send(result);
  } catch(err){
    console.log(err);
    res.send("Error" + err);
  }
};

module.exports = {
  putTask,
  getTask,
};
