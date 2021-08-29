const Candidate = require('../models/Candidate');


module.exports = {
    async register(req, res) {

        const { username, cargo, data, estadoCivil, sexo, cep, enderecoRua, complemento, bairro, cidade, estado, telefone1, telefone2, telefonecel, telefonecont, email, identidade, cpf, veiculo, habilitacao } = req.body;

        const newCandidate = new Candidate();

        newCandidate.username = username;
        newCandidate.cargo = cargo;
        newCandidate.data = data;
        newCandidate.estadoCivil = estadoCivil;
        newCandidate.sexo = sexo;
        newCandidate.cep = cep;
        newCandidate.enderecoRua = enderecoRua;
        newCandidate.complemento = complemento;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.estado = estado;
        newCandidate.telefone1 = telefone1;
        newCandidate.telefone2 = telefone2;
        newCandidate.telefonecel = telefonecel;
        newCandidate.telefonecont = telefonecont;
        newCandidate.email = email;
        newCandidate.identidade = identidade;
        newCandidate.cpf = cpf;
        newCandidate.veiculo = veiculo;
        newCandidate.habilitacao = habilitacao;
         

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err);
                return res.status(500).send('Ops! Erro na hora do cadastro. Tente novamente.');
            }

            return res.status(200).send(savedCandidate);
        });
    },



};