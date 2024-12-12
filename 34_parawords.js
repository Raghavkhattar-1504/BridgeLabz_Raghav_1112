let para = '  hi my name is  raghav nice to   meet you  ';
para.trim();
const arr = para.slice(2,para.length-2).split(/\s+/);
console.log(arr);
