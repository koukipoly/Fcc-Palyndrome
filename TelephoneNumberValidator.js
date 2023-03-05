function telephoneCheck(str) {
    let checker=/^(1\s?)?([2-9]{3}|(\([2-9]{3}\)))[\-\s]?[2-9]{3}[\-\s]?[2-9]{4}$/;
    let res= checker.test(str);
    return res;
  }
  
  telephoneCheck("555-555-5555");