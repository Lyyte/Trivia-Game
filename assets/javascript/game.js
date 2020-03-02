$(document).ready(function() {

    $("#button").on("click", function(){
        $(".container").empty();
        
        var time = 10;
        var intervalid; 
        var correct = 0;
        var incorrect = 0;
        var unanswered = 0;
        
        setTimeout(timeup, 1000 * 11);
        intervalid = setInterval(timer, 1000);

        function timer () {
            time--; 
            $(".container").html("Seconds Remaining: " + time);
        }

        var question1 = $( 
        "<form id='q11'>Did Disney ruin Star Wars?<br>" + 
        '<input type="radio" id="answer" value="1" name="q1">' + '<label for="answer1">True</label>' +  
        '<input type="radio" id="answer" value="0" name="q1">' + '<label for="answer2">False</label><br><br>');
        $("#questions").append(question1);

        var question2 = $( 
        "<form id='q22'>What is Admiral Thrawn's race?<br>" + 
        '<input type="radio" id="answer" name="q2" value="0" <label for="answer1">Human</label>' +  
        '<input type="radio" id="answer" name="q2" value="0" <label for="answer2">Miraluka</label>' +  
        '<input type="radio" id="answer" name="q2" value="1" <label for="answer3">Chiss</label>' +  
        '<input type="radio" id="answer" name="q2" value="0" <label for="answer4">Cerean</label><br><br>');
        $("#questions").append(question2);
        
        var question3 = $( 
        "<form id='q33'>Who Created the Rule of Two?<br>" + 
        '<input type="radio" id="answer" name="q3" value="0" <label for="answer1">Darth Tryannus</label>' +  
        '<input type="radio" id="answer" name="q3" value="1" <label for="answer2">Darth Bane</label>' +  
        '<input type="radio" id="answer" name="q3" value="0" <label for="answer3">Darth Reven</label>' +  
        '<input type="radio" id="answer" name="q3" value="0" <label for="answer4">Darth Caedus</label><br><br>');
        $("#questions").append(question3);

        var question4 = $( 
        "<form id='q44'>Which lightsaber form did Vaapad derived from?<br>" + 
        '<input type="radio" id="answer" name="q4" value="0" <label for="answer1">Niman</label>' +  
        '<input type="radio" id="answer" name="q4" value="1" <label for="answer2">Juyo</label>' +  
        '<input type="radio" id="answer" name="q4" value="0" <label for="answer3">Sokan</label>' +  
        '<input type="radio" id="answer" name="q4" value="0" <label for="answer4">Ataru</label><br><br>');
        $("#questions").append(question4);

        var question5 = $( 
        "<form id='q55'>Which species had invaded the known galaxy, only to be pushed back by the Skywalker family?<br>" + 
        '<input type="radio" id="answer" name="q5" value="0" <label for="answer1">Chagrians</label>' +  
        '<input type="radio" id="answer" name="q5" value="0" <label for="answer2">Togrutas</label>' +  
        '<input type="radio" id="answer" name="q5" value="0" <label for="answer3">Mon Calamari</label>' +  
        '<input type="radio" id="answer" name="q5" value="1" <label for="answer4">Yuuzhan Vong</label><br><br>');
        $("#questions").append(question5);
       
        function timeup () {
            alert("Time");
            clearInterval(intervalid);


            var a1 =$('input[name=q1]:checked','#q11').val();
            var a11 = Number(a1); 
            console.log("its "+a1);

            var a2 =$('input[name=q2]:checked','#q22').val();
            var a22 = Number(a2); 

            var a3 =$('input[name=q3]:checked','#q33').val();
            var a33 = Number(a3); 

            var a4 =$('input[name=q4]:checked','#q44').val();
            var a44 = Number(a4); 

            var a5 =$('input[name=q5]:checked','#q55').val();
            var a55 = Number(a5); 

            var bogga = [a11, a22, a33, a44, a55];

            for (var i = 0; i < bogga.length; i++) {
                if (bogga[i] === 1) {
                    correct++;
                }
                else if (bogga[i] === 0) {
                    incorrect++;
                }
                else {
                    unanswered++;
                }
            }; 

            console.log(correct);
            console.log(incorrect);
            console.log(unanswered);

            $(".container").empty();
            $("#questions").empty();

            var a = "Correct: " + correct;
            var b = "Incorrect: " + incorrect;
            var c = "Unanswered: " + unanswered;

            $("#questions").append("All done!!" + "<br><br>" + a + "<br>" + b + "<br>" + c + "<br>");``

        }
    });

});