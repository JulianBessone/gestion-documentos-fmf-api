import Document from "../models/Document";

export const postDocument = async (req, res) =>{
    try {
        const { nombre, estado, vto, frecuencia, url, fechaPresentacion, tipo, idPersonal, idProyecto} = req.body;

        const newDocument = new Document({
            nombre,
            estado,
            vto,
            frecuencia,
            url,
            fechaPresentacion,
            tipo,
            idPersonal,
            idProyecto
        })

        const savedDocument = await newDocument.save()

        res.status(201).json(savedDocument)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getDocument = async (req, res) =>{
    try{
        const documentList = await Document.find()

        res.status(200).json(documentList)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const getDocumentById = async (req, res) =>{
    try {
        const document = await Document.findById(req.params.id).populate('idProyecto').populate('idPersonal');
        res.status(200).json(document)
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}

export const updateDocument = async (req, res) =>{
    try {
        const updatedDocument = await Document.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        })

        res.status(201).json(updatedDocument)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    }
}

export const deleteDocument = async (req, res) => {
    try {
        const deletedDocument = await Document.findByIdAndDelete(req.params.id)
        res.status(200).json('Document eliminado')
    } catch (error) {
        console.log(error)
        res.status(500).json(error)
    }
}