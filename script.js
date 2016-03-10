
    

    var vote=0;
    var text = document.getElementsByClassName("quantity");
   
    
var portionsInHeader =["en person","två personer","tre personer","fyra personer","fem personer"];
    var prevNr=1;
    function changeNumber(number, pos){
      //  var pos = number-1;
        for(var i=0; i<14; i++){
            var position=pos;
             console.log("hej" + position);
       
        var textSize = parseFloat(text[i].innerHTML);
        var total = number*textSize/prevNr;
        text[i].innerHTML=total;
            
           document.getElementById("portionChange").innerHTML=portionsInHeader[pos];
        }
         prevNr = number;
        localStorage.setItem("totPortion",prevNr);
       // localStorage.setItem("headerPos",psn);
       localStorage.setItem("portionHeader",position);
    }

    if(localStorage.getItem("totPortion")!=null){
        //changeNumber(localStorage.getItem("totPortion"));
         changeNumber(localStorage.getItem("totPortion"),localStorage.getItem("portionHeader"));
        document.getElementsByClassName("quantity").innerHTML=localStorage.getItem("totPortion");
        
                              
    }

else{
    document.getElementsByClassName("quantity").innerHTML="SORRY";
}
 

    $(document).ready(function(){
        console.log("hiding");
     //   $('#toolbar').hide();
        console.log("hid it");
function gatherInfo(){
         $.ajax({
                method: "GET",
                url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=f7cac50bfbcb0891&recipe=apfelstrudel",
                success: function(data){
          
                     $('#averageRating').text(data.rating.toFixed(1));
                     $('#nrCount').text(data.votes);
                     document.getElementById("rating").innerHTML=localStorage.getItem("yourRating");
                     jQuery("#loading").hide();
                     console.log("showing");
                   //  $("#toolbar").show();
                     console.log("showed it");
            }
            })
        }
   
        
    jQuery(window).load(function(){
     
        gatherInfo();
    });

        
        

   /*      $(".star").hover(function(){
        $("img").fadeOut(1000);
             $("img").fadeIn(1000);
    });*/
        
     /*$(".star").mouseleave(function(){
             $("img").stop();
                $(this).prevUntil(".lederhosen").andSelf().attr("src", "Green.png");
    });*/

   $(".star").hover(function(){
         $(this).prevUntil(".lederhosen").andSelf().attr("src", "Purp.png");
    });
        
        $(".star").mouseleave(function(){
         $(this).prevUntil(".lederhosen").andSelf().attr("src", "Green.png");
         if(vote>0){
             
            $("#"+vote).prevUntil(".lederhosen").andSelf().attr("src", "PurpTaken.png");
            console.log(vote);
         }
         
    });
        var count=0;
       
        $(".star").click(function(){
            $(this).prevUntil(".lederhosen").andSelf().attr("src", "PurpTaken.png");
    
            var idClick = $(this).attr('id');
            var clickValue = parseInt(idClick);
            vote = idClick;
            
            var ratingText = document.getElementById("rating");
            ratingText.innerHTML=idClick;
            count++;
            localStorage.setItem("nrOfVotes",count);
            
            
        
            
            
    });
        //API-NYCKEL: f7cac50bfbcb0891
        $('.star').click(function(){
            console.log("showing the loading");
         //   $("#loading").show();
            console.log("hiding the toolbar");
           // $("#toolbar").hide();
            var theId = $(this).attr('id');
            var idParse = parseInt(theId);
            $.ajax({
                method: "GET",
                url: "https://edu.oscarb.se/sjk15/api/recipe/?api_key=f7cac50bfbcb0891&recipe=apfelstrudel&rating="+idParse,
                success: function(){
                localStorage.setItem("yourRating", idParse);
                    gatherInfo();
                    console.log("du tryckte gatherInfo");
            }
            })
        });
        
        $("Strong").one("click",function(){
            $(this).css("text-decoration", "line-through");
         
            
    });
        
        
    
});
