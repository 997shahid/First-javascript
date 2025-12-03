function sumText(){
     let n = document.getElementById("sumNumber").value;

     let sum = 0;
     let i = 1;
     while(i <= n){
       sum += i;
       i++;
     }

     document.querySelector(".result").innerText = `1 to ${n} summation: ${sum}`;
   }

   function positive(){
    let n = document.getElementById("positive").value ;
    if(n>0){
     document.querySelector(".result-2").innerText = `it is a positive number`;
    }
     else if (n<0){
      document.querySelector(".result-2").innerText = `it is negative number`;
     }
      else{
      document.querySelector(".result-2").innerText = `Zero`;
      }
     }

function adult(){
 let n = document.getElementById("adult").value ;
 if(n>18){
  document.querySelector(".result-3").innerText = `Adult`;

 }
 else{
  document.querySelector(".result-3").innerText = `No Adult`;

 }
}
function poient(){
 let n = document.getElementById("poient").value;
 if(n == ""){
  document.querySelector(".error").style.display = "block";
 }
 
 else if(n>80){
  document.querySelector(".result-4").innerText = `A+`;
  document.querySelector(".info").style.display = "none";
 }
 else if(n>70){
  document.querySelector(".result-4").innerText = `A`;
document.querySelector(".info").style.display = "none";
 }
 else if(n>60){
  document.querySelector(".result-4").innerText = `B`;
document.querySelector(".info").style.display = "none";
 }
 else if(n>40){
  document.querySelector(".result-4").innerText = `C`;
document.querySelector(".info").style.display = "none";
 }
 else if(n<40){
  document.querySelector(".result-4").innerText = `F`;
  document.querySelector(".info").style.display = "none";
 }
}
function java(){
 let n = document.getElementById("java").value ;
 let i=1;
 do{
  document.querySelector(".result-5").innerText += `I love Javascript \n`;
  i++;
 } while(i<=n);
}
function even(){
  let n = document.getElementById("even").value ;
let i = 1;
do{
 if(i %2 == 0){
    document.querySelector(".result-6").innerText += `${i} even\n`;
 }
 else{
    document.querySelector(".result-6").innerText += `${i} odd\n`;

 }
 i++;
}while(i<=n);
}
function decri(){
 let n = document.getElementById("decri").value ;
let sum;
 let i=0;
 while(i<=n){
  sum = n-i;
  document.querySelector(".result-7").innerText += `${sum}\n`;
  i++;
 }
}
function multi(){
 let n = document.getElementById("mult").value ;
 for(i=1;i<=10;i++){
  document.querySelector(".result-8").innerText += `${n} x ${i} = ${n*i} \n`;
 }
}

  