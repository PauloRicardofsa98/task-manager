export const taskQueryKeys = {
  getAll: () => ["tasks"],
  getOne: (taskId) => ["task", taskId],
  addTask: () => ["addTask"],
  updateTask: (taskId) => ["updateTask", taskId],
  deleteTask: (taskId) => ["deleteTask", taskId],
};
