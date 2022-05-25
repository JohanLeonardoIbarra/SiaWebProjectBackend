import evento from '@Model/evento';

export default async (req, res) => {
  const {
    nombre, fechaInicio, fechaFin, descripcion, lugar, responsable, contacto, url, mesa
  } = req.body

  try{
    const even = await evento.create({nombre, fechaInicio, fechaFin, descripcion, lugar, responsable, contacto, url, mesa});
    res.status(200).send({message: `Evento creada con exito`})
  }catch(e){    res.status(500).send({message: `Error al crear evento: ${e}`})
  }
}