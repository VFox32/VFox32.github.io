function bitString(remaining) {

  let resultDivided = Math.floor(remaining / 64)
  let resultModulo = remaining % 64
  let returnString = ''

  if (resultDivided > 0) {
    returnString += resultDivided + ' * 64';
  }
  if (resultModulo > 0) {
    returnString += ' + ' + resultModulo ;

  }

  return returnString
}

function add() {
  let zahl= Number(document.forms[0].zahl1.value)
  let ergebnis = (zahl - 15) / 2.8 + 5
  let array =  ergebnis.toString().split(".");
  let switchZahl = 0
  if (array.length > 1) {
    switchZahl = Number('0.' + array[1])
  }
  let ausgabe = '';

  console.log(switchZahl)
  switch (true) {
    case switchZahl == 0:
      ausgabe = bitString(Number(array[0]));
      document.forms[0].ergebnis2.value = ''
      break
    case switchZahl < 0.4:
      ausgabe =  bitString(Number(array[0]))
      document.forms[0].ergebnis2.value = '+6'
      break;
    case  switchZahl < 0.78:
      ausgabe =  bitString(Number(array[0]))
      document.forms[0].ergebnis2.value = '+12'
      break;
    default:
      ausgabe = bitString(Number(array[0]) + 1);
      document.forms[0].ergebnis2.value = ''
      break
  }

  document.forms[0].ergebnis.value = ausgabe;
}
