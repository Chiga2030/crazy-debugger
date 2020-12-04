function addBackside(event){
  const curentEl = event.target.classList.value;
  const nextEl = event.target.nextElementSibling;
  const parentEl = event.toElement.parentElement;
  const modifier = bugGenerator();

  if (curentEl === 'play-ground__card-frontside') {
    nextEl.classList.add(`play-ground__card-backside_${modifier}`);
    flipCard(parentEl);
    // nextEl.addEventlistener('click', restartGame, false)
  }
}
