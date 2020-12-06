/**
* Сначала проверяем, нет ли 
* перевернутых карт (ищем карты с классом "flipped"),
* если так, то переворачиваем выбранную (добавляя тот самый класс).
*/

const flipCard = function(card, inverterClass) {
  if (!searchEl(`.${inverterClass}`)) {
    card.classList.add(inverterClass);
  }
}
