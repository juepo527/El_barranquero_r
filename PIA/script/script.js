window.addEventListener('scroll', e => {
    var nav = document.querySelector('.navbar')
    nav.classList.toggle('bajar',window.scrollY>0)
})