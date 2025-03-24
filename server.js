const express = require('express');
const app = express();
const port = 3000;

const users = {
  1: {
    name: 'Juan',
    lastName: 'Pérez',
    email: 'juan@example.com',
    id: '12345'
  },
  2: {
    name: 'Ana',
    lastName: 'Gómez',
    email: 'ana@example.com',
    id: '67890'
  }
};

// Servir la carpeta 'public' (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint dinámico para obtener usuario por ID
app.get('/user-info/:id', (req, res) => {
  const id = req.params.id;
  if (users[id]) {
    res.json(users[id]);
  } else {
    res.status(404).json({ error: 'Usuario no encontrado' });
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
