document.addEventListener('DOMContentLoaded', () => {
    const antihero_id = window.location.pathname.split('/')[2];
    fetch(`http://localhost:8000/acess-antihero/${antihero_id}/data?format=json`)
    .then(response => {
        if(!response.ok) {
            throw new Error('Deu erro');
        }
        return response.json();
    })
    .then(data => {
        const $nameAntiHero = window.document.querySelector('h1');
        $nameAntiHero.innerText = data.name;

        const $historyAntiHero = window.document.querySelector('p');
        $historyAntiHero.innerText = data.history;
    })
})