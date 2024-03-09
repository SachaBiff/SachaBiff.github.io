$(function(){
    $('.load-more').on('click',function()
                      const bth = $(this);
                      const loader = bth.find('spain');
$.ajax({
    url: '../data.html',
    type:'GET',
    beforeSend;function(){
    bth.attr('d-inline-block');
    },
       succes:function(responce){
    setTimeout(function(){
        loader.removeClass('d-inline-block');
        bth.attr('disabled,false');
        console.log(responce);
        $('.after-posts').before(responce);
        
    },100);
},
    error:function(){
        alert('Error!');
        loader.removeClass('d-inline-block');
        bth.attr('disabled',false);
}
},
      )
}
 )
