var width = $(window).width();
var x;
var y;

function openmodal(id){
    if(id < 10){
         thissrc = $("#"+ parseInt(id)).attr('src');
        $('.actual').attr("src", thissrc);
        $('.modal-container-style').css("display", "flex");
        actualID = parseInt(id);
    }
    else{
        actualID = id;
        if(id == 33){
            $('.actual').attr("src", "./img/zl.jpg");
            $('.modal-container-style').css("display", "flex");
        }
        else if(id == 55){
            $('.actual').attr("src", "./img/vypis.jpg");
            $('.modal-container-style').css("display", "flex");
        }
        else if(id == 44){
            $('.actual').attr("src", "./img/osveceni.jpg");
            $('.modal-container-style').css("display", "flex");
        }
    }
}

$(window).click(function (e) { 
    x = e.pageX;
    y = e.pageY;
    if($('.modal-container-style').css("display") == "flex"){
   
        if (x < width / 4 ){  
            if (actualID < 8 && actualID > 0){
                actualID = actualID + -1; 
                nextslide = $('#'+actualID).attr("src");
                $('.actual').attr("src", nextslide);
            }else{
                actualID = 7;
                nextslide = $('#'+actualID).attr("src");
                $('.actual').attr("src", nextslide);
            }
        }
        else if(x > (width / 4) * 3){
            if (actualID < 8 && actualID > 0){
                actualID = actualID + 1; 
                nextslide = $('#'+actualID).attr("src");
                $('.actual').attr("src", nextslide);
            }else{
                actualID = 1;
                nextslide = $('#'+actualID).attr("src");
                $('.actual').attr("src", nextslide);
            }
        }
    }
    console.log(actualID);
});

function closemodal(){
  
    if (x < width / 4 ){
        console.log(x , width);
        console.log("left");    
    }
    else if(x > (width / 4) * 3){
        console.log("right");
    }
    else{
        $('.modal-container-style').css("display", "none");    
    }
}
