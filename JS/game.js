// get the current team's category to read
const cardCategories = ["person", "world", "object", "action", "nature", "random"];

export function category(position) {
  const index = position - Math.floor(position / 6) * 6;
  return cardCategories[index];
}

// game timer

const roundTime = 60; // TODO sub for game setting variable

export function timer(timerDOM) {
  let seconds = roundTime;
  const counter = setInterval(() => {
    seconds--;
    timerDOM.innerHTML = seconds;
    if (seconds === 0) clearInterval(counter);
  }, 1);
}
