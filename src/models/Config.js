import { Schema, model } from "mongoose";

const configSchema = new Schema({
    name: String,
    fontSize: {
        type: String,
        enum: ['Normal', 'Mediana', 'Grande'],
        default: 'Normal'
    },
    colorTheme: {
        type: String,
        enum: ['Light', 'Dark', 'Pink', 'Blue'],
        default: 'Light'
    }
},{
    versionKey: false
},{
    collection: 'config' // Nombre de la colección en la base de datos
  }
)

export default model("Config", configSchema)