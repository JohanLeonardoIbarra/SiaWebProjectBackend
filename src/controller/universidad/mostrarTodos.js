import universidad from "../../models/universidad.js";
export default async (req, res) => {
    const universidades = await universidad.findAll();
    res.status(200).json(universidades);
}
