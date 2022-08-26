import greenCardsData from './data/mythicCards/green/index.js';
import brownCardsData from './data/mythicCards/brown/index.js';
import blueCardsData from './data/mythicCards/blue/index.js';
import ancientsData from './data/ancients.js';
import ancients from './assets/Ancients/index.js';

function getRandomNum(max) {
  let min = 0;
  max = Math.floor(max);
  let digit = Math.floor(Math.random() * (max - min + 1)) + min;
  return digit;
}

function getCards(god) {
  let godNumber = 0;
  ancientsData.forEach(function (value, i) {
    if (value.id === god) {
      godNumber = i;
    }
  });
  let greenArray = [];
  let brownArray = [];
  let blueArray = [];
  while (
    greenArray.length <
    Number([
      ancientsData[godNumber].firstStage.greenCards +
        ancientsData[godNumber].secondStage.greenCards +
        ancientsData[godNumber].thirdStage.greenCards,
    ])
  ) {
    let greenCard = greenCardsData[getRandomNum(17)];
    if (!greenArray.includes(greenCard)) {
      if (difLevel.value === 'very-low') {
        if (greenCard.difficulty === 'easy') {
          greenArray.push(greenCard);
        }
        if (greenCard.difficulty === 'normal' && greenArray.length >= 5) {
          greenArray.push(greenCard);
        }
      }
      if (difLevel.value === 'low') {
        if (greenCard.difficulty !== 'hard') {
          greenArray.push(greenCard);
        }
      }
      if (difLevel.value === 'medium') {
        greenArray.push(greenCard);
      }
      if (difLevel.value === 'high') {
        if (greenCard.difficulty !== 'easy') {
          greenArray.push(greenCard);
        }
      }
      if (difLevel.value === 'very-high') {
        if (greenCard.difficulty === 'hard') {
          greenArray.push(greenCard);
        }
        if (greenCard.difficulty === 'normal' && greenArray.length >= 5) {
          greenArray.push(greenCard);
        }
      }
    }
  }
  while (
    brownArray.length <
    Number([
      ancientsData[godNumber].firstStage.brownCards +
        ancientsData[godNumber].secondStage.brownCards +
        ancientsData[godNumber].thirdStage.brownCards,
    ])
  ) {
    let brownCard = brownCardsData[getRandomNum(20)];
    if (!brownArray.includes(brownCard)) {
      if (difLevel.value === 'very-low') {
        if (brownCard.difficulty === 'easy') {
          brownArray.push(brownCard);
        }
        if (brownCard.difficulty === 'normal' && brownArray.length >= 5) {
          brownArray.push(brownCard);
        }
      }
      if (difLevel.value === 'low') {
        if (brownCard.difficulty !== 'hard') {
          brownArray.push(brownCard);
        }
      }
      if (difLevel.value === 'medium') {
        brownArray.push(brownCard);
      }
      if (difLevel.value === 'high') {
        if (brownCard.difficulty !== 'easy') {
          brownArray.push(brownCard);
        }
      }
      if (difLevel.value === 'very-high') {
        if (brownCard.difficulty === 'hard') {
          brownArray.push(brownCard);
        }
        if (brownCard.difficulty === 'normal' && brownArray.length >= 5) {
          brownArray.push(brownCard);
        }
      }
    }
  }
  while (
    blueArray.length <
    Number([
      ancientsData[godNumber].firstStage.blueCards +
        ancientsData[godNumber].secondStage.blueCards +
        ancientsData[godNumber].thirdStage.blueCards,
    ])
  ) {
    let blueCard = blueCardsData[getRandomNum(11)];
    if (!blueArray.includes(blueCard)) {
      if (difLevel.value === 'very-low') {
        if (blueCard.difficulty === 'easy') {
          blueArray.push(blueCard);
        }
        if (blueCard.difficulty === 'normal' && blueArray.length >= 4) {
          blueArray.push(blueCard);
        }
      }
      if (difLevel.value === 'low') {
        if (blueCard.difficulty !== 'hard') {
          blueArray.push(blueCard);
        }
      }
      if (difLevel.value === 'medium') {
        blueArray.push(blueCard);
      }
      if (difLevel.value === 'high') {
        if (blueCard.difficulty !== 'easy') {
          blueArray.push(blueCard);
        }
      }
      if (difLevel.value === 'very-high') {
        if (blueCard.difficulty === 'hard') {
          blueArray.push(blueCard);
        }
        if (blueCard.difficulty === 'normal' && blueArray.length >= 5) {
          blueArray.push(blueCard);
        }
      }
    }
  }

  let mainArray = [...greenArray, ...brownArray, ...blueArray];

  let firstStageArray = [];
  let secondStageArray = [];
  let thirdStageArray = [];

  while (
    firstStageArray.filter((e) => e.color === 'green').length <
    ancientsData[godNumber].firstStage.greenCards
  ) {
    let playCard = mainArray.find((e) => e.color === 'green');
    firstStageArray.push(playCard);
    mainArray = mainArray.filter((e) => e.id != playCard.id);
  }
  while (
    firstStageArray.filter((e) => e.color === 'brown').length <
    ancientsData[godNumber].firstStage.brownCards
  ) {
    let playCard = mainArray.find((e) => e.color === 'brown');
    firstStageArray.push(playCard);
    mainArray = mainArray.filter((e) => e.id != playCard.id);
  }
  while (
    firstStageArray.filter((e) => e.color === 'blue').length <
    ancientsData[godNumber].firstStage.blueCards
  ) {
    let playCard = mainArray.find((e) => e.color === 'blue');
    firstStageArray.push(playCard);
    mainArray = mainArray.filter((e) => e.id != playCard.id);
  }
  while (
    secondStageArray.filter((e) => e.color === 'green').length <
    ancientsData[godNumber].secondStage.greenCards
  ) {
    let playCard = mainArray.find((e) => e.color === 'green');
    secondStageArray.push(playCard);
    mainArray = mainArray.filter((e) => e.id != playCard.id);
  }
  while (
    secondStageArray.filter((e) => e.color === 'brown').length <
    ancientsData[godNumber].secondStage.brownCards
  ) {
    let playCard = mainArray.find((e) => e.color === 'brown');
    secondStageArray.push(playCard);
    mainArray = mainArray.filter((e) => e.id != playCard.id);
  }
  while (
    secondStageArray.filter((e) => e.color === 'blue').length <
    ancientsData[godNumber].secondStage.blueCards
  ) {
    let playCard = mainArray.find((e) => e.color === 'blue');
    secondStageArray.push(playCard);
    mainArray = mainArray.filter((e) => e.id != playCard.id);
  }
  while (
    thirdStageArray.filter((e) => e.color === 'green').length <
    ancientsData[godNumber].thirdStage.greenCards
  ) {
    let playCard = mainArray.find((e) => e.color === 'green');
    thirdStageArray.push(playCard);
    mainArray = mainArray.filter((e) => e.id != playCard.id);
  }
  while (
    thirdStageArray.filter((e) => e.color === 'brown').length <
    ancientsData[godNumber].thirdStage.brownCards
  ) {
    let playCard = mainArray.find((e) => e.color === 'brown');
    thirdStageArray.push(playCard);
    mainArray = mainArray.filter((e) => e.id != playCard.id);
  }
  while (
    thirdStageArray.filter((e) => e.color === 'blue').length <
    ancientsData[godNumber].thirdStage.blueCards
  ) {
    let playCard = mainArray.find((e) => e.color === 'blue');
    firstStageArray.push(playCard);
    mainArray = mainArray.filter((e) => e.id != playCard.id);
  }

  return [
    firstStageArray.sort(() => Math.random() - 0.5),
    secondStageArray.sort(() => Math.random() - 0.5),
    thirdStageArray.sort(() => Math.random() - 0.5),
  ];
}

const difLevel = document.getElementById('difficulty-level');
const openCard = document.querySelector('#card-open');
const closeCard = document.querySelector('#card-close');
const ancientsCard = document.querySelector('.ancients');
const shuffle = document.getElementById('mix');

difLevel.addEventListener('change', () => {
  if (godName != '') {
    openCard.style.backgroundImage = '';
    showCards(godName);
  }
});

let godName = '';

ancientsCard.addEventListener('click', (event) => {
  if (event.target.id) {
    document.querySelectorAll('.card').forEach((element) => {
      element.classList.remove('active');
    });
  }
  if (event.target.id) {
    showCards(event.target.id);
    event.target.classList.add('active');
    godName = event.target.id;
    openCard.style.backgroundImage = '';
  }
});

shuffle.addEventListener('click', () => {
  if (godName != '') {
    openCard.style.backgroundImage = '';
    showCards(godName);
  }
});

let count = 0;
let stagesArray = [];
function showCards(god) {
  count = 0;
  stagesArray = getCards(god);
  closeCard.style.backgroundImage = 'url(assets/shirt.jpeg)';
  document.getElementById('1b').innerHTML = stagesArray[0].filter(
    (e) => e.color === 'blue'
  ).length;
  document.getElementById('1g').innerHTML = stagesArray[0].filter(
    (e) => e.color === 'green'
  ).length;
  document.getElementById('1r').innerHTML = stagesArray[0].filter(
    (e) => e.color === 'brown'
  ).length;
  document.getElementById('2b').innerHTML = stagesArray[1].filter(
    (e) => e.color === 'blue'
  ).length;
  document.getElementById('2g').innerHTML = stagesArray[1].filter(
    (e) => e.color === 'green'
  ).length;
  document.getElementById('2r').innerHTML = stagesArray[1].filter(
    (e) => e.color === 'brown'
  ).length;
  document.getElementById('3b').innerHTML = stagesArray[2].filter(
    (e) => e.color === 'blue'
  ).length;
  document.getElementById('3g').innerHTML = stagesArray[2].filter(
    (e) => e.color === 'green'
  ).length;
  document.getElementById('3r').innerHTML = stagesArray[2].filter(
    (e) => e.color === 'brown'
  ).length;
}
closeCard.addEventListener('click', () => {
  if (count <= 2 && stagesArray[count].length === 0) {
    count++;
  }
  if (count <= 2) {
    let card = stagesArray[count].shift();
    openCard.style.backgroundImage = card.cardFace;
  } else {
    openCard.style.backgroundImage = '';
  }
  if (stagesArray[2].length > 0) {
    closeCard.style.backgroundImage = 'url(assets/shirt.jpeg';
  } else {
    closeCard.style.backgroundImage = '';
  }
  document.getElementById('1b').innerHTML = stagesArray[0].filter(
    (e) => e.color === 'blue'
  ).length;
  document.getElementById('1g').innerHTML = stagesArray[0].filter(
    (e) => e.color === 'green'
  ).length;
  document.getElementById('1r').innerHTML = stagesArray[0].filter(
    (e) => e.color === 'brown'
  ).length;
  document.getElementById('2b').innerHTML = stagesArray[1].filter(
    (e) => e.color === 'blue'
  ).length;
  document.getElementById('2g').innerHTML = stagesArray[1].filter(
    (e) => e.color === 'green'
  ).length;
  document.getElementById('2r').innerHTML = stagesArray[1].filter(
    (e) => e.color === 'brown'
  ).length;
  document.getElementById('3b').innerHTML = stagesArray[2].filter(
    (e) => e.color === 'blue'
  ).length;
  document.getElementById('3g').innerHTML = stagesArray[2].filter(
    (e) => e.color === 'green'
  ).length;
  document.getElementById('3r').innerHTML = stagesArray[2].filter(
    (e) => e.color === 'brown'
  ).length;
});
