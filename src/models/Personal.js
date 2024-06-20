import { Schema, model } from "mongoose";

const personalSchema = new Schema({
    nombre:{
        type: String,
    },
    dni:{
        type: String,
    },
    area:{
        type: String,
    },
    recibo:{
        type: String
    },
    proyectos: [
        {
            ref: 'Proyect',
            type: Schema.Types.ObjectId,
            default: null
        }
    ]
},{
    timestamps: true
})

export default model("Personal", personalSchema)