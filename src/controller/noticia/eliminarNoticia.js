import noticia from '@Model/noticia';

export default async (req, res) => {

    let notId = req.params.id

    try {
        const Noti = await noticia.findOne({
            where: {
                id: notId
            }
        });
        Noti.destroy()
        res.status(200).send({ message: `Noticia eliminada con exito` })
    } catch (e) {
        res.status(500).send({ message: `Error al eliminar la noticia ${e}` })
    }


}