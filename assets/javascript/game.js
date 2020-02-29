$(document).ready(function() {

    $("#button").on("click", function(){
        $(".container").empty();
        
        var time = 3;
        var intervalid; 
        
        setTimeout(timeup, 1000 * 3);
        intervalid = setInterval(timer, 1000);

        function timer () {
            time--
            console.log(time); 
        }
       
        function timeup () {
            alert("Time");
            clearInterval(intervalid)
        };

        

















    });

});