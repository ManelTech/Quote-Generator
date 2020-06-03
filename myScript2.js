 const loveQuotes ={
  noun : ['-Love', '-True love','-Loving someone'],
  verb : ['is like', 'is', 'makes'],
  end : ['you will never be hurt.', 'a beautiful flower!', 'a really scary thing!', 'our true desitiny.', 'life bearable.']
}
const hopeQuotes ={
  noun : ['-Hope','-A better tomorrow'],
  verb : ['is', 'lies', 'begins'],
  end : ['in dreams.', 'the magic carpet that transports us from the present moment into the realm of infinite possibilities!', 'in the dark.','tomorrows veneer over todays disappiontement. ' ]
}
function randomNumber(quotesArray) {
  return Math.floor(Math.random() * quotesArray.length);
}
function assembleSentence(quotesObject) {
   return quotesObject.noun[randomNumber(quotesObject.noun)]+ " "+ quotesObject.verb[randomNumber(quotesObject.verb)]+ " "+ quotesObject.end[randomNumber(quotesObject.end)];
 }
function display(quoteSentences) {
  document.getElementById("demo").innerHTML=quoteSentences ;
}
function displaySentence() {
   let quoteNumber = parseInt(document.getElementById("list").value);
   let userSelectionValue = document.getElementById("list1").value;
   let userSelection ;
    if (userSelectionValue === "hopeQuotes") {
        userSelection = hopeQuotes;
        }
    else {
          userSelection = loveQuotes;
          }
    var sentence = "";
     for (var i = 0; i < quoteNumber; i++) {
       sentence += assembleSentence(userSelection) + "<br>";
          display(sentence);
  }
}
//exit page
function goodbyeFunction() {
   window.close();
}
//clear quotes and set default values in the dropdowns
function clearFunction() {
  //removing all child elements of qbox
  const myNode = document.getElementById("qbox");
 while (myNode.firstChild) {
   myNode.removeChild(myNode.firstChild);
 }
 //creating <p> with id: demo again after being removed
 var para = document.createElement("PARAGRAPH");
 para.innerHTML = " ";
 para.id ="demo";
 document.getElementById("qbox").appendChild(para);
 //set default values
 var list = document.getElementById('list').value = '2';
 var listl = document.getElementById('list1').value = 'hopeQuotes';
}
//restart: adding restart button in quote-box and eventListener
function restartFunction() {
  var btn = document.createElement("BUTTON");
  btn.innerHTML = "Restart";
  btn.id ="restartbtn";
  document.getElementById("qbox").appendChild(btn);
  var y = document.getElementById("restartbtn");
  y.addEventListener("click", clearFunction) ;
}
//exit: adding exit button in quote-box and evenListener
  function exitFunction() {
    var btn1 = document.createElement("BUTTON");
  btn1.innerHTML = "Exit";
  btn1.id = "exitbtn";
  document.getElementById("qbox").appendChild(btn1);
  var z = document.getElementById("exitbtn");
  z.addEventListener("click", goodbyeFunction) ;

  }
var x = document.getElementById("myBtn");
x.addEventListener("click", displaySentence);
x.addEventListener("click", restartFunction) ;
x.addEventListener("click", exitFunction) ;
