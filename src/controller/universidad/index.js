import Universidad from "@Model/universidad";

const mostrarTodos = async (req, res) => {
  const universidades = await Universidad.findAll();
  res.status(200).json(universidades);
};

const agregarUni = async (req, res) => {
  const { nombre, logo, responsable, ciudad } = req.body;
  if (!nombre || !logo || !responsable || !ciudad) {
    res.status(400).json({ message: "Datos insuficientes" });
    return;
  }
  try {
    const universidad = await Universidad.create(req.body);
    res.status(200).send({
      universidad,
      message: `Universidad creada con exito`,
    });
  } catch (e) {
    res.status(400).send({ message: `Error al crear nueva universidad: ${e}` });
  }
};

const editarUni = async (req, res) => {
  let id = req.params.id;
  try {
    const universidad = await Universidad.findOne({
      where: {
        id: id,
      },
    });
    universidad.update(req.body);
    res.status(200).send({
      universidad,
      message: `Universidad actualizada con exito`,
    });
  } catch (e) {
    res
      .status(400)
      .send({ message: `Error al actualizar la universidad: ${e}` });
  }
};

const eliminarUni = async (req, res) => {
  let id = req.params.id;
  try {
    const universidad = await Universidad.findOne({
      where: {
        id: id,
      },
    });
    universidad.destroy();
    res.status(200).send({ message: `Universidad eliminada con exito` });
  } catch (e) {
    res.status(400).send({ message: `Error al eliminar la universidad: ${e}` });
  }
};

export { mostrarTodos, agregarUni, editarUni, eliminarUni };
