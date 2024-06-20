import { Schema, model } from "mongoose";

const documentSchema = new Schema({
    nombre: {
        type: String
    },
    estado: {
        type: String
    },
    vto: {
        type: String
    },
    frecuencia: {
        type: String
    },
    url: {
        type: String
    },
    fechaPresentacion: {
        type: String
    },
    tipo: {
        type: String
    },
    idPersonal: { type: Schema.Types.ObjectId, ref: 'Personal' },
    idProyecto: { type: Schema.Types.ObjectId, ref: 'Proyect' }

},{
    timestamps: true
})

export default model("Document", documentSchema)