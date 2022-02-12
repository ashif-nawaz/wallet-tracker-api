const createTask = (req, res, next) => {
  res.send("created task");
};

const getAllTask = (req, res, next) => {
  res.send("fetched all task");
};

export { createTask, getAllTask };
