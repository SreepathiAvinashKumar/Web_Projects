function getHistory() {
  return document.getElementById("history-value").innerText;
}

function PrintHistory(num) {
  document.getElementById("history-value").innerText = num;
}

function getOutput() {
  return document.getElementById("output-value").innerHTML;
}

function PrintOutput(num) {
  document.getElementById("output-value").innerText = num;
}

function NumConversion(num) {
  return Number(num);
}

var operator = document.getElementsByClassName("operator");

for (var i = 0; i < operator.length; i++) {
  operator[i].addEventListener("click", function () {
    if (this.id == "clear") {
        PrintOutput("");
        PrintHistory("");
    } else if(this.id=="backspace") {
      var Temp = NumConversion(getOutput()).toString();
      if(Temp) {
        output = Temp.substr(0, Temp.length-1);
        PrintOutput(output);
      }
    } else{
      var output = getOutput();
      var history = getHistory();

      if(output!="") {
        output = NumConversion(getOutput());
        history = history + output;
        if(this.id=="=") {
          var result=eval(history);
          
          PrintOutput(result);
          PrintHistory("");

        }

         else{
          history = history + this.id;
          PrintHistory(history);
          PrintOutput("");
        }
      }
    }

  });
}

var number = document.getElementsByClassName("number");

for (var i = 0; i < number.length; i++) {
  number[i].addEventListener("click", function () {
    var output = NumConversion(getOutput());

    if (output != NaN) {
      output = output + this.id;

      PrintOutput(output);
    }
  });
}

function clearhistory(){
    PrintHistory("");
}
