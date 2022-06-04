import universidad from '@Model/universidad';


export default async (req, res) => {
    let uniId = req.params.id;
    const { nombre, logo, responsable, ciudad, info } = req.body;

    try {
        const Uni = await universidad.findOne({
            where: {
                id: uniId
            }
        });
        Uni.update({ nombre, logo, responsable, ciudad, info })
        res.status(200).send({ message: `Universidad actualizada con exito` })
    } catch (e) {
        res.status(500).send({ message: `Error al actualizar la universidad: ${e}` })
    }

}