const list = document.querySelectorAll('.navs');
function activeLink() {
  list.forEach((item) =>
    item.classList.remove('select'));
  this.classList.add('select');
}

list.forEach((item) =>
  item.addEventListener('click', activeLink));