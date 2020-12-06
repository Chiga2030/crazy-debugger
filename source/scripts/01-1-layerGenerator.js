/**
* В зависимсти от выбранной сложности, функция будет возврщать
* определенную разметку игрового поля с нужным
* количеством игральных карт.
*/

const layerGenerator = function (layer) {
  const cardHtml = `
    <div class="play-ground__flip-card">
      <div class="play-ground__flip-card-wrapper">
        <div class="play-ground__card-frontside"></div>
        <div class="play-ground__card-backside"></div>
      </div>
    </div>
  `;

  switch (layer) {
  case ('easy'):
    return `
      <section class="play-ground_${layer}">
        <div class="play-ground__wrapper-line">
          ${cardHtml}
          ${cardHtml}
          ${cardHtml}
        </div>
      </section>
    `;
    break;

  case ('normal'):
    return `
      <section class="play-ground_${layer}">
        <div class="play-ground__wrapper-line">
          ${cardHtml}
          ${cardHtml}
          ${cardHtml}
        </div>
        <div class="play-ground__wrapper-line">
          ${cardHtml}
          ${cardHtml}
          ${cardHtml}
        </div>
      </section>
    `;
    break;

  case ('hard'):
    return `
      <section class="play-ground_${layer}">
        <div class="play-ground__wrapper-line">
          ${cardHtml}
          ${cardHtml}
          ${cardHtml}
          ${cardHtml}
          ${cardHtml}
        </div>
        <div class="play-ground__wrapper-line">
          ${cardHtml}
          ${cardHtml}
          ${cardHtml}
          ${cardHtml}
          ${cardHtml}
        </div>
      </section>
    `;
    break;
  }
};
