// Code your solution in this file!




function distanceFromHqInBlocks(someValue) {
  return Math.abs(someValue - 42);
}
distanceFromHqInBlocks(50);
// console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}
// console.log(distanceFromHqInFeet(43))
distanceFromHqInFeet(43);

function distanceTravelledInFeet(start, destination) {
  return Math.abs(start-destination) * 264;
}
distanceTravelledInFeet(43, 48);
// console.log(distanceTravelledInFeet(43, 48));

function calculatesFarePrice(start, destination) {
    let travelledInFeet = distanceTravelledInFeet(start, destination)
  if (travelledInFeet <= 400) {
    return 0;
  } else if (travelledInFeet > 400 && travelledInFeet <= 2000) {
    return (travelledInFeet - 400) * 0.02;
  } else if (travelledInFeet > 2000 && travelledInFeet <= 2500) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}

calculatesFarePrice(34,32)

// console.log(calculatesFarePrice(34, 32))
