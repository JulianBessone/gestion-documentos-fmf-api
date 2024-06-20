import Unit from "../models/Unit";

export const postUnit = async (req, res) =>{
    try {
        const { nombre, patente, id, chasisNro, kmactual, servicio, uso, chofer, tipo, status, observaciones} = req.body;

        const newUnit = new Unit({
            nombre,
            patente,
            id,
            chasisNro,
            kmactual,
            servicio,
            uso,
            chofer,
            tipo,
            status,
            observaciones
        })
        const savedUnit = await newUnit.save()

        res.status(200).json(savedUnit)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

export const getUnits = async (req, res) =>{
    try {
        const units = await Unit.find()

        res.status(200).json(units)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}