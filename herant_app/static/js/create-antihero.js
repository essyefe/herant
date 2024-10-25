function submitAntihero(event) {
    event.preventDefault();

    const name = window.document.querySelector('#name').value;
    const history = window.document.querySelector('#history').value;
    const csrfToken = window.document.querySelector('[name = csrfmiddlewaretoken]').value;

    fetch('/api/create-antihero/', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            'X-CSRFToken': csrfToken
        },
        body: JSON.stringify({name : name, history : history})
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {
            const $btnForSubmit = window.document.querySelector('.btn-for-submit');
            $btnForSubmit.remove();
            const $sucessMessage = window.document.createElement('p');
            $sucessMessage.innerText = 'Deu certo'
            window.document.body.appendChild($sucessMessage);
            const $boxToLink = window.document.querySelector('.box-to-link-for-hero-created');
            const $linkForAntiHero = window.document.createElement('a');
            $linkForAntiHero.classList.add('link-for-hero');
            $linkForAntiHero.href = data.url;
            $linkForAntiHero.textContent = 'Ver anti-heroi criado';
            $boxToLink.appendChild($linkForAntiHero);
        }
        else {
            alert(data.error)
        }
    }) 
    .catch(error => console.log(error))
}