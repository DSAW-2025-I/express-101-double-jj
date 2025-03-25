const express = require('express');
const app = express();
const port = 3000;

// Datos de los usuarios
const users = {
  1: {
    name: "Jose",
    lastName: "Marmolejo",
    email: "josemarloz@unisabana.edu.co",
    id: "0000285873"
  },
  2: {
    name: "Julian",
    lastName: "Pedraza",
    email: "julianpepa@unisabana.edu.co",
    id: "0000307536"
  }
};

// Endpoint dinámico para obtener información del usuario
app.get('/user-info/:userId', (req, res) => {
  const { userId } = req.params;
  
  // Validar que el userId es 1 o 2
  if (!users[userId]) {
    return res.status(404).json({ error: "Usuario no encontrado" });
  }

  res.json(users[userId]);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en http://localhost:${port}`);
});
