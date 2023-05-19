
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


export {MenuCard};