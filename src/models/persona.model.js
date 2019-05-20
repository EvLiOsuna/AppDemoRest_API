import mongoose from 'mongoose';
import {ENVIRONMENT,FORMATS_FOR_DATE_AND_TIME} from "../ENV";
const Schema=mongoose.Schema;

module.exports=mongoose.model('persona',new Schema
(
    {
        IdPersona :{type:Number},
        Nombre :{type:String},
        Apellido :{type:String},
        FechaNac :{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        Direccion :{type:String},
        Telefono :{type:Number},
        Sexo :{type:String}
    }
));