// Conceitos fundamentais
// document.getElementById(), document.querySelector()
// addEventListener()
// getAttribute(), setAttribute()
// typeof, instanceof

const form = document.querySelector('form');
const inputFields = form.querySelectorAll('input')

const dict_length = {
    'celular': 11,
    'fone': 10,
    'nascimento': 8,
    'cpf': 11
}

const dict_replace = {
    'celular': {'originalValue': /^(\d{2})(\d{5})(\d{4})/, 'transformedValue': '($1) $2-$3'},
    'fone': {'originalValue': /^(\d{2})(\d{4})(\d{4})/, 'transformedValue': '($1) $2-$3'},
    'nascimento': {'originalValue': /^(\d{2})(\d{2})(\d{4})/, 'transformedValue': '$1/$2/$3'},
    'cpf': {'originalValue': /^(\d{3})(\d{3})(\d{3})(\d{2})/, 'transformedValue': '$1.$2.$3-$4'}
}

const dict_regex = {
    'name': /^[a-zA-ZáéíóúÁÉÍÓÚãõÃÕ]+ [a-zA-ZáéíóúÁÉÍÓÚãõÃÕ]+$/,
    'email': /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    'celular': /^\(\d{2}\) \d{5}-\d{4}$/,
    'fone': /^\(\d{2}\) \d{4}-\d{4}$/,
    'nascimento': /^\d{2}\/\d{2}\/\d{4}$/,
    'cpf': /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
};

const id_name= ['name', 'email', 'celular', 'fone', 'nascimento', 'cpf'];
// const password = document.getElementById('senha');
// const confirm_password = document.getElementById('confsenha');


inputFields.forEach(input => {
    input.addEventListener('input', (event) => {
        const campo = event.target;
        formatInput(campo, dict_length, dict_replace);
    })
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    for(let i = 0; i < id_name.length; i++) {
        formatValidation(dict_regex, id_name[i]);
    }
});

function formatInput(campo, dict_length, dict_replace) {
    let value = campo.value
    const id = campo.id
    value = value.replace(/\D/g, '');
    if(dict_length[id] && value.length > dict_length[id]) {value = value.substring(0, dict_length[id])}
    if(dict_replace[id]) {campo.value = value.replace(dict_replace[id]['originalValue'], dict_replace[id]['transformedValue'])}
}

function formatValidation (regex, id_name) {
    const element = document.getElementById(id_name);
    const id = element.id
    const value = element.value
    const name = element.name
    if(!regex[id].test(value)){
        alert(name + ' inválido')
    }
}