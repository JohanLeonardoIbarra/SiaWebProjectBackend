import noticia from '@Model/noticia';

export default async (req, res) => {

    let notId = req.params.id

    const {
        titulo, descripcion, autor, categoria, mesa
    } = req.body

    try {
        const Noti = await noticia.findOne({
            where: {
                id: notId
            }
        });
        Noti.update({ titulo, descripcion, autor, categoria, mesa })
        res.status(200).send({ message: `Noticia actualizada con exito` })
    } catch (e) {
        res.status(500).send({ message: `Error al actualizar la noticia ${e}` })
    }


}