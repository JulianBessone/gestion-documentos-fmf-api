import Config from "../models/Config"

// Controlador para crear una configuración
export const createConfig = async (req, res) => {
    try {
      const { name, fontSize } = req.body;
  
      // Crear una nueva instancia de Config con los datos proporcionados
      const newConfig = new Config({
        name,
        fontSize,
      });
  
      // Guardar la configuración en la base de datos
      const savedConfig = await newConfig.save();
  
      res.status(201).json(savedConfig);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al crear la configuración" });
    }
};

// Obtener todas las ventas
export const getConfigs = async (req, res) => {
    try {
        const configs = await Config.find();
        res.json(configs);
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error al obtener las ventas');
    }
};

export const updateConfigById = async (req, res) => {
    try {
        const { _id } = req.body;
        const updatedConfig = await Config.findByIdAndUpdate(req.body._id, req.body, {
            new: true
        })
        if (!updatedConfig) {
            return res.status(404).json({ message: "Configuración no encontrada" });
          }
        res.status(200).json(updatedConfig)
        
      
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error al actualizar la configuración" , error});
    }
};