export let complDic={
  '0':'f',
  '1':'e',
  '2':'d',
  '3':'c',
  '4':'b',
  '5':'a',
  '6':'9',
  '7':'8',
  '8':'7',
  '9':'6',
  'a':'5',
  'b':'4',
  'c':'3',
  'd':'2',
  'e':'1',
  'f':'0'
}

export function compl(hexCol){
  let stri="#";
  let hex=hexCol.toLowerCase();
  for(let i=1; i<7; i++)
    {
      stri+=complDic[hex[i]];
    }
  return stri;
}

