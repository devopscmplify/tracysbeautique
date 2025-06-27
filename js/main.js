// Navigation logic
function showPage(page) {
  const pages = ['home', 'about', 'services', 'booking', 'contact'];
  pages.forEach(p => {
    document.getElementById(p + '-page').style.display = (p === page) ? '' : 'none';
    document.querySelector(`nav a[href="#${p}"]`).classList.toggle('active', p === page);
  });
  window.location.hash = page;
}
// On load, show correct page based on hash
window.onload = function() {
  const hash = window.location.hash.replace('#', '') || 'home';
  showPage(hash);
};
window.onhashchange = function() {
  const hash = window.location.hash.replace('#', '') || 'home';
  showPage(hash);
};

// Booking form
document.addEventListener('DOMContentLoaded', function() {
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.onsubmit = function(e) {
      e.preventDefault();
      document.getElementById('booking-success').style.display = 'block';
      setTimeout(() => {
        document.getElementById('booking-success').style.display = 'none';
        bookingForm.reset();
      }, 3000);
    };
  }

  // Contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.onsubmit = function(e) {
      e.preventDefault();
      document.getElementById('contact-success').style.display = 'block';
      setTimeout(() => {
        document.getElementById('contact-success').style.display = 'none';
        contactForm.reset();
      }, 3000);
    };
  }
});