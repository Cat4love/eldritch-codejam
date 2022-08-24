import greenCardsData from './data/mythicCards/green/index.js';
import brownCardsData from './data/mythicCards/brown/index.js';
import blueCardsData from './data/mythicCards/blue/index.js';
import ancientsData from './data/ancients.js';

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
      greenArray.push(greenCard);
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
      brownArray.push(brownCard);
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
      blueArray.push(blueCard);
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

console.log(getCards('iogSothoth'));

