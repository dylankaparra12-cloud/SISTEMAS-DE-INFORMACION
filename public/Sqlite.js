const express = require('express');
const Database = require('better-sqlite3');

const app = express();
const db = new Database('alumnos.db');

app.use(express.json());
app.use(express.static('public'));

db.exec(`
    CREATE TABLE IF NOT EXISTS alumnos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT,
        apellido TEXT,
        telefono TEXT,
        curso TEXT,
        division TEXT
    )
`);

app.post('/guardar', (req, res) => {
    const { nombre, apellido, telefono, curso, division } = req.body;
    db.prepare('INSERT INTO alumnos (nombre, apellido, telefono, curso, division) VALUES (?, ?, ?, ?, ?)').run(nombre, apellido, telefono, curso, division);
    res.json('Guardado');
});

app.get('/obtener', (req, res) => {
    const lista = db.prepare('SELECT * FROM alumnos').all();
    res.json(lista);
});

app.listen(3000, () => console.log('¡Servidor listo en http://localhost:3000!'));