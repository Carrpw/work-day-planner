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
    $("#boop2").on("click", function() {
        var userInput2 = $("#exampleFormControlTextarea10").val();
            if(userInput2 === ""){
                alert("No event listed this hour.");
            }
        localStorage.setItem('userInput2', userInput2);
    });
    $("#boop3").on("click", function() {
        var userInput3 = $("#exampleFormControlTextarea11").val();
            if(userInput3 === ""){
                alert("No event listed this hour.");
            }
        localStorage.setItem('userInput3', userInput3);
    });
    $("#boop4").on("click", function() {
        var userInput4 = $("#exampleFormControlTextarea12").val();
            if(userInput4 === ""){
                alert("No event listed this hour.");
            }
        localStorage.setItem('userInput4', userInput4);
    });
    $("#boop5").on("click", function() {
        var userInput5 = $("#exampleFormControlTextarea13").val();
            if(userInput5 === ""){
                alert("No event listed this hour.");
            }
        localStorage.setItem('userInput5', userInput5);
    });
    $("#boop6").on("click", function() {
        var userInput6 = $("#exampleFormControlTextarea14").val();
            if(userInput6 === ""){
                alert("No event listed this hour.");
            }
        localStorage.setItem('userInput6', userInput6);
    });
    $("#boop7").on("click", function() {
        var userInput7 = $("#exampleFormControlTextarea15").val();
            if(userInput7 === ""){
                alert("No event listed this hour.");
            }
        localStorage.setItem('userInput7', userInput7);
    });
    $("#boop8").on("click", function() {
        var userInput8 = $("#exampleFormControlTextarea16").val();
            if(userInput8 === ""){
                alert("No event listed this hour.");
            }
        localStorage.setItem('userInput8', userInput8);
    });
    $("#boop9").on("click", function() {
        var userInput9 = $("#exampleFormControlTextarea17").val();
            if(userInput9 === ""){
                alert("No event listed this hour.");
            }
        localStorage.setItem('userInput9', userInput9);
    });
    

    