/**
* Истинная генерация багов с учетом уровня сложности игры.
* Для легкого уровня сложности будем генерировать число от 0 до 3,
* для среднего от 0 до 5,
* для сложного от 0 до 9.
*/

const bugGenerator = () => {
  let random;
  const hardLevel = workSpace.firstElementChild.dataset.dificult;

  switch (hardLevel) {
    case 'easy':
    random = Math.round(Math.random() * 2);
    return chanceCheck(random);
    break;

    case 'normal':
    random = Math.round(Math.random() * 5);
    return chanceCheck(random);
    break;

    case 'hard':
    random = Math.round(Math.random() * 9);
    return chanceCheck(random);
    break;
  }
};
