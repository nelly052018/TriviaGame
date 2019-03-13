$(document).ready(function () {
    $(".questions,.endcard").hide()


    //Create variable for timer
    var timeId = 30;
    var intervalId;
    //when the start button gets clicked, execute run function
    $("#startClock").on("click", run);

    //when stop button gets clicked, execute stop function
    $("#stopClock").on("click", done);

    //$("input").on("click", function () {
    //console.log(this.value)
    //})

    //create function to run the countdown
    function run() {
        $(".questions").show();
        $(".startcard").hide();
        clearInterval(intervalId);
        intervalId = setInterval(decrease, 1000);

    }

    //create function to stop the countdown
    function decrease() {
        //Display countdown on html
        $("#time").html(`Time Remaining: ${timeId}`);
        timeId--;
        if (timeId < 0) {
            //  ...run the stop function.
            done();

        }

    }
    //create variable with array of correct answers
    var correctAnswers = ["Gamora", "Storm", "Shuri", "Wonder Woman"];
    var score = 0;
    var wrong = 0;

    function done() {

        //  clears intervalId
        //  pass the name of the interval to the clearInterval function.
        clearInterval(intervalId);
        alert("Times Up!!!!");

        //select all inputs that have been clicked $("input[name=x]:checked")
        var trivia1 = $("input[name=trivia1]:checked").val()
        var trivia2 = $("input[name=trivia2]:checked").val()
        var trivia3 = $("input[name=trivia3]:checked").val()
        var trivia4 = $("input[name=trivia4]:checked").val()

        //create variable with array of user's answers
        var userChoice = [trivia1, trivia2, trivia3, trivia4];

        //loop through the array and compare to userChoice
        correctAnswers.forEach((element, i) => {
            if (element === userChoice[i]) {
                score = score + 1
            }
            else {
                wrong = wrong + 1
            }
        })
        $("#score").text(score)
        $("#wrong").text(wrong)


        $(".endcard").show();
        $(".questions").hide();








    }


})

