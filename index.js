 const birthDate = document.querySelector('#birtdate')
 const luckyNumber = document.querySelector('#lucky-number')
 const checkBtn = document.querySelector('#check').addEventListener('click',clickHandler)
 const output = document.querySelector('#output')

hideMessage()

  function clickHandler(){
   let dob =  birthDate.value;
   let lucky = luckyNumber.value;
   const sum = calculateSum(dob)
    //console.log(sum)

   luckisDivisible(sum,lucky)
  }


function calculateSum(dob){
 dob = dob.replaceAll("-","")
 let sum = 0;
 for(let i = 0; i <dob.length; i++ ){
 sum = sum + Number(dob.charAt(i))
 }
 return sum;
}


function luckisDivisible(sum,lucky){
  output.style.display = "block";

  if(sum % lucky == 0){
    output.value = `your birthday is lucky 🥳`
   }else{
    output.value = `${lucky} is not that lucky 🙁`
  }

}

function hideMessage(){
  output.style.display = "none"
}





