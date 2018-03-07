'use strict';

$(document).ready(function() {
  // PROGRESS BAR CODE
  var winHeight   = $(window).height(),
      docHeight   = $(document).height(),
      progressBar = $('progress'),
      max, value;

  /* FIND THE MAX SCROLLABLE AREA */
  max = docHeight - winHeight;
  progressBar.attr('max', max);

  $(document).on('scroll', function(){
     value = $(window).scrollTop();
     progressBar.attr('value', value);
  });

  // ON WINDOW RESIZE
  $(window).on('resize', function() {
    winHeight = $(window).height(),
    docHeight = $(document).height();

    max = docHeight - winHeight;
    progressBar.attr('max', max);

    value =  $(window).scrollTop();
    progressBar.attr('value', value);
  });
});
