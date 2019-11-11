"use scrict";

function countTotalSalary(obj) {
    const values = Object.values(obj); 
    console.log(values);
    let totalSalary = 0;
    for (const value of values) {
      totalSalary += value;
    }
    console.log(totalSalary);
    return totalSalary;
  }
  
  countTotalSalary({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
});