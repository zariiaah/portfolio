(function () {
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var reveals = document.querySelectorAll(".reveal");

  function showAll() {
    reveals.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  if (reduceMotion.matches || reveals.length === 0) {
    showAll();
    return;
  }

  document.documentElement.classList.add("has-motion");

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
  );

  reveals.forEach(function (el) {
    io.observe(el);
  });
})();
