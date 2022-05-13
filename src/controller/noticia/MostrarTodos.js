import Noticia from "@Model/noticia";

export const MostrarTodos = async (req, res)=>{
  try{
    const noticias = await Noticia.findAll();
    res.status(200).json(noticias);
  }catch(err){
    res.status(500).json({
      message: err.message
    });
  }
}