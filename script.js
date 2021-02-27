$(document).ready(function() {
    var hours9 = localStorage.getItem("hour-9");
    $("#hours-9").val(hours9)
    var hours10 = localStorage.getItem("hour-10");
    $("#hours-10").val(hours10)
    var hours11 = localStorage.getItem("hour-11");
    $("#hours-11").val(hours11)
    var hours12 = localStorage.getItem("hour-12");
    $("#hours-12").val(hours12)
    var hours13 = localStorage.getItem("hour-13");
    $("#hours-13").val(hours13)
    var hours14 = localStorage.getItem("hour-14");
    $("#hours-14").val(hours14)
    var hours15 = localStorage.getItem("hour-15");
    $("#hours-15").val(hours15)
    var hours16 = localStorage.getItem("hour-16");
    $("#hours-16").val(hours16)
    var hours17 = localStorage.getItem("hour-17");
    $("#hours-17").val(hours17)
    
    $(".saveBtn").on("click", function() {
        var textPoint = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, textPoint);
    });
    
    $("#currentDay").text(moment().format("MMMM Do YYYY"))

    function hours() {
        currentHour = moment().format("HH")
        var hourIndex = currentHour - 9;
        $(".time-block").each(function(timeArea) {
            if(timeArea < hourIndex) {
                $(this).addClass("past").removeClass("present").removeClass("future");
            };
            if(timeArea === hourIndex) {
                $(this).addClass("present").removeClass("past").removeClass("future");
            };
            if(timeArea > hourIndex) {
                $(this).addClass("future").removeClass("present").removeClass("past");
            };
        });
    };

    setInterval(hours, 1000);
});
