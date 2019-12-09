const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const materiaModel = new Schema({
nombre: { type: String, required: false},
clave: { type: String, required: false},
maestro: { type: String, required: false },
semestre: { type: Number, required: false}
},{collection:'materias'});

module.exports = mongoose.model('materias', materiaModel);