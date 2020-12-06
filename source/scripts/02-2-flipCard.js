/**
* Сначала проверяем, нет ли 
* перевернутых карт (ищем карты с классом "flipped"),
* если так, то переворачиваем выбранную (добавляя тот самый класс).
*/

function flipCard(card, inverterClass) {
  if (!searchEl(`.${inverterClass}`)) {
    card.classList.add(inverterClass);
  }
}
