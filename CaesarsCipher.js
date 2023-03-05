function rot13(str) {
    const alpha="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const beta="NOPQRSTUVWXYZABCDEFGHIJKLM";
    let newStr="";
    let x=0; 
    const len=str.length ;
    while(x<len){
      const alphind=alpha.indexOf(str[x]);
      if (alphind==-1){
          newStr+=str[x];
          x++;
      }
      else{
        newStr+=beta[alphind];
        x++;
      }
  
    }
    return newStr;
  }
  
  console.log(rot13("SERR PBQR PNZC"));