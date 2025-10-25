document.addEventListener('DOMContentLoaded', function () {
  // Toggle behavior for sidebar tree items
  document.querySelectorAll('.sidebar .toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var parent = btn.parentElement;
      var isOpen = parent.classList.contains('open');
      if (isOpen) {
        parent.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
        btn.textContent = btn.textContent.replace('▾', '▸');
      } else {
        parent.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        btn.textContent = btn.textContent.replace('▸', '▾');
      }
    });
  });

  // Close other submenus when opening one (optional: keep multiple open if desired)
  document.querySelectorAll('.sidebar .has-children .toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      // keep only the clicked parent open
      document.querySelectorAll('.sidebar .has-children').forEach(function (p) {
        if (p.contains(btn)) return;
        p.classList.remove('open');
        var t = p.querySelector('.toggle');
        if (t) t.setAttribute('aria-expanded', 'false');
        if (t) t.textContent = t.textContent.replace('▾', '▸');
      });
    });
  });

  // Basic keyboard accessibility: allow Enter/Space to toggle
  document.querySelectorAll('.sidebar .toggle').forEach(function (btn) {
    btn.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });
});
