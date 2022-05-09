import Mesa from "@Model/mesa";

export default async (req, res) => {
    const mesas = await Mesa.findAll();
    res.status(200).json(mesas);
}