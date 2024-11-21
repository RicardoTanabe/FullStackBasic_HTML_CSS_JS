async function fetchDogImage() {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json();
        document.getElementById('dogImage').src = data.message;
    } catch (error) {
        console.error('Erro ao buscar imagem: ', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchDogImage);

setInterval(fetchDogImage, 3000);