import universidad from '@Model/universidad';


export default async (req, res) => {
 const {
   nombre, logo, responsable, ciudad, info 
 } = req.body

try{
  const Uni = await universidad.create({ nombre, logo, responsable, ciudad, info });  
    res.status(200).send({message: `Universidad creada con exito`})
} catch(e){
  res.status(500).send({message: `Error al crear nueva universidad: ${e}`})
}
  
}