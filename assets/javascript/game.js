$(document).ready(function() {

    $("#button").on("click", function(){
        $(".container").empty();
        
        var time = 5;
        var intervalid; 
        
        setTimeout(timeup, 1000 * 6);
        intervalid = setInterval(timer, 1000);

        function timer () {
            time--
            console.log(time); 
            $(".container").html("Seconds Remaining: " + time);
        }

        $("#questions").append("helllloo");


       
        function timeup () {
            alert("Time");
            clearInterval(intervalid);
            $(".container").empty();
        };

        

















    });

});