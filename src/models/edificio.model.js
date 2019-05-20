import mongoose from 'mongoose';
import {ENVIRONMENT, FORMATS_FOR_DATE_AND_TIME} from "../ENV";
const Schema = mongoose.Schema;

module.exports = mongoose.model('edificios', new Schema
(

    {
        IdEdificio:{type: Number},
        DesTipoCompetencia: {type: String},
        Nombre: {type: String},
        Ubicacion: {type: String},
        "Espacio":
        [
            {
                IdEspacio:{type:Number},
                Nombre:{type:String}
            }
        ]
    }
));