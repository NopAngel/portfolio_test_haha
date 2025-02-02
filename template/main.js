  document.addEventListener("DOMContentLoaded", function() {
      var element = document.getElementById('animatedElement');
      function checkPosition() {
        var windowHeight = window.innerHeight;
        var positionFromTop = element.getBoundingClientRect().top;
        if (positionFromTop - windowHeight <= 0) {
          element.classList.add('visible');
        }
      }
      window.addEventListener('scroll', checkPosition);
      checkPosition();
    });