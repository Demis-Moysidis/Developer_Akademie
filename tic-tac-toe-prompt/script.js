let list = [
  null, null, null,
  null, null, null,
  null, null, null
];

let currentShape = 'circle';
let gameOver = false;

function init() {
  render();
  document.getElementById('circle-indicator').innerHTML = generateCircleSVG();
  document.getElementById('cross-indicator').innerHTML = generateCrossSVG();
}

function render() {

  let html = '<div id="table-container" style="position: relative; display: inline-block;">';
  html += '<table id="game-table" border="1" cellspacing="0" cellpadding="20" style="text-align:center; border-collapse: collapse;">';

  for (let i = 0; i < 3; i++) {
    html += '<tr>';
    for (let j = 0; j < 3; j++) {
      const index = i * 3 + j;
      const value = list[index];
      const symbolHTML = value === 'circle' ? generateAnimatedCircleSVG() :
                         value === 'cross' ? generateAnimatedCrossSVG() : '';
      const onclickAttr = value === null && !gameOver ? `onclick="handleClick(${index}, this)"` : '';
      html += `<td ${onclickAttr} style="width: 60px; height: 60px; position: relative;">${symbolHTML}</td>`;
    }
    html += '</tr>';
  }

  html += '</table>';
  html += '<div id="winning-line" style="position:absolute; top:0; left:0; width:100%; height:100%; pointer-events:none;"></div>';
  html += '</div>';

  document.getElementById('content').innerHTML = html;

  updateTurnIndicator();
}

function handleClick(index, tdElement) {
  if (list[index] !== null || gameOver) return;

  list[index] = currentShape;

  if (currentShape === 'circle') {
    tdElement.innerHTML = generateAnimatedCircleSVG();
    currentShape = 'cross';
  } else {
    tdElement.innerHTML = generateAnimatedCrossSVG();
    currentShape = 'circle';
  }

  tdElement.onclick = null;

  updateTurnIndicator();

  const winner = checkWinner();
  if (winner) {
    gameOver = true;
    drawWinningLine(winner.combination);
  }
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Reihen
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Spalten
    [0, 4, 8], [2, 4, 6]             // Diagonalen
  ];

  for (let combo of winningCombinations) {
    const [a, b, c] = combo;
    if (list[a] && list[a] === list[b] && list[a] === list[c]) {
      return { winner: list[a], combination: combo };
    }
  }
  return null;
}

function drawWinningLine(combo) {
  const cells = document.querySelectorAll('#game-table td');
  const first = cells[combo[0]].getBoundingClientRect();
  const last = cells[combo[2]].getBoundingClientRect();
  const container = document.getElementById('table-container').getBoundingClientRect();

  const x1 = first.left + first.width / 2 - container.left;
  const y1 = first.top + first.height / 2 - container.top;
  const x2 = last.left + last.width / 2 - container.left;
  const y2 = last.top + last.height / 2 - container.top;

  const length = Math.hypot(x2 - x1, y2 - y1);
  const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;

  const line = document.createElement('div');
  line.style.position = 'absolute';
  line.style.top = y1 + 'px';
  line.style.left = x1 + 'px';
  line.style.width = length + 'px';
  line.style.height = '4px';
  line.style.backgroundColor = 'white';
  line.style.transformOrigin = '0 0';
  line.style.transform = `rotate(${angle}deg)`;

  document.getElementById('winning-line').appendChild(line);
}

function restartGame() {
  list = Array(9).fill(null);
  currentShape = 'circle';
  gameOver = false;
  render();
}

function updateTurnIndicator() {
  const circle = document.getElementById('circle-indicator');
  const cross = document.getElementById('cross-indicator');

  if (currentShape === 'circle') {
    circle.classList.add('active');
    cross.classList.remove('active');
  } else {
    circle.classList.remove('active');
    cross.classList.add('active');
  }
}

function generateCircleSVG() {
  return /*html*/`
    <svg width="50" height="50" viewBox="0 0 70 70">
    <circle cx="35" cy="35" r="30"
            stroke="#00B0EF"
            stroke-width="5"
            fill="none">
    </circle>
    </svg>
    `;
}

function generateCrossSVG() {
  return /*html*/`
    <svg width="50" height="50" viewBox="0 0 70 70">
    <!-- Erste diagonale Linie -->
    <line x1="15" y1="15" x2="55" y2="55"
            stroke="#FFC000"
            stroke-width="5"
            stroke-linecap="round">
    </line>

    <!-- Zweite diagonale Linie -->
    <line x1="55" y1="15" x2="15" y2="55"
            stroke="#FFC000"
            stroke-width="5"
            stroke-linecap="round">
    </line>
    </svg>
    `;
}

function generateAnimatedCircleSVG() {
  return /*html*/`
    <svg width="50" height="50" viewBox="0 0 70 70">
    <circle cx="35" cy="35" r="30"
            stroke="#00B0EF"
            stroke-width="5"
            fill="none"
            stroke-dasharray="188.4"
            stroke-dashoffset="188.4">
        <animate attributeName="stroke-dashoffset"
                from="188.4" to="0"
                dur="0.8s"
                fill="freeze" />
    </circle>
    </svg>
    `;
}

function generateAnimatedCrossSVG() {
  return /*html*/`
    <svg width="50" height="50" viewBox="0 0 70 70">
    <!-- Erste diagonale Linie -->
    <line x1="15" y1="15" x2="55" y2="55"
            stroke="#FFC000"
            stroke-width="5"
            stroke-linecap="round"
            stroke-dasharray="56.57"
            stroke-dashoffset="56.57">
        <animate attributeName="stroke-dashoffset"
                from="56.57" to="0"
                dur="0.4s"
                fill="freeze"
                begin="0s"/>
    </line>

    <!-- Zweite diagonale Linie -->
    <line x1="55" y1="15" x2="15" y2="55"
            stroke="#FFC000"
            stroke-width="5"
            stroke-linecap="round"
            stroke-dasharray="56.57"
            stroke-dashoffset="56.57">
        <animate attributeName="stroke-dashoffset"
                from="56.57" to="0"
                dur="0.4s"
                fill="freeze"
                begin="0.4s"/>
    </line>
    </svg>
    `;
}