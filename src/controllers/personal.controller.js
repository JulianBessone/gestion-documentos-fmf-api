import Personal from "../models/Personal";

export const postPersonal = async (req, res) =>{
    try {
        const { nombre, dni, area, recibo, proyectos} = req.body;

        const newPersonal = new Personal({
            nombre,
            dni,
            area,
            recibo,
            proyectos,
        })

        const savedPersonal = await newPersonal.save()

        res.status(201).json(savedPersonal)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getPersonal = async (req, res) =>{
    try{
        const personalList = await Personal.find()

        res.status(200).json(personalList)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getPersonalById = async (req, res) =>{
    try {
        const personal = await Personal.findById(req.params.id).populate('proyectos');

        res.status(200).json(personal)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

export const updatePersonal = async (req, res) =>{
    try {
        const updatedPersonal = await Personal.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })

        res.status(201).json(updatedPersonal)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

export const deletePersonal = async (req, res) => {
    try {
        const deletedPersonal = await Personal.findByIdAndDelete(req.params.id)
        res.status(200).json('Personal eliminado')
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}