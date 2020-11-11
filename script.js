$(document).ready(function() {

    var m = moment().format("dddd, MMMM Do");
    $("#currentDay").append(m);

    

    $("#boop1").on("click", function() {
        var userInput1 = $("#exampleFormControlTextarea9").val();
            if(userInput1 === ""){
                alert("No event listed this hour.");
            }
        localStorage.setItem('userInput1', userInput1);
    });