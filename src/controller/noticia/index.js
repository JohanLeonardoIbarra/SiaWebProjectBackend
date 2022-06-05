import Noticia from "@Model/noticia";

const MostrarTodos = async (req, res) => {
  try {
    const noticias = await Noticia.findAll();
    res.status(200).json(noticias);
  } catch (err) {
    res.status(404).json({
      message: err.message,
    });
  }
};

const agregarNoticia = async (req, res) => {
  const { titulo, descripcion, mesa_id } = req.body;
  if (!titulo || !descripcion || !mesa_id) {
    res.status(400).json({ message: "Datos insuficientes" });
    return;
  }
  try {
    const noticia = await Noticia.create(req.body);
    res.status(200).send({ noticia, message: `Noticia creada con exito` });
  } catch (e) {
    res.status(400).send({ message: `Error al crear la noticia: ${e}` });
  }
};

const editarNoticia = async (req, res) => {
  let id = req.params.id;
  try {
    const noticia = await Noticia.findOne({
      where: {
        id: id,
      },
    });
    noticia.update(req.body);
    res.status(200).send({ noticia, message: `Noticia actualizada con exito` });
  } catch (e) {
    res.status(400).send({ message: `Error al actualizar la noticia ${e}` });
  }
};

const eliminarNoticia = async (req, res) => {
  let id = req.params.id;
  try {
    const noticia = await Noticia.findOne({
      where: {
        id: id,
      },
    });
    noticia.destroy();
    res.status(200).send({ message: `Noticia eliminada con exito` });
  } catch (e) {
    res.status(400).send({ message: `Error al eliminar la noticia ${e}` });
  }
};

export { MostrarTodos, agregarNoticia, editarNoticia, eliminarNoticia };
