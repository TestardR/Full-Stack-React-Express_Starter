const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    { id: 1, firstName: 'Romain', lastName: 'Testard' },
    { id: 2, firstName: 'Vanessa', lastName: 'Renaud' },
    { id: 3, firstName: 'William', lastName: 'Schwartz' },
    { id: 4, firstName: 'Martin', lastName: 'Jay' }
  ];

  res.json(customers);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
