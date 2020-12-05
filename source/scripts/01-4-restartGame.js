function restartGame(modifier) {
  const resetState = {
    'flippedEl': searchEl(`.${classFlip}`),
    'modifiedEl': searchEl(`.${modifier}`),
  }
  const curentPlayGround = event.toElement.parentElement.parentElement.parentElement.parentElement;

  resetState.flippedEl.classList.remove(classFlip);
  setTimeout( () => resetState.modifiedEl.classList.remove(modifier), 500);
  setTimeout( () => curentPlayGround.style.opacity = 0, 300);
  setTimeout( () => curentPlayGround.classList.add('hidden-layer'), 500);
  startGameState();
  // console.log(resetState.classList)


}

//classFlip

//play-ground__card-backside_bug
//play-ground__card-backside_game-over
