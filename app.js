console.log('Script loaded');

const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 50% of the element is visible
    }
  );

// Select all sections you want to observe
const hiddenElements = document.querySelectorAll('section.animate');
console.log('Elements being observed:', hiddenElements);
hiddenElements.forEach((el) => observer.observe(el));