// Write your code in this file!
function scuberGreetingForFeet(feet) {
  return if (feet <= 400) {
    `This one is on me!`
  } else if (feet > 2500) {
    `No can do.`
  } else if (feet > 2000) {
    `I will gladly take your thirty bucks.`
  }
}

function ternaryCheckCity(city) {
  return city == `NYC` ? `Ok, sounds good.` : `No go.`
}
