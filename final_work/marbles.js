'use strict';

(() => {
  const getPlayerBid = (balls) => {
    // Функция получает ход игрока
    const inputPlayer = prompt(`У Вас ${balls} шариков, Ваша ставка?`);
    // проверяем ввод
    if (inputPlayer === null) {
      //alert('Необходимо сделать ставку!');
      //return getPlayerBid(balls);
      return -1;
    }

    if (Number.isNaN(parseInt(inputPlayer))) {
      // Игрок ввел не-число
      alert(`Ошибка, введите число от 1 до ${balls}`);
      return getPlayerBid(balls);
    }

    if (+inputPlayer < 1 || +inputPlayer > balls) {
      alert('Неправильное количество шаров');
      return getPlayerBid(balls);
    } else return +inputPlayer;
  };

  const getPlayerStep = () => {
    const inputPlayer = prompt('Число четное?').toLowerCase();
    // Проверка ввода пользователя
    if (inputPlayer !== 'да' && inputPlayer !== 'нет') {
      alert('Ошибка ввода, введите да или нет');
      return getPlayerStep();
    }
    return inputPlayer === 'да' ? 2 : 1;
  };

  // Получаем случайно нечет (1) или чет (2)
  const getGuess = () => (Math.floor(Math.random() * 2) + 1);

  // Функция проверяет на чет или нечет
  const checkOddEven = (bid) => (bid % 2 === 0 ? 2 : 1);

  const showWinBot = () => (alert('Шарики заберает Бот'));

  const showWinPlayer = () => (alert('Шарики заберает игрок'));

  const game = (firstStep) => {
    const balls = {
      player: 5,
      bot: 5,
    };
    const bid = {
      1: 'нечетное',
      2: 'четное',
    };
    return function start(firstStep) {
      if (firstStep === 'player') {
        // Ход игрока
        const playerBid = getPlayerBid(balls.player); // ставка игрока
        if (playerBid < 0) return null; // Игрок нажал отмену
        // Переводим в чет/нечет
        const oddOrEven = checkOddEven(playerBid);
        console.log(`Ставка игрока ${playerBid} шаров (${oddOrEven})`);
        // Бот отгадывает
        const botStep = getGuess();
        console.log('Бот говорит: ', bid[botStep]);
        if (oddOrEven === botStep) {
          // Победил Бот
          showWinBot();
          balls.player -= playerBid;
          balls.bot += playerBid;
        } else {
          // Победил игрок
          showWinPlayer();
          balls.player += playerBid;
          balls.bot >= playerBid ? balls.bot -= playerBid : balls.bot = 0;
        }
        firstStep = 'bot'; // передаем ход Боту
      } else if (firstStep === 'bot') {
        // Ход Бота
        const botBid = Math.floor(Math.random() * (balls.bot)) + 1;
        // Переводим в чет/нечет
        const oddOrEven = checkOddEven(botBid);
        console.log(`Ставка бота ${botBid} шаров (${oddOrEven})`);
        // Игрок отгадывает
        const playerStep = getPlayerStep();
        console.log('Игрок говорит: ', bid[playerStep]);

        if (oddOrEven === playerStep) {
          // Победил игрок
          showWinPlayer();
          balls.player += botBid;
          balls.bot -= botBid;
        } else {
          // Победил бот
          showWinBot();
          balls.bot += botBid;
          balls.player >= botBid ? balls.player -= botBid : balls.player = 0;
        }
        firstStep = 'player'; // Передаем ход игроку
      }

      if (balls.player > 0 && balls.bot > 0) {
        // Игра продолжается
        alert(`У Вас шариков - ${balls.player}, у Бота - ${balls.bot}`);
        return start(firstStep);
      } else {
        // Игра закончилась
        if (balls.bot <= 0) {
          alert('Игрок выиграл!');
        } else alert('Выиграл бот!');
        alert(`У Вас шариков - ${balls.player}, у Бота - ${balls.bot}`);
      }
    };
  };

  window.marbles = game;
})();
