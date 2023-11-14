const express = require('express');
const listViewRouter = require('./list-view-router');
const listEditRouter = require('./list-edit-router');

const app = express();
const port = 3000;


app.use('/list-view', listViewRouter);
app.use('/list-edit', listEditRouter);

app.get('/tareas', (req, res) => {
  const tareas = [
    {
      id: 1,
      isCompleted: false,
      description: 'Pasear a mi perro',
    },{
        id: 2,
        isCompleted: false,
        description: 'Hacer trabajos de la universidad',
    },
    {
        id: 2,
        isCompleted: true,
        description: 'Hacer trabajos de protalento',
    }
    
   
  ];

  res.json(tareas);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
