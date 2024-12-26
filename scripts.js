// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Show Alert on "Get In Touch"
  document.querySelector('.btn').addEventListener('click', function() {
    alert('Thank you for reaching out! I will get back to you soon.');
  });
  