/**
* Истинная генерация багов с учетом уровня сложности игры.
* Для легкого уровня сложности будем генерировать число от 0 до 3,
* для среднего от 0 до 5,
* для сложного от 0 до 9.
*/

const bugGenerator = () => {
  // const random = Math.round(Math.random());
  const hardLevel = workSpace.firstElementChild.dataset.dificult;

  switch (hardLevel) {
    case 'easy':
    const random = Math.round( Math.random() * 2 );
    break;
  }

  if (random) {
    return 'bug';
  } return 'game-over';
};
