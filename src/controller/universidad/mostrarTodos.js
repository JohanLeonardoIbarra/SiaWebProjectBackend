import universidad from "@Model/universidad";
export default async (req, res) => {
    const universidades = await universidad.findAll();
    res.status(200).json(universidades);
}
