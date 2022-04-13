
$(document).ready(function(){


  $("a").click(function(){
    var info = this.hash
    
    $("html, body").animate(
      {
        scrollTop: $(info).offset().top -50
      },
      2000
      
      )

})

})


$(function(){
  $(window).scroll(function(){
    $('#Navegacion').offset().top
    console.log()
    if(window.innerWidth<453){
      if($('#Navegacion').offset().top >271){
        $('#Navegacion').addClass('bg-info')
  
  
      }
      else{
        $('#Navegacion').removeClass('bg-info')
      }

    } else{
    console.log($('#Navegacion').offset().top)
    if($('#Navegacion').offset().top >558){
      $('#Navegacion').addClass('bg-info')


    }
    else{
      $('#Navegacion').removeClass('bg-info')
    }
  }
  })

})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})