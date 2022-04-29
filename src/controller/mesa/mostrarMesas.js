import mesa from '../../routes/mesa.js';
export default async (req, res) => {
    const mesas = await mesa.findAll();
    res.status(200).json(mesas);
}