const auth = function () {
    const buttonAuth = document.querySelector('.button-auth');
    const buttonClose = document.querySelector('.close-auth');
    const buttonOut = document.querySelector('.button-out');
    const modalAuth = document.querySelector('.modal-auth');
    const basket = document.getElementById('cart-button');
    const formAuth = document.getElementById('logInForm');
    const login = document.getElementById('login');
    const password = document.getElementById('password');
    const buttonLogin = document.querySelector('.button-login');
    const userName = document.querySelector('.user-name')

    buttonAuth.addEventListener('click', showAuth);
    buttonClose.addEventListener('click', modalClose);

    function showAuth() {
        modalAuth.classList.add('is-open')
    }

    function modalClose() {
        modalAuth.classList.remove('is-open')
    }

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') {
            modalClose()
        }
    });

    modalAuth.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) modalClose();
    })

    formAuth.addEventListener('submit', (e) => {
        e.preventDefault();
    })

    buttonLogin.addEventListener('click', ()=>{
        if(checkValid(login) && checkValid(password)){
            const user = {
                login: login.value.trim(),
                password: password.value.trim()
            };
            localStorage.setItem('user', JSON.stringify(user))

            let userLog = JSON.parse(localStorage.getItem('user'))
            userName.textContent = userLog.login;
            userName.style.display = 'flex';
            modalClose();
            buttonAuth.style.display = 'none';
            buttonOut.style.display = 'flex';
            basket.style.display = 'flex';
        }
        else alert `Заполните оба поля!`;
    })

    function checkValid(item) {
        return item.value.trim().length > 0
    }

    buttonOut.addEventListener('click', ()=>{
        userName.style.display = 'none';
        buttonAuth.style.display = 'flex';
        buttonOut.style.display = 'none';
        basket.style.display = 'none';
    })


}

export { auth }