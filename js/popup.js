export const TYPE_ARRAY_DECODING = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель'
};

function generatePostFeatures(features) {
  const featuresArray = features.map(
    (feature) => `<li class="popup__feature popup__feature--${feature}"></li>`
  );
  return featuresArray.join('');
}

function createPostElement({ author, offer }) {
  const { avatar } = author;
  const { title, address, price, type, guests, rooms, checkin, checkout, features, description, photos } = offer;

  return `
    <article class="popup">
      <img class="popup__avatar ${avatar ? '' : 'hidden'}" src="${avatar ? avatar : ''}" width="70" height="70" alt="Аватар пользователя">
      <h3 class="popup__title ${title ? '' : 'hidden'}">${title ? title : ''}</h3>
      <p class="popup__text popup__text--address ${address ? '' : 'hidden'}">${address ? address : ''}</p>
      <p class="popup__text popup__text--price ${price ? '' : 'hidden'}">${price ? price : ''}<span>₽/ночь</span></p>
      <h4 class="popup__type ${type ? '' : 'hidden'}">${type ? TYPE_ARRAY_DECODING[type] : ''}</h4>
      <p class="popup__text popup__text--capacity ${guests && rooms ? '' : 'hidden'}">${rooms ? rooms : ''} комнаты для ${guests ? guests : ''} гостей</p>
      <p class="popup__text popup__text--time ${checkin && checkout ? '' : 'hidden'}">Заезд после ${checkin ? checkin : ''}, выезд до ${checkout ? checkout : ''}</p>
      <ul class="popup__features ${features ? '' : 'hidden'}">${features ? generatePostFeatures(features) : ''}</ul>
      <p class="popup__description ${description ? '' : 'hidden'}">${description ? description : ''}</p>


      <div class="popup__photos ${photos ? '' : 'hidden'}">${photos ? photos.map((url) => `<img src="${url}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`).join('') : ''}</div>

    </article>`;
}

export { createPostElement };
{/* <div class="popup__photos${photos ? photos.map((url) => `"><img src="${url}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`).join('') : ' hidden">'}"</div> */}
{/* <div class="popup__photos"><img src="" class="popup__photo" width="45" height="40" alt="Фотография жилья"></div> */}
