$(document).ready(function(){

  $("#submit").on("click", function(event){
    event.preventDefault();
    $("#tab").show();

  var fact = parseInt($("input#value").val());
  var total = 1;
  var list = "1";

  for(var i = 1; i < fact; i = i + 1){
    total = total * (i + 1);
    list = list + " * " + (i + 1);
  }

    $("tr.result").empty().append("<td>"+ list + " = " + total + "</td>")

    })


})
