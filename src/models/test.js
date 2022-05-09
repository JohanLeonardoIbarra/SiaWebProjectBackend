import Uni from "./universidad";
import Mesa from "./mesa";
import Noticia from "./noticia";
import Evento from "./evento";

const x = async() => {
    await Uni.sync();
    await Mesa.sync();
    await Noticia.sync();
    await Evento.sync();
    await Uni.create({
        nombre: "Universidad Francisco de Paula Santander",
        logo: "https://ww2.ufps.edu.co/public/archivos/elementos_corporativos/logo-horizontal.jpg",
        responsable: "Ing. Sacarias Piedras del Rio",
        ciudad: "Cucúta",
        info: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
    })

    await Mesa.create({
        nombre: "Mesa 1",
        descripcion: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        universidad_id: 1
    })
    const unis = await Mesa.findAll();
    console.log(unis);
}

x();