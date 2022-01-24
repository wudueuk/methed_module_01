'use strict';

const calmar = () => {
  const startRSP = window.gameRSP('RUS');
  const startMarbles = window.marbles();

  const firstStep = startRSP();
  console.log('firstStep: ', firstStep);
  if (firstStep) startMarbles(firstStep);

  if (confirm('Хотите сыграть еще?')) return calmar();
};

calmar();
