// Assuming batteryBatches is provided in index.js
const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Use reduce() to calculate the total sum of batteries
const totalBatteries = batteryBatches.reduce((accumulator, current) => {
  return accumulator + current;
}, 0);

console.log(totalBatteries); // Output: 31
