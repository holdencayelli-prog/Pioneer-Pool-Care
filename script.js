// Mobile menu toggle
document.getElementById('menuToggle').addEventListener('click', function () {
  document.getElementById('navlinks').classList.toggle('open');
});
document.querySelectorAll('#navlinks a').forEach(function (a) {
  a.addEventListener('click', function () {
    document.getElementById('navlinks').classList.remove('open');
  });
});

// Quote form -> Formspree (AJAX so the visitor stays on the page)
document.getElementById('formView').addEventListener('submit', function (e) {
  e.preventDefault();
  var form = e.target;
  var btn = form.querySelector('button[type="submit"]');
  btn.disabled = true;
  btn.textContent = 'Sending…';

  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(function (res) {
    if (res.ok) {
      form.style.display = 'none';
      document.getElementById('successView').classList.add('show');
    } else {
      alert('Something went wrong sending your request. Please try again or call us directly.');
      btn.disabled = false;
      btn.textContent = 'Request my quote';
    }
  }).catch(function () {
    alert('Network error. Please try again or call us directly.');
    btn.disabled = false;
    btn.textContent = 'Request my quote';
  });
});
