import mongoose from 'mongoose';
import {ENVIRONMENT,FORMATS_FOR_DATE_AND_TIME} from "../ENV";
const Schema=mongoose.Schema;

module.exports=mongoose.model('alumno',new Schema
(
    {
        IdAlumno:{type:Number},
        Semestre:{type:Number},
        EnRepeticion:{type:Number},
        Activo:{type:String,default:'S'},
        Borrado:{type:String,default:'N'},
        FechaReg:{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        FechaUltMod:{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        UsuarioReg:{type:String,default:'REST'},
        UsuarioMod:{type:String,default:'REST'},
        IdPersona:{type:Number}
    }
));