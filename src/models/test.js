import Uni from "./universidad";
import Mesa from "./mesa";
import Noticia from "./noticia";
import Evento from "./evento";

const reiniciarTablas = async() => {
    await Uni.sync({ force: true });
    await Mesa.sync({ force: true });
    await Noticia.sync({ force: true });
    await Evento.sync({ force: true });
}

export default reiniciarTablas;