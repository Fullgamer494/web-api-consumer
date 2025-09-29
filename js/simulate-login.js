const SESSION_FLAG_KEY = 'isLoggedIn'
const USER_INPUT_KEY = 'savedInputValue'

let userInputVariable = ''

function loginAndSave(){
    const inputValue = agentNum.value

    if(inputValue == ''){
        alert('Not An Agent Number')
        return;
    }

    userInputVariable = inputValue;

    localStorage.setItem(USER_INPUT_KEY, userInputVariable)
    localStorage.setItem(SESSION_FLAG_KEY, '1')

    window.location.href = 'index.html'

    updateStatus()
}

function logout(){
    localStorage.removeItem(USER_INPUT_KEY)
    localStorage.removeItem(SESSION_FLAG_KEY)

    userInputVariable = ''

    window.location.href = 'index.html'

    updateStatus()
}

function updateStatus(){
    const statusElement = document.getElementById('sessionStatus')
    const isLoggedIn = localStorage.getItem(SESSION_FLAG_KEY)

    if(isLoggedIn == '1'){
        userInputVariable = localStorage.getItem(USER_INPUT_KEY)
        accessScreen.style.display = 'none'
    } else{
        userInputVariable = ''
        accessScreen.style.display = 'flex'
    }
}

updateStatus()
