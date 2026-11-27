// Make entire topic rows clickable on the AP Precalculus Hub study guide tables
(function () {
  function initClickableRows() {
    var rows = document.querySelectorAll('.md-typeset table tbody tr');
    rows.forEach(function (row) {
      var link = row.querySelector('a[href*="unit-1/"], a[href*="unit-2/"]');
      if (!link || row.dataset.clickableRowInit) return;
      row.dataset.clickableRowInit = 'true';

      row.addEventListener('click', function (e) {
        if (e.target.closest('a')) return;
        link.click();
      });
    });
  }

  if (typeof document$ !== 'undefined') {
    document$.subscribe(initClickableRows);
  } else {
    document.addEventListener('DOMContentLoaded', initClickableRows);
  }
})();
