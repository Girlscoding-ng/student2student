const logout = document.getElementById('logout');

logout.addEventListener('click', function(){
    let option = confirm('Are you sure you want to logout');
    if(option) {
        window.location.href = './././index.html';
    }
})