import evento from '@Model/evento';

export default async (req, res) => {
    let evId = req.params.id

    try {
        const Ev = await evento.findOne({
            where: {
                id: evId
            }
        });
        Ev.destroy();
        res.status(200).send({ message: `Evento eliminado con exito` })
    } catch (e) {
        res.status(500).send({ message: `Error al eliminar evento: ${e}` })
    }
}