"use strict";

let data = [{
    CourseId: "19SUM100",
    Title: "Introduction to HTML/CSS/Git",
    Instructor: "Wyatt",
    Location: "Classroom 7",
    StartDate: "07/08/19",
    Fee: 100.00,
},
{
    CourseId: "19SUM200",
    Title: "Introduction to JavaScript",
    Instructor: "Lynn",
    Location: "Classroom 8",
    StartDate: "07/22/19",
    Fee: 350.00,
},
{
    CourseId: "19SUM300",
    Title: "Introduction to Node.JS and Express",
    Instructor: "Gross",
    Location: "Classroom 4",
    StartDate: "09/09/19",
    Fee: 50.00,
},
{
    CourseId: "19SUM400",
    Title: "Introduction to SQL and Databases",
    Instructor: "Wyatt",
    Location: "Classroom 6",
    StartDate: "09/16/19",
    Fee: 50.00,
},
{
    CourseId: "19SUM500",
    Title: "Introduction to Angular",
    Instructor: "Lynn",
    Location: "Classroom 7",
    StartDate: "09/23/19",
    Fee: 50.00,
}];

window.onload = function(){

    let showDetailsBtn = document.getElementById("showDetailsBtn");
    showDetailsBtn.onclick = showDetailsBtnClicked;

    loadCourseList()

}

function loadCourseList(){

    const courseDropdown = document.getElementById("courseDropdown");

    //adding Select One element e.g <option value="">Select One...</option>
    let selectOneOption = new Option("Select One...")
    selectOneOption.value = "";
    courseDropdown.appendChild(selectOneOption)

    for(let i = 0; i < data.length; i++){
        
        //createElementById to create stuff on index.html
        let theOption = document.createElement("option");

        //comp says lets go to the option tag and set properties
        theOption.textContent = data[i].Title

        //option tag also has value
        theOption.value = data[i].CourseId

        //add option to the <select> element
        courseDropdown.appendChild(theOption)
    }

}

function showDetailsBtnClicked() {

    const coursePara = document.getElementById("coursePara");
    coursePara.innerHTML = "";
    const titlePara = document.getElementById("titlePara");
    titlePara.innerHTML = "";
    const instructorPara = document.getElementById("instructorPara");
    instructorPara.innerHTML = "";
    const startdatePara = document.getElementById("startdatePara");
    startdatePara.innerHTML = "";
    const feePara = document.getElementById("feePara");
    feePara.innerHTML = "";

    const coursesDropdown = document.getElementById("courseDropdown");
    let selectedCourseID = coursesDropdown.value;

    if (selectedCourseID == ""){
        // display the message and exit (can’t find course without the course being selected)
        alert("Please select a course first");
        return;
    }

    let matchingData = data.find( element => element.CourseId == selectedCourseID);


    coursePara.innerHTML = matchingData.CourseId;
    titlePara.innerHTML = matchingData.Title;
    instructorPara.innerHTML = matchingData.Instructor;
    startdatePara.innerHTML = matchingData.StartDate;
    feePara.innerHTML = matchingData.Fee;
}
