var historyData = [];
var expressionData = "";
var resultData = "";

function disply(val) {
  document.getElementById("id1").value += val;
  expressionData = val;
}
function solve() {
  let x = document.getElementById("id1").value;
  let y = eval(x);
  document.getElementById("id1").value = y;
  resultData = y;
  historyData.push({ expression: expressionData, result: resultData });
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
      log.innerHTML=string;
}
