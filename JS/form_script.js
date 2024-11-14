// Conceitos fundamentais
// document.getElementById(), document.querySelector()
// addEventListener()
// getAttribute(), setAttribute()
// typeof, instanceof

const form = document.querySelector('form');

form.addEventListener('input', (event) => {
    const campo = event.target;

    if(campo.tagName === 'INPUT') {
        alert('É INPUT')
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    var dict_regex = {
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

    for(let i = 0; i < id_name.length; i++) {
        formatValidation(dict_regex, id_name[i]);
    }
});

function formatValidation (regex, id_name) {
    element = document.getElementById(id_name);
    if(!regex[element.id].test(element.value)){
        alert(element.name + ' inválido')
    }
}