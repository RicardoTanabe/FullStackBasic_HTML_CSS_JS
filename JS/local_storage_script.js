const messageItens = {
    'save': {'success': 'salvo', 'fail': 'foi digitado'},
    'show': {'success': 'armazenado', 'fail': 'salvo'},
    'remove': {'success': 'removido', 'fail': 'para remover'}
}

let timeoutId;

function saveName() {
    const nameStorage = localStorage.getItem('name');
    if(!nameStorage){
        const name = document.getElementById('nameInput').value;
        localStorage.setItem('name', name);
        elemExisteVerification('save', name);
        document.getElementById('nameInput').value = '';
    } else {
        showResult('fail', `Já existe o nome ${nameStorage}.`);
    }
}

function showName() {
    const name = localStorage.getItem('name');
    elemExisteVerification('show', name);
}

function removeName() {
    const name = localStorage.getItem('name');
    localStorage.removeItem('name');
    elemExisteVerification('remove', name);
}

function elemExisteVerification(key, name) {
    if(name){
        return showResult('success', `Nome ${name} ${messageItens[key]['success']}.`);
    }

    showResult('fail', `Nenhum nome  ${messageItens[key]['fail']}.`);
}

function showResult(type, message) {
    const elem = document.getElementById('show-message');
    elem.style.color = 'white';
    switch (type) {
        case 'success':
            elem.style.backgroundColor = 'green';
            break
        case 'fail':
            elem.style.backgroundColor = 'red';
    }
    elem.style.margin = '10px 50px';
    elem.style.padding = '3px 10px';
    elem.style.borderRadius = '3px';
    elem.textContent = message;

    if(timeoutId) {
        clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(clearMessage, 6000);
}

function clearMessage() {
    const elem = document.getElementById('show-message');
    elem.textContent = '';
    elem.removeAttribute('style')
}