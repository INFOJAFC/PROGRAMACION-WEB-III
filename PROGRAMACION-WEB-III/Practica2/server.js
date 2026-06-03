const express = require('express');
const app = express();
const PORT = 3006;

app.use(express.json());

// Importar rutas
const categoriasRoutes = require('./routes/categorias');
app.use('/categorias', categoriasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
