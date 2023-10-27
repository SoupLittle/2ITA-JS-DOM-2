//Part 1: Perfect number

function perfectNumber() {
    var n = parseInt(document.getElementById('num').value);
    var sum = 0;

    for (var i = 1; i < n; i++) {
        if (n % i === 0) {
            sum += i;
        }
    }

    var resultElement = document.getElementById('result');
    if (sum === n) {
        resultElement.innerHTML = "Number is perfect";
    } else {
        resultElement.innerHTML = "Number is not perfect";
    }
}


function randomNum(){
   var a = Math.floor(Math.random() * 100)
   var sum = 0;

   for (var i = 1; i < a; i++) {
    if (a % i === 0) {
        sum += i;
    }
}

var resultElement = document.getElementById('result');
if (sum === a) {
    resultElement.innerHTML = "Number is perfect";
} else {
    resultElement.innerHTML = "Number is not perfect";
}

console.log(a) //To see the numbers
}
//Part 2: Color Picker

//Color sliders

function colorPicker() {

    var red = document.getElementById("ColSlide1").value;
    var green = document.getElementById("ColSlide2").value;
    var blue = document.getElementById("ColSlide3").value;

    document.body.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
  }

  document.getElementById("ColSlide1").addEventListener("input", colorPicker);
  document.getElementById("ColSlide2").addEventListener("input", colorPicker);
  document.getElementById("ColSlide3").addEventListener("input", colorPicker);

  colorPicker();

  //Color box

  var colorPicker = document.getElementById(`ShowCol`)

  colorPicker.addEventListener("input", function () {
   
    var selectedColor = colorPicker.value;

   
    document.body.style.backgroundColor = selectedColor;
  });

  // Color text chooser

function colorTextFun() {
     var colorText = document.getElementById("ColText").value

    document.body.style.backgroundColor = colorText

}
document.getElementById('btn2').addEventListener("click", colorTextFun)

// Random color, used a code somebody else has made because i wanted it to generate a hex code👍

var btn = document.getElementById('btn3')
function generateColor(){
 var hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
 var code = "";
 for(var i=0; i<6; i++){
  code += hexArray[Math.floor(Math.random()*15)];
 }
 return `#${code}`
}

btn.addEventListener('click', () => {
  document.body.style.backgroundColor = generateColor();
});