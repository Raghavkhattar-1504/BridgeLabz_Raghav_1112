let para = '   hi my name is  raghav nice to   meet you   ';
para.trim();
const arr = para.trim(/\s+/).slice(0, para.length-1).split(/\s+/);
console.log(arr);
