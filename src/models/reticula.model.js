import mongoose from 'mongoose';
import {ENVIRONMENT,FORMATS_FOR_DATE_AND_TIME} from "../ENV";
const Schema=mongoose.Schema;

module.exports=mongoose.model('reticula',new Schema
(
    {
        ClaveReticula :{type:String},
        DesReticula :{type:String},
        Actual :{type:Date},
        FechaIni :{type:Date},
        FechaFin :{type:Date},
        TiposPlanEstudios :{type:String},
        Activo :{type:String,default:'S'},
        Borrado :{type:String,default:'N'},
        FechaReg :{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        UsuarioReg :{type:String,default:'REST'},
        FechaUltMod :{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        UsuarioMod :{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC}
    }
));