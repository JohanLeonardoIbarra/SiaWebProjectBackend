import evento from "@Model/evento"

export default async (req, res) => {
    try{
      const eventos = await evento.findOne({
      where: { id: req.params.id }
    })
    res.status(200).json(eventos)
    }
  catch(err){
    console.err(err);
    res.status(500).json({
      message: err.message,
    })
  }
}
