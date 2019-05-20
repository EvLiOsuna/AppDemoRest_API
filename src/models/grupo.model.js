import mongoose from 'mongoose';
import {ENVIRONMENT,FORMATS_FOR_DATE_AND_TIME} from "../ENV";
const Schema=mongoose.Schema;

module.exports=mongoose.model('grupo',new Schema
(
    {
        IdGrupo :{type:Number},
        Grupo:{type:String},
        FechaIni :{type:Date},
        FechaFin :{type:Date},
        Estatus :{type:String},
        Capacidad :{type:Number},
        Activo :{type:String,default:'S'},
        FechaReg :{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        UsuarioReg :{type:String,default:'REST'},
        FechaUltMod :{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        UsuarioMod :{type:String,default:FORMATS_FOR_DATE_AND_TIME().DATE_UTC},
        IdDocente :{type:Number},
        IdAsignatura :{type:Number},
        "Alumnos":
        [
            {
                IdAlumno:{type:Number}
            }
        ],
        "Horario":
        [
            {
                IdHorario:{type:Number}
            }
        ]
    }
));