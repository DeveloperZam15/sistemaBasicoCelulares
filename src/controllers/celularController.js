import Celulares from "../models/Celulares";

export const renderCelulares= async (req,res)=> {
    const celulares = await Celulares.find().lean();

    res.render("agregarCelulares", {celulares: celulares});
};

export const createCelulares =  async (req, res)=>{
    try {
        const celulares = Celulares(req.body);
        await celulares.save();
        res.redirect("/agregarCelular");
    } catch (error) {
        console.log(error);
    }
    //const alumnoAlmacenado = await alumnos.save();
    //console.log(alumnoAlmacenado);
    //res.send("Almacenó Alumno!");
};

export const renderEditCelulares = async (req,res)=> {
    try {
        const celulares = await Celulares.findById(req.params.id).lean();
        res.render("editarCelulares", {celulares});
    } catch (error) {
        console.log(error.message);
    }
};

export const updateCelulares = async (req, res) => {
    const {id} = req.params;
    await Celulares.findByIdAndUpdate(id, req.body);

    res.redirect("/agregarCelular");
};

export const deleteCelulares = async (req, res) => {
    const {id} = req.params;
    await Celulares.findByIdAndDelete(id);

    res.redirect("/agregarCelular");
};

export const statusCelulares = async (req, res) => {
    const {id} = req.params;
    const celulares = await Celulares.findById(id);
    //la propiedad opcion esta en Model
    celulares.opcion = !celulares.opcion;
    await celulares.save();

    res.redirect("/agregarCelular");
};