// Incluir la configuración de OpenTelemetry
require('./tracing');

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/dashboard', (req, res) => {
  res.send('This is a simple dashboard page.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
