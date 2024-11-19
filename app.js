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
      threshold: 0.1, 
    }
  );


const hiddenElements = document.querySelectorAll('section.animate');
console.log('Elements being observed:', hiddenElements);
hiddenElements.forEach((el) => observer.observe(el));