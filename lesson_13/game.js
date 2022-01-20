'use strict';

(() => {
  const ENG = {
    figures: ['rock', 'scissors', 'paper'],
    messages: {
      computerName: 'Computer',
      playerName: 'You',
      more: 'Let\'s play again?',
      computer: 'Computer win!',
      player: 'You win!',
      draw: 'Draw!',
      question: 'Rock, scissors, paper?',
      exitQuestion: 'You really want to get out?',
      bye: 'Goodbye!',
    },
  };
  const RUS = {
    figures: ['камень', 'ножницы', 'бумага'],
    messages: {
      computerName: 'Компьютер',
      playerName: 'Вы',
      more: 'Сыграем еще?',
      computer: 'Компьютер выиграл!',
      player: 'Вы выиграли!',
      draw: 'Ничья!',
      question: 'Камень, ножницы, бумага?',
      exitQuestion: 'Вы точно хотите выйти?',
      bye: 'До свидания!',
    },
  };

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const getInputPlayer = (lang) => {
    let inputPlayer = prompt(lang.messages.question);
    if (inputPlayer === null) {
      return -1; // Пользователь нажал отмену
    } else {
      inputPlayer = inputPlayer.toLowerCase();
      //Проверяем правильность ввода
      let coincidence = -1;
      lang.figures.find((element, index) => {
        if (element[0] === inputPlayer[0]) coincidence = index;
      });
      if (coincidence < 0) {
        return getInputPlayer(lang);
      } else {
        return coincidence;
      }
    }
  };

  const checkResult = (computer, player) => {
    return computer === 2 && player === 0 ||
      computer === 0 && player === 1 ||
      computer === 1 && player === 2 ? 'c' : 'p';
  };

  const getExitGame = (lang) => {
    return confirm(`${lang.messages.exitQuestion}`);
  };

  const game = language => {
    const result = {
      computer: 0,
      player: 0,
    };
    const lang = language === 'EN' || language === 'ENG' ? ENG : RUS;
    return function start() {
      // Получаем вариант компьютера
      const setComputer = getRandomIntInclusive(0, 2);
      console.log('setComputer: ', lang.figures[setComputer]);
      // Получаем вариант игрога
      const setPlayer = getInputPlayer(lang);
      console.log('setPlayer: ', lang.figures[setPlayer]);
      if (setPlayer >= 0) {
        if (setComputer === setPlayer) {
          alert(lang.messages.draw);
        } else {
          let winMessage = '';
          const win = checkResult(setComputer, setPlayer);
          if (win === 'c') {
            result.computer++;
            winMessage = lang.messages.computer;
          } else if (win === 'p') {
            result.player++;
            winMessage = lang.messages.player;
          }
          alert(`${lang.messages.computerName}: ` +
            `${lang.figures[setComputer]}\n` +
            `${lang.messages.playerName}: ${lang.figures[setPlayer]}\n` +
            `${winMessage}`);
        }
        const more = confirm(`${lang.messages.more}`);
        if (more) {
          return start();
        } else {
          const exitGame = getExitGame(lang);
          if (exitGame) {
            alert(`${lang.messages.computerName} = ${result.computer}\n` +
              `${lang.messages.playerName} = ${result.player}`);
            null;
          } else {
            return start();
          }
        }
      } else {
        const exitGame = getExitGame(lang);
        if (exitGame) {
          alert(`${lang.messages.computerName} = ${result.computer}\n` +
            `${lang.messages.playerName} = ${result.player}`);
          null;
        } else {
          return start();
        }
      }
    };
  };
  window.gameRSP = game;
})();
