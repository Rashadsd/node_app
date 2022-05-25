const a = document.querySelector('#username')
const b = document.querySelector('#age')
const c = document.querySelector('button[type="submit"]')

const d = document.querySelector('tbody')
const w = document.querySelector('#form')





const getUsers = async function(f){
    f.preventDefault()

    const response = await fetch('http://localhost:8080/users', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const { data } = await response.json()
    console.log(data)
    console.log(data.map(el => { console.log(el) }))

    
    const stringData = data.map(el => `
     
        <tr data-id=${el._id}>
            <td>${el._id}</td>
            <td>${el.username}</td>
            <td>${el.userage}</td>
            <td>
                <button class='del'>Del</button>
            </td>
        </tr>
     `).join(' ')
     console.log(stringData)



    const tr = document.querySelector('#main_menu')
    tr.addEventListener('click', function(event){

        const li = event.target.closest('li')

        if(li == null) return
        console.log(li.dataset)
    })

    const obj = {
        name: 'john'
    }


    Object.prototype.func = () => console.log('func')

    const user = {
        age: 25
    }

    console.log(obj.func)
    console.log(user.func)



    d.innerHTML = stringData

    const btns = document.querySelectorAll('.del')
    
     console.log(btns)
    Array.from(btns).forEach(el => {
        console.log(el)
        el.addEventListener('click', deleteUser)
    })
    
}

// const tr = document.querySelector('#main_menu')
//     tr.addEventListener('click', function(event){
//         console.log(event.target.closest('div'))
//     })

const deleteUser = async function(e) {
    const parent = this.closest('tr')
    console.log('________')
    console.log(this)
    console.log(parent)
    console.log(parent.dataset)
    console.log('________')
    //console.log(parent)
    //console.log(parent.dataset)     // DOMStringMap{id: '620f9c22a40c80c503a7558f'}
    //console.log(parent.dataset.id)  // 620f9c22a40c80c503a7558f
    const userId = parent.dataset.id

    const response = await fetch(`http://localhost:8080/users/${userId}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const json = await response.json()
    getUsers(e)
   // console.log(json)
}




const addUser = async function(e) {
    e.preventDefault()

    const user = {
        name: a.value,
        age: b.value
    }


    const response = await fetch('http://localhost:8080/users/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })

    const json = await response.json()
    getUsers(e)
    console.log(json)


    //d.innerHTML = data
    //  d.innerHTML = json.map(el => `
    //        <h3>${el._id}</h3>
    //        <h3>${el.username}</h3>
    //  `)
    
}





c.addEventListener('click', addUser)

const batt = document.querySelector('#click')
batt.addEventListener('click', getUsers)



// const block = document.querySelector('#block')
// const btnClick = document.querySelector('#block button')


// block.addEventListener('click', (r) => console.log('parent'))
// btnClick.addEventListener('click', (e) => { 
//     e.stopPropagation()
//     console.log('child') 
// })

