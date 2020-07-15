//Defines random number from 0 to 38

const randNum = Math.floor(Math.random()* 38);


//Function determines roulette drop based on random number


function ballDrop() {
  switch (randNum) {
    case 0:
      return '00 Double Zero';
    break;
    case 1:
      return '1 Red Odd';
    break;
    case 2:
      return '2 Black Even';
    break;
    case 3:
      return '3 Red Odd';
    break;
    case 4:
      return '4 Black Even';
    break;
    case 5:
      return '5 Red Odd';
    break;
    case 6:
      return '6 Black Even';
    break;
    case 7:
      return '7 Red Odd';
    break;
    case 8:
      return '8 Black Even';
    break;
    case 9:
      return '9 Red Odd';
    break;
    case 10:
      return '10 Black Even';
    break;
    case 11:
      return '11 Black Odd';
    break;   
    case 12:
      return '12 Red Even';
    break;
    case 13:
      return '13 Black Odd';
    break;
    case 14:
      return '14 Red Even';
    break;
    case 15:
      return '15 Black Odd';
    break;
    case 16:
      return '16 Red Even';
    break;
    case 17:
      return '17 Black Odd';
    break;
    case 18:
      return '18 Red Even';
    break;
    case 19:
      return '19 Red Odd';
    break;
    case 20:
      return '20 Black Even';
    break;
    case 21:
      return '21 Red Odd';
    break;
    case 22:
      return '22 Black Even';
    break;
    case 23:
      return '23 Red Odd';
    break; 
    case 24:
      return '24 Black Even';
    break;
    case 25:
      return '25 Red Odd';
    break;
    case 26:
      return '26 Black Even';
    break;
    case 27:
      return '27 Red Odd';
    break;
    case 28:
      return '28 Black Even';
    break;
    case 29:
      return '29 Black Odd';
    break;
    case 30:
      return '30 Red Even';
    break;
    case 31:
      return '31 Black Odd';
    break;
    case 32:
      return '32 Red Even';
    break;
    case 33:
      return '33 Black Odd';
    break;
    case 34:
      return '34 Red Even';
    break;
    case 35:
      return '35 Black Odd';
    break; 
    case 36:
      return '36 Red Even';
    break;
    case 37:
      return '0 Zero';
    break;
  }
}

// Logs return of ballDrop function to console

document.getElementById('result').innerHTML = ballDrop();

