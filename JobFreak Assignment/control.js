document.querySelectorAll('.left-panel a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var target = this.getAttribute('href').substring(1);
      var content = document.getElementById(target);
      var allContent = document.querySelectorAll('.content > div');
      
      allContent.forEach(function(element) {
        element.style.display = 'none';
      });
      
      content.style.display = 'block';
    });
  });