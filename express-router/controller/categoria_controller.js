const express = require('express');
const app = express();

const data = [
    {
        id: 123,
        nombre:"POLOS"
    },
    {
        id: 124,
        nombre: "PANTALONES"
    }
]

//Listar categorias
function listar(req,res) {
    res.json({
       data:data
   }) 
}

//Guardar Categorai

function guardar(req,res) {
    res.json({
        message:"Guardado"
    })
}

function borrar(req,res) {
    res.json({
         message:'Eliminado'
     })
}

function actualizar(req,res) {
    res.json({
        message:'Actualizado'
    })
}

module.exports = {
    listar,
    guardar,
    borrar,
    actualizar
};