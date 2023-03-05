function palindrome(str) {
  
    let oldStr=str.toLowerCase();
    let newStr=oldStr.replace(/[\W_]/g,"");
    let len= newStr.length-1;
    let answ=true;
    let ko=0;
    console.log(newStr);
    while(ko<newStr.length){
        if(newStr[ko]==newStr[len]){
            len--;
            ko++;
        }
        else{
          answ=false;
          break;
        }
    }
    return answ;
  }
  palindrome("eye");