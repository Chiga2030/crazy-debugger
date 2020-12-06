/**
* Функция активируется при клике на перевернутой карте.
* Сначала карта возвращаетя в изначальное состояние (с анимацией).
* Затем на слой уровня накидывается класс добавляющий прозрачности.
* Затем слой уровня выпиливается из DOM дерева.
* И в конце делаем видимым слой с вобором сложности игры.
*/

const restartGame = function () {
  event.target.parentElement.classList.remove(classFlip);
  setTimeout(() => {
    workSpace.firstElementChild.classList.add('to-opacity');
  }, 500);
  setTimeout(() => {
    workSpace.firstElementChild.remove();
  }, 700);
  setTimeout(() => {
    startLayer.classList.remove('hidden-layer');
  }, 700);
  setTimeout(() => {
    startLayer.classList.remove('to-opacity');
  }, 700);
};
