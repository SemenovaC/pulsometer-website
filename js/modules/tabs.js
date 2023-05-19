import {MenuCard} from './catalog'  
import { getResource } from '../services/services';

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
      getResource('http://localhost:3000/catalog')
      .then(content => content.filter(arr => arr.sports === 'running'))
      .then(data => {
        data.forEach(({img, alt, title, descr, link, oldPrice, newPrice}) => {
          new MenuCard(img, alt, title, descr, link, oldPrice, newPrice, '.catalog__content').render();
        });
      });
    } else if (tabs[2].classList.contains('catalog__button_active')) {
      getResource('http://localhost:3000/catalog')
      .then(data => data.filter(arr => arr.sports === 'triathlon'))
      .then(data => {
        data.forEach(({img, alt, title, descr, link, oldPrice, newPrice}) => {
          new MenuCard(img, alt, title, descr, link, oldPrice, newPrice, '.catalog__content').render();
        });
      });
    } else if (tabs[0].classList.contains('catalog__button_active')) {
      getResource('http://localhost:3000/catalog')
      .then(data => {
        data.forEach(({img, alt, title, descr, link, oldPrice, newPrice}) => {
          new MenuCard(img, alt, title, descr, link, oldPrice, newPrice, '.catalog__content').render();
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

export default tabs;