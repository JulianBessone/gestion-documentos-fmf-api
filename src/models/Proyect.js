import { Schema, model } from "mongoose";

const proyectSchema = new Schema({
    nombreProyecto: {
        type: String
    },
    empresa: {
        type: String
    },
    docus: [
        {
            ref: 'Document',
            type: Schema.Types.ObjectId,
            default: null
        }
    ],

},{
    timestamps: true
})

export default model("Proyect", proyectSchema)