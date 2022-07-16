export function parse(optionString:string) {
  let names:string[] = []
  let letters:string[] = []
  let argumentSlots:string[] = []

  const chars = [...optionString];

  let temp = optionString.trim();

  if(temp.startsWith('-') && !temp.startsWith('--') ){
    temp = temp.slice(1);
    while(temp.length && temp[0].match(/[a-z]/i)){
      letters.push(temp[0]);
      temp = temp.slice(1);
    }
  }
  temp = temp.trim();

  while(temp.startsWith('--')){
    temp = temp.slice(2);
    names.push('')
    
    while(temp.length && temp[0].match(/[a-z-]/i)){
      names[names.length-1] += temp[0];
      temp = temp.slice(1);
    }
    
    temp = temp.trim();
  }

}