const userName = document.getElementById('user_name');
const password = document.getElementById('password');
const btnSignin = document.getElementById('btnSignin');


btnSignin.addEventListener('submit', function(e){
    e.preventDefault();
    location.href = './forum.html'
})

