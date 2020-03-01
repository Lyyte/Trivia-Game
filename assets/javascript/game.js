$(document).ready(function() {

    $("#button").on("click", function(){
        $(".container").empty();
        
        var time = 60;
        var intervalid; 
        
        setTimeout(timeup, 1000 * 61);
        intervalid = setInterval(timer, 1000);

        function timer () {
            time--
            console.log(time); 
            $(".container").html("Seconds Remaining: " + time);
        }

        var answer1 = $( 
        "<form>" + '<input type="radio" id="answer" name="q1">' + '<label for="answer1">Hello0</label>' +
        "<form>" + '<input type="radio" id="answer" name="q1">' + '<label for="answer2">Hello1</label>' +
        "<form>" + '<input type="radio" id="answer" name="q1">' + '<label for="answer3">Hello2</label>' +
        "<form>" + '<input type="radio" id="answer" name="q1">' + '<label for="answer4">Hello3</label>' );
        $("#questions").append(answer1);
       
        function timeup () {
            alert("Time");
            clearInterval(intervalid);
            $(".container").empty();
            $("#questions").empty();
        };



















    });

});