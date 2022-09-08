
  
  <style>
    .myVideoClass {
      margin: 0 auto;
      width: 50%;
      min-width: 400px;
      display: inline-block;
    }

    .endform-button {
  
      background-color: #f5f5f5;
      color: rgba(41, 95, 145, 0.75);
      font-size: 20px;
  
  
    }
  
  
    .incorrect-ans-button {
  
      background-color: rgb(71, 71, 71);
      color: rgba(41, 95, 145, 0.75);
      font-size: 15px;
  
    }
  
    .correct-ans-button {
  
      background-color: rgb(71, 71, 71);
      color: rgba(41, 95, 145, 0.75);
      font-size: 15px;
  
    }
  
  
  
    .endform-button,
    .incorrect-ans-button,
    .correct-ans-button {
      background-color: #eee;
      margin: 4px 2px;
      padding: 15px 20px;
      top: 0px;
      border: solid 1px #eee;
      /*box-shadow: 2px 2px #ddd;*/
      border-radius: 4px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-weight: bold;
      font-family: 'Nunito', sans-serif;
      /* google font*/
      cursor: pointer;
      transition-duration: 0.2s;
      width: 15vw;
      min-width: 150px;
    }
  
    .endform-button.btn1:hover {
      background-color: #ddd;
      /* color: rgba(255, 99, 71, 1); */
      color: rgb(15, 199, 168);
      font-weight: bold;
    }
  
    .endform-button.btn2:hover {
      background-color: #ddd;
      color: rgba(41, 95, 145, 1);
      font-weight: bold;
  
    }
  
    .incorrect-ans-button:hover {
      background-color: salmon;
      color: white;
      font-weight: bold;
    }
  
    .correct-ans-button:hover {
      background-color: rgba(41, 145, 123, 0.75);
      ;
      color: white;
      font-weight: bold;
    }
  
  
    .container {
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 22px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
  
    /* Hide the browser's default radio button */
    .container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }
  
    /* Create a custom radio button */
    .checkmark {
      position: absolute;
      top: 0;
      left: 0;
      height: 25px;
      width: 25px;
      background-color: #eee;
      border-radius: 50%;
      /*makes the selection circular*/
    }
  
    /* On mouse-over, add a grey background color */
    .container:hover input~.checkmark {
      background-color: #aaa;
    }
  
  
    /* When the radio button is checked*/
    .container input:checked~.checkmark {
      background-color: #ccc;
    }
  
  
    /* Create the indicator (the dot/circle - hidden when not checked) */
    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }
  
    /* Show the indicator (dot/circle) when checked */
    .container input:checked~.checkmark:after {
      display: block;
    }
  
    /* Style the indicator (dot/circle) */
    .container .checkmark:after {
      top: 9px;
      left: 9px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: white;
    }
  </style>

  
   
  
  <form id="my-form" name="quiz">
  
   <!-- QUESTION 1 -->
    <p>
      <span id="q1"> </span>
    </p>
  
    <label class="container">
      <input type="radio" name="q1" value="incorrect" id="00">
      <span> </span>
      <span class="checkmark"></span>
    </label>
    <label class="container">
      <input type="radio" name="q1" value="incorrect" id="01">
      <span> </span>
      <span class="checkmark"></span>
    </label>
    <label class="container">
      <input type="radio" name="q1" value="correct" id="02">
      <span> </span>
      <!-- VIDEO SECTION  -->
      <span class="clearAble showVideoSolutions" style="display:none; color:#429e84;">
        <a class="someClass">video</a>
  
        <video class="myVideoClass" style="display:none" preload="none" controlsList="nodownload"
          onloadstart="this.volume=0.25">
          <source src="https://www.brightowltutoring.com/s/brightowl-preview.mp4">
          Your browser does not support mp4.
        </video>
      </span>
      <!-- VIDEO SECTION -->
      <span class="checkmark"></span>
    </label>
    <label class="container" >
      <input type="radio" name="q1" value="incorrect" id="03">
      <span > </span>
      <span class="checkmark"></span>
    </label>
  
  
  
  <!-- QUESTION 2 -->
    <p>
      <span id="q2"> </span>
  
    </p>
    <label class="container">
      <input type="radio" name="q2" value="correct" id="10">
      <span></span>
      <!-- VIDEO SECTION  -->
      <span class="clearAble showVideoSolutions" style="display:none; color:#429e84;">
        <a class="someClass">video</a>
        <video class="myVideoClass" style="display:none" preload="none" controls controlsList="nodownload"
          onloadstart="this.volume=0.25">
          <source src="https://www.brightowltutoring.com/s/brightowl-preview.mp4">
          Your browser does not support mp4.
        </video>
      </span>
      <!-- VIDEO SECTION -->
      <span class="checkmark"></span>
    </label>
    <label class="container">
      <input type="radio" name="q2" value="incorrect" id="11">
      <span> </span>
      <span class="checkmark"></span>
    </label>
    <label class="container">
      <input type="radio" name="q2" value="incorrect" id="12">
      <span> </span>
      <span class="checkmark"></span>
    </label>
    <!-- <label class="container">
      <input type="radio" name="q2" value="incorrect" id="13">
      <span> </span>
      <span class="checkmark"></span>
    </label> -->
  
  
  
  
  
    <span class="toggleAble" style="display:none">
  
      <b style="color:rgb(89,208,174)"> <output size=4 name="mark"></output> out of <output size=4
          name="numQuestions"></output> points
      </b>
    </span>
  
  
  
    <br><br>
  
    <span>
      <input class="endform-button btn1" type="button" value="Submit" onClick="getScore(this.form);submitStuff();">
      <input class="toggleAble endform-button btn2" style="display:none" type="reset" value="Clear"
        onClick=" clearStuff();">
    </span><br>
  
    <span>
  
      <input id="incorrectAnswers" class="toggleAble clearAble incorrect-ans-button" style="display:none" type="button"
        value="Show Incorrect" onClick="showIncorrect()">
      <input id="answers" class="toggleAble clearAble correct-ans-button" style="display:none" type="button"
        value="Show Solutions" onClick="showSolutions()">
    </span>
  
  
  
  </form>
  
  <!-- </body> -->
  <!--</html>-->
  
  
  
  <script>

    import {onMount} from 'svelte'
    onMount(replaceInnerHTML)
    
    const questions = [{
        numb: 1,
        question: "The radius of a sphere is measured with an uncertainty of 2$\\%$. What is the uncertainty in the volume of the sphere?",
        answer: "6$\\%$",
        options: [
          "2$\\%$",
          "4$\\%$",
          "6$\\%$",
          "8$\\%$",
        ]
      },
  
      {
        numb: 2,
        question: "The force of air resistance $F$ that acts on a car moving at speed $v$ is given by $F=kv^2$ where $k$ is a constant. What is the unit of $k$?",
        answer: "kg  m$^{–1}$",
        options: [
          "kg  m$^{–1}$",
          "kg  m$^{–2}$ s$^2$",
          "kg  m$^{–2}$",
          // "kg  m$^{–2}$ s$^{-2}$"
  
        ]
      }
  
    ]
  
    const questionsCount = questions.length;
  
  
    function replaceInnerHTML() {
  
      for (j = 0; j < questionsCount; j++) {
  
        stringID = "q" + (j + 1).toString();
  
        document.getElementById(stringID).innerHTML = "<b>Q" + questions[j].numb + ".</b>  " + questions[j].question;
  
  
        let optionsLength = questions[j].options.length;
  
  
        for (i = 0; i < optionsLength; i++) {
          PLACEHOLDER_ID = j.toString() + i.toString();
         
          elementSibling  = document.getElementById(PLACEHOLDER_ID)
                                    .nextElementSibling;
          elementSibling.innerHTML = questions[j].options[i] + elementSibling.innerHTML ;
  
        }
      }
      /*MathJax.typeset();
      MathJax.typesetClear();*/
      MathJax.typesetPromise();
  
  
    }
  
  
    var num_Questions = questionsCount;
    var sumOptionsLength = 0;
    var checkedCounter = 0;
  
  
    function getScore(form) {
  
      var score = 0;
      var current_Element;
      var current_Selection;
      
      
  
      for (i = 0; i < num_Questions; i++) {
        
        optionsLength = questions[i].options.length;
        sumOptionsLength += optionsLength;
        currentElement = sumOptionsLength - optionsLength;
       
        for (j = 0; j < optionsLength; j++) {
          current_Selection = form.elements[currentElement + j];
          if (current_Selection.checked) {
  
            checkedCounter ++;
  
            if (current_Selection.value == "correct") {
              score++;
              break;
            }
          }
        }
      
        
      }
  
  
      // if (checkedCounter==0 || checkedCounter%num_Questions != 0) {
      if (checkedCounter < num_Questions) {
        alert("Answer all questions, and hit Submit again.");
        // checkedCounter=0;
        // return false;
      }
  
  
      form.mark.value = score;
      form.numQuestions.value = num_Questions;
    }
  
  
    function toggleOn() {
      var x, i;
      x = document.querySelectorAll(".toggleAble");
      for (i = 0; i < x.length; i++) {
        if (x[i].style.display === "none") {
          x[i].style.display = "inline";
        }
      }
    }
  
    function toggleOff() {
      var x, i;
      x = document.querySelectorAll(".toggleAble");
      for (i = 0; i < x.length; i++) {
        if (x[i].style.display === "inline") {
          x[i].style.display = "none";
        }
      }
    }
  
  
  
    function greenHighlight() {
      var x, i;
      x = document.querySelectorAll('[value="correct"]');
  
      for (i = 0; i < x.length; i++) {
  
        x[i].nextElementSibling.style.backgroundColor = "rgb(223, 247, 240)";
  
      }
    }
  
    function greenUnHighlight() {
      var x, i;
      x = document.querySelectorAll('[value="correct"]');
      for (i = 0; i < x.length; i++) {
        x[i].nextElementSibling.style.backgroundColor = "transparent";
  
      }
    }
  
  
    var incorrectArrayId = [];
  
    function redTextHighlight() {
      var y, i;
      y = document.querySelectorAll('[value="incorrect"]');
      for (i = 0; i < y.length; i++) {
        var z = y[i];
  
        if (z.checked == true ) {
          incorrectArrayId.push(z.id);
          z.nextElementSibling.style.color = "salmon";
        }
      }
    }
  
    function redTextUnHighlight() {
      var y, i;
      y = document.querySelectorAll('[value="incorrect"]');
      for (i = 0; i < y.length; i++) {
        var z = y[i];
  
        z.nextElementSibling.style.color = "rgb(56,70,90)";
      }
    }
  
  
    // function toggleOnID(some_str_ID) {
    //   x = some_str_ID;
    //   display = document.getElementById(x).style.display;
  
    //   if (display == "none") {
    //     // document.getElementById(x).style.display="inline";
    //     document.getElementById(x).style.display = "block";
    //   }
    // }
  
    function toggleOnByClass(some_str) {
      classList = document.querySelectorAll(some_str);
  
      for (i = 0; i < classList.length; i++) {
        classListdisplay = classList[i].style.display;
        if (classListdisplay == "none") {
          classList[i].style.display = "block";
        }
      }
    }
  
  
    function clearStuff() {
  
      greenUnHighlight();
      redTextUnHighlight();
      toggleOff();
  
      var clearAbles = document.querySelectorAll(".clearAble");
      for (i = 0; i < clearAbles.length; i++) {
        clearAbles[i].style.display = "none";
      }
      clearAbles = [];
  
      incorrectArrayId.length = 0;
      sumOptionsLength = 0;
      // checkedCounter=0;
  
    }
  
  
    function submitStuff() {
  
      if(checkedCounter==num_Questions){
        toggleOn();
        
      }
  
      incorrectArrayId.length = 0;
      sumOptionsLength = 0;
      checkedCounter=0;
    }
  
    function showSolutions() {
  
        greenHighlight();
        scrollIntoViewSTR('00');
        toggleOnByClass(".showVideoSolutions");
      
    }
  
    function showIncorrect() {
      redTextHighlight();
      scrollIntoViewSTR(incorrectArrayId[0])
    }
  
  
    function scrollIntoViewSTR(some_str) {
      document.getElementById(some_str).scrollIntoView();
      window.scrollBy(0, -170); //offset correction
    }
  
  
  
    (function () {
      var buttons = document.querySelectorAll(".someClass");
      var buttonsCount = buttons.length;
      for (var i = 0; i <= buttonsCount; i += 1) {
        buttons[i].onclick = function () {
          videoDisplay = this.nextElementSibling.style.display;
          if (videoDisplay == "none") {
            this.nextElementSibling.style.display = "block";
            this.nextElementSibling.play();
          } else {
            this.nextElementSibling.style.display = "none";
            this.nextElementSibling.pause();
          }
  
        };
      }
    })();
  
  
    (function () {
      video = document.getElementsByTagName("video");
      videoCount = video.length;
      var counter = 0;
  
      for (i = 0; i < videoCount; i++) {
        video[i].onclick = function () {
          counter += 1;
          if (counter % 2 == 0) {
  
            this.play();
          } else {
  
            this.pause();
          }
        };
      }
    })();

    // window.onload = replaceInnerHTML;

// window.addEventListener('popstate', function(){
//   window.location.reload();
// });
</script>

  