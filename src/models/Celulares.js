import { Schema, model } from "mongoose";

const celularEsquema = new Schema(
    {
        clave:{
            type:String,
            required: true,
            trim: true,
        },
        marca:{
            type:String,
            required: true,
        },
        precio:{
            type:Number,
            required: true
        },
        fechaLanzamiento:{
            type:Date,
            required: true,
        },
        ram:{
            type:String,
            required: true
        },
        almacenamiento:{
            type:String,
            required: true
        },
        cantCamaras:{
            type:Number,
            required: true
        },
        opcion: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false

    }
);
// Se crea el modelo de datos como quiero que se llame la collection
export default model("Celular", celularEsquema)