$(document).ready(function(){
    // this area is used for toggling a dropdown menu, also it allows users to hide the dropdown menu whenever 
    // click on body area 
    var dontHide = false;
    $('#dropdown-butt').click(function(){
        $('#dropdown-menu').slideToggle(500);
        dontHide = true;
    });
    $('body').click(function(){
        if(dontHide==true){
            dontHide = false;
        }
        else{
            $('#dropdown-menu').hide();
        }
    });

    $('#dropdown-menu').click(function(){
        dontHide = true;
    });
    // end of dropdown menu codes area 



    // this area is used for setting works-img-division elements height based on their width 
    var cw = $('.works-img-division').width();
    $('.works-img-division').css({'height':0.8*cw+'px'});

    $(window).resize(function(){
        let cw = $('.works-img-division').width();
        $('.works-img-division').css({'height':0.8*cw+'px'});
    });
    // end of works-img-division settings 


    // this area is used for setting staff-content and staff-img elements height based on staff-content element width 
    var cw = $('.staff-content').width();
    $('.staff-img').css({'height':cw+'px'});

    $(window).resize(function(){
        let cw = $('.staff-content').width();
        $('.staff-img').css({'height':cw+'px'});
        
    });
    // end of staff-content settings 

    // this area is used for setting office-img elements height based on it's width 
    var cw = $('#office-img').width();
    $('#office-img').css({'height':0.5*cw+'px'});

    $(window).resize(function(){
        let cw = $('#office-img').width();
        $('#office-img').css({'height':0.5*cw+'px'});
        
    });
    // end of office-img settings     




    // this area is used for changing the background color of navigation bar when window element is srcolled down  
    $(window).scroll(function(){
        $('div#dropdown-menu').css({'display': 'none'});
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          $('nav#navigation-bar').css({'backgroundColor': 'rgba(190,100,230,1)'});
          $('div#dropdown-menu').css({'backgroundColor': 'rgba(190,100,230,1)'});
        } 
        else{
            $('nav#navigation-bar').css({'backgroundColor': 'rgba(200,200,230,1)'});
            $('div#dropdown-menu').css({'backgroundColor': 'rgba(200,200,230,1)'});
        }
      });  


});




//descriptions 
//in jquery it is also possible to access the values of styles using selectors for example:
// $('#dropdown-menu')[0].styles.width
//notice that if the values have been declared in stylesheets, jquery or js can't access them and instead
//they return null values
//method unbind can remove all of an element event listeners for example : 
// $('body').unbind();  
