// importar express
const express = require('express');

// crear instancia de express
const app = express();

// puerto del sv
const PORT = 3000;

// ruta para que retorne el mensaje
app.get('/', (req, res) => {
  res.send('¡Hola Mundo con Express!');
});

// iniciar servidor y escuchar en el puerto definido
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});