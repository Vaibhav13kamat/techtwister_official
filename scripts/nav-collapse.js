var links = document.getElementsByClassName('nav-link');

for (let i = 0; i < links.length; i++) {
    links[i].onclick = () => { $("#collapsibleNavbar").collapse('hide'); }
}