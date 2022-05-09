import evento from "@Model/evento"

export default async (req, res) => {
    const eventos = await evento.findOne()
    console.log('Si compila aqui, ta bien');
    res.status(200).json(eventos)
}

//Tomado de https://sequelize.org/docs/v6/core-concepts/model-querying-finders/
