  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', toggleDarkMode);
  }
  const scrollToTopButton = document.querySelector('#scroll-to-top');
  if (scrollToTopButton) {
    scrollToTopButton.addEventListener('click', scrollToTop);
  }
  window.addEventListener('scroll', () => {
    if (scrollToTopButton) {
      if (window.pageYOffset > 300) {
        scrollToTopButton.style.display = 'block';
      } else {
        scrollToTopButton.style.display = 'none';
      }
    }
  });
  document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('.nutrition-table tbody tr');
    rows.forEach(row => {
      const protein = parseInt(row.children[1].textContent);
      const fat = parseInt(row.children[2].textContent);
      const carbohydrates = parseInt(row.children[3].textContent);
      const total = protein + fat + carbohydrates;
      row.children[4].textContent = total;
    });
  });
  