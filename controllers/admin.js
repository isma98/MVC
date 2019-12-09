const Materias = require('../models/materias');

exports.materiasInq = function (req,res){
    Materias.find({},{nombre:1,clave:1,maestro:1,semestre:1},function(err, doc){
        if(err) return console.log(err);
        console.log("Materias encontradas...");
        console.log(doc);
        res.send(doc);
    }).sort({maestro:1});
};

exports.materiasAdd = (req, res) => {
    console.log("Entrando...");
    materias = new Materias({
    nombre: req.body.nombre,
    clave: req.body.clave,
    maestro: req.body.maestro,
    semestre: req.body.semestre
    })
console.log(materias);
materias.save(function (err, materias){
    if (err) return console.error(err);
    res.send(materias.maestro + " inserta en la coleccion...");
})
}



