const express = require('express');

const PORT = 3001
const app = express();



app.get('/', function (req, res) {
    res.json({ mensaje: '¡Hola Mundo!' })
})

app.get('/cervezas', function (req, res) {
    res.json({
        orders: [
            {
                marca: "poker",
                cantidad: 30
            },
            {
                marca: "aguila",
                cantidad: 50
            },
            {
                marca: "club",
                cantidad: 600
            },
        ],
        mensaje: '¡A beber cerveza!',
    })
})

app.post('/', function (req, res) {
    res.json({ mensaje: 'Método post' })
})

app.delete('/', function (req, res) {
    res.json({ mensaje: 'Método delete' })
})

// iniciamos nuestro servidor
app.listen(PORT, () => {
    console.log('Server running on port:', PORT)
})