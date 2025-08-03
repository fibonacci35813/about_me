/*
 * Custom JavaScript for the portfolio site.
 *
 * Handles mobile navigation behaviour and smooth scrolling offsets.
 */
(function () {
  // Close the mobile navigation when a link is clicked
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (navToggle.checked) {
        navToggle.checked = false;
      }
    });
  });

  // Optional: Offset scroll position to account for sticky header
  const headerHeight = document.querySelector('.site-header').offsetHeight;
  const linksWithHash = document.querySelectorAll('a[href^="#"]');
  linksWithHash.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId.length > 1 && document.querySelector(targetId)) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        const offsetPosition = targetElement.offsetTop - headerHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
})();