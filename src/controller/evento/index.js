import Evento from "@Model/evento";

const mostrarUno = async (req, res) => {
  try {
    const eventos = await Evento.findOne({
      where: { id: req.params.id },
    });
    res.status(200).json(eventos);
  } catch (err) {
    console.err(err);
    res.status(404).json({
      message: "Evento no encontrado",
    });
  }
};

const mostrarTodos = async (req, res) => {
  const eventos = await Evento.findAll();
  res.status(200).json(eventos);
};

const agregarEvento = async (req, res) => {
  const { nombre, fechaInicio, responsable, contacto, mesa_id, ...resto } =
    req.body;
  if (!nombre || !fechaInicio || !responsable || !contacto || !mesa_id) {
    res.status(400).json({ message: "Datos insuficientes" });
    return;
  }
  try {
    const evento = await Evento.create(req.body);
    res.status(200).send(evento);
  } catch (e) {
    res.status(400).send({ message: `Error al crear evento: ${e}` });
  }
};

const editarEvento = async (req, res) => {
  const id = req.params.id;
  try {
    const evento = await Evento.findOne({
      where: {
        id: id,
      },
    });
    evento.update(req.body);
    res.status(200).send({
      evento,
      message: `Evento actualizado con exito`,
    });
  } catch (e) {
    res.status(400).send({ message: `Error al actualizar evento: ${e}` });
  }
};

const eliminarEvento = async (req, res) => {
  let id = req.params.id;
  try {
    const evento = await Evento.findOne({
      where: {
        id: id,
      },
    });
    evento.destroy();
    res.status(200).send({
      evento,
      message: `Evento eliminado con exito`,
    });
  } catch (e) {
    res.status(400).send({ message: `Error al eliminar evento: ${e}` });
  }
};

export {
  mostrarTodos,
  mostrarUno,
  agregarEvento,
  editarEvento,
  eliminarEvento,
};
