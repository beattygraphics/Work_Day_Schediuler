
// date and time, user of moments
$("#currentDay").text(moment().format('LLLL'));


$(document).ready( function() {
    changeColor ();
    renderText();
});

function changeColor () {
    
    var currentHour = moment().hours();
       
// Time Block Color Changes
    $(".input").each(function () {
        var timeBlock = parseInt($(this).attr("id"));
        console.log(timeBlock);

        if (currentHour > timeBlock) {
            $(this).removeClass("future");
            $(this).removeClass("current");
            $(this).addClass("old");
        } else if (currentHour < timeBlock) {
            $(this).removeClass("current");
            $(this).removeClass("old");
            $(this).addClass("future");
        } else {
            $(this).removeClass("old");
            $(this).removeClass("future");
            $(this).addClass("current");
        }
    });
}

//Save button functionality

var textEl;
var timeEl;

$(".saveBtn").click(function() {
    textEl = $(this).siblings(".input").val();
    console.log(textEl);

    timeEl = $(this).siblings(".hour").text();
    console.log(timeEl);

    localStorage.setItem(timeEl, JSON.stringify(textEl));

    changeColor();
    renderText();
    
});

//Saving each our to localStorage
function renderText () {   
    var text8 = JSON.parse(localStorage.getItem("8:00 am"));
    $("#8").val("");
    $("#8").val(text8);
}

// let timeBlock = { "8", "9", "10", "11", "12", "1", "2", "3", "4", "5", "6"};

// let timeBlock_serialized = JSON.stringify(timeBlock);

// localStorage.setItem(timeBlock);
// console.log(timeBlock);
