function stopFlippingCards() {
  document.body.removeEventListener('mousedown', addBackside, false);
}
