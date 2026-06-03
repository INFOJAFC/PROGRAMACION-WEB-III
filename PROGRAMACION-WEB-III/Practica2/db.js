const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // tu usuario MySQL
  password: '',       // tu contraseña MySQL
  database: 'tienda'
});

connection.connect(err => {
  if (err) {
    console.error('Error conectando a MySQL:', err);
    return;
  }
  console.log('Conectado a MySQL');
});

module.exports = connection;
