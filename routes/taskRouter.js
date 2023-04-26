const path = require('path');

const express = require('express');
const router = express.Router();

const { getAllTasks, createTask, getSingleTask, updateTask, deleteTask } = require(path.normalize('../controllers/taskManager.js'));
const { checkTaskTitle, checkTaskDescription, checkTaskState } = require(path.normalize('../middlewares/middlewares.js'));

router.route('/')
  .get(getAllTasks)
  .post(checkTaskTitle, checkTaskDescription, createTask)

router.route('/:id')
  .get(getSingleTask)
  .patch(checkTaskTitle, checkTaskDescription, checkTaskState, updateTask)
  .delete(deleteTask)

module.exports = router;
