//information to be saved in localstorage for later use
var course;
var time = [];
var language_preference = [];
var studyArea;
var tutor;

//selected course_name,course_number,language
var getcourses = document.getElementsByName('getcourse')[0];
var getcourseNumber = document.getElementsByName('courseNum')[0];
var courseNumber = document.getElementById('coursesNumber');
var study_area = "Library";

//select courses
getcourses.addEventListener('input',function(){
  while( courseNumber.hasChildNodes() ){
   courseNumber.removeChild(courseNumber.lastChild);
   }
   document.getElementsByName('courseNum')[0].value = '';

   var newOption = document.createElement("option");
   newOption.value = "Select Course Number";
   courseNumber.appendChild(newOption);

   if(this.value == "AMS"){
     addCourseNumber(['151','161','210','261','301','310','315']);
   }
   else if(this.value == "BUS"){
     addCourseNumber(['210','310','315']);
   }
   else if(this.value == "CSE"){
     addCourseNumber(['101','114','214','215','216']);
   }
   else if(this.value == "PHY"){
     addCourseNumber(['131','132']);
   }
   else if(this.value == "WRT"){
     addCourseNumber(['192','194','101','102']);
   }
   else{addCourseNumber([]);}
});

//check input field before loading a new content
function checkInput(id){
  if(id == '1'){
          var selectedCourse = document.getElementsByName('getcourse')[0].value;
          var selectedCourseNumber =document.getElementsByName('courseNum')[0].value;
          if(selectedCourseNumber == "Select Course Number" || selectedCourseNumber == "" || selectedCourse == ""){
            alert("Please fill in the required inputs");
          }
          else{
            document.getElementById("loading").style.display = "block";
            localStorage.setItem("course", selectedCourse+'-'+selectedCourseNumber);
            render("time.html");
          }

        }

else if(id == '2'){
  document.getElementById("loading_2").style.display = "block";
  render("language.html");
}
else if(id == '3'){
  document.getElementById("loading_3").style.display = "block";
  var primary_language = document.getElementsByName('getlangs')[0].value;
  var secondary_language = document.getElementsByName('second_getlangs')[0].value;
  localStorage.setItem("primary_preference_language",primary_language);
  localStorage.setItem("secondary_preference_language",secondary_language);
  render("study_area.html");
}
else if(id == '4'){
  localStorage.setItem("area","Library");
  render("tutor_search.html");
}
else if(id == '5'){
  render("apply.html");
}
else if(id == '6'){
  render("welcome.html");
}
return true;}

//load a different content
function render(page){
  setTimeout(function(){
        window.location.href = page;
  }, 300);
}

//Add tutoring session time
function addTime(){
  var time = document.getElementById("addTimeButton");
  var next = document.getElementById("continueButton");
  var div1 = document.getElementById('moreTime');
  var div2 = document.getElementById('10');
  div2.innerHTML = div1.innerHTML;
  $('#addTimeButton').appendTo('#11');
  $('#continueButton').appendTo('#11');
}

//add course numbers to the datalist based on the selected course name
function addCourseNumber(list){
   list.forEach((item, i) => {
     var newOption = document.createElement("option");
     newOption.value = item;
     courseNumber.appendChild(newOption);
  });
}

//preview the application to be submitted
function preview(){
  document.getElementById('course_display').innerHTML = localStorage.getItem("course");
  document.getElementById('lang_display').innerHTML = localStorage.getItem("primary_preference_language")+','+localStorage.getItem("secondary_preference_language");
  document.getElementById('time_display').innerHTML = "Time not available";
  document.getElementById('area_display').innerHTML = localStorage.getItem("area");
  var divContents = $(".application").html();
  var printWindow = window.open('', '', 'height=400,width=800');
  printWindow.document.write('<html><head><title>Tester - Application</title>');
  printWindow.document.write('</head><body >');
  printWindow.document.write(divContents);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.open();
}

//update Schedule
function updateSchedule(){
   var language =  document.getElementsByName('getlangsFromTutor')[0].value;
   var area =  document.getElementsByName('getplaceFromTutor')[0].value;
   localStorage.setItem("updated_language",language);
   localStorage.setItem("updated_area",area);
   render("informTutor.html");

}

function confirm(){
   
}

function delete(){

}
