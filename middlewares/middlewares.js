const checkTaskTitle = (req, res, next) => {
  if(!req.body.task_title) {
    res.status(400).send('Task Title must be filled.');
    res.end();
  }
  if(req.body.task_title.length > 20) {
    res.status(400).send('Task Title must be at maximium 20.');
    res.end();
  }
  else {
    next();
  }
}

const checkTaskDescription = (req, res, next) => {
  if(!req.body.task_description) {
    res.status(400).send('Task Description must be filled.');
    res.end();
  }
  else {
    next();
  }
}

const checkTaskState = (req, res, next) => {
  if(!(typeof req.body.completed == "boolean")){
    req.status(400).send('Task State must be boolean.');
    res.end();
  }
  else {
    next();
  }
}

module.exports = {
  checkTaskTitle,
  checkTaskDescription,
  checkTaskState
}
