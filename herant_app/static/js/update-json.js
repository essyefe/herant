function easyAtt() {
    fetch('http://localhost:8000/antihero/1/', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: 'Deadpool', history: 'Ex-militar e mercenário, Wade Wilson é diagnosticado com câncer em estado terminal, porém encontra uma possibilidade de cura em uma sinistra experiência científica. Recuperado, com poderes e um incomum senso de humor, ele torna-se Deadpool e busca vingança contra o homem que destruiu sua vida.' })
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Erro :', error))
}