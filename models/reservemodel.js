//Traigo de mongoose el modelo y el schema de datos
const {model, Schema}=require('mongoose');

//creo el esqueleto de datos que va a tener cada documento (bolsa) de mi colección
const reservas=Schema({

  
    hotel:{
        type:String,
        required:true
    },
    type:{
        type:Number,
        required:true,
    },
    days:{
        type:String,
        required:true
    },
    beds:{
        type:String,
        required:true
    }
    

});

module.exports=model('Reserva',reservas);