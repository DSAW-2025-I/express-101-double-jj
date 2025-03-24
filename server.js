const express = require('express');
const app = express();
const port = 3000;

const users = [
  {
    id: '1',
    name: 'Juan',
    lastName: 'Pérez',
    email: 'juan.perez@universidad.edu'
  },
  {
    id: '2',
    name: 'Ana',
    lastName: 'Gómez',
    email: 'ana.gomez@universidad.edu'
  }
];

app.get('/user-info/:id', (req, res) => {
  const { id } = req.params;
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  res.json(user);
});

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
