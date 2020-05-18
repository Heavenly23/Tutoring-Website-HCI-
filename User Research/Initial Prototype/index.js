var getcourses = document.getElementsByName('getcourse')[0];
var getcourseNumber = document.getElementsByName('courseNum')[0];
var courseNumber = document.getElementById('coursesNumber');

getcourses.addEventListener('input',function(){
  while( courseNumber.hasChildNodes() ){
   courseNumber.removeChild(courseNumber.lastChild);
   }
   document.getElementsByName('courseNum')[0].value = '';
   document.getElementById("courseSearch").checked = false;
   var newOption = document.createElement("option");
   newOption.value = "Select Course Number";
   courseNumber.appendChild(newOption);

   if(this.value == "AMS"){
     addCourseNumber(['151','161','210','261','301','310','315'],courseNumber);
   }
   else if(this.value == "BUS"){
     addCourseNumber(['210','310','315'],courseNumber);
   }
   else if(this.value == "CSE"){
     addCourseNumber(['101','114','214','215','216'],courseNumber);
   }
   else if(this.value == "PHY"){
     addCourseNumber(['131','132'],courseNumber);
   }
   else if(this.value == "WRT"){
     addCourseNumber(['192','194','101','102'],courseNumber);
   }
   else{addCourseNumber([],courseNumber);}
});

getcourseNumber.addEventListener('input',function(){
  document.getElementById("courseSearch").checked = false;
});

function addCourseNumber(list,courseNumber){
   list.forEach((item, i) => {
     var newOption = document.createElement("option");
     newOption.value = item;
     courseNumber.appendChild(newOption);
  });
}


function checkInput(){
  var selectedCourse = document.getElementsByName('getcourse')[0].value;
  var selectedCourseNumber =document.getElementsByName('courseNum')[0].value;
  if(selectedCourseNumber == "Select Course Number" || selectedCourseNumber == "" || selectedCourse == ""){
    alert("Please fill in the required inputs");
  }
  else{
    document.getElementById("loading").style.display = "block";
    setTimeout(function(){
          document.getElementById("courseSearch").checked = true;
          document.getElementById("1").style.display = "none";
          document.getElementById("2").style.display = "block";
    }, 3000);

  }

}

function addTime(){
  var div1 = document.getElementById('moreTime');
  var div2 = document.getElementById('10');
  div2.innerHTML = div1.innerHTML;
  alert('This is a mess!I will fix it, professor');

}
function checkInput_2(){
  document.getElementById("loading_2").style.display = "block";
  setTimeout(function(){
        document.getElementById("time").checked = true;
        document.getElementById("2").style.display = "none";
        document.getElementById("3").style.display = "block";
  }, 3000);
}

function checkInput_3(){
  document.getElementById("loading_3").style.display = "block";
  setTimeout(function(){
        document.getElementById("langPreference").checked = true;
        document.getElementById("3").style.display = "none";
        document.getElementById("4").style.display = "block";
  }, 3000);
}

function checkInput_4(){
  document.getElementById("loading_4").style.display = "block";
  setTimeout(function(){
        document.getElementById("studyArea").checked = true;
        document.getElementById("4").style.display = "none";
        document.getElementById("5").style.display = "block";
  }, 3000);
}
function checkInput_5(){
  document.getElementById("loading_5").style.display = "block";
  setTimeout(function(){
        document.getElementById("tutorSearch").checked = true;
        document.getElementById("5").style.display = "none";
        document.getElementById("6").style.display = "block";
  }, 3000);
}
function checkInput_6(){
  document.getElementById("loading_6").style.display = "block";
  setTimeout(function(){
        document.getElementById("apply").checked = true;
        document.getElementById("6").style.display = "none";
        document.getElementById("7").style.display = "block";
  }, 3000);
}
