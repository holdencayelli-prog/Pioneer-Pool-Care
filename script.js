// Mobile menu toggle
document.getElementById('menuToggle').addEventListener('click', function () {
  document.getElementById('navlinks').classList.toggle('open');
});
document.querySelectorAll('#navlinks a').forEach(function (a) {
  a.addEventListener('click', function () {
    document.getElementById('navlinks').classList.remove('open');
  });
});

// Quote form
// NOTE: This is a front-end demo. To receive real leads, connect this form
// to a service like Formspree, Netlify Forms, or your own backend.
// See README.md for instructions.
function submitQuote() {
  var name = document.getElementById('name').value.trim();
  var phone = document.getElementById('phone').value.trim();
  if (!name || !phone) {
    alert('Please add at least your name and phone number so we can reach you.');
    return;
  }
  document.getElementById('formView').style.display = 'none';
  document.getElementById('successView').classList.add('show');
}
