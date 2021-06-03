
const express = require('express');
const cors= require('cors');
const rutas=require('../routes/routesreserves.js');
const { conectarBD }=require('../database/conexion.js');


class ServidorModelo {


    constructor(){

        
        this.app=express();
        this.despertarBaseDatos();
        this.crearMiddlewares();
        this.llamarRutasAPI();

    }

    

    despertarServidor(){

        
        this.app.listen(process.env.PORT,function(){
            console.log(`Connected ${process.env.PORT}`);
        });

    }

    llamarRutasAPI(){

        this.app.use('/',rutas);

    }

    despertarBaseDatos(){
        conectarBD();
    }

    crearMiddlewares(){

        this.app.use(express.json()); 
        this.app.use(express.urlencoded({extended:true})); 
        this.app.use(cors());


    }


}

module.exports=ServidorModelo;