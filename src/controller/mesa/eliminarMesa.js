import mesa from '@Model/mesa';

export default async (req, res) => {
    let mesaId = req.params.id

    try {

        const Mesa = await mesa.findOne({
            where: {
                id: mesaId
            }
        });
        Mesa.destroy()
        res.status(200).send({ message: `mesa eliminada con exito` })
    } catch (e) {
        res.status(500).send({ message: `Error al eliminar la mesa ${e}` })
    }


}