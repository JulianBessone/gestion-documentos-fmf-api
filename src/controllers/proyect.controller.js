import Proyect from "../models/Proyect";

export const postProyects = async (req, res) =>{
    try {
        const { nombreProyecto, empresa, docus} = req.body;

        const newProyect = new Proyect({
            nombreProyecto,
            empresa,
            docus,
        })

        const savedProyect = await newProyect.save()

        res.status(201).json(savedProyect)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getProyects = async (req, res) =>{
    try{
        const proyectsList = await Proyect.find()

        res.status(200).json(proyectsList)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getProyectById = async (req, res) =>{
    try {
        const proyect = await Proyect.findById(req.params.id).populate('docus');

        res.status(200).json(proyect)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

export const updateProyect = async (req, res) =>{
    try {
        const updatedProyect = await Proyect.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })

        res.status(201).json(updatedProyect)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

export const deleteProyect = async (req, res) => {
    try {
        const deletedProyect = await Proyect.findByIdAndDelete(req.params.id)
        res.status(200).json('Proyecto eliminado')
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}