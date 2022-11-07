var historyData = [];
var expressionData = "";
var resultData = "";

function disply(val) {
  document.getElementById("id1").value += val;
  expressionData = val;
}
function solve() {
  let show = document.getElementById("id1").value;
  expressionData = show;

  let view = eval(show);
  document.getElementById("id1").value = view;
  resultData = view;
  if (historyData.length < 20) {
    historyData.push({ expression: expressionData, result: resultData });
  } else {
    null;
  }
  showLogData();
  resultData = "";
  expressionData = "";
}
function clr() {
  document.getElementById("id1").value = " ";
}
function showLogData() {
  var log = document.getElementById("historyLog");
  var string = "";

  for (var key in historyData)
    string +=
      "" +
      historyData[key]["expression"] +
      " = " +
      historyData[key]["result"] +
      "<br>";
  log.innerHTML = string;
}
function clearHistory() {
  historyData = [];
  document.getElementById("historyLog").innerHTML = " ";
}
$("#id1").keypress(function (e) {
  let key = e.which;
  let checkValues = document.getElementById("id1").value;

  if (key == 13 && checkValues) {
    // the enter key code
    solve();
  }
});
