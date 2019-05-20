import mongoose from 'mongoose';
import {ENVIRONMENT,FORMATS_FOR_DATE_AND_TIME} from "../ENV";
const Schema=mongoose.Schema;

module.exports=mongoose.model('carrera',new Schema
(
    {
        ClaveCarrera :{type:Number},
        ClaveOficial :{type:String},
        DesCarrera :{type:String} ,
        Alias:{type:String},
        Creditos:{type:Number},
        FechaIni: {type: String, default: FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        FechaUltFin: {type: String, default: FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        Activo: {type: String, default: 'S'},
        Borrado: {type: String, default: 'N'},
        FechaReg: {type: String, default: FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        UsuarioMod: {type: String, default: 'REST'},
        "eva_cat_especialidad" :
        [
            {
                IdEspecialidad :0,
                Activo: {type: String, default: 'S'},
                Borrado: {type: String, default: 'N'},
                FechaIni: {type: String, default: FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
                FechaUltFin: {type: String, default: FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
                FechaReg: {type: String, default: FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
                UsuarioReg: {type: String, default: 'REST'},
                FechaUltMod: {type: String, default: FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
                UsuarioMod: {type: String, default: 'REST'}
            }
        ]
    }
));