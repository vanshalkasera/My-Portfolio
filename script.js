<script>
  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.navbar ul');

    if (!menuToggle || !navLinks) return;

    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
      const icon = menuToggle.querySelector('i');
      if (icon) icon.classList.toggle('bx-x');
    });

    // Close the menu when a link is clicked (optional, nice UX)
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => navLinks.classList.remove('show'));
    });
  });
</script>
