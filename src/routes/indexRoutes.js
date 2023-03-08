import {Router} from "express";

//La de abajo se elimina porque ya no ocupamos el modelo desde models sino desde el controlador

//import Asignaturas from "../models/Asignaturas";
//import Alumnos from "../models/Alumnos";
//import Profesores from "../models/Profesores";

import { redirect } from "express/lib/response";

import { createCelulares, deleteCelulares, renderCelulares, renderEditCelulares, statusCelulares, updateCelulares } from "../controllers/celularController";

const router = Router();

router.get("/", async (req,res)=> {
    res.render("index", {});
});

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

router.get("/agregarCelular/", renderCelulares);

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

router.post("/celulares/agregar",createCelulares);


//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

router.get("/updateCelulares/:id", renderEditCelulares);


//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

router.post("/updateCelulares/:id", updateCelulares);

//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

router.get("/deleteCelulares/:id", deleteCelulares);


//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------

router.get("/statusCelulares/:id", statusCelulares);

export default router;