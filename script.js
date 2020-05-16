function handleSubmit() {
    // window.stop()
    let fName = document.getElementById('fName').value
    let lName = document.getElementById('lName').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    const fnameInput = document.getElementById('fName')
    const lnameInput = document.getElementById('lName')
    const emailInput = document.getElementById('email')
    const passwordInput = document.getElementById('password')

    if (fName === '') {
        console.log('fName :>> ', fName);
        fnameInput.classList.add('error')
    }
    else{
        fnameInput.classList.remove('error')
    }
    if (lName === '') {
        lnameInput.classList.add('error')
    }
    else{
        lnameInput.classList.remove('error')
    }
    if (email === '') {
        emailInput.classList.add('error')
    }
    else{
        emailInput.classList.remove('error')
    }
    if (password === '') {
        passwordInput.classList.add('error')
    }
    else{
        passwordInput.classList.remove('error')
    }
}