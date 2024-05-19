const mongoose = require("mongoose")
const Scategorie = require("./scategorie.js");
const productSchema = mongoose.Schema({
    reference: { type: String, required: true, unique: true },
    designation: { type: String, required: true, unique: true },
    prix: { type: Number, required: false },
    marque: { type: String, required: true },
    qtestock: { type: Number, required: false },
    imageprod: { type: String, required: false },
    scategorieID: { type: mongoose.Schema.Types.ObjectId, ref: Scategorie }
})
module.exports = mongoose.model('product', productSchema)