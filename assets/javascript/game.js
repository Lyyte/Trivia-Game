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

        var question1 = $( 
        "<form>Did Disney ruin Star Wars?<br>" + 
        '<input type="radio" id="answer" name="q1" value="correct" <label for="answer1">True</label>' + "<form>" + 
        '<input type="radio" id="answer" name="q1" value="incorrect" <label for="answer2">False</label><br><br>');
        $("#questions").append(question1);

        var question2 = $( 
        "<form>What is Admiral Thrawn's race?<br>" + 
        '<input type="radio" id="answer" name="q1" value="incorrect" <label for="answer1">Human</label>' + "<form>" + 
        '<input type="radio" id="answer" name="q1" value="incorrect" <label for="answer2">Miraluka</label>' + "<form>" + 
        '<input type="radio" id="answer" name="q1" value="correct" <label for="answer3">Chiss</label>' + "<form>" + 
        '<input type="radio" id="answer" name="q1" value="incorrect" <label for="answer4">Cerean</label><br><br>');
        $("#questions").append(question2);
        
        var question3 = $( 
        "<form>Who Created the Rule of Two?<br>" + 
        '<input type="radio" id="answer" name="q1" value="incorrect" <label for="answer1">Darth Tryannus</label>' + "<form>" + 
        '<input type="radio" id="answer" name="q1" value="corect" <label for="answer2">Darth Bane</label>' + "<form>" + 
        '<input type="radio" id="answer" name="q1" value="incorrect" <label for="answer3">Darth Reven</label>' + "<form>" + 
        '<input type="radio" id="answer" name="q1" value="incorrect" <label for="answer4">Darth Caedus</label><br><br>');
        $("#questions").append(question3);

        var question4 = $( 
        "<form>Which lightsaber form did Vaapad derived from?<br>" + 
        '<input type="radio" id="answer" name="q1" value="incorrect" <label for="answer1">Niman</label>' + "<form>" + 
        '<input type="radio" id="answer" name="q1" value="corect" <label for="answer2">Juyo</label>' + "<form>" + 
        '<input type="radio" id="answer" name="q1" value="incorrect" <label for="answer3">Sokan</label>' + "<form>" + 
        '<input type="radio" id="answer" name="q1" value="incorrect" <label for="answer4">Ataru</label><br><br>');
        $("#questions").append(question4);

        var question5 = $( 
        "<form>Which species had invaded the known galaxy, only to be pushed back by the skywalker family?<br>" + 
        '<input type="radio" id="answer" name="q1" value="incorrect" <label for="answer1">Chagrians</label>' + "<form>" + 
        '<input type="radio" id="answer" name="q1" value="incorect" <label for="answer2">Togrutas</label>' + "<form>" + 
        '<input type="radio" id="answer" name="q1" value="incorrect" <label for="answer3">Mon Calamari</label>' + "<form>" + 
        '<input type="radio" id="answer" name="q1" value="correct" <label for="answer4">Yuuzhan Vong</label><br><br>');
        $("#questions").append(question5);
       
        function timeup () {
            alert("Time");
            clearInterval(intervalid);
            $(".container").empty();
            $("#questions").empty();
        };



















    });

});