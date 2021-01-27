import { category, timer } from "./JS/game.js";

// Variable selection
const currentTeamDOM = document.querySelector("#current-team");
const teamInfoDOM = document.querySelector("#team-info");
const timerDOM = document.querySelector("#timer");
const timerStartButton = document.querySelector("#timer-start");
const scoreInput = document.querySelector("#score-input");
const roundEndButton = document.querySelector("#round-end");

// game set-up
const teams = [
  { name: "Team 1", position: 0 },
  { name: "Team 2", position: 0 },
  { name: "Team 3", position: 0 },
];

const boardSpaces = 30;

// game variables
let currentTeam = 0;

function render() {
  const teamInfo = teams
    .map(team => {
      return `<article>
              <p>Team: ${team.name}</p>
              <p>Score: ${team.position}</p>
              <p>Currently reading: ${category(team.position)}</p>
            </article>`;
    })
    .join("");
  teamInfoDOM.innerHTML = teamInfo;

  currentTeamDOM.innerHTML = teams[currentTeam].name;
}

// team round

// render
render();

// round start
timerStartButton.addEventListener("click", e => {
  e.target.disabled = true;
  timer(timerDOM);
});

// round end
roundEndButton.addEventListener("click", () => {
  if (scoreInput.value) teams[currentTeam].position += parseInt(scoreInput.value);
  currentTeam++;
  if (currentTeam > teams.length - 1) currentTeam = 0;
  console.log(currentTeam);
  render();
  scoreInput.value = "";
  console.log(teams[currentTeam]);
});
