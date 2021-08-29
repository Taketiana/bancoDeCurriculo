const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema({
      
    username: {type: String, unique: false, required: true },
    cargo: {type: String, unique: false, required: true },
    data: {type: String, unique: false, required: true },                 
    estadoCivil: {type: String, unique: false, required: true },
    sexo: {type: String, unique: false, required: true },                   
    cep: {type: String, unique: false, required: true },
    enderecoRua: {type: String, unique: false, required: true },
    complemento: {type: String, unique: false, required: false},
    bairro: {type: String, unique: false, required: true },
    cidade: {type: String, unique: false, required: true },
    estado: {type: String, unique: false, required: true },       
    telefone1: {type: String, unique: true, required: true },   
    telefone2: {type: String, unique: true, required: true }, 
    telefonecel: {type: String, unique: true, required: true }, 
    telefonecont: {type: String, unique: true, required: true }, 
    email: {type: String, unique: true, required: true }, 
    identidade: {type: String, unique: true, required: true }, 
    cpf: {type: String, unique: true, required: true }, 
    veiculo: {type: String, unique: false, required: true },  
    habilitacao: {type: String, unique: false, required: true }, 
      
}, {
    timestamps: true
});

module.exports = mongoose.model('Candidate', CandidateSchema);