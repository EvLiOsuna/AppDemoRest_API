import express from 'express';
import {ENVIRONMENT} from "../ENV";

import
{
    GetZonesList,
    PostZone,
    DeleteZone,
    UpdateZone,

    //persona
    GetPersona,
    PostPersona,
    DeletePersona,
    UpdatePersona,

    //Alumno
    PostAlumno,
    GetAlumno,
    DeleteAlumno,
    UpdateAlumno,

    //Asignatura
    PostAsignatura,
    GetAsignatura,
    DeleteAsignatura,
    UpdateAsignatura,

    //Docentes
    PostDocentes,
    GetDocentes,
    DeleteDocentes,
    UpdateDocentes,

    //Especialidad
    PostEspecialidad,
    GetEspecialidad,
    DeleteEspecialidad,
    UpdateEspecialidad,

    //reticula
    PostReticula,
    GetReticula,
    DeleteReticula,
    UpdateReticula,

    //Grupo
    PostGrupo,
    GetGrupo,
    DeleteGrupo,
    UpdateGrupo,

    //Grupo
    PostCarrera,
    GetCarrera,
    DeleteCarrera,
    UpdateCarrera,

    //Edificio
    PostEdificio,
    GetEdificio,
    DeleteEdificio,
    UpdateEdificio,

    //Horario
    PostHorario,
    GetHorario,
    DeleteHorario,
    UpdateHorario




} from '../controllers/events.controller';

const router=express.Router();
router.get(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.GET_ZONES_LIST,GetZonesList);
router.post(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.POST_ZONES,PostZone);
router.delete(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.DELETE_ZONE,DeleteZone);
router.put(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.UPDATE_ZONE,UpdateZone);


//ROUTE PARA PERSONA
router.get(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.GET_PERSONA,GetPersona);
router.post(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.POST_PERSONA,PostPersona);
router.delete(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.DELETE_PERSONA,DeletePersona);
router.put(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.UPDATE_PERSONA,UpdatePersona);

//ROUTE PARA ALUMNO
router.get(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.GET_ALUMNO,GetAlumno);
router.post(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.POST_ALUMNO,PostAlumno);
router.delete(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.DELETE_ALUMNO,DeleteAlumno);
router.put(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.UPDATE_ALUMNO,UpdateAlumno);

//ROUTE PARA ASIGNATURA
router.get(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.GET_ASIGNATURA,GetAsignatura);
router.post(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.POST_ASIGNATURA,PostAsignatura);
router.delete(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.DELETE_ASIGNATURA,DeleteAsignatura);
router.put(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.UPDATE_ASIGNATURA,UpdateAsignatura);

//ROUTE PARA DOCENTES
router.get(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.GET_DOCENTES,GetDocentes);
router.post(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.POST_DOCENTES,PostDocentes);
router.delete(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.DELETE_DOCENTES,DeleteDocentes);
router.put(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.UPDATE_DOCENTES,UpdateDocentes);

//ROUTE PARA ESPECIALIDAD
router.get(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.GET_ESPECIALIDAD,GetEspecialidad);
router.post(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.POST_ESPECIALIDAD,PostEspecialidad);
router.delete(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.DELETE_ESPECIALIDAD,DeleteEspecialidad);
router.put(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.UPDATE_ESPECIALIDAD,UpdateEspecialidad);

//ROUTE PARA RETICULA
router.get(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.GET_RETICULA,GetReticula);
router.post(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.POST_RETICULA,PostReticula);
router.delete(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.DELETE_RETICULA,DeleteReticula);
router.put(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.UPDATE_RETICULA,UpdateReticula);

//ROUTE PARA GRUPO
router.get(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.GET_GRUPO,GetGrupo);
router.post(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.POST_GRUPO,PostGrupo);
router.delete(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.DELETE_GRUPO,DeleteGrupo);
router.put(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.UPDATE_GRUPO,UpdateGrupo);

//ROUTE PARA CARRERA
router.get(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.GET_CARRERA,GetCarrera);
router.post(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.POST_CARRERA,PostCarrera);
router.delete(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.DELETE_CARRERA,DeleteCarrera);
router.put(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.UPDATE_CARRERA,UpdateCarrera);

//ROUTE PARA EDIFICIO
router.get(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.GET_EDIFICIO,GetEdificio);
router.post(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.POST_EDIFICIO,PostEdificio);
router.delete(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.DELETE_EDIFICIO,DeleteEdificio);
router.put(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.UPDATE_EDIFICIO,UpdateEdificio);

//ROUTE PARA HORARIO
router.get(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.GET_HORARIO,GetHorario);
router.post(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.POST_HORARIO,PostHorario);
router.delete(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.DELETE_HORARIO,DeleteHorario);
router.put(ENVIRONMENT.ROUTES_MAIN_MODULES.EVENTS.ACTIONS.UPDATE_HORARIO,UpdateHorario);




module.exports=router;