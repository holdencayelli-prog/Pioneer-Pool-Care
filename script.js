// Mobile menu toggle
document.getElementById('menuToggle').addEventListener('click', function () {
  document.getElementById('navlinks').classList.toggle('open');
});
document.querySelectorAll('#navlinks a').forEach(function (a) {
  a.addEventListener('click', function () {
    document.getElementById('navlinks').classList.remove('open');
  });
});

// Quote form submits natively to Formspree (free tier).
// Formspree redirects to /thanks.html afterward via the _next hidden field.
// Light touch: disable the button on submit so it can't be double-sent.
document.getElementById('formView').addEventListener('submit', function (e) {
  var btn = e.target.querySelector('button[type="submit"]');
  if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }
});
