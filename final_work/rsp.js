'use strict';

(() => {
  const ENG = {
    figures: ['rock', 'scissors', 'paper'],
    messages: {
      computerName: 'Computer',
      playerName: 'You',
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
      // Проверяем правильность ввода
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

  const checkResult = (computer, player) => (computer === 2 && player === 0 ||
    computer === 0 && player === 1 ||
    computer === 1 && player === 2 ? 'bot' : 'player');

  const getExitGame = (lang) => confirm(`${lang.messages.exitQuestion}`);

  const game = language => {
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
          return start();
        } else {
          let winMessage = '';
          const win = checkResult(setComputer, setPlayer);
          if (win === 'bot') {
            winMessage = lang.messages.computer +
              ` (${lang.messages.playerName} - ${lang.figures[setPlayer]},` +
              ` ${lang.messages.computerName} - ${lang.figures[setComputer]})`;
          } else if (win === 'player') {
            winMessage = lang.messages.player +
              ` (${lang.messages.playerName} - ${lang.figures[setPlayer]},` +
              ` ${lang.messages.computerName} - ${lang.figures[setComputer]})`;
          }
          alert(`${winMessage}`);
          return win;
        }
      } else {
        const exitGame = getExitGame(lang);
        if (exitGame) {
          null;
        } else {
          return start();
        }
      }
    };
  };
  window.gameRSP = game;
})();
