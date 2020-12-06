function insertLayer() {
  const layer = hardSelectForm.select.value;
  
  layers.start.classList.add('to-opacity');
  setTimeout( () => layers.start.classList.add('hidden-layer'), 400)
  setTimeout( () => workSpace.innerHTML = layerGenerator(layer), 400);
}
