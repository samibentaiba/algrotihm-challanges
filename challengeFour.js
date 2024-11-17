// challengeFour.js
function checkSeason(month) {
    if (month === 12 || month === 1 || month === 2) {
      return 'Winter';
    } else if (month >= 3 && month <= 5) {
      return 'Spring';
    } else if (month >= 6 && month <= 8) {
      return 'Summer';
    } else if (month >= 9 && month <= 11) {
      return 'Autumn';
    } else {
      return 'Invalid month';
    }
  }
  
  // Example usage:
  let month = 5; // May
  console.log(`The current season is: ${checkSeason(month)}`);
  