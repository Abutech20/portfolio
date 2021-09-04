if($(window).width() < 768){
    $(".navbar").addClass('pt-5')
}else{
    $(".navbar").addClass('pt-1')
}
$(window).scroll(function() {
    if (window.pageYOffset > 10) {
        $(".navbar").addClass('scrolled shadow-lg')  
        $(".navbar").removeClass('pt-5')
        $(".nav-link").addClass("text-light")
        } else {
            $("nav").removeClass('scrolled shadow-lg')     
            $(".fa-navicon").removeClass('text-light')
            $(".nav-link").removeClass("text-light")
        }
  });