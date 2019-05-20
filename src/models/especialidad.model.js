import mongoose from 'mongoose';
import {ENVIRONMENT,FORMATS_FOR_DATE_AND_TIME} from "../ENV";
const Schema=mongoose.Schema;

module.exports=mongoose.model('especialidad',new Schema
(
    {
        IdEspecialidad:{type:Number},
        Activo:{type:String,default:'S'},
        FechaIni:{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        FechaFin:{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        FechaReg:{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        UsuarioReg:{type:String,default:'REST'},
        FechaUltMod:{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        Borrado:{type:String,default:'N'},
        UsuarioMod:{type:String,default:'REST'},
        "cat_especialidad":
        [
            {
                Id_Cat_Esp:{type:Number},
                Id_Especialidad:{type:Number}
            }
        ]
    }
));