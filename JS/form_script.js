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
    'celular': {
        'originalValue': [
            /^(\d)/,
            /^(\(\d{2})(\d)/,
            /^(\(\d{2}\) \d{5})(\d)/
        ],
        'transformedValue': [
            '($1',
            '$1) $2',
            '$1-$2'
        ]},
    'fone': {
        'originalValue': [
            /^(\d{2})(\d)/,
            /(\d{4})(\d)/
        ],
        'transformedValue': [
            '($1) $2',
            '$1-$2'
        ]},
    'nascimento': {
        'originalValue': [
            /^(\d{2})(\d)/,
            /(\d{2}\/\d{2})(\d)/
        ],
        'transformedValue': [
            '$1/$2',
            '$1/$2'
        ]},
    'cpf': {
        'originalValue': [
            /^(\d{3})(\d)/,
            /^(\d{3}\.\d{3})(\d)/,
            /^(\d{3}\.\d{3}\.\d{3})(\d)/
        ],
        'transformedValue': [
            '$1.$2',
            '$1.$2',
            '$1-$2'
        ]}
}

const dict_regex = {
    'name': /^[a-zA-ZáéíóúÁÉÍÓÚãõÃÕçÇ\s'-]+ [a-zA-ZáéíóúÁÉÍÓÚãõÃÕçÇ]+$/,
    'email': /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    'celular': /^\(\d{1}\d{1}\) \d{5}-\d{4}$/,
    'fone': /^\(\d{1}\d{1}\) \d{4}-\d{4}$/,
    'nascimento': /^\d{2}\/\d{2}\/\d{4}$/,
    'cpf': /^\d{3}\.\d{3}\.\d{3}-\d{2}$/
};

const id_name= ['name', 'email', 'celular', 'fone', 'nascimento', 'cpf'];
// const password = document.getElementById('senha');
// const confirm_password = document.getElementById('confsenha');


form.addEventListener('input', (event) => {
    const campo = event.target;
    if(campo.tagName === 'INPUT') {
        formatInput(campo);
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    for(let i = 0; i < id_name.length; i++) {
        formatValidation(id_name[i]);
    }
});

function formatInput(campo) {
    let value = campo.value.replace(/\D/g, '');
    const id = campo.id;
    if(dict_length[id] && value.length > dict_length[id]) {
        value = value.substring(0, dict_length[id]);
    }
    if(dict_replace[id]) {
        const regex = dict_replace[id]['originalValue'];
        const format = dict_replace[id]['transformedValue'];
        for(let i = 0; i < regex.length; i++) {
            if(regex[i].test(value)){
                value = value.replace(regex[i], format[i]);
            }
        }
        campo.value = value
    }
}

function formatValidation (id_name) {
    const element = document.getElementById(id_name);
    const id = element.id
    const value = element.value
    const name = element.name
    if(!dict_regex[id].test(value)){
        clearError(element)
        showError(element, '(' + name + ' inválido)')
        element.classList.add('input-error');
    } else {
        clearError(element)
        element.classList.remove('input-error')
    }
}

function showError(element, message) {
    const label = element.closest('form').querySelector(`label[for="${element.id}"]`);
    if(!label) {
        console.error(`Label associado ao input com id "${element.id}" não encontrado`)
    }

    let errorSpan = label.nextElementSibling;
    if(!errorSpan || !errorSpan.classList.contains('error-message')) {
        errorSpan = document.createElement('span');
        errorSpan.classList.add('error-message');
        label.appendChild(errorSpan);
    }
    errorSpan.textContent = message
}

function clearError(element) {
    const label = element.closest('form').querySelector(`label[for="${element.id}"]`);
    if(!label) {
        console.error(`Label associado ao input com id "${element.id}" não encontrado`)
    }

    const errorSpan = label.querySelector('.error-message');
    if (errorSpan) {
        errorSpan.remove()
    }
}