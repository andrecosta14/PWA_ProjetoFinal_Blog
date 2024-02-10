document.addEventListener('DOMContentLoaded', function(){

    const allButtons = document.querySelectorAll('.searchBtn');
    const search_bar = document.querySelector('.search_bar');
    const searchInput = document.getElementById('searchInput');
    const search_close = document.getElementById('search_close');

    for (var i = 0; i < allButtons.length; i++) {
        allButtons[i].addEventListener('click', function() {
            search_bar.style.visibility = 'visible';
            search_bar.classList.add('open');
            this.setAttribute('aria-expanded', 'true');
            searchInput.focus();
        })
    }

    search_close.addEventListener('click', function() {
        search_bar.style.visibility = 'hidden';
        search_bar.classList.remove('open');
        this.setAttribute('aria-expanded', 'false');
    });

});