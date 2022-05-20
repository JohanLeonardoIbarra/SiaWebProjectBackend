import ModuleAlias from "module-alias";
import path from "path";


export default ModuleAlias.addAliases({
    '@Controller': path.join(__dirname, '../controller/'),
    "@Model": path.join(__dirname, '../models/'),
    "@Router": path.join(__dirname, '../routes/'),
    "@DB": path.join(__dirname, '../database/')
});

