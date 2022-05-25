const button = document.createElement('button');

const body = {
    id: 1,
    age: 30,
    name: 'Tom'
}

button.addEventListener('click', async () => {
    await fetch('/', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    })
        .then((response) => {response.json()
           console.log(response)
        })
        .then((obj) => {
            console.log(obj)
            const div = document.createElement('div')
            document.body.appendChild(div)
            div.innerHTML = `status: <b>${obj.status}</b>, data: <b>${obj.data}</b>`;
            console.log('Данные получены !')
            console.log(obj);
        })
        .catch((e) => {
            console.log('Данные не получены !');
            
        });
    
    await fetch('/')
        .then((response) => response.text())
       
        .then((text) => {
            console.log(text)
        })
    
});

button.innerText = 'AAAAA test';

document.body.appendChild(button);