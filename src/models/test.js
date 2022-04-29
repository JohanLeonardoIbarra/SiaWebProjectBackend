import Uni from "./universidad.js";
import Mesa from "./mesa.js";
import Noticia from "./noticia.js";
import Evento from "./evento.js";

const x = async() => {
    await Uni.sync({ force: true });
    //Mesa.sync({ force: true });
    //Noticia.sync({ force: true });
    //Evento.sync({ force: true });
    await Uni.create({
        nombre: "Universidad Francisco de Paula Santander",
        logo: "https://ww2.ufps.edu.co/public/archivos/elementos_corporativos/logo-horizontal.jpg",
        responsable: "Ing. Sacarias Piedras del Rio",
        ciudad: "Cucúta",
        info: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
    })
    const unis = await Uni.findAll();
    console.log(unis);
}

x();