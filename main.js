function calculateAge(){

const today=new Date();
const birthdayInput= document.getElementById("birthday").value;
const result=document.querySelector("#result");
const resultContainer=document.querySelector(".result-container");
const arr=birthdayInput.split("-");

const day=arr[0];
const month=arr[1]-1;
const year=arr[2];
const birthDate=new Date(year, month, day);
// console.log(birthDate);



const isValidDate = (date)=>{
    
    return(
        !(Object.prototype.toString.call(date).value === Date) && !isNaN(date)
        )
       
    
}



   if(!isValidDate(birthDate)){

    alert("Please enter a valid date")
    return
   }



const ageInMilliseconds = today - birthDate;
const ageInseconds = Math.floor(ageInMilliseconds/1000)
const ageInMinutes = Math.floor(ageInseconds/60)
const ageInHours = Math.floor(ageInMinutes/60)
const ageInDays = Math.floor(ageInHours/24)
const ageInWeeks=Math.floor(ageInDays/7)
const ageInMothes = Math.floor(ageInDays/30.436875);
const ageInYears = Math.floor(ageInDays/365.25); 




result.innerHTML =
`
<div class="res-item" id="res-item">
<h3>Age</h3>
<br>
<p>${ageInYears} Years ${ageInMothes} months ${ageInDays % 30} days</p>
</div>
<hr>
<div class="res-item" id="res-item">
<h3>Months Passed</h3>
<br>
<p>${ageInMothes}</p>
</div>
<hr>
<div class="res-item" id="res-item">
<h3>Weeks Passed</h3>
<br>
<p>${ageInWeeks}</p>
</div>
<hr>
<div class="res-item" id="res-item">
<h3>Days Passed</h3>
<br>
<p>${ageInDays}</p>
</div>
<hr>
<div class="res-item" id="res-item">
<h3>Hours Passed</h3>
<br>
<p>${ageInHours}</p>
</div>
<hr>
<div class="res-item" id="res-item">
<h3>Minutes Passed</h3>
<br>
<p>${ageInMinutes}</p>
</div>
<hr>
<div class="res-item" id="res-item">
<h3>Seconds Passed</h3>
<br>
<p>${ageInseconds}</p>
</div>
<hr>

`

resultContainer.style.display="block";

}







const ageCalculatorForm = document.getElementById('ageCalculator');
ageCalculatorForm.addEventListener("submit",(event) => {

event.preventDefault();
calculateAge();

});