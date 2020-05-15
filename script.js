function handleSubmit() {
    // window.stop()
    let fName = document.getElementById('fName').value
    let lName = document.getElementById('lName').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    if (fName === '') {
        document.getElementById('fName').classList.add('error')
    }
    else if (lName === '') {
        document.getElementById('lName').classList.add('error')
    } else if (email === '') {
        document.getElementById('email').classList.add('error')
    }
    else if (password === '') {
        document.getElementById('password').classList.add('error')
    }
    else {
        return null;
    }

}