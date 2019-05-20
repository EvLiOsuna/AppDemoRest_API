import mongoose from 'mongoose';
import {ENVIRONMENT,FORMATS_FOR_DATE_AND_TIME} from "../ENV";
const Schema=mongoose.Schema;

module.exports=mongoose.model('docentes',new Schema
(
    {
        IdDocente:{type:Number},   //llave fk
        GradoEstudio:{type:String},
        Especialidad:{type:String},
        Activo:{type:String,default:'S'},
        Borrado: {type:String,default:'S'},
        FechaReg:{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        UsuarioReg:{type:String,default:'REST'},
        FechaUltMod:{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        UsuarioMod:{type:String,default:'REST'}, 
        IdPersona:{type:Number} //llave fk
    }
));