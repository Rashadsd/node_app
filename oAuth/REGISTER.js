const form = document.getElementById('formId2');
const log = document.getElementById('log2');
const pass = document.getElementById('pass2');



form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const body = {
        login: log.value,
        password: pass.value
    }

    //try {
        const res = await fetch('http://localhost:3002/api/auth/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(body)
        })
        const json = await res.json();
        
        if (json.data?.success) {
            window.location.href = 'file:///C:/Users/ThinkPad/Desktop/nodeapp/WEB-APP/oAuth/login.html'
        }
        if (json.error?.message) {
            alert(json.error?.message);
        }
    // }catch(err) {
    //     console.error(err)
    // }
})