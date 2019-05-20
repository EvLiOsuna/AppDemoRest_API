export const ENVIRONMENT={
    SERVER_PORT:process.env.PORT||3001,
    BD_URL_CONNECTION: {
        TESTING:'',
        //DEVELOPING: 'mongodb+srv://admin:Admin12345@appdemorest-arilk.mongodb.net/eva_soft?retryWrites=true',
        DEVELOPING:'mongodb://localhost:27017/eva_soft',
        PRODUCTION:''
    },
    ROUTES_MAIN_MODULES:{
        INDEX:'/',
        EVENTS:
        {
            NAME_ROUTE:'/api/events',
            ACTIONS:
            {
                GET_ZONES_LIST:'/getzoneslist',
                POST_ZONES:'/postzone',
                DELETE_ZONE:'/deletezone/:id',
                UPDATE_ZONE:'/updatezone/:id',

                //PERSONA

                GET_PERSONA:'/getpersona',
                POST_PERSONA:'/postpersona',
                DELETE_PERSONA:'/deletepersona/:id',
                UPDATE_PERSONA:'/updatepersona/:id',


                 //ALUMNO

                 GET_ALUMNO:'/getalumno',
                 POST_ALUMNO:'/postalumno',
                 DELETE_ALUMNO:'/deletealumno/:id',
                 UPDATE_ALUMNO:'/updatealumno/:id',

                 //ASIGNATURA

                GET_ASIGNATURA:'/getasignatura',
                POST_ASIGNATURA:'/postasignatura',
                DELETE_ASIGNATURA:'/deleteasignatura/:id',
                UPDATE_ASIGNATURA:'/updateasignatura/:id',


                 //DOCENTES

                 GET_DOCENTES:'/getdocentes',
                 POST_DOCENTES:'/postdocentes',
                 DELETE_DOCENTES:'/deletedocentes/:id',
                 UPDATE_DOCENTES:'/updatedocentes/:id',

                  //ESPECIALIDAD

                  GET_ESPECIALIDAD:'/getespecialidad',
                  POST_ESPECIALIDAD:'/postespecialidad',
                  DELETE_ESPECIALIDAD:'/deleteespecialidad/:id',
                  UPDATE_ESPECIALIDAD:'/updateespecialidad/:id',

                  //RETICULA

                  GET_RETICULA:'/getreticula',
                  POST_RETICULA:'/postreticula',
                  DELETE_RETICULA:'/deletereticula/:id',
                  UPDATE_RETICULA:'/updatereticula/:id',

                  //GRUPO

                  GET_GRUPO:'/getgrupo',
                  POST_GRUPO:'/postgrupo',
                  DELETE_GRUPO:'/deletegrupo/:id',
                  UPDATE_GRUPO:'/updategrupo/:id',

                  //CARRERA

                  GET_CARRERA:'/getcarrera',
                  POST_CARRERA:'/postcarrera',
                  DELETE_CARRERA:'/deletecarrera/:id',
                  UPDATE_CARRERA:'/updatecarrera/:id',

                  //EDIFICIO
                  
                  GET_EDIFICIO:'/getedificio',
                  POST_EDIFICIO:'/postedificio',
                  DELETE_EDIFICIO:'/deleteedificio/:id',
                  UPDATE_EDIFICIO:'/updateedificio/:id',

                   //HORARIO
                  
                   GET_HORARIO:'/gethorario',
                   POST_HORARIO:'/posthorario',
                   DELETE_HORARIO:'/deletehorario/:id',
                   UPDATE_HORARIO:'/updatehorario/:id'
            }
        }
    }
};
export const FORMATS_FOR_DATE_AND_TIME=(date=new Date())=>{
    return {
        DATE_STANDART:date,
        DATE_STRING:date.toDateString(),
        DATE_ISO:date.toISOString(),
        DATE_UTC:date.toUTCString(),
        TIME_STANDART:date.toTimeString(),
        DATE_TIME_SUBDOCUMENT:{
            DATE:{
                YEAR:date.getFullYear(),
                MONTH:date.getMonth()+1,
                DAY:date.getDate()
            },
            TIME:{
                HOUR:date.getHours(),
                MINUTES:date.getMinutes(),
                SECONDS:date.getSeconds()
            }
        },
        DATE:{
            YEAR:date.getFullYear(),
            MONTH:date.getMonth()+1,
            DAY:date.getDate()
        },
        TIME:{
            HOUR:date.getHours(),
            MINUTES:date.getMinutes(),
            SECONDS:date.getSeconds()
        },
        DAY_WEEK:{
            NUMBER:date.getDate(),
            TEXT:GET_DAY_WEEK_TEXT(date.getDay())
        }
    }
};
const GET_DAY_WEEK_TEXT=(day)=>{
    switch (day) {
        case 1:
            return "LUNES";
        case 2:
            return "MARTES";
        case 3:
            return "MIERCOLES";
        case 4:
            return "JUEVES";
        case 5:
            return "VIERNES";
        case 6:
            return "SABADO";
        case 7:
            return "DOMINGO";
    }
};