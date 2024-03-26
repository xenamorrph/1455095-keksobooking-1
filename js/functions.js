function checkStr (string) {
  let strConverted = string.replaceAll(' ', '').toLowerCase();
  let strReversed = string.replaceAll(' ', '').toLowerCase().split('').reverse().join('');

  return strConverted === strReversed;
}


function extractNum (param) {
  let extractedNums = '';
  let arr = param.toString().split('');

  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(parseInt((arr[i])))) {
      extractedNums = extractedNums + (arr[i]);
    }
  }

  if (extractedNums == ''){
    return NaN;
  }

  return parseInt(extractedNums);
}


const getFullStr = function(initStr, lengthStr, sumbols){
  if (initStr.length > lengthStr) {
    return initStr;
  }

  if (initStr.length < lengthStr){
    let lackSumbols = lengthStr - initStr.length;
    let needSymbols = '';

    while (needSymbols.length < lackSumbols) {
      needSymbols = needSymbols + sumbols;
    }

    needSymbols = needSymbols.slice(0, lackSumbols)

    return needSymbols + initStr;
  }
}

const getInt = function(minInt, maxInt, countInt){
  if (minInt < 0 || maxInt < 0) {
    return NaN;
  }

  if (maxInt < minInt) {
    let saveInt = maxInt;
    maxInt = minInt;
    minInt = saveInt;
  }

  min = Math.ceil(minInt);
  max = Math.floor(maxInt);
  let floatInt = Math.random() * (max - min + 1) + min;

  return parseFloat(floatInt.toFixed(countInt));
}

