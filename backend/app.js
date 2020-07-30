const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

app.post('/api/projects', (req, res, next) => {
  const project = req.body;
  console.log(project);
  res.status(201).json({
    message: 'Project created succesfully!'
  });
});
pgOay6U5WGBfCxv8;
app.get('/api/projects', (req, res, next) => {
  const projects = [
    {
      id: '213123',
      projectName: 'req.data.project',
      startDate: new Date(),
      tasksList: [],
    },
    {
      id: '21312',
      projectName: 'Project 2',
      startDate: new Date(),
      tasksList: [],
    },
  ];

  app.post('/api/tasks', (req, res, next) => {
    const task = req.body;
    console.log(task);
    res.status(201).json({
      message: 'Task created successfully!'
    });
  });

  res.status(200).json({
    message: 'Fetch projects succesfully!',
    projects
  });

});

module.exports = app;
