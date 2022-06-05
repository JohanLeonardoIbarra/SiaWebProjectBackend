import Mesa from "@Model/mesa";

const mostrarTodos = async (req, res) => {
  const mesas = await Mesa.findAll();
  res.status(200).json(mesas);
};

const agregarMesa = async (req, res) => {
  const { nombre, correo, universidad_id } = req.body;
  if (!nombre || !correo || !universidad_id) {
    res.status(400).json({ message: "Datos insuficientes" });
    return;
  }
  try {
    const mesa = await Mesa.create(req.body);
    res.status(200).send({
      mesa,
      message: `Mesa creada con exito`,
    });
  } catch (e) {
    res.status(400).send({ message: `Error al crear la mesa: ${e}` });
  }
};

const editarMesa = async (req, res) => {
  let id = req.params.id;
  try {
    const mesa = await Mesa.findOne({
      where: {
        id: id,
      },
    });
    mesa.update(req.body);
    res.status(200).send({ mesa, message: `mesa actualizada con exito` });
  } catch (e) {
    res.status(400).send({ message: `Error al actualizar la mesa ${e}` });
  }
};

const eliminarMesa = async (req, res) => {
  let id = req.params.id;
  try {
    const mesa = await Mesa.findOne({
      where: {
        id: id,
      },
    });
    mesa.destroy();
    res.status(200).send({ message: `Mesa eliminada con exito` });
  } catch (e) {
    res.status(400).send({ message: `Error al eliminar la mesa ${e}` });
  }
};

export { mostrarTodos, agregarMesa, editarMesa, eliminarMesa };
