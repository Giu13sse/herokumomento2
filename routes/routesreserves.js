//TRAIGO EL METODO ROUTER DE EXPRESS PARA PERSONALIZAR MIS RUTAS
const { Router }= require('express');

//IMPORTAR(TRAER) LOS CONTROLADORES
const { searchReserve }= require('../controllers/reservecontrol.js');
const { addReserve }= require('../controllers/reservecontrol.js');
const { editReserves }= require('../controllers/reservecontrol.js');
const { deleteReserves }= require('../controllers/reservecontrol.js');

//IMPORTAR LAS VALIDACIONES
const {validarPeticion}=require('../validations/validaciones.js');

//IMPORTAR EL METODO CHECK DEL EXPRESS VALIDATOR
const {check}=require('express-validator');


//CREAR LA LISTA DE VALIDACIONES (arreglo)
let validaciones=Array(

    check('hotel',"This dato is mandatory").not().isEmpty(),
    check('type',"This dato is mandatory").not().isEmpty(),
    check('days',"This dato is mandatory").not().isEmpty(),
    check('beds',"This dato is mandatory").not().isEmpty(),
    validarPeticion

);

//PERSONALIZO MIS RUTAS:
const rutas=Router();


//LISTADO DE RURAS
rutas.get('/reservas',searchReserve);
rutas.post('/reserva/nuevo',validaciones,addReserve);
rutas.put('/reserva/editar/:id',editReserves);
rutas.delete('/reserva/eliminar/:id',deleteReserves)

//EXPORTO LAS RUTAS
module.exports=rutas;
