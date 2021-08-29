'use strict'

const Formulario = () => {
    let form = {
        nome: document.getElementById('username').value,
        cargo: document.getElementById('cargo').value,
        data: document.getElementById('data').value,
        estadoCivil: document.getElementById('estadoCivil').value,
        genero: document.getElementById('genero').value,
        cep: document.getElementById('cep').value,
        endereco: document.getElementById('endereco').value,
        complemento: document.getElementById('complemento').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        telefone1: document.getElementById('telefone1').value,
        telefone2: document.getElementById('telefone2').value,
        telefoneCel: document.getElementById('telefonecel').value,
        telefoneCont: document.getElementById('telefonecont').value,
        email: document.getElementById('email').value,
        identidade: document.getElementById('identidade').value,
        cpf: document.getElementById('cpf').value,
        possuiveiculo: document.getElementById('possuiveiculo').value,
        categoriasHabilitacao: document.getElementById('categoriasHabilitacao').value,
    };
    console.log(form);
    return form
}

const criarCandidato = async (Candidate) => {
    try {
        const usuario = fetch('http://localhost:5000/registro', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Formulario())
        });
        if (usuario.status === 200) {
            alert('DEU CERTO')
        }
    } catch (error) {
        alert('deu errado!');
    }
}
