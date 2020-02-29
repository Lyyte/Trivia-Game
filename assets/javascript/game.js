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

        var answer1 = $( 
        "<form>" + '<input type="radio" id="answer" value="answers">' + '<label for="answer">Hello0</label>' +
        "<form>" + '<input type="radio" id="answer" value="answers">' + '<label for="answer">Hello1</label>' +
        "<form>" + '<input type="radio" id="answer" value="answers">' + '<label for="answer">Hello2</label>' +
        "<form>" + '<input type="radio" id="answer" value="answers">' + '<label for="answer">Hello3</label>' );
        $("#questions").append(answer1);
       
        function timeup () {
            alert("Time");
            clearInterval(intervalid);
            $(".container").empty();
            $("#questions").empty();
        };



















    });

});