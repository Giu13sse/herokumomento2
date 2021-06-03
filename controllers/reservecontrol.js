//Importar de express las varibles rquest y response
const { request,response }=require('express');

//Importar el modelo de datos del API
const reserveModel=require('../models/reservemodel.js');


//SE CREAN FUNCIONES PARA CADA UNO DE LOS SERVICIOS QUE PRESTARÁ EL API
//(EL MENÚ DEL RESTAURANTE)

async function searchReserve(peticion=request,respuesta=response){

    let datosconsultados=await reserveModel.find();

    respuesta.json({
        estado:true,
        mensaje:datosconsultados
    });
  
}

async function addReserve(peticion=request,respuesta=response){

    let datareserves=peticion.body;

    let reserve=new reserveModel(datareserves);
    await reserve.save();
    
    respuesta.json({
        estado:true,
        mensaje:'Added Reserve Successfully',
        datos:reserve
    });

}

async function editReserves(peticion=request,respuesta=response){

    let id=peticion.params.id;
    let datareserves=peticion.body;

    await JugadorModelo.findByIdAndUpdate(id,datareserves);


    respuesta.json({
        estado:true,
        mensaje:'Updated Reserve Successfully'
    });

}

async function deleteReserves(peticion=request,respuesta=response){

    let id=peticion.params.id;
    await JugadorModelo.findByIdAndDelete(id);

    respuesta.json({
        estado:true,
        mensaje:'Deleted Reserve Successfully'
    });

}


//EXPORTO(ENVIO) TODAS LAS FUNCIONES HACIA EL ARCHIVO DE RUTAS
module.exports={
    searchReserve,
    addReserve,
    editReserves,
    deleteReserves
}