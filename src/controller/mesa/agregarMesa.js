import mesa from '@Model/mesa';

export default async (req, res) => {
  const {
    nombre, descripcion, correo, universidad_id
  } = req.body

  try{
    const noti = await mesa.create({nombre, descripcion, correo, universidad_id});
    res.status(200).send({message: `Mesa creada con exito`})
  }catch(e){
    res.status(500).send({message: `Error al crear la mesa: ${e}`})
  }
}