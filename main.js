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





}







const ageCalculatorForm = document.getElementById('ageCalculator');
ageCalculatorForm.addEventListener("submit",(event) => {

event.preventDefault();
calculateAge();

});