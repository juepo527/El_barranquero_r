const mysql = require('mysql');
const cors = require('cors');
const express = require('express');
const app = express()

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'el_barranquero'
}
)

//PAGINA DEL MENU

app.get("/menu",(req, res)=>{
    db.query('SELECT * from menu',
    (err, result) =>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

//PAGINA DEL EDITAR MENU

app.get("/editarMenu",(req, res)=>{
    db.query('SELECT * from menu',
    (err, result) =>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    })
})

app.put("/editarMenu/update", (req,res)=>{
    const id = req.body.id_plato;
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const ingredientes = req.body.ingredientes;
    const precio = req.body.precio;
    const imagen = req.body.imagen;
    const categoria = req.body.categoria;
    const dia = req.body.dia;

    db.query('UPDATE menu SET nombre=?,descripcion=?,ingredientes=?,precio=?,categoria=?,dia=?,imagen=? WHERE id_plato=?',[nombre,descripcion,ingredientes,precio,categoria,dia,imagen,id],
    (err,result) =>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    }
    )
});

app.delete("/editarMenu/delete/:id", (req,res)=>{
    const id = req.params.id;

    db.query(`DELETE FROM menu WHERE id_plato=?;`,[id],
    (err,result) =>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    }
    )
});

app.post("/editarMenu/create", (req,res)=>{
    const nombre = req.body.nombre;
    const descripcion = req.body.descripcion;
    const ingredientes = req.body.ingredientes;
    const precio = req.body.precio;
    const imagen = req.body.imagen;
    const categoria = req.body.categoria;
    const dia = req.body.dia;

    db.query('INSERT INTO menu(nombre,descripcion,ingredientes,precio,categoria,dia,imagen) VALUES (?,?,?,?,?,?,?)',[nombre,descripcion,ingredientes,precio,categoria,dia,imagen],
    (err,result) =>{
        if(err){
            console.log(err);
        } else {
            res.send(result);
        }
    }
    )
});

//PÁGINA DE COMPRA

app.post("/datosCliente/create", (req,res)=>{
    const nombre = req.body.nombre
    const direccion = req.body.direccion
    const telefono = req.body.telefono
    const correo_electronico = req.body.correo_electronico
    const metodo = req.body.metodo
    const cartData = req.body.cartData
    const total = req.body.total

    db.query('INSERT INTO cliente(nombre,direccion,telefono,correo_electronico) VALUES (?,?,?,?)',[nombre,direccion,telefono,correo_electronico],
    (err,result)=>{
        if(err){
            console.log(err);
        } else {
            res.send(result)
        }
    })

    // db.query('INSERT INTO pedido(id_platos,total,metodo) VALUES (?,?,?)',[cartData,total,metodo],
    // (err,result) =>{
    //     if(err){
    //         console.log(err);
    //     } else {
    //         res.send(result);
    //     }
    // }
    // )
})

app.listen(3001, () => {
    console.log("Server is running on port 3001")
})