import { Schema, model } from "mongoose";

const unitSchema = new Schema({
    nombre:{
        type: String,
    },
    patente:{
        type: String,
    },
    id:{
        type: String,
    },
    chasisNro:{
        type: String,
    },
    kmactual:{
        type: String,
    },
    uso:{
        type: String,
    },
    servicio:{
        type: String,
    },
    chofer:{
        type: String,
    },
    tipo:{
        type: String,
    },
    status:{
        type: String
    },
    proyectos: [
        {
            ref: "Proyect",
            type: Schema.Types.ObjectId,
            default: null
        }
    ],
},{
    timestamps: true,
    versionKey: false
})

export default model("Unit", unitSchema)