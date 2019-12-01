/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result;
    var initUnit = this.getUnit(input);
    if(initUnit === ''){
      result = input;
    }else{
      result = input.slice(0, input.indexOf(initUnit));
    }
    // console.log('sliced result', Number(eval(result)));
    
    if( result === ''){
      return 1.0;
    }else if(!isNaN(Number(result))){
      return Number(result);
    }else{
      //special treatment for fractional number
      var countSlash = (result.match(/\//g) || []).length;
      if(countSlash==1){
        var split = result.split('/');
        if( split[0] !== '' && !isNaN(Number(split[0])) &&  split[1] !== '' && !isNaN(Number(split[1])) ){
          return eval(result);
        }else{
          return NaN;
        }
      }else{
        return NaN;
      }
    }
  };
  
  this.getUnit = function(input) {
    // var result = input.match(/l|gal|lbs|kg|mi|km$/i); 
    var result = input.match(/[a-z]+/i); 
    // console.log(result);
    if(result === null){ return '';}
    return result[0];
  };
  
  this.getReturnUnit = function(initUnit) {
    // console.log(initUnit);
    var result;
    switch(initUnit.toLowerCase()){
      case 'l':
        result = 'gal';break;
      case 'gal':
        result = 'L';break;
      case 'lbs':
        result = 'Kg';break;
      case 'kg':
        result = 'lbs';break;
      case 'mi':
        result = 'Km';break;
      case 'km':
        result = 'mi';break;
      default:
        result = '';
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch(unit.toLowerCase()){
      case 'l':
        result = 'litres';break;
      case 'gal':
        result = 'gallons';break;
      case 'lbs':
        result = 'pounds';break;
      case 'kg':
        result = 'kilos';break;
      case 'mi':
        result = 'miles';break;
      case 'km':
        result = 'kilometers';break;
      default:
        result = '';
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    if(isNaN(initNum)){
      return NaN;
    }
    switch(initUnit.toLowerCase()){
      case 'gal':
        result = initNum*galToL;break;
      case 'l':
        result = initNum/galToL;break;
      case 'lbs':
        result = initNum*lbsToKg;break;
      case 'kg':
        result = initNum/lbsToKg;break;
      case 'mi':
        result = initNum*miToKm;break;
      case 'km':
        result = initNum/miToKm;break;
      default:
        result = NaN;
    };
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = `${initNum} ${initUnit} converts to ${returnNum.toFixed(5)} ${this.spellOutUnit(returnUnit)}`;
    return result;
  };
  
}

module.exports = ConvertHandler;
