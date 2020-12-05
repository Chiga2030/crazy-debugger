function addBackside(event){
  const curentEl = event.target.classList.value;
  const nextEl = event.target.nextElementSibling;
  const parentEl = event.toElement.parentElement;
  const modifier = `play-ground__card-backside_${bugGenerator()}`;

  if (curentEl === 'play-ground__card-frontside') {
    nextEl.classList.add(modifier);
    flipCard(parentEl, classFlip);
    
    // stop the game
    parentEl.addEventListener('click', stopFlippingCards, false);
    nextEl.addEventListener('click', restartGame.bind(null, modifier), false)
  }
}
