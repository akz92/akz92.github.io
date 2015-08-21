$(function() {

  var toolbox = $('#toolbox'),
      height = toolbox.height(),
      scrollHeight = toolbox.get(0).scrollHeight;

  toolbox.bind('mousewheel', function(e, d) {
    if((this.scrollTop === (scrollHeight - height) && d < 0) || (this.scrollTop === 0 && d > 0)) {
      e.preventDefault();
    }
  });

});
