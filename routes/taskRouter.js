const path = require('path');

const express = require('express');
const router = express.Router();

const { getAllTasks, createTask, getSingleTask, updateTask, deleteTask } = require(path.normalize('../controllers/taskManager.js'));

router.route('/')
  .get(getAllTasks)
  .post(createTask)

router.route('/:id')
  .get(getSingleTask)
  .patch(updateTask)
  .delete(deleteTask)

module.exports = router;
