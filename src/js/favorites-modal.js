(() => {
  const refs = {
    openFavoritesGamburgerBtn: document.querySelector(
      '[data-favorites-gamburger-open]'
    ),
    openFavoritesPastaBtn: document.querySelector(
      '[data-favorites-pasta-open]'
    ),
    openFavoritesPizzaBtn: document.querySelector(
      '[data-favorites-pizza-open]'
    ),
    openFavoritesChickenBtn: document.querySelector(
      '[data-favorites-chicken-open]'
    ),
    openFavoritesSalatBtn: document.querySelector(
      '[data-favorites-salat-open]'
    ),
    openFavoritesBorshchBtn: document.querySelector(
      '[data-favorites-borshch-open]'
    ),

    closeFavoritesYesBtn: document.querySelector('[data-modal-yes-btn]'),
    closeFavoritesNoBtn: document.querySelector('[data-modal-no-btn]'),
    modal: document.querySelector('[data-favorites-modal]'),
  };

  refs.openFavoritesGamburgerBtn.addEventListener('click', toggleModal);
  refs.openFavoritesPastaBtn.addEventListener('click', toggleModal);
  refs.openFavoritesPizzaBtn.addEventListener('click', toggleModal);
  refs.openFavoritesChickenBtn.addEventListener('click', toggleModal);
  refs.openFavoritesSalatBtn.addEventListener('click', toggleModal);
  refs.openFavoritesBorshchBtn.addEventListener('click', toggleModal);

  refs.closeFavoritesYesBtn.addEventListener('click', toggleModal);
  refs.closeFavoritesNoBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();