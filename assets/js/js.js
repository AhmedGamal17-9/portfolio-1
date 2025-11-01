    var btnMode = document.querySelector('.btn-mode');
    btnMode.onclick = function() {
      document.body.classList.toggle("dark-theme");
      btnMode.classList.toggle("fa-sun");
      btnMode.classList.toggle("fa-moon");
    }

    // ========== Toggle Mobile Menu ==========
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = function() {
  navLinks.classList.toggle('active');
}

// لما اضغط على أي لينك في المينيو تختفي القائمة
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});