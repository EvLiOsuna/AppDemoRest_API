import mongoose from 'mongoose';
import {ENVIRONMENT,FORMATS_FOR_DATE_AND_TIME} from "../ENV";
const Schema=mongoose.Schema;

module.exports=mongoose.model('asignatura',new Schema
(
    {
        IdAsignatura:{type:Number},
        DesAsignatura:{type:String},
        Nombre:{type:String},
        Matricula:{type:Number},
        Actual:{type:Date},
        Credito:{type:Number},
        TipoAsignatura:{type:String},
        TipoN:{type:String},
        Activo:{type:String,default:'S'},
        Borrado:{type:String,default:'N'},
        FechaReg:{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        FechaUltMod:{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC}
    }
));