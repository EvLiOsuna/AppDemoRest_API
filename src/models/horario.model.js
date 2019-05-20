import mongoose from 'mongoose';
import {ENVIRONMENT,FORMATS_FOR_DATE_AND_TIME} from "../ENV";
const Schema=mongoose.Schema;

module.exports=mongoose.model('horario',new Schema
(
    {
        
        IdHorario:{type:Number},
        Dia:{type:String},
        HorarioInicio:{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        HorarioFin:{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        ToleranciaInicio:{type:Number},
        ToleranciaFin:{type:Number},
        IdEdificio:{type:Number},
        IdEspacio:{type:Number},
        Activo:{type:String,default:'S'},
        Borrado:{type:String,default:'N'},
        FechaUltMod:{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        FechaReg:{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        "Periodo":
        [
            {
                IdPeriodo:{type:Number},
                Periodo:{type:String}
            }
        ]
    }
));