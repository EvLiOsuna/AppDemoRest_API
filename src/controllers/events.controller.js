import {FORMATS_FOR_DATE_AND_TIME} from "../ENV";
import Cat_zonas from '../models/cat_zonas.model';

//METODO GET
exports.GetZonesList=async (req,res)=>{
    await Cat_zonas.find()
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                        :res.status(404).send("No se encontraron Zonas");
            }
        )
        .catch
        (err =>
            {
                return res.status(500).send(err);
            }
        )
};

//METODO PUT
exports.PostZone=async (req,res)=>{
    const zona=req.body;
    await Cat_zonas.create(zona)
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Zonas");
            }
        )
        .catch
        (err =>
            {
                return res.status(500).send(err);
            }
        )
};


//METODO DELETE
exports.DeleteZone=async (req,res)=>{
    const zona=req.params.id;
    await Cat_zonas.deleteOne({IdZona:zona})
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Zonas");
            }
        )
        .catch
        (err =>
            {
                return res.status(500).send(err);
            }
        )
};

//METODO UPDATE
exports.UpdateZone=async (req,res)=>{
    const zona=req.params.id;
    const descripcion=req.body.DesZona;
    const usuariom=req.body.UsuarioMod;
    const usuario=req.body.UsuarioReg;
    await Cat_zonas.updateOne({IdZona:zona},{$set:{DesZona:descripcion,FechaUltMod:FORMATS_FOR_DATE_AND_TIME().DATE_UTC,UsuarioMod:usuariom,UsuarioReg:usuario}})
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Zonas");
            }
        )
        .catch
        (err =>
            {
                return res.status(500).send(err);
            }
        )
};