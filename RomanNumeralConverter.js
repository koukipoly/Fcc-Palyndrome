var romNum=[[1000,"M"],
  [900,"CM"],[500,"D"],[400,"CD"],[100,"C"],
  [90,"XC"],[50,"L"],[40,"XL"],[10,"X"],
  [9,"IX"],[5,"V"],[4,"IV"],[1,"I"]
  ];
function convertToRoman(num) {
  let ans="";
  for(let i=0;i<romNum.length;i++){
    while(num>=romNum[i][0]){
      ans+=romNum[i][1];
      num-=romNum[i][0];
    }
  }

 return ans;
}

convertToRoman(36);