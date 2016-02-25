
    

    
    var text = document.getElementsByClassName("quantity");
   
    
var portionsInHeader =["en person","två personer","tre personer","fyra personer","fem personer"];
    var prevNr=1;
    function changeNumber(number, pos){
        for(var i=0; i<14; i++){
       
        var textSize = parseFloat(text[i].innerHTML);
        var total = number*textSize/prevNr;
        text[i].innerHTML=total;
            
           document.getElementById("portionChange").innerHTML=portionsInHeader[pos];
        }
         prevNr = number;
        localStorage.setItem("totPortion",prevNr);
    }

    if(typeof(Storage) !="undefined"){
        changeNumber(localStorage.getItem("totPortion"),localStorage.getItem("totPortion")-1);
        document.getElementsByClassName("quantity").innerHTML=localStorage.getItem("totPortion");
        //alert(localStorage.getItem("totPortion"));
                              
    }

else{
    document.getElementsByClassName("quantity").innerHTML="SORRY";
}
 

    $(document).ready(function(){
function lol(){
         $.ajax({
                method: "GET",
                url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=f7cac50bfbcb0891&recipe=apfelstrudel",
                success: function(data){
           //     alert("hej ett skepp kommer lastat!");
                     $('#averageRating').text(data.rating);
                     $('#nrCount').text(data.votes);
                     document.getElementById("rating").innerHTML=localStorage.getItem("yourRating");
                     jQuery("#loading").fadeOut(2000);
            }
            })
        }
   
        
    jQuery(window).load(function(){
     //   $("div").load(localStorage.getItem("totPortion"));
        lol();
    });

        
        

         $(".star").hover(function(){
        $("img").fadeOut(1000);
             $("img").fadeIn(1000);
    });
        
         $(".star").mouseleave(function(){
             //$("img").stop();
                $(this).prevUntil(".lederhosen").andSelf().attr("src", "Green.png");
    });

   $(".star").hover(function(){
         $(this).prevUntil(".lederhosen").andSelf().attr("src", "Purp.png");
    });
        
        $(".star").mouseleave(function(){
         $(this).prevUntil(".lederhosen").andSelf().attr("src", "Green.png");
    });
        var count=0;
        var average=0;
        var prevStar=0;
        $(".star").click(function(){
            $(this).prevUntil(".lederhosen").andSelf().attr("src", "PurpTaken.png");
     //    $(".star").unbind().prevAll().andSelf();
            var idClick = $(this).attr('id');
            var clickValue = parseInt(idClick);
            
            
            var ratingText = document.getElementById("rating");
            ratingText.innerHTML=idClick;
            count++;
            localStorage.setItem("nrOfVotes",count);
            
            average=(clickValue+prevStar)/count;
            //localStorage.setItem("avRat",average);
            
            prevStar=clickValue+prevStar;
           // var averageRatingText = document.getElementById("averageRating");
          //  averageRatingText.innerHTML=localStorage.getItem("avRat");
          //  document.getElementById("nrCount").innerHTML=localStorage.getItem("nrOfVotes");
            
           
          //  $(this).unbind('hover').prevUntil(".lederhosen").andSelf.nextAll().attr('disabled', 'disabled');
            
            
    });
        //API-NYCKEL: f7cac50bfbcb0891
        $('.star').click(function(){
            var theId = $(this).attr('id');
            var idParse = parseInt(theId);
            $.ajax({
                method: "GET",
                url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=f7cac50bfbcb0891&recipe=apfelstrudel&rating="+idParse,
                success: function(){
               // alert("hej du röstade" + idParse);
                localStorage.setItem("yourRating", idParse);
                    lol();
                    console.log("du tryckte lol");
            }
            })
        });
        
        $("Strong").one("click",function(){
            $(this).css("text-decoration", "line-through");
          //  alert("You rated it"+ .star)
          //  $(this).unbind('hover').prevUntil(".lederhosen").andSelf.nextAll().attr('disabled', 'disabled');
            
    });
        
        
    
});
