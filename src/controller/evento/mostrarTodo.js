import evento from "../../models/evento"

export default async (req, res) => {
    const eventos = await evento.findAll()
    res.status(200).json(eventos)
}
