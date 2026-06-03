const express = require('express');
const router = express.Router();
const db = require('../db');

// 1️⃣ POST /categorias → Crear nueva categoría
router.post('/', (req, res) => {
  const { nombre, descripcion } = req.body;
  db.query(
    'INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)',
    [nombre, descripcion],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ id: result.insertId, nombre, descripcion });
    }
  );
});

// 2️⃣ GET /categorias → Listar todas
router.get('/', (req, res) => {
  db.query('SELECT * FROM categorias', (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
});

// 3️⃣ GET /categorias/:id → Categoría + productos
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM categorias WHERE id = ?', [id], (err, catRows) => {
    if (err) return res.status(500).json({ error: err });
    if (catRows.length === 0) return res.status(404).json({ mensaje: 'No existe la categoría' });

    db.query('SELECT * FROM productos WHERE categoriaId = ?', [id], (err, prodRows) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ categoria: catRows[0], productos: prodRows });
    });
  });
});

// 4️⃣ PATCH /categorias/:id → Actualizar categoría
router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion } = req.body;
  db.query(
    'UPDATE categorias SET nombre = ?, descripcion = ?, updatedAt = CURRENT_TIMESTAMP WHERE id = ?',
    [nombre, descripcion, id],
    (err, result) => {
      if (err) return res.status(500).json({ error: err });
      res.json({ mensaje: 'Categoría actualizada correctamente' });
    }
  );
});

// 5️⃣ DELETE /categorias/:id → Eliminar categoría y productos
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM categorias WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ error: err });
    res.json({ mensaje: 'Categoría y productos eliminados correctamente' });
  });
});

module.exports = router;
