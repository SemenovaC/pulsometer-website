function modal (modalSelector, btnSelector) {
  const modal = document.querySelector(modalSelector),
				getCallBtn = document.querySelector(btnSelector);

	function closeModal() {
		modal.classList.add('hide');
		modal.classList.remove('show');
		document.body.style.overflow = '';
	}
	
	function openModal() {
		modal.classList.add('show');
		modal.classList.remove('hide');
		document.body.style.overflow = 'hidden';
	}

	getCallBtn.addEventListener('click', openModal);

	modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == "") {
      closeModal();
    }
  })
}

export default modal;