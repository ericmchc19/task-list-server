// list-edit-router.js
const express = require('express');
const listEditRouter = express.Router();

// Lista de tareas (para simular una base de datos)
let tasks = [
  {
    id: 1,
    isCompleted: false,
    description: 'Walk the dog',
  },
  {
    id: 2,
    isCompleted: true,
    description: 'Buy groceries',
  },
  // Puedes agregar más tareas según sea necesario
];

// Ruta para crear una tarea (POST)
listEditRouter.post('/tasks', (req, res) => {
  const { description } = req.body;

  if (!description) {
    return res.status(400).json({ message: 'Description is required' });
  }

  const newTask = {
    id: tasks.length + 1,
    isCompleted: false,
    description,
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Ruta para eliminar una tarea específica (DELETE)
listEditRouter.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const index = tasks.findIndex(task => task.id === taskId);

  if (index !== -1) {
    const deletedTask = tasks.splice(index, 1);
    res.json(deletedTask);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// Ruta para actualizar una tarea específica (UPDATE)
listEditRouter.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const { isCompleted, description } = req.body;
  const index = tasks.findIndex(task => task.id === taskId);

  if (index !== -1) {
    tasks[index] = {
      ...tasks[index],
      isCompleted: isCompleted !== undefined ? isCompleted : tasks[index].isCompleted,
      description: description || tasks[index].description,
    };

    res.json(tasks[index]);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

module.exports = listEditRouter;
