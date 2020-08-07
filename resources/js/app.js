const numDubZero = '00 Double Zero';
const numZero = '0 Zero';
const numOne = '1 Red Odd';
const numTwo = '2 Black Even';
const numThree = '3 Red Odd';
const numFour = '4 Black Even';
const numFive = '5 Red Odd';
const numSix = '6 Black Even';
const numSeven = '7 Red Odd';
const numEight = '8 Black Even';
const numNine = '9 Red Odd';
const numTen = '10 Black Even';
const numEleven = '11 Black Odd';
const numTwelve = '12 Red Even';
const numThirteen = '13 Black Odd';
const numFourteen = '14 Red Even';
const numFifteen = '15 Black Odd';
const numSixteen = '16 Red Even';
const numSeventeen = '17 Black Odd';
const numEighteen = '18 Red Even';
const numNineteen = '19 Red Odd';
const numTwenty = '20 Black Even';
const numTwentyOne = '21 Red Odd';
const numTwentyTwo = '22 Black Even';
const numTwentyThree = '23 Red Odd';
const numTwentyFour = '24 Black Even';
const numTwentyFive = '25 Red Odd';
const numTwentySix = '26 Black Even';
const numTwentySeven = '27 Red Odd';
const numTwentyEight = '28 Black Even';
const numTwentyNine = '29 Black Odd';
const numThirty = '30 Red Even';
const numThirtyOne = '31 Black Odd';
const numThirtyTwo = '32 Red Even';
const numThirtyThree = '33 Black Odd';
const numThirtyFour = '34 Red Even';
const numThirtyFive = '35 Black Odd';
const numThirtySix = '36 Red Even';

const zeroGreen = '#0eab14';
const red = '#fa2a1d';
const black = '#323232';

const wheel0 = 'url(/resources/images/wheel0.jpg)';
const wheel00 = 'url(/resources/images/wheel00.jpg)';
const wheel1 = 'url(/resources/images/wheel1.jpg0)';
const wheel2 = 'url(/resources/images/wheel2.jpg)';
const wheel3 = 'url(/resources/images/wheel3.jpg)';
const wheel4 = 'url(/resources/images/wheel4.jpg)';
const wheel5 = 'url(/resources/images/wheel5.jpg)';
const wheel6 = 'url(/resources/images/wheel6.jpg)';
const wheel7 = 'url(/resources/images/wheel7.jpg)';
const wheel8 = 'url(/resources/images/wheel8.jpg)';
const wheel9 = 'url(/resources/images/wheel9.jpg)';
const wheel10 = 'url(/resources/images/wheel10.jpg)';
const wheel11 = 'url(/resources/images/wheel11.jpg)';
const wheel12 = 'url(/resources/images/wheel12.jpg)';
const wheel13 = 'url(/resources/images/wheel13.jpg)';
const wheel14 = 'url(/resources/images/wheel14.jpg)';
const wheel15 = 'url(/resources/images/wheel15.jpg)';
const wheel16 = 'url(/resources/images/wheel16.jpg)';
const wheel17 = 'url(/resources/images/wheel17.jpg)';
const wheel18 = 'url(/resources/images/wheel18.jpg)';
const wheel19 = 'url(/resources/images/wheel19.jpg)';
const wheel20 = 'url(/resources/images/wheel20.jpg)';
const wheel21 = 'url(/resources/images/wheel21.jpg)';
const wheel22 = 'url(/resources/images/wheel22.jpg)';
const wheel23 = 'url(/resources/images/wheel23.jpg)';
const wheel24 = 'url(/resources/images/wheel24.jpg)';
const wheel25 = 'url(/resources/images/wheel25.jpg)';
const wheel26 = 'url(/resources/images/wheel26.jpg)';
const wheel27 = 'url(/resources/images/wheel27.jpg)';
const wheel28 = 'url(/resources/images/wheel28.jpg)';
const wheel29 = 'url(/resources/images/wheel29.jpg)';
const wheel30 = 'url(/resources/images/wheel30.jpg)';
const wheel31 = 'url(/resources/images/wheel31.jpg)';
const wheel32 = 'url(/resources/images/wheel32.jpg)';
const wheel33 = 'url(/resources/images/wheel33.jpg)';
const wheel34 = 'url(/resources/images/wheel34.jpg)';
const wheel35 = 'url(/resources/images/wheel35.jpg)';
const wheel36 = 'url(/resources/images/wheel36.jpg)';



const rollButton = document.getElementById('roll-btn');

const spinWheel = () => {
  let randNum = Math.floor(Math.random() * 38);
  console.log(randNum);
  switch (randNum) {
    case 0:
      document.getElementById('result-box').style.backgroundImage = wheel0;
      document.getElementById('result-text').innerHTML = numZero;
      //document.getElementById('result-number').innerHTML = '0';
      return '0 Zero';
    break;
    case 1:
      document.getElementById('result-box').style.backgroundImage = wheel1;
      document.getElementById('result-text').innerHTML = numOne;
      //document.getElementById('result-number').innerHTML = '1';
      return '1 Red Odd';
    break;
    case 2:
      document.getElementById('result-box').style.backgroundImage = wheel2;
      document.getElementById('result-text').innerHTML = numTwo;
      //document.getElementById('result-number').innerHTML = '2';
      return '3 Black Even';
    break;
    case 3:
      document.getElementById('result-box').style.backgroundImage = wheel3;
      document.getElementById('result-text').innerHTML = numThree;
      //document.getElementById('result-number').innerHTML = '3';
      return '3 Red Odd';
    break;
    case 4:
      document.getElementById('result-box').style.backgroundImage = wheel4;
      document.getElementById('result-text').innerHTML = numFour;
      //document.getElementById('result-number').innerHTML = '4';
      return '4 Black Even';
    break;
    case 5:
      document.getElementById('result-box').style.backgroundImage = wheel5;
      document.getElementById('result-text').innerHTML = numFive;
      //document.getElementById('result-number').innerHTML = '5';
      return '5 Red Odd';
    break;
    case 6:
      document.getElementById('result-box').style.backgroundImage = wheel6;
      document.getElementById('result-text').innerHTML = numSix;
      //document.getElementById('result-number').innerHTML = '6';
      return '6 Black Even';
    break;
    case 7:
      document.getElementById('result-box').style.backgroundImage = wheel7;
      document.getElementById('result-text').innerHTML = numSeven;
      //document.getElementById('result-number').innerHTML = '7';
      return '7 Red Odd';
    break;
    case 8:
      document.getElementById('result-box').style.backgroundImage = wheel8;
      document.getElementById('result-text').innerHTML = numEight;
      //document.getElementById('result-number').innerHTML = '8';
      return '8 Black Even';
    break;
    case 9:
      document.getElementById('result-box').style.backgroundImage = wheel9;
      document.getElementById('result-text').innerHTML = numNine;
      //document.getElementById('result-number').innerHTML = '9';
      return '9 Red Odd';
    break;
    case 10:
      document.getElementById('result-box').style.backgroundImage = wheel10;
      document.getElementById('result-text').innerHTML = numTen;
      //document.getElementById('result-number').innerHTML = '10';
      return '10 Black Even';
    break;
    case 11:
      document.getElementById('result-box').style.backgroundImage = wheel11;
      document.getElementById('result-text').innerHTML = numEleven;
      //document.getElementById('result-number').innerHTML = '11';
      return '11 Black Odd';
    break;   
    case 12:
      document.getElementById('result-box').style.backgroundImage = wheel12;
      document.getElementById('result-text').innerHTML = numTwelve;
      //document.getElementById('result-number').innerHTML = '12';
      return '12 Red Even';
    break;
    case 13:
      document.getElementById('result-box').style.backgroundImage = wheel13;
      document.getElementById('result-text').innerHTML = numThirteen;
      //document.getElementById('result-number').innerHTML = '13';
      return '13 Black Odd';
    break;
    case 14:
      document.getElementById('result-box').style.backgroundImage = wheel14;
      document.getElementById('result-text').innerHTML = numFourteen;
      //document.getElementById('result-number').innerHTML = '14';
      return '14 Red Even';
    break;
    case 15:
      document.getElementById('result-box').style.backgroundImage = wheel15;
      document.getElementById('result-text').innerHTML = numFifteen;
      //document.getElementById('result-number').innerHTML = '15';
      return '15 Black Odd';
    break;
    case 16:
      document.getElementById('result-box').style.backgroundImage = wheel16;
      document.getElementById('result-text').innerHTML = numSixteen;
      //document.getElementById('result-number').innerHTML = '16';
      return '16 Red Even';
    break;
    case 17:
      document.getElementById('result-box').style.backgroundImage = wheel17;
      document.getElementById('result-text').innerHTML = numSeventeen;
      //document.getElementById('result-number').innerHTML = '17';
      return '17 Black Odd';
    break;
    case 18:
      document.getElementById('result-box').style.backgroundImage = wheel18;
      document.getElementById('result-text').innerHTML = numEighteen;
      //document.getElementById('result-number').innerHTML = '18';
      return '18 Red Even';
    break;
    case 19:
      document.getElementById('result-box').style.backgroundImage = wheel19;
      document.getElementById('result-text').innerHTML = numNineteen;
      //document.getElementById('result-number').innerHTML = '19';
      return '19 Red Odd';
    break;
    case 20:
      document.getElementById('result-box').style.backgroundImage = wheel20;
      document.getElementById('result-text').innerHTML = numTwenty;
      //document.getElementById('result-number').innerHTML = '20';
      return '20 Black Even';
    break;
    case 21:
      document.getElementById('result-box').style.backgroundImage = wheel21;
      document.getElementById('result-text').innerHTML = numTwentyOne;
      //document.getElementById('result-number').innerHTML = '21';
      return '21 Red Odd';
    break;
    case 22:
      document.getElementById('result-box').style.backgroundImage = wheel22;
      document.getElementById('result-text').innerHTML = numTwentyTwo;
      //document.getElementById('result-number').innerHTML = '22';
      return '22 Black Even';
    break;
    case 23:
      document.getElementById('result-box').style.backgroundImage = whee23;
      document.getElementById('result-text').innerHTML = numTwentyThree;
      //document.getElementById('result-number').innerHTML = '23';
      return '23 Red Odd';
    break; 
    case 24:
      document.getElementById('result-box').style.backgroundImage = wheel24;
      document.getElementById('result-text').innerHTML = numTwentyFour;
      //document.getElementById('result-number').innerHTML = '24';
      return '24 Black Even';
    break;
    case 25:
      document.getElementById('result-box').style.backgroundImage = wheel25;
      document.getElementById('result-text').innerHTML = numTwentyFive;
      //document.getElementById('result-number').innerHTML = '25';
      return '25 Red Odd';
    break;
    case 26:
      document.getElementById('result-box').style.backgroundImage = wheel26;
      document.getElementById('result-text').innerHTML = numTwentySix;
      //document.getElementById('result-number').innerHTML = '26';
      return '26 Black Even';
    break;
    case 27:
      document.getElementById('result-box').style.backgroundImage = wheel27;
      document.getElementById('result-text').innerHTML = numTwentySeven;
      //document.getElementById('result-number').innerHTML = '27';
      return '27 Red Odd';
    break;
    case 28:
      document.getElementById('result-box').style.backgroundImage = wheel28;
      document.getElementById('result-text').innerHTML = numTwentyEight;
      //document.getElementById('result-number').innerHTML = '28';
      return '28 Black Even';
    break;
    case 29:
      document.getElementById('result-box').style.backgroundImage = wheel29;
      document.getElementById('result-text').innerHTML = numTwentyNine;
      //document.getElementById('result-number').innerHTML = '29';
      return '29 Black Odd';
    break;
    case 30:
      document.getElementById('result-box').style.backgroundImage = wheel30;
      document.getElementById('result-text').innerHTML = numThirty;
      //document.getElementById('result-number').innerHTML = '30';
      return '30 Red Even';
    break;
    case 31:
      document.getElementById('result-box').style.backgroundImage = wheel31;
      document.getElementById('result-text').innerHTML = numThirtyOne;
      //document.getElementById('result-number').innerHTML = '31';
      return '31 Black Odd';
    break;
    case 32:
      document.getElementById('result-box').style.backgroundImage = wheel32;
      document.getElementById('result-text').innerHTML = numThirtyTwo;
      //document.getElementById('result-number').innerHTML = '32';
      return '32 Red Even';
    break;
    case 33:
      document.getElementById('result-box').style.backgroundImage = wheel33;
      document.getElementById('result-text').innerHTML = numThirtyThree;
      //document.getElementById('result-number').innerHTML = '33';
      return '33 Black Odd';
    break;
    case 34:
      document.getElementById('result-box').style.backgroundImage = wheel34;
      document.getElementById('result-text').innerHTML = numThirtyFour;
      //document.getElementById('result-number').innerHTML = '34';
      return '34 Red Even';
    break;
    case 35:
      document.getElementById('result-box').style.backgroundImage = wheel35;
      document.getElementById('result-text').innerHTML = numThirtyFive;
      //document.getElementById('result-number').innerHTML = '35';
      return '35 Black Odd';
    break; 
    case 36:
      document.getElementById('result-box').style.backgroundImage = wheel36;
      document.getElementById('result-text').innerHTML = numThirtySix;
      //document.getElementById('result-number').innerHTML = '36';
      return '36 Red Even';
    break;
    case 37:
      document.getElementById('result-box').style.backgroundImage = wheel00;
      document.getElementById('result-text').innerHTML = numDubZero;
      //document.getElementById('result-number').innerHTML = '00';
      return '00 Double Zero';
    break;
  };
};

document.onkeydown = spinWheel;

rollButton.addEventListener('click', spinWheel);


// for (let i = 0; i < 25; i++) {
//   console.log(spinWheel());
// };