document.querySelector('.dropdown-toggle').addEventListener('click', function () {
    const dropdown = this.parentElement;
    dropdown.classList.toggle('active');
});
