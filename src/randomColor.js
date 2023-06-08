export function randomColor(){
let stri="#";
let hash={
  10:"a",
  11:"b",
  12:"c",
  13:"d",
  14:"e",
  15:"f"
}
let arr=[10,11,12,13,14,15];
for(let i=0;i<6;i++){
let rnd=Math.floor(Math.random()*16)
if(arr.includes(rnd)){
  stri+=hash[rnd];
 }
else {
  stri+=rnd.toString();
 }
   }
 return stri;
}