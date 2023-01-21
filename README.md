![bug](https://raw.githubusercontent.com/Chiga2030/crazy-debugger/master/source/img/favicon.svg)

# Crazy-debugger
Crazy debugger game by JavaScript.

Игра которая поможет Вам проверить интуицию, переворачивайте карты и находите баги.

## Посмотреть
https://chiga2030.github.io/crazy-debugger/

## Запустить
```
npm i
gulp
```

## О пректе
Это промежуточная итоговая работа по курсу JavaScript в рамках обучения в [@webHeroSchool](https://github.com/WebHeroSchool)

### Технологии и инструментарий

#### Среда разработки
Sublume Text 3

#### Сборка
Gulp v.3

#### Стилизация
Нативный CSS с применением CSS-переменных, анимации и адаптация под разные размеры экранов. Именование классов по БЭМ.

#### Логика
Нативный JavaScript, на выходе траншпиленный в ES5 при помощи Babel.

## Update
Теперь в выборе уровня сложности появился смысл.

Раньше на любом из полей обратная сторона картаы генерировалась с вероятностью 50%, сейчас же для поля легкого уровня сложности выиграшная карта генерируетс с вероятностью 1/3, для среднего 1/6, а сложный уровень теперь действительно непроходимый 😈

``` js
const chanceCheck = random => {
  if (!random) {
    return 'bug';
  } return 'game-over';
}

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
```
