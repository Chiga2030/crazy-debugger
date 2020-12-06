const insertLayer = function () {
  const layer = hardSelectForm.select.value;
  
  startLayer.classList.add('to-opacity');
  setTimeout(() => startLayer.classList.add('hidden-layer'), 400);
  setTimeout(() => workSpace.innerHTML = layerGenerator(layer), 400);
};
