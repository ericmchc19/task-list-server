// list-view-router.js
const express = require('express');
const listViewRouter = express.Router();

// Lista de tareas (para simular una base de datos)
const tasks = [
  {
    id: 1,
    isCompleted: false,
    description: 'Caminar hacia donde mi mama',
  },
  {
    id: 2,
    isCompleted: true,
    description: 'Ir al supermercado',
  },
  // Puedes agregar más tareas según sea necesario
];

// Ruta para listar todas las tareas
listViewRouter.get('/tasks', (req, res) => {
  res.json(tasks);
});

// Ruta para ver una tarea específica
listViewRouter.get('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find(task => task.id === taskId);

  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ message: 'Task not found' });
  }
});

// Ruta para filtrar por tareas completas
listViewRouter.get('/tasks/completed', (req, res) => {
  const completedTasks = tasks.filter(task => task.isCompleted);
  res.json(completedTasks);
});

// Ruta para filtrar por tareas incompletas
listViewRouter.get('/tasks/incomplete', (req, res) => {
  const incompleteTasks = tasks.filter(task => !task.isCompleted);
  res.json(incompleteTasks);
});

module.exports = listViewRouter;
