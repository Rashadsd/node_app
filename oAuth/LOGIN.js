const form = document.getElementById('formId');
const log = document.getElementById('log');
const pass = document.getElementById('pass');



form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const body = {
    login: log.value,
    password: pass.value
}
    const res = await fetch('http://localhost:3002/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {'Content-Type': 'application/json'}
    })
   
    const json = await res.json()
    
    if(json.data?.success) {
        window.localStorage.setItem('USER-DATA', JSON.stringify(json))
        window.location.href = 'file:///C:/Users/ThinkPad/Desktop/nodeapp/WEB-APP/oAuth/account.html'
    }
    if(json.error?.message){
        alert(json.error?.message)
    }
    
})