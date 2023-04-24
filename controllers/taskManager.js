const getAllTasks = (req, res) => {
  console.log('get');
}

const createTask = (req, res) => {
  console.log('post')
}

const getSingleTask = (req, res) => {
  console.log('get id')
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
