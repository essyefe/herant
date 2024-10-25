fetch(`http://localhost:8000/antihero/?format=json`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Não foi possível receber os  dados');
        }
        return response.json();
    })

    .then(data => {
        const $columnNameAntiHeroes = window.document.querySelector('.column-name-antiheroes')
        const $columnIdAntiHero = window.document.querySelector('.column-id-antiheroes');
        const $columnAcessAntiHero = window.document.querySelector('.column-acess-antiheroes');
        const names = data.map(antihero => antihero.name);
        const ids = data.map(antihero => antihero.antihero_id);

        ids.forEach(antihero_id => {
            const item = window.document.createElement('div');
            item.classList.add('id-text-api');
            item.textContent = antihero_id;
            $columnIdAntiHero.appendChild(item);

            const linkAcess = window.document.createElement('a');
            linkAcess.textContent = 'Acessar';
            linkAcess.classList.add('txt-acess-antiheroes');
            linkAcess.href = `http://localhost:8000/acess-antihero/${antihero_id}`;
            $columnAcessAntiHero.appendChild(linkAcess);
        })

        names.forEach(name => {
            const item = window.document.createElement('div');
            item.classList.add('name-text-api');
            item.textContent = name;
            $columnNameAntiHeroes.appendChild(item);
        })

    })
    .catch(error => console.error('Erro :', error));