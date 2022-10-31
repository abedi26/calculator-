$(function () {
  $("#addButton").click(handlebtnClick);
 
});
function handlebtnClick(){
    var newTodo = $("#newTodo").val();
    if (!newTodo) {
      $("#newTodo").addClass("error");
      return;
    }
    else{
    $("#newTodo").removeClass("error");
}
    $("newTodo").val("");
    $("#todos").append("<li>" + newTodo + "</li>");
  };

