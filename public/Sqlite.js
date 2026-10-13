const express = require('express');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const db = new sqlite3.Database('alumnos.db');

app.use(express.json());
app.use(express.static('public'));

db.run("CREATE TABLE IF NOT EXISTS alumnos (nombre TEXT, apellido TEXT, telefono TEXT, curso TEXT, division TEXT)");

app.post('/guardar', (req, res) => {
    let a = req.body;
    let sql = "INSERT INTO alumnos (nombre, apellido, telefono, curso, division) VALUES (?, ?, ?, ?, ?)";
    
    db.run(sql, [a.nombre, a.apellido, a.telefono, a.curso, a.division], function(err) {
        if (err) {
            res.status(500).send("Error al guardar");
        } else {
            res.send("Guardado");
        }
    });
});

app.get('/obtener', (req, res) => {
    db.all("SELECT * FROM alumnos", [], (err, filas) => {
        if (err) {
            res.status(500).json([]);
        } else {
            res.json(filas);
        }
    });
});

app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});
