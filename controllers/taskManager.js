const path = require('path');
const db = require(path.normalize('../database/databaseManager.js'));

const getAllTasks = async (req, res) => {
  try {
    const queryResult = await db.query(
      'SELECT * from tasks'
    );
    res.status(200).json(queryResult.rows);
  } catch (err) {
    res.status(500).send('Internal error');
  }
}

const createTask = async (req, res) => {
  try {
    const values = [req.body.task_title, req.body.task_description]
    const queryResult = await db.query(`
      INSERT INTO tasks(task_title, task_description) VALUES($1, $2)
    `, values);
    res.status(200).end();
  } catch (err) {
    res.status(500).send('Internal error');
    console.log(err);
  }
}

const getSingleTask = async (req, res) => {
  try {
    const values = [req.params.id];
    const queryResult = await db.query(`
      SELECT * FROM tasks WHERE id = $1
    `, values)
    res.status(200).json(queryResult.rows);

  } catch (err) {
    res.status(500).send('Internal error');
  }
}

const updateTask = (req, res) => {
  console.log('patch')
}

const deleteTask = (req, res) => {
  console.log('delete')
}

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask
}
