import slides from './modules/slides';
import modal from './modules/modal';
import form from './modules/form';
import tabs from './modules/tabs';


window.addEventListener('DOMContentLoaded', function() {

	slides('.carousel__slider', '.carousel__slider-prev', '.carousel__slider-next');
	modal('.modal', '#call');
	form('.feed-form');
	tabs('.catalog__button', '.catalog__content');

});

