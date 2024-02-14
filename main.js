function calculateAge(){

const date=new Date();
const birthdayInput= document.getElementById("birthday").value;
const result=document.querySelector("#res-item")
const arr=birthdayInput.split("-");

const day=arr[0];
const month=arr[1]-1;
const year=arr[2];
console.log(arr)
const birthDate=new Date(year, month, day);
console.log(birthDate);







}




const ageCalculatorForm = document.getElementById('ageCalculator');
ageCalculatorForm.addEventListener("submit",(event) => {

event.preventDefault();
calculateAge();

});