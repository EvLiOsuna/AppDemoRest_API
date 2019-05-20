import {FORMATS_FOR_DATE_AND_TIME} from "../ENV";
import Cat_zonas from '../models/cat_zonas.model';

import Persona from '../models/persona.model';
import Alumno from '../models/alumno.model';
import Asignatura from '../models/asignatura.model';
import Docentes from '../models/docentes.model';
import Especialidad from '../models/especialidad.model';
import Reticula from '../models/reticula.model';
import Grupos from '../models/grupo.model';
import Carrera from '../models/carrera.model';
import Edificio from '../models/edificio.model';
import Horario from '../models/horario.model';

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

//METODO PUT
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









// P E R S O N A 

//METODO GET
exports.GetPersona=async (req,res)=>{
    await Persona.find()
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                        :res.status(404).send("No se encontraron Personas");
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
exports.PostPersona=async (req,res)=>{
    const pers=req.body;
    await Persona.create(pers)
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Personas");
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
exports.DeletePersona=async (req,res)=>{
    const pers=req.params.id;
    await Persona.deleteOne({IdPersona:pers})
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Personas");
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
exports.UpdatePersona=async (req,res)=>{
    const pers=req.params.id;
    const nombre=req.body.Nombre;
    const apellido=req.body.Apellido;
    const telefono=req.body.Telefono;
    await Persona.updateOne({IdPersona:pers},{$set:{Nombre:nombre,Apellido:apellido,Telefono:telefono}})
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Personas");
            }
        )
        .catch
        (err =>
            {
                return res.status(500).send(err);
            }
        )
};








// A L U M N O 

//METODO GET
exports.GetAlumno=async (req,res)=>{
    await Alumno.find()
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                        :res.status(404).send("No se encontraron Personas");
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
exports.PostAlumno=async (req,res)=>{
    const alum=req.body;
    await Alumno.create(alum)
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Alumnos");
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
exports.DeleteAlumno=async (req,res)=>{
    const alum=req.params.id;
    await Alumno.deleteOne({IdAlumno:alum})
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Alumnos");
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
exports.UpdateAlumno=async (req,res)=>{
    const alum=req.params.id;
    const semestre=req.body.Semestre;
    await Alumno.updateOne({IdAlumno:alum},{$set:{Semestre:semestre}})
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Alumnos");
            }
        )
        .catch
        (err =>
            {
                return res.status(500).send(err);
            }
        )
};







// A S I G N A T U R A 

//METODO GET
exports.GetAsignatura=async (req,res)=>{
    await Asignatura.find()
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                        :res.status(404).send("No se encontraron Asignaturas");
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
exports.PostAsignatura=async (req,res)=>{
    const asig=req.body;
    await Asignatura.create(asig)
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Asignaturas");
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
exports.DeleteAsignatura=async (req,res)=>{
    const asig=req.params.id;
    await Asignatura.deleteOne({IdAsignatura:asig})
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Asignaturas");
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
exports.UpdateAsignatura=async (req,res)=>{
    const asig=req.params.id;
    const descripcion=req.body.DesAsignatura;
    await Asignatura.updateOne({IdAsignatura:asig},{$set:{DesAsignatura:descripcion}})
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Alumnos");
            }
        )
        .catch
        (err =>
            {
                return res.status(500).send(err);
            }
        )
};







// D O C E N T E S 

//METODO GET
exports.GetDocentes=async (req,res)=>{
    await Docentes.find()
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                        :res.status(404).send("No se encontraron Asignaturas");
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
exports.PostDocentes=async (req,res)=>{
    const doc=req.body;
    await Docentes.create(doc)
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Asignaturas");
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
exports.DeleteDocentes=async (req,res)=>{
    const doc=req.params.id;
    await Docentes.deleteOne({IdDocente:doc})
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Asignaturas");
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
exports.UpdateDocentes=async (req,res)=>{
    const doc=req.params.id;
    const esp=req.body.Especialidad;
    await Docentes.updateOne({IdDocente:doc},{$set:{Especialidad:esp}})
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Alumnos");
            }
        )
        .catch
        (err =>
            {
                return res.status(500).send(err);
            }
        )
};







// E S P E C I A L I D A D

//METODO GET
exports.GetEspecialidad=async (req,res)=>{
    await Especialidad.find()
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                        :res.status(404).send("No se encontraron Asignaturas");
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
exports.PostEspecialidad=async (req,res)=>{
    const esp=req.body;
    await Especialidad.create(esp)
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Asignaturas");
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
exports.DeleteEspecialidad=async (req,res)=>{
    const esp=req.params.id;
    await Especialidad.deleteOne({IdEspecialidad:esp})
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Asignaturas");
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
exports.UpdateEspecialidad=async (req,res)=>{
    const esp=req.params.id;
    const activo=req.body.Activo;
    await Especialidad.updateOne({IdEspecialidad:esp},{$set:{Activo:activo}})
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Alumnos");
            }
        )
        .catch
        (err =>
            {
                return res.status(500).send(err);
            }
        )
};







// R E T I C U L A

//METODO GET
exports.GetReticula=async (req,res)=>{
    await Reticula.find()
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                        :res.status(404).send("No se encontraron Asignaturas");
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
exports.PostReticula=async (req,res)=>{
    const ret=req.body;
    await Reticula.create(ret)
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Asignaturas");
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
exports.DeleteReticula=async (req,res)=>{
    const ret=req.params.id;
    await Reticula.deleteOne({ClaveReticula:ret})
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Asignaturas");
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
exports.UpdateReticula=async (req,res)=>{
    const ret=req.params.id;
    const descripcion=req.body.DesReticula;
    await Reticula.updateOne({ClaveReticula:ret},{$set:{DesReticula:descripcion}})
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Alumnos");
            }
        )
        .catch
        (err =>
            {
                return res.status(500).send(err);
            }
        )
};








// G R U P O S 

//METODO GET
exports.GetGrupo=async (req,res)=>{
    await Grupos.find()
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                        :res.status(404).send("No se encontraron Asignaturas");
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
exports.PostGrupo=async (req,res)=>{
    const grupo=req.body;
    await Grupos.create(grupo)
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Asignaturas");
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
exports.DeleteGrupo=async (req,res)=>{
    const grupo=req.params.id;
    await Grupos.deleteOne({IdGrupo:grupo})
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Asignaturas");
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
exports.UpdateGrupo=async (req,res)=>{
    const gru=req.params.id;
    const grupo=req.body.Grupo;
    const capacidad=req.body.Capacidad;
    const estatus=req.body.Estatus;
    await Grupos.updateOne({IdGrupo:gru},{$set:{Grupo:grupo,Capacidad:capacidad,Estatus:estatus}})
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Alumnos");
            }
        )
        .catch
        (err =>
            {
                return res.status(500).send(err);
            }
        )
};










// C A R R E R A 

//METODO GET
exports.GetCarrera=async (req,res)=>{
    await Carrera.find()
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                        :res.status(404).send("No se encontraron Asignaturas");
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
exports.PostCarrera=async (req,res)=>{
    const car=req.body;
    await Carrera.create(car)
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Asignaturas");
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
exports.DeleteCarrera=async (req,res)=>{
    const car=req.params.id;
    await Carrera.deleteOne({ClaveCarrera:car})
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Asignaturas");
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
exports.UpdateCarrera=async (req,res)=>{
    const car=req.params.id;
    const descripcion=req.body.DesCarrera;
    await Carrera.updateOne({ClaveCarrera:car},{$set:{DesCarrera:descripcion}})
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Alumnos");
            }
        )
        .catch
        (err =>
            {
                return res.status(500).send(err);
            }
        )
};










// E D I F I C I O 

//METODO GET
exports.GetEdificio=async (req,res)=>{
    await Edificio.find()
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                        :res.status(404).send("No se encontraron Asignaturas");
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
exports.PostEdificio=async (req,res)=>{
    const ed=req.body;
    await Edificio.create(ed)
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Asignaturas");
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
exports.DeleteEdificio=async (req,res)=>{
    const ed=req.params.id;
    await Edificio.deleteOne({IdEdificio:ed})
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Asignaturas");
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
exports.UpdateEdificio=async (req,res)=>{
    const ed=req.params.id;
    const nombre=req.body.Nombre;
    await Edificio.updateOne({IdEdificio:ed},{$set:{Nombre:nombre}})
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Alumnos");
            }
        )
        .catch
        (err =>
            {
                return res.status(500).send(err);
            }
        )
};









// H O R A R I O

//METODO GET
exports.GetHorario=async (req,res)=>{
    await Horario.find()
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                        :res.status(404).send("No se encontraron Asignaturas");
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
exports.PostHorario=async (req,res)=>{
    const hora=req.body;
    await Horario.create(hora)
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Asignaturas");
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
exports.DeleteHorario=async (req,res)=>{
    const hora=req.params.id;
    await Horario.deleteOne({IdHorario:hora})
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Asignaturas");
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
exports.UpdateHorario=async (req,res)=>{
    const hora=req.params.id;
    const activo=req.body.Activo;
    await Horario.updateOne({IdHorario:hora},{$set:{Activo:activo}})
        .then
        (data=>
            {
                return (data.length==0||data!=null)?res.status(200).json(data)
                    :res.status(404).send("No se encontraron Alumnos");
            }
        )
        .catch
        (err =>
            {
                return res.status(500).send(err);
            }
        )
};