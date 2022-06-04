import universidad from '@Model/universidad';


export default async (req, res) => {
    let uniId = req.params.id;
    
    try {
        const Uni = await universidad.findOne({
            where: {
                id: uniId
            }
        });
        Uni.destroy()
        res.status(200).send({ message: `Universidad eliminada con exito` })
    } catch (e) {
        res.status(500).send({ message: `Error al eliminar la universidad: ${e}` })
    }

}