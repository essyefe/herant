function getAntiHero() {
    const selectname = window.document.querySelector('.text-to-select').value;
    fetch(`http://localhost:8000/antihero/${selectname}/?format=json`)

        .then(response => {
            if(!response.ok) {
                throw new Error('Não encontrado');
            }
            return response.json();
        })

        .then(data => {
            const $boxApiElements = window.document.querySelector('.box-api-elements');

            let nameofantihero = $boxApiElements.querySelector('.antihero-name');
            if (!nameofantihero) {
                nameofantihero = window.document.createElement('span');
                nameofantihero.classList.add('antihero-name');
                $boxApiElements.appendChild(nameofantihero);
            }
            nameofantihero.innerText = data.name;

            let historyantihero = $boxApiElements.querySelector('.antihero-history')
            if (!historyantihero) {
                historyantihero = window.document.createElement('span');
                historyantihero.classList.add('antihero-history');
                $boxApiElements.appendChild(historyantihero);
            }
            historyantihero.innerText = data.history;

            let errormessage = $boxApiElements.querySelector('.error-message');
            if(errormessage) {
                $boxApiElements.removeChild(errormessage);
            }

        })

        .catch(error => {
            const $boxApiElements = window.document.querySelector('.box-api-elements');

            let nameofantihero = $boxApiElements.querySelector('.antihero-name');

            if(nameofantihero) {
                $boxApiElements.removeChild(nameofantihero);
            }

            let historyantihero = $boxApiElements.querySelector('.antihero-history');

            if(historyantihero) {
                $boxApiElements.removeChild(historyantihero);
            }

            let errormessage = $boxApiElements.querySelector('.error-message');
            if(!errormessage) {
                errormessage =  window.document.createElement('span');
                errormessage.classList.add('error-message');
                errormessage.innerText = 'não encontrado';
                $boxApiElements.appendChild(errormessage);
            }

            console.error('Erro :', error);
        });
}