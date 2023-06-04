export let decConv= {
  '0':0,
  '1':1,
  '2':2,
  '3':3,
  '4':4,
  '5':5,
  '6':6,
  '7':7,
  '8':8,
  '9':9,
  'a':10,
  'b':11,
  'c':12,
  'd':13,
  'e':14,
  'f':15,
  'A':10,
  'B':11,
  'C':12,
  'D':13,
  'E':14,
  'F':15
};

export function Brightness(hexCol)
{
   let vec=[];
if(hexCol!=undefined){
for(let i=1; i<7;i++){
  vec.push(decConv[hexCol.slice(i,i+1)]);
}
let R=vec[0]*16+vec[1];
let G=vec[2]*16+vec[3];
let B=vec[4]*16+vec[5];
   return Math.sqrt(
      R * R * .241 + 
      G * G * .691 + 
      B * B * .068);}
  else {return 200;}
           }