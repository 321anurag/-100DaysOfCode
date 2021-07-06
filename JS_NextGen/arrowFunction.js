function printMyName(name){
    console.log(name);
  }
  
  printMyName('Max');
  
  const printMyNamefunc = (name) =>{
    console.log(name);
  }
  
  printMyNamefunc('Max');
  
  
  const printMyNamefunc1 = name => {
    console.log(name);
  }
  
  printMyNamefunc1('Max');
  
  
  const printMyNamefunc2 = () => {
    console.log('Max');
  }
  
  printMyNamefunc2();
  
  const printMyNamefunc3 = (name, age) => {
    console.log(name, age);
  }
  
  printMyNamefunc3('Max', 27);
  
  
  const multiply = (number) => {
    return number*7;
  }
  
  console.log(multiply(7));
  
  //more shorter way to write a fuction where we have only 1 line in body i.e, return.
  //omit return and remove paranthesis as only 1 argument
  const multiplyShort = number => number*7;
  
  console.log(multiplyShort(7));