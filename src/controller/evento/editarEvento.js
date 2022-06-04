import evento from '@Model/evento';

export default async (req, res) => {
    let evId = req.params.id

    const {
        nombre, fechaInicio, fechaFin, descripcion, lugar, responsable, contacto, url, mesa
    } = req.body

    try {
        const Ev = await evento.findOne({
            where: {
                id: evId
            }
        });
        Ev.update({ nombre, fechaInicio, fechaFin, descripcion, lugar, responsable, contacto, url, mesa })
        res.status(200).send({ message: `Evento actualizado con exito` })
    } catch (e) {
        res.status(500).send({ message: `Error al actualizar evento: ${e}` })
    }
}