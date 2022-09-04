(() => {
    const refs = {
        openHeaderModalBtn: document.querySelector("[data-header-modal-open]"),
        openHeroModalBtn: document.querySelector("[data-hero-modal-open]"),
        openOfferingsModalBtn: document.querySelector("[data-offerings-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openHeaderModalBtn.addEventListener("click", toggleModal);
    refs.openHeroModalBtn.addEventListener("click", toggleModal);
    refs.openOfferingsModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        document.body.classList.toggle("modal-open")
        refs.modal.classList.toggle("is-hidden");
    }
})();