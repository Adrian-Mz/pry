const Asignacion = require('../models/asignacionm');

// Crear una nueva asignación
exports.createAsignacion = async (req, res) => {
  try {
    const nuevaAsignacion = await Asignacion.create(req.body);
    res.status(201).json(nuevaAsignacion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todas las asignaciones
exports.getAsignaciones = async (req, res) => {
  try {
    const asignaciones = await Asignacion.findAll();
    res.status(200).json(asignaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una asignación por ID
exports.getAsignacionById = async (req, res) => {
  try {
    const asignacion = await Asignacion.findByPk(req.params.id);
    if (asignacion) {
      res.status(200).json(asignacion);
    } else {
      res.status(404).json({ message: 'Asignación no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una asignación por ID
exports.updateAsignacion = async (req, res) => {
  try {
    const [updated] = await Asignacion.update(req.body, {
      where: { id_asignacion: req.params.id }
    });
    if (updated) {
      const updatedAsignacion = await Asignacion.findByPk(req.params.id);
      res.status(200).json(updatedAsignacion);
    } else {
      res.status(404).json({ message: 'Asignación no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una asignación por ID
exports.deleteAsignacion = async (req, res) => {
  try {
    const deleted = await Asignacion.destroy({
      where: { id_asignacion: req.params.id }
    });
    if (deleted) {
      res.status(204).json({ message: 'Asignación eliminada' });
    } else {
      res.status(404).json({ message: 'Asignación no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
