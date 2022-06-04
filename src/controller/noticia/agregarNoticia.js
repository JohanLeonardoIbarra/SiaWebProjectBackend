import noticia from '@Model/noticia';

export default async (req, res) => {
  const {
    titulo, descripcion, autor, categoria, mesa
  } = req.body

  try{
    const noti = await noticia.create({titulo, descripcion, autor, categoria, mesa});
    res.status(200).send({message: `Noticia creada con exito`})
  } catch(e){
    res.status(500).send({message: `Error al crear la noticia: ${e}`})
  }
}