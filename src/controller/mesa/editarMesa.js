import mesa from '@Model/mesa';

export default async (req, res) => {
    let mesaId = req.params.id

    const {
        nombre, descripcion, correo, universidad_id
    } = req.body

    try {

        const Mesa = await mesa.findOne({
            where: {
                id: mesaId
            }
        });
        Mesa.update({ nombre, descripcion, correo, universidad_id })
        res.status(200).send({ message: `mesa actualizada con exito` })
    } catch (e) {
        res.status(500).send({ message: `Error al actualizar la mesa ${e}` })
    }


}