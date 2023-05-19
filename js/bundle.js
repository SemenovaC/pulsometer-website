/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/catalog.js":
/*!*******************************!*\
  !*** ./js/modules/catalog.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuCard": () => (/* binding */ MenuCard)
/* harmony export */ });

  class MenuCard {
    constructor(src, alt, title, descr, link, oldPrice, newPrice, parentSelector) {
        this.src = src;
        this.alt = alt; 
        this.title = title;
        this.descr = descr;
        this.link = link;
        this.oldPrice = oldPrice;
        this.newPrice = newPrice;
        this.parent = document.querySelector(parentSelector);
    }
  
    render() {
      const element = document.createElement('div');  
      
        element.classList.add("catalog__item");
  
        element.innerHTML = `  
              <img src=${this.src} alt=${this.alt} class="catalog__img">
              <div class="catalog__subtitle">${this.title}</div>
              <div class="catalog__descr">${this.descr}</div>
              <a href="#" class="catalog__link">${this.link}</a>
              <hr>
              <div class="catalog__footer">
                <div class="catalog__footer_prices">
                    <div class="catalog__footer_prices_old">${this.oldPrice}</div>
                    <div class="catalog__footer_prices_new">${this.newPrice}</div>
                </div>
                <button class="catalog__btn">BUY</button>
              </div>
        `;
        this.parent.append(element);
    }
  }




/***/ }),

/***/ "./js/modules/form.js":
/*!****************************!*\
  !*** ./js/modules/form.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");


function form (formSelector) {
  const forms = document.querySelectorAll(formSelector);
	const message = {
		loading: 'icons/spinner.svg',
		success: 'Thanks! We will call you back',
		failure: 'Something went wrong...'
	};

	forms.forEach(item => {
		bindPostData(item);
	});
	
	function bindPostData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			let statusMessage = document.createElement('img');
			statusMessage.src = message.loading;
			statusMessage.style.cssText = `
				display: block;
				margin: 0 auto;
			`;
			form.insertAdjacentElement('afterend', statusMessage);
	
			const formData = new FormData(form);

			const json = JSON.stringify(Object.fromEntries(formData.entries()));

			fetch('http://localhost:3000/requests')
				.then(data => data.json())
				.then(res => console.log(res));

			(0,_services_services__WEBPACK_IMPORTED_MODULE_0__.postData)('http://localhost:3000/requests', json)
			.then(data => {
				console.log(data);
				showThanksModal(message.success);
				statusMessage.remove();
			}).catch(() => {
				showThanksModal(message.failure);
			}).finally(() => {
				form.reset();
			});
		});
	}

	function showThanksModal(message) {
		const prevModalDialog = document.querySelector('.modal__dialog');

		prevModalDialog.classList.add('hide');
		openModal();

		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal');
		thanksModal.innerHTML = `
			<div class="modal__content">
				<div class="modal__close" data-close>×</div>
				<div class="modal__title">${message}</div>
			</div>
		`;
		document.querySelector('.modal').append(thanksModal);
		setTimeout(() => {
			thanksModal.remove();
			prevModalDialog.classList.add('show');
			prevModalDialog.classList.remove('hide');
			closeModal('.modal');
		}, 4000);
	}

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);

/***/ }),

/***/ "./js/modules/slides.js":
/*!******************************!*\
  !*** ./js/modules/slides.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function slides (slidesSelector, prevSelector, nextSelector) {
  const slides = document.querySelectorAll(slidesSelector),
			prev = document.querySelector(prevSelector),
			next = document.querySelector(nextSelector);

  let slideIndex = 1;


  showSlides(slideIndex);


  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    slides.forEach(item => {
      item.style.display = 'none';
    });

    slides[slideIndex - 1].style.display = 'block';
    
  };

  function plusSlides(n) {
    showSlides(slideIndex += n)
  }

  prev.addEventListener('click', () => {
    plusSlides(-1);
  });

  next.addEventListener('click', () => {
    plusSlides(1);
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slides);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./catalog */ "./js/modules/catalog.js");
/* harmony import */ var _services_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services */ "./js/services/services.js");
  


function tabs(tabSelector, parentCatalogSelector) {
  const tabs = document.querySelectorAll(tabSelector),
			parentCatalog = document.querySelector(parentCatalogSelector);

  function hideTabContent() {
    tabs.forEach(item => {
      item.classList.remove('catalog__button_active');
    });
  }
    

  function showTabContent(i = 0) {	
    tabs[i].classList.add('catalog__button_active');

    while (parentCatalog.firstChild) {
      parentCatalog.removeChild(parentCatalog.firstChild);
    }


    if (tabs[1].classList.contains('catalog__button_active')) {
      (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.getResource)('http://localhost:3000/catalog')
      .then(content => content.filter(arr => arr.sports === 'running'))
      .then(data => {
        data.forEach(({img, alt, title, descr, link, oldPrice, newPrice}) => {
          new _catalog__WEBPACK_IMPORTED_MODULE_0__.MenuCard(img, alt, title, descr, link, oldPrice, newPrice, '.catalog__content').render();
        });
      });
    } else if (tabs[2].classList.contains('catalog__button_active')) {
      (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.getResource)('http://localhost:3000/catalog')
      .then(data => data.filter(arr => arr.sports === 'triathlon'))
      .then(data => {
        data.forEach(({img, alt, title, descr, link, oldPrice, newPrice}) => {
          new _catalog__WEBPACK_IMPORTED_MODULE_0__.MenuCard(img, alt, title, descr, link, oldPrice, newPrice, '.catalog__content').render();
        });
      });
    } else if (tabs[0].classList.contains('catalog__button_active')) {
      (0,_services_services__WEBPACK_IMPORTED_MODULE_1__.getResource)('http://localhost:3000/catalog')
      .then(data => {
        data.forEach(({img, alt, title, descr, link, oldPrice, newPrice}) => {
          new _catalog__WEBPACK_IMPORTED_MODULE_0__.MenuCard(img, alt, title, descr, link, oldPrice, newPrice, '.catalog__content').render();
        });
      });
    }
  }


  hideTabContent();
  showTabContent();


  fetch('http://localhost:3000/catalog')
    .then(data => data.json())
    .then(res => console.log(res));


  tabs.forEach((item, i) => {
    item.addEventListener('click', (e) => {
      if (e.target == item) {
        hideTabContent();
        showTabContent(i);
      }
    })
  })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/services/services.js":
/*!*********************************!*\
  !*** ./js/services/services.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getResource": () => (/* binding */ getResource),
/* harmony export */   "postData": () => (/* binding */ postData)
/* harmony export */ });
const postData = async (url, data) => {
  let res = await fetch(url, {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  });

  return await res.json();
};

async function getResource(url) {
  let res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
}




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_slides__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/slides */ "./js/modules/slides.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/form */ "./js/modules/form.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");






window.addEventListener('DOMContentLoaded', function() {

	(0,_modules_slides__WEBPACK_IMPORTED_MODULE_0__["default"])('.carousel__slider', '.carousel__slider-prev', '.carousel__slider-next');
	(0,_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"])('.modal', '#call');
	(0,_modules_form__WEBPACK_IMPORTED_MODULE_2__["default"])('.feed-form');
	(0,_modules_tabs__WEBPACK_IMPORTED_MODULE_3__["default"])('.catalog__button', '.catalog__content');

});


})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map