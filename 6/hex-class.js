// https://www.codewars.com/kata/5483366098aa442def0009af

function Hex(value){
  this.numColor = value;

  this.valueOf = function(){
    return this.numColor;
  };

  this.toString = function(){
    return `0x${this.numColor.toString(16).toUpperCase()}`;
  };

  this.toJSON = function(){
    return `0x${this.numColor.toString(16).toUpperCase()}`;
  };

  this.plus = function(value){
    return new Hex(this.numColor + value);
  };

  this.minus = function(value){
    return new Hex(this.numColor - value);
  }
}

Hex.parse = function(string){
  return parseInt(string, 16);
}
