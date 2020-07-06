$(window).scroll(function() {
    parallax();
  })
  
  function parallax() {

    var ismobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if(!ismobile) {
  
      var wScroll = $(window).scrollTop()
    
    
      $('.parallax--bg').css('background-position', 'center ' + (wScroll*0.75)+'px');
    
    
      $('.parallax--box').css('top', -5 + (wScroll*.005)+'em')

    }
  
  }